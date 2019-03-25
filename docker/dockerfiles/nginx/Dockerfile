# STEP 1 build static website
FROM node:8.15.0-slim as builder

ARG NODE_ENV_CONF
ENV NODE_ENV_CONF "$NODE_ENV_CONF"

RUN apt-get update \
    && apt-get install -y git \
    && apt-get clean autoclean \
    && apt-get autoremove -y --purge \
    && rm -rf /var/lib/{apt,dpkg,cache,log}/ \
    && npm install -g @angular/cli

WORKDIR /app

COPY ./front /app

RUN npm install \
    && echo "!!! Target Env Node: ${NODE_ENV_CONF} !!!" \
    && ng build --configuration=${NODE_ENV_CONF} --sourceMap=false --optimization=true --base-href=/suivi/ \
    && npm cache clean --force


# STEP 2 build a small nginx image with static website
FROM nginx:1.14.2

ENV TZ=Europe/Paris
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

WORKDIR /var/www/html

COPY ./docker/etc/nginx/snippets /etc/nginx/snippets
COPY ./docker/etc/nginx/conf.d /etc/nginx/conf.d
COPY ./docker/etc/nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/dist/progdash /var/www/html/suivi