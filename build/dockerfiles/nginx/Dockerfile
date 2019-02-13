# STEP 1 build static website
FROM node:8.15.0-slim as builder

RUN apt-get update \
    && apt-get install -y git \
    && apt-get clean autoclean \
    && apt-get autoremove -y --purge \
    && rm -rf /var/lib/{apt,dpkg,cache,log}/ \
    && npm install -g @angular/cli

WORKDIR /app

COPY ./front /app

RUN npm install \
    && ng build \
    && npm cache clean --force


# STEP 2 build a small nginx image with static website
FROM nginx:1.14.2

WORKDIR /var/www/html

COPY ./build/etc/nginx/snippets /etc/nginx/snippets
COPY ./build/etc/nginx/conf.d /etc/nginx/conf.d
COPY ./build/etc/nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/dist/angular-pvstats /var/www/html