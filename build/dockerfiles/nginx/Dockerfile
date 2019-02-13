FROM nginx:1.14.2

WORKDIR /var/www/html

COPY ./build/etc/nginx/global /etc/nginx/global
COPY ./build/etc/nginx/conf.d /etc/nginx/conf.d

COPY ./progdash-front/src /var/www/html