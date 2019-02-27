FROM openjdk:8u181-jre-slim-stretch

RUN apt-get update \
    && apt-get install -y tzdata gettext \
    && apt-get clean autoclean \
    && apt-get autoremove -y --purge \
    && rm -rf /var/lib/{apt,dpkg,cache,log}/ \
    && mkdir /opt/progdash \
    && mkdir /opt/progdash/logs

ENV TZ=Europe/Paris
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY ./docker/jar/webservices.jar /opt/progdash/webservices.jar

COPY ./back/application.properties.template /opt/progdash/application.properties.template