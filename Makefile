# ------------------------------------------------------------------------------
# Jamanvar — operations runner for jamanvar.kelviontech.in
# Run these on the Oracle Cloud VM, from this repo's root.
#
# Nginx here is NOT part of this repo — it's the shared kelviontech-nginx-1
# container from the KelvionTech stack (KELVIONTECH_DIR), which already fronts
# kelviontech.in and restaurant.kelviontech.in. This app just publishes a host
# port and gets a vhost file dropped into that container's bind-mounted config.
# ------------------------------------------------------------------------------

SHELL           := /bin/bash
DOMAIN          ?= jamanvar.kelviontech.in
HOST_PORT       ?= 3002
KELVIONTECH_DIR ?= /home/ubuntu/KelvionTech
NGINX_CONTAINER := kelviontech-nginx-1
COMPOSE         := docker compose
VHOST_FILE      := nginx/$(DOMAIN).conf
VHOST_DEST      := $(KELVIONTECH_DIR)/nginx/conf.d/$(DOMAIN).conf

.DEFAULT_GOAL := help

.PHONY: help
help: ## Show this help
	@echo "Jamanvar — $(DOMAIN)"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) \
		| awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-22s\033[0m %s\n", $$1, $$2}'

# --- App container --------------------------------------------------------------

.PHONY: deploy
deploy: ## Pull latest code, rebuild the image, restart the container
	git pull --ff-only
	$(COMPOSE) up -d --build
	@$(MAKE) --no-print-directory check

.PHONY: up
up: ## Start the container (no rebuild)
	$(COMPOSE) up -d

.PHONY: build
build: ## Build the production image without starting it
	$(COMPOSE) build

.PHONY: restart
restart: ## Restart the container without rebuilding
	$(COMPOSE) restart

.PHONY: stop
stop: ## Stop and remove the container
	$(COMPOSE) down

# --- Observability ----------------------------------------------------------------

.PHONY: logs
logs: ## Tail container logs
	$(COMPOSE) logs -f --tail=100

.PHONY: ps
ps: ## Container status and health
	$(COMPOSE) ps

.PHONY: check
check: ## Verify the app answers locally, via the bridge gateway, and publicly
	@bash scripts/healthcheck.sh

# --- Shared nginx (kelviontech-nginx-1) & TLS -------------------------------------

.PHONY: nginx-bootstrap
nginx-bootstrap: ## Install a TEMPORARY HTTP-only vhost so certbot's webroot challenge can pass
	@printf 'server {\n    listen 80;\n    listen [::]:80;\n    server_name %s;\n\n    location /.well-known/acme-challenge/ {\n        root /var/www/certbot;\n    }\n\n    location / {\n        proxy_pass http://172.17.0.1:%s;\n        proxy_http_version 1.1;\n        proxy_set_header Host $$host;\n        proxy_set_header X-Real-IP $$remote_addr;\n        proxy_set_header X-Forwarded-For $$proxy_add_x_forwarded_for;\n        proxy_set_header X-Forwarded-Proto $$scheme;\n    }\n}\n' "$(DOMAIN)" "$(HOST_PORT)" | sudo tee $(VHOST_DEST) > /dev/null
	@$(MAKE) --no-print-directory nginx-reload
	@echo "Bootstrap vhost installed -> http://$(DOMAIN) should now proxy to the app."

.PHONY: nginx-install
nginx-install: ## Install the FINAL (HTTPS) vhost from this repo — run only after `make ssl`
	sudo cp $(VHOST_FILE) $(VHOST_DEST)
	@$(MAKE) --no-print-directory nginx-reload

.PHONY: nginx-reload
nginx-reload: ## Test and reload the shared nginx container's config
	docker exec $(NGINX_CONTAINER) nginx -t
	docker exec $(NGINX_CONTAINER) nginx -s reload

.PHONY: ssl
ssl: ## Issue the Let's Encrypt certificate (run after nginx-bootstrap succeeds)
	cd $(KELVIONTECH_DIR) && $(COMPOSE) run --rm certbot certonly \
		--webroot -w /var/www/certbot \
		-d $(DOMAIN) \
		--email kelviontech@gmail.com --agree-tos --no-eff-email

.PHONY: ssl-renew-dry
ssl-renew-dry: ## Test certificate auto-renewal without issuing anything
	cd $(KELVIONTECH_DIR) && $(COMPOSE) run --rm certbot renew --dry-run

# --- Housekeeping -------------------------------------------------------------

.PHONY: prune
prune: ## Reclaim disk from old images and build cache
	docker image prune -f
	docker builder prune -f
