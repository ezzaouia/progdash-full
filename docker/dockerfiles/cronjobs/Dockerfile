FROM debian:stretch-slim

RUN apt-get update \
    && apt-get install -y cron tzdata wget \
    && apt-get clean autoclean \
    && apt-get autoremove -y --purge \
    && rm -rf /var/lib/{apt,dpkg,cache,log}/ \
    && useradd -ms /bin/bash woonoz \
    && mkdir -p /data/backups \
    && chown -R woonoz. /data/backups

ENV TZ=Europe/Paris

COPY ./build/scripts/cronjobs/ /scripts/

COPY ./build/cron/cronjobs.txt /tmp/cronjobs.txt
RUN touch /home/woonoz/.env \
    && chown woonoz. /home/woonoz/.env \
    && mkdir /logs \
    && chown woonoz. /logs \
    && cd /tmp \
    && wget -O mongodb-linux-x86_64-3.4.19.tgz https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.4.19.tgz \
    && tar xvf mongodb-linux-x86_64-3.4.19.tgz mongodb-linux-x86_64-3.4.19/bin/mongodump \
     mongodb-linux-x86_64-3.4.19/bin/mongorestore mongodb-linux-x86_64-3.4.19/bin/mongoexport \
     mongodb-linux-x86_64-3.4.19/bin/mongoimport mongodb-linux-x86_64-3.4.19/bin/bsondump \
    && mkdir /mongo-tools \
    && cp mongodb-linux-x86_64-3.4.19/bin/* /mongo-tools/. \
    && rm -rf /tmp/mongodb-linux-x86_64-3.4.19*

ENTRYPOINT /scripts/entrypoint.sh && cron -f