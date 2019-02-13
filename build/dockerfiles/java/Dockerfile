FROM openjdk:11.0.2-jre-slim-stretch

ARG SERVICES_JAR=webservices-*-spring-boot.jar

RUN apt-get update \
    && apt-get install -y tzdata \
    && apt-get clean autoclean \
    && apt-get autoremove -y --purge \
    && rm -rf /var/lib/{apt,dpkg,cache,log}/ \
    && mkdir /opt/progdash

COPY ./webservices/target/${SERVICES_JAR} /opt/progdash/webservices.jar

COPY ./application.properties /opt/progdash/application.properties