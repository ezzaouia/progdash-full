#!/bin/bash

SCRIPT_PATH=$(cd `dirname $0` && pwd)
if [ -d "$SCRIPT_PATH/jar" ]; then
    rm -rf $SCRIPT_PATH/jar/*
else
    mkdir -p $SCRIPT_PATH/jar
fi
find $SCRIPT_PATH/../back/webservices/target -name webservices-*-spring-boot.jar| xargs -I % cp % $SCRIPT_PATH/jar/webservices.jar

export DOCKER_TAG=latest
docker-compose --project-directory ../. --file docker-compose.yml --file docker-compose.java.yml build