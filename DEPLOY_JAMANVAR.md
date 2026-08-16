# Deploying Jamanvar to `jamanvar.kelviontech.in`

Runbook for putting this site live on the existing **Oracle Cloud Always Free
Ampere VM** that already serves `kelviontech.in` and `restaurent.kelviontech.in`.

This is a **stateless marketing site** — no database, no API, no secrets. One
container, one nginx vhost, one certificate. Nothing in the existing stacks is
touched.

---

## Port map on the server

| Port (host) | Site | Stack |
|---|---|---|
| `3000` | `kelviontech.in` | KelvionTech (Next.js) |
| `3001` | `restaurent.kelviontech.in` | Restaurant QR/CRM (Next.js) |
| **`3002`** | **`jamanvar.kelviontech.in`** | **Jamanvar — this repo** |
| `8000` / `8001` | KelvionTech API / Restaurant API | FastAPI |
| `5432` / `5433` | KelvionTech DB / Restaurant DB | PostgreSQL |

Jamanvar publishes on **`127.0.0.1:3002` only**. That matters: Docker writes its
own iptables rules that bypass the host `INPUT` chain, so a container published
on `0.0.0.0` is reachable from the internet *even when the Ubuntu firewall
blocks the port*. Binding to loopback keeps nginx the only way in.

---

## What was added to this repo for deployment

| File | Purpose |
|---|---|
| `Dockerfile` | 3-stage build → Next.js **standalone** bundle, runs as non-root on port 3000 |
| `.dockerignore` | Keeps `node_modules`, `.next`, `.git` out of the build context |
| `docker-compose.yml` | The single `web` service, published on `127.0.0.1:3002`, log rotation, healthcheck |
| `docker-compose.shared-nginx.yml` | Optional override for a **containerised** nginx front (see Step 5b) |
| `nginx/jamanvar.kelviontech.in.conf` | vhost for **host** nginx → `127.0.0.1:3002` |
| `nginx/jamanvar.kelviontech.in.container.conf` | vhost for **containerised** nginx → `jamanvar-web:3000` |
| `Makefile` | `make deploy` / `logs` / `check` / `nginx-install` / `ssl` |
| `scripts/healthcheck.sh` | Post-deploy verification (`make check`) |
| `.env.example` | `SITE_URL`, `HOST_PORT` — copy to `.env` |

Code-side changes: `output: "standalone"` in `next.config.mjs`, canonical
`metadataBase` of `https://jamanvar.kelviontech.in`, plus `robots.txt` and
`sitemap.xml` routes.

---

## Step 0 — Which nginx is in front? (decide this first)

The two existing deployments were documented differently — KelvionTech runs
nginx **as a container**, the restaurant subdomain guide assumes **host** nginx.
Only one process can own ports 80/443, so check which one your VM actually has:

```bash
sudo systemctl is-active nginx        # "active"  -> host nginx
docker ps --filter publish=443        # a row     -> containerised nginx
```

- **Host nginx** → follow Step 5a (the common case for adding subdomains).
- **Containerised nginx** → follow Step 5b instead.

Everything before Step 5 is identical either way.

---

## Step 1 — DNS

At the registrar managing `kelviontech.in`, add:

| Type | Name / Host | Value | TTL |
|---|---|---|---|
| `A` | `jamanvar` | `<YOUR_ORACLE_VM_PUBLIC_IP>` | 300 / Auto |

If DNS sits behind Cloudflare, set the record to **DNS only (grey cloud)** until
the certificate is issued, otherwise the ACME HTTP-01 challenge can fail.

Confirm before continuing — a certbot run against unresolved DNS burns a rate
limit:

```bash
dig +short jamanvar.kelviontech.in     # must return your VM's public IP
```

Ports 80 and 443 are already open from the earlier deployments. Nothing to add
in the Oracle Security List or in `iptables`.

---

## Step 2 — Get the code onto the VM

```bash
ssh -i /path/to/oracle_key.key ubuntu@<YOUR_ORACLE_VM_PUBLIC_IP>

cd /home/ubuntu
git clone https://github.com/daxp5448/Jamanvar.git jamanvar
cd jamanvar
```

Docker, Compose, `git` and `make` are already installed from the earlier
deployments. Sanity check:

```bash
docker compose version && make --version
```

---

## Step 3 — Configure

```bash
cp .env.example .env
nano .env
```

```env
SITE_URL=https://jamanvar.kelviontech.in
HOST_PORT=3002
```

`SITE_URL` is compiled into the page metadata, `robots.txt` and `sitemap.xml` at
**build** time — changing it later needs `make deploy`, not `make restart`.

---

## Step 4 — Build and start the container

```bash
make deploy
```

First build takes roughly 3–6 minutes on the Ampere shape (`npm ci` plus
`next build`; Google Fonts are fetched during the build, so the VM needs
outbound internet — it has it).

Verify before touching nginx:

```bash
docker compose ps                       # jamanvar-web  running (healthy)
curl -I http://127.0.0.1:3002/          # HTTP/1.1 200 OK
```

`make check` runs a fuller pass — container health, homepage, `robots.txt`,
`sitemap.xml`, a brand image, loopback-only binding, DNS and TLS expiry. Before
nginx exists the public-endpoint lines are expected to be skipped.

---

## Step 5a — Host nginx (the usual path)

```bash
make nginx-install
```

Which is exactly:

```bash
sudo cp nginx/jamanvar.kelviontech.in.conf /etc/nginx/sites-available/
sudo ln -sf /etc/nginx/sites-available/jamanvar.kelviontech.in.conf \
            /etc/nginx/sites-enabled/jamanvar.kelviontech.in.conf
sudo nginx -t
sudo systemctl reload nginx
```

`nginx -t` must print `syntax is ok` / `test is successful`. It validates *every*
enabled site, so a failure here can also mean a pre-existing vhost is broken —
read the filename in the error before assuming it's this one.

Check over plain HTTP:

```bash
curl -I -H "Host: jamanvar.kelviontech.in" http://127.0.0.1/     # 200 OK
```

### Step 6a — Certificate

```bash
make ssl
```

Which runs `sudo certbot --nginx -d jamanvar.kelviontech.in --redirect`.
Certbot edits the vhost in place to add the `443` server block and the
80 → 443 redirect. Existing certificates for the other domains are untouched —
each is a separate lineage.

Renewal is already handled by the system `certbot.timer` installed with the
earlier subdomain. Confirm it covers the new domain:

```bash
sudo certbot certificates          # jamanvar.kelviontech.in should be listed
make ssl-renew-dry
```

---

## Step 5b — Containerised nginx (only if Step 0 said so)

Attach the app to the KelvionTech Docker network instead of publishing a port:

```bash
docker network ls | grep -i kelvion         # note the exact network name
echo "KELVION_NETWORK=<that-name>" >> .env

make deploy-shared-nginx
```

Then drop the vhost into the KelvionTech repo's nginx config directory — the one
bind-mounted into its nginx container (`nginx/conf.d/` in that repo):

```bash
sudo cp nginx/jamanvar.kelviontech.in.container.conf \
        /home/ubuntu/KelvionTech/nginx/conf.d/

cd /home/ubuntu/KelvionTech
docker compose exec nginx nginx -t
docker compose exec nginx nginx -s reload
```

### Step 6b — Certificate (containerised certbot)

```bash
cd /home/ubuntu/KelvionTech
docker compose run --rm certbot certonly --webroot -w /var/www/certbot \
    -d jamanvar.kelviontech.in
```

Then uncomment the TLS block at the bottom of
`jamanvar.kelviontech.in.container.conf`, reload nginx, and the existing certbot
container renews it on its normal schedule.

---

## Step 7 — Verify

```bash
make check
```

And from your own machine:

- `https://jamanvar.kelviontech.in` — homepage, intro video plays, navbar
  (Product / Features / How It Works / Analytics / Hardware), demo modal opens.
- `https://jamanvar.kelviontech.in/robots.txt`
- `https://jamanvar.kelviontech.in/sitemap.xml`
- `http://jamanvar.kelviontech.in` → redirects to HTTPS.

Confirm the other two sites are still healthy — a bad reload is the only way
this deployment could affect them:

```bash
curl -I https://kelviontech.in
curl -I https://restaurent.kelviontech.in
```

---

## Day-2 operations

| Command | What it does |
|---|---|
| `make deploy` | `git pull`, rebuild image, restart, then `make check` — **the normal way to ship** |
| `make check` | Container health, HTTP, assets, port exposure, DNS, TLS expiry |
| `make logs` | Tail container logs (capped at 10 MB × 3 files) |
| `make ps` | Container status and health |
| `make restart` | Restart without rebuilding — after `.env` port changes |
| `make stop` | Stop and remove the container |
| `make prune` | Reclaim disk from old images and build cache |
| `make ssl-renew-dry` | Rehearse certificate renewal |

Shipping a change:

```bash
# locally
git add -A && git commit -m "..." && git push

# on the VM
cd /home/ubuntu/jamanvar && make deploy
```

There is no database, so there is nothing to back up — the repo *is* the state.

---

## Troubleshooting

**`502 Bad Gateway`**
The container isn't listening. `make ps` and `make logs`. If the container is
healthy, check that nginx points at the same port the container publishes
(`ss -ltnp | grep 3002`).

**`nginx -t` fails after `make nginx-install`**
Read the filename in the error. If it names another vhost, the problem predates
this deployment; `sudo rm /etc/nginx/sites-enabled/jamanvar.kelviontech.in.conf`
and reload to get back to a known-good state while you fix it.

**Certbot: "Timeout during connect" / challenge fails**
DNS hasn't propagated, or Cloudflare is proxying. Re-check `dig +short
jamanvar.kelviontech.in`, set the record to DNS-only, wait, retry.

**Port 3002 already taken**
`sudo ss -ltnp | grep 3002`. Pick a free port, set `HOST_PORT` in `.env`, change
the `upstream jamanvar_app` line in the vhost to match, then `make restart` and
reload nginx.

**Build gets OOM-killed**
Shouldn't happen on the 24 GB Ampere shape. If the VM is smaller, add swap
before building and set `NODE_OPTIONS=--max-old-space-size=768`.

**Images or fonts 404 but the page renders**
The `public/` copy in the Dockerfile didn't run — rebuild without cache:
`docker compose build --no-cache && make up`.

**Site is up but shows stale content after a deploy**
`docker compose ps` — confirm the container was actually recreated. `make deploy`
rebuilds; a plain `make restart` does not.

---

## Note on the spelling

Everything here uses **jamanvar** with a `v` — hostname, container, image, and
brand copy all match the repo name.

If you also want the `w` spelling (`jamanwar.kelviontech.in`) to resolve, add a
second A record for `jamanwar`, then either add it to the same vhost's
`server_name` and re-run certbot with both `-d` flags, or give it a small
redirect-only server block pointing at the `v` host. Keep `jamanvar` canonical
either way — `metadataBase` and `sitemap.xml` already declare it as such.
