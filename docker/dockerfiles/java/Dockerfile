FROM openjdk:8u181-jre-slim-stretch

ARG SERVICES_JAR=webservices-*-spring-boot.jar

RUN apt-get update \
    && apt-get install -y tzdata gettext \
    && apt-get clean autoclean \
    && apt-get autoremove -y --purge \
    && rm -rf /var/lib/{apt,dpkg,cache,log}/ \
    && mkdir /opt/progdash

ENV TZ=Europe/Paris

COPY ./back/webservices/target/${SERVICES_JAR} /opt/progdash/webservices.jar

COPY ./back/application.properties.template /opt/progdash/application.properties.template