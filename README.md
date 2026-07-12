# NGINX Load Balancing Demo

Demonstrates load balancing a horizontally scaled Node.js service behind NGINX using Docker Compose replicas.

## What's inside

- Express backend (`app/`) that returns a simple response, scaled to 4 replicas via Docker Compose `deploy.replicas`
- NGINX reverse proxy (`nginx/`) configured with an `upstream` block using the `least_conn` load-balancing algorithm and Docker's embedded DNS resolver to discover backend replicas
- Docker Compose file wiring both services on a shared network

## Tech Stack

- Node.js, Express
- NGINX
- Docker Compose

## Quickstart

```bash
docker compose -f docker/docker-compose.yaml up -d --build
```

The app is available at `http://localhost:80`, load-balanced across 4 backend replicas.

```bash
docker compose -f docker/docker-compose.yaml down --rmi all --remove-orphans
```

## Structure

```
app/      # Express backend
nginx/    # NGINX reverse proxy + load balancer config
docker/   # docker-compose.yaml
```
