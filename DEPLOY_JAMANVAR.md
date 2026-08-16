# Deploying Jamanvar to `jamanvar.kelviontech.in`

Runbook for putting this site live on the Oracle Cloud VM (`152.67.6.103`) that
already serves `kelviontech.in` and `restaurant.kelviontech.in` /
`restaurent.kelviontech.in`.

This is a **stateless marketing site** — no database, no API, no secrets. One
container, one nginx vhost, one certificate. Confirmed against the actual state
of that VM (not assumed from the other repos' docs, which turned out to
describe the setup inconsistently — see "What we found" below).

---

## What we found on the VM (2026-08-16)

- Nginx is **not** a host service (`systemctl is-active nginx` → `inactive`).
  It runs as a container, `kelviontech-nginx-1`, part of the KelvionTech
  compose stack at `/home/ubuntu/KelvionTech`, on its own Docker network
  (`kelviontech_default`, container IP `172.18.0.6`).
- Its config directory is bind-mounted from the host:
  `/home/ubuntu/KelvionTech/nginx/conf.d` → `/etc/nginx/conf.d` inside the
  container. Adding a vhost is just writing a file into that host directory —
  no `docker cp`, no rebuild.
- Other app containers (the restaurant frontend on host port `3001`) are
  **not** on `kelviontech_default`. Nginx reaches them across the host via the
  default bridge gateway `172.17.0.1`, e.g. `proxy_pass http://172.17.0.1:3001;`
  — proven working in `restaurant.kelviontech.in.conf`. Jamanvar follows the
  same pattern on port `3002`.
- `certbot` runs as a long-lived container that only loops `certbot renew`
  every 12h. It does **not** issue first-time certificates — that's a one-off
  `docker compose run --rm certbot certonly --webroot ...` in the KelvionTech
  directory.
- The OCI Security List (the actual internet-facing firewall, checked before
  traffic reaches the VM's NIC) only opens `80`, `443`, `22`. That's a
  different layer from the Ubuntu host firewall, which Docker's own iptables
  rules do bypass — so publishing the app container on `0.0.0.0:3002` is safe
  here even though it would not be safe on a bare Ubuntu box without that cloud
  firewall in front of it.

---

## Port map on the server

| Port (host) | Site | Notes |
|---|---|---|
| — (internal only) | `kelviontech.in` | reached by nginx via container DNS (`frontend:3000`), same Docker network |
| `3001` | `restaurant.kelviontech.in` / `restaurent.kelviontech.in` | published `0.0.0.0:3001`, nginx reaches it via `172.17.0.1:3001` |
| **`3002`** | **`jamanvar.kelviontech.in`** | **this repo** — published `0.0.0.0:3002`, reached via `172.17.0.1:3002` |

---

## Files in this repo for deployment

| File | Purpose |
|---|---|
| `Dockerfile` | 3-stage build → Next.js **standalone** bundle, non-root, port 3000 in-container |
| `.dockerignore` | Keeps `node_modules`, `.next`, `.git` out of the build context |
| `docker-compose.yml` | Single `web` service, published on `0.0.0.0:${HOST_PORT:-3002}` |
| `nginx/jamanvar.kelviontech.in.conf` | **Final** vhost (HTTP redirect + HTTPS block) — install only *after* the certificate exists |
| `Makefile` | `make deploy` / `check` / `nginx-bootstrap` / `ssl` / `nginx-install` |
| `scripts/healthcheck.sh` | Container health, HTTP checks, bridge-gateway reachability from `kelviontech-nginx-1`, DNS, TLS expiry |
| `.env.example` | `SITE_URL`, `HOST_PORT`, `KELVIONTECH_DIR` |

Code-side: `output: "standalone"` in `next.config.mjs`; `metadataBase` →
`https://jamanvar.kelviontech.in`; `robots.txt` and `sitemap.xml` routes.

---

## Step 1 — DNS (done)

```
A   jamanvar   152.67.6.103
```

Confirmed resolving.

---

## Step 2 — Get the code onto the VM

```bash
ssh kelvion   # or: ssh -i /path/to/key ubuntu@152.67.6.103

cd /home/ubuntu
git clone https://github.com/daxp5448/Jamanvar.git jamanvar
cd jamanvar
```

If `/home/ubuntu/jamanvar` already exists from an earlier attempt, `cd` into it
and `git pull --ff-only` instead of cloning again.

---

## Step 3 — Configure

```bash
cp .env.example .env
nano .env
```

```env
SITE_URL=https://jamanvar.kelviontech.in
HOST_PORT=3002
KELVIONTECH_DIR=/home/ubuntu/KelvionTech
```

`SITE_URL` is compiled into page metadata, `robots.txt` and `sitemap.xml` at
**build** time — changing it later needs `make deploy`, not `make restart`.

---

## Step 4 — Build and start the app container

```bash
make up      # or: docker compose up -d --build
```

First build takes a few minutes (`npm ci` + `next build`; needs outbound
internet for Google Fonts — the VM has it).

Verify the container directly, and that the shared nginx container can
actually reach it across the bridge — this second check is the one that
matters on this specific box:

```bash
docker compose ps                                                  # jamanvar-web running (healthy)
curl -I http://127.0.0.1:3002/                                     # HTTP/1.1 200 OK
docker exec kelviontech-nginx-1 wget -qO- http://172.17.0.1:3002/ | grep -i jamanvar
```

If that last command times out or connection-refuses, stop — nginx will never
be able to serve the site. Most likely cause: `HOST_PORT` mismatch between
`.env` and what's actually published (`docker compose ps` shows the real
mapping).

---

## Step 5 — Bootstrap vhost (HTTP-only, for the ACME challenge)

The **final** vhost in this repo references a certificate that doesn't exist
yet — installing it now would fail `nginx -t`. Install a temporary HTTP-only
version first:

```bash
make nginx-bootstrap
```

This writes a minimal vhost straight into
`/home/ubuntu/KelvionTech/nginx/conf.d/jamanvar.kelviontech.in.conf`, tests
and reloads `kelviontech-nginx-1`. Verify:

```bash
curl -I http://jamanvar.kelviontech.in/     # HTTP/1.1 200 OK
```

If this 200s, the site is already publicly reachable over plain HTTP — good
checkpoint before touching TLS.

---

## Step 6 — Issue the certificate

```bash
make ssl
```

Runs, inside the KelvionTech compose project:

```bash
docker compose run --rm certbot certonly --webroot -w /var/www/certbot \
    -d jamanvar.kelviontech.in --email kelviontech@gmail.com --agree-tos --no-eff-email
```

Watch for `Successfully received certificate` and the path
`/etc/letsencrypt/live/jamanvar.kelviontech.in/fullchain.pem`. This does not
touch the certificates for `kelviontech.in` or `restaurant.kelviontech.in` —
each domain is its own Let's Encrypt lineage.

---

## Step 7 — Install the final vhost and reload

```bash
make nginx-install
```

Copies this repo's `nginx/jamanvar.kelviontech.in.conf` (HTTP→HTTPS redirect +
the real HTTPS server block) over the bootstrap version, tests, and reloads.

---

## Step 8 — Verify

```bash
make check
```

And from your own machine:

- `https://jamanvar.kelviontech.in` — homepage, intro video, navbar (Product /
  Features / How It Works / Analytics / Hardware), demo modal opens.
- `https://jamanvar.kelviontech.in/robots.txt`
- `https://jamanvar.kelviontech.in/sitemap.xml`
- `http://jamanvar.kelviontech.in` → redirects to HTTPS.

Confirm the other two sites are still healthy — a bad `nginx -t`/reload is the
only way this deployment could touch them, since they share one nginx
container:

```bash
curl -I https://kelviontech.in
curl -I https://restaurant.kelviontech.in
```

Renewal is automatic — the existing `certbot` container in the KelvionTech
stack renews any certificate under `/etc/letsencrypt` on its 12-hour loop,
`jamanvar.kelviontech.in` included. Rehearse it:

```bash
make ssl-renew-dry
```

---

## Day-2 operations

| Command | What it does |
|---|---|
| `make deploy` | `git pull`, rebuild image, restart, then `make check` — **the normal way to ship** |
| `make check` | Container health, HTTP, assets, bridge-gateway reachability, DNS, TLS expiry |
| `make logs` | Tail container logs (capped at 10 MB × 3 files) |
| `make ps` | Container status and health |
| `make restart` | Restart without rebuilding — after `.env` port changes |
| `make stop` | Stop and remove the container |
| `make nginx-reload` | `nginx -t` + reload on `kelviontech-nginx-1` |
| `make ssl-renew-dry` | Rehearse certificate renewal |
| `make prune` | Reclaim disk from old images and build cache |

Shipping a change:

```bash
# locally
git add -A && git commit -m "..." && git push

# on the VM
cd /home/ubuntu/jamanvar && make deploy
```

No database, so nothing to back up beyond the repo itself.

---

## Troubleshooting

**`502 Bad Gateway`**
`docker exec kelviontech-nginx-1 wget -qO- http://172.17.0.1:3002/` — if that
fails, the app container isn't reachable across the bridge. Check
`docker compose ps` for the actual published port and match it against
`HOST_PORT` in `.env` and the `proxy_pass` line in the vhost.

**`nginx -t` fails after `make nginx-bootstrap` or `make nginx-install`**
It validates *every* file in `conf.d/`, so a failure can point at a
pre-existing vhost, not this one — read the filename in the error. If it does
point at `jamanvar.kelviontech.in.conf`, the likely cause is running
`nginx-install` before `make ssl` succeeded (the cert files don't exist yet).

**Certbot: "Timeout during connect" / challenge fails**
Confirm the bootstrap vhost (Step 5) is actually installed and returns 200
over plain HTTP first — the ACME HTTP-01 challenge needs that exact path
working. If DNS sits behind Cloudflare, it must be DNS-only (grey cloud), not
proxied.

**Port 3002 already taken**
`sudo ss -ltnp | grep 3002`. Pick a free port, set `HOST_PORT` in `.env`,
update the two `172.17.0.1:PORT` lines in `nginx/jamanvar.kelviontech.in.conf`
to match, then `make restart` and `make nginx-install` again.

**Images or fonts 404 but the page renders**
The `public/` copy in the Dockerfile didn't run — rebuild without cache:
`docker compose build --no-cache && make up`.

**Site is up but shows stale content after a deploy**
`docker compose ps` — confirm the container was actually recreated. `make
deploy` rebuilds; a plain `make restart` does not.

**Something looks wrong with `kelviontech.in` or `restaurant.kelviontech.in`
after touching nginx**
`docker exec kelviontech-nginx-1 nginx -t` first — if that's clean, the
running config is fine and it reloaded correctly. `docker compose logs nginx`
in `/home/ubuntu/KelvionTech` for anything past that.
