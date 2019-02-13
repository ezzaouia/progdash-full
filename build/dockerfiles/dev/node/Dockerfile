# STEP 1 image builder node_modules
FROM node:8.15.0-slim as builder

RUN apt-get update \
    && apt-get install -y git \
    && apt-get clean autoclean \
    && apt-get autoremove -y --purge \
    && rm -rf /var/lib/{apt,dpkg,cache,log}/ \
    && npm install -g @angular/cli

COPY ./front/package*.json ./

RUN npm install

# STEP 2
FROM node:8.15.0-slim

RUN npm install -g @angular/cli

WORKDIR /app
COPY --from=builder node_modules node_modules

COPY . .