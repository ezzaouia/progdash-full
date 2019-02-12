FROM debian:stretch-slim

RUN printf "deb http://deb.debian.org/debian/ stretch-backports main" > /etc/apt/sources.list.d/backports.list \
    && apt-get update \
    && apt-get install -y -t stretch-backports openjdk-11-jre-headless \
    && apt-get clean autoclean \
    && apt-get autoremove -y --purge \
    && rm -rf /var/lib/{apt,dpkg,cache,log}/ \
    && mkdir /opt/

ENTRYPOINT tail -f /dev/null