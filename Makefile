# ------------------------------------------------------------------------------
# Jamanvar — operations runner for jamanvar.kelviontech.in
# Run these on the Oracle Cloud VM, from the repo root.
# ------------------------------------------------------------------------------

SHELL       := /bin/bash
DOMAIN      ?= jamanvar.kelviontech.in
HOST_PORT   ?= 3002
COMPOSE     := docker compose
COMPOSE_SHARED := docker compose -f docker-compose.yml -f docker-compose.shared-nginx.yml
NGINX_CONF  := nginx/$(DOMAIN).conf

.DEFAULT_GOAL := help

.PHONY: help
help: ## Show this help
	@echo "Jamanvar — $(DOMAIN)"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) \
		| awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-22s\033[0m %s\n", $$1, $$2}'

# --- Deploy -------------------------------------------------------------------

.PHONY: deploy
deploy: ## Pull latest code, rebuild the image, restart the container
	git pull --ff-only
	$(COMPOSE) up -d --build
	@$(MAKE) --no-print-directory check

.PHONY: deploy-shared-nginx
deploy-shared-nginx: ## Same as deploy, for a containerised nginx front (no host port)
	git pull --ff-only
	$(COMPOSE_SHARED) up -d --build

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

# --- Observability ------------------------------------------------------------

.PHONY: logs
logs: ## Tail container logs
	$(COMPOSE) logs -f --tail=100

.PHONY: ps
ps: ## Container status and health
	$(COMPOSE) ps

.PHONY: check
check: ## Verify the app answers locally and through nginx
	@bash scripts/healthcheck.sh

# --- Nginx & TLS --------------------------------------------------------------

.PHONY: nginx-install
nginx-install: ## Install the host nginx vhost and reload nginx
	sudo cp $(NGINX_CONF) /etc/nginx/sites-available/$(DOMAIN).conf
	sudo ln -sf /etc/nginx/sites-available/$(DOMAIN).conf /etc/nginx/sites-enabled/$(DOMAIN).conf
	sudo nginx -t
	sudo systemctl reload nginx
	@echo "vhost installed -> http://$(DOMAIN)"

.PHONY: ssl
ssl: ## Issue the Let's Encrypt certificate via certbot (host nginx)
	sudo certbot --nginx -d $(DOMAIN) --redirect --agree-tos -m kelviontech@gmail.com
	sudo systemctl reload nginx

.PHONY: ssl-renew-dry
ssl-renew-dry: ## Test certificate auto-renewal without issuing anything
	sudo certbot renew --dry-run

# --- Housekeeping -------------------------------------------------------------

.PHONY: prune
prune: ## Reclaim disk from old images and build cache
	docker image prune -f
	docker builder prune -f
