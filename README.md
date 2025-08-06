# Project with Express API + Vite Frontend (Docker Compose)

This project contains:
- **Backend (Express API)** running on port `3000`
- **Frontend (Vite + Nginx)** running on port `8080`

Both are orchestrated using **Docker Compose**.

---

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) installed
- [Docker Compose](https://docs.docker.com/compose/) (or `docker compose` integrated with Docker)

---

## Starting the project

From the project root (where the `docker-compose.yml` file is located), run:

```bash
docker compose up --build