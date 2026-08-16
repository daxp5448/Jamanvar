#!/usr/bin/env bash
# ------------------------------------------------------------------------------
# Post-deploy verification for jamanvar.kelviontech.in.
# Usage: bash scripts/healthcheck.sh   (or: make check)
# ------------------------------------------------------------------------------
set -uo pipefail

DOMAIN="${DOMAIN:-jamanvar.kelviontech.in}"
HOST_PORT="${HOST_PORT:-3002}"

pass=0
fail=0

ok()   { echo -e "  \033[32m✓\033[0m $1"; pass=$((pass+1)); }
bad()  { echo -e "  \033[31m✗\033[0m $1"; fail=$((fail+1)); }
info() { echo -e "\n\033[1m$1\033[0m"; }

info "Container"
if docker compose ps --status running 2>/dev/null | grep -q jamanvar-web; then
  ok "jamanvar-web is running"
  health=$(docker inspect --format '{{if .State.Health}}{{.State.Health.Status}}{{else}}none{{end}}' jamanvar-web 2>/dev/null)
  case "$health" in
    healthy)  ok "healthcheck: healthy" ;;
    starting) ok "healthcheck: starting (give it ~20s)" ;;
    none)     ok "healthcheck: not configured" ;;
    *)        bad "healthcheck: $health" ;;
  esac
else
  bad "jamanvar-web is not running (try: make up)"
fi

info "App on 127.0.0.1:${HOST_PORT}"
code=$(curl -s -o /dev/null -w '%{http_code}' --max-time 10 "http://127.0.0.1:${HOST_PORT}/" || echo 000)
if [ "$code" = "200" ]; then ok "GET / -> 200"; else bad "GET / -> $code"; fi

if curl -s --max-time 10 "http://127.0.0.1:${HOST_PORT}/" | grep -qi "jamanvar"; then
  ok "homepage HTML rendered"
else
  bad "homepage HTML missing expected content"
fi

for path in /robots.txt /sitemap.xml /images/jamanvar/brand-logo-transparent.png; do
  code=$(curl -s -o /dev/null -w '%{http_code}' --max-time 10 "http://127.0.0.1:${HOST_PORT}${path}" || echo 000)
  if [ "$code" = "200" ]; then ok "GET ${path} -> 200"; else bad "GET ${path} -> $code"; fi
done

info "Port exposure"
if ss -ltnp 2>/dev/null | grep -q "127.0.0.1:${HOST_PORT}"; then
  ok "bound to loopback only (not internet-facing)"
elif ss -ltn 2>/dev/null | grep -q "0.0.0.0:${HOST_PORT}"; then
  bad "bound to 0.0.0.0 — Docker bypasses the host firewall, fix the ports: entry"
fi

info "Public endpoint (${DOMAIN})"
if command -v dig >/dev/null && [ -n "$(dig +short "$DOMAIN")" ]; then
  ok "DNS resolves to $(dig +short "$DOMAIN" | tr '\n' ' ')"
else
  echo "  - DNS not resolving yet (add the A record, then re-run)"
fi

code=$(curl -s -o /dev/null -w '%{http_code}' --max-time 15 "https://${DOMAIN}/" || echo 000)
if [ "$code" = "200" ]; then
  ok "https://${DOMAIN}/ -> 200"
  expiry=$(echo | openssl s_client -servername "$DOMAIN" -connect "${DOMAIN}:443" 2>/dev/null \
           | openssl x509 -noout -enddate 2>/dev/null | cut -d= -f2)
  [ -n "$expiry" ] && ok "TLS certificate valid until ${expiry}"
else
  echo "  - https://${DOMAIN}/ -> ${code} (expected until nginx + certbot are done)"
fi

echo ""
echo "  ${pass} passed, ${fail} failed"
[ "$fail" -eq 0 ]
