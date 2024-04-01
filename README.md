# NGINX Load Balancing
Load Balancing with Docker Compose and NGINX

### UP
``` bash
docker compose -f "docker/docker-compose.yaml" up -d --build
```

### DOWN
``` bash
docker compose -f "docker/docker-compose.yaml" down --rmi all --remove-orphans
```