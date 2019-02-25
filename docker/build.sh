#!/bin/bash

if [ ! -z "$1" ]
then
    export DOCKER_TAG=$1
fi

if [ -z $DOCKER_TAG ]
then
    export DOCKER_TAG=latest
fi

SCRIPT_PATH=$(cd `dirname $0` && pwd)
find $SCRIPT_PATH/../back/webservices/target -name webservices-*-spring-boot.jar| xargs -I % cp % $SCRIPT_PATH/jar/webservices.jar

echo "DOCKER_TAG: $DOCKER_TAG"
docker-compose --project-directory ../. --file docker-compose.yml --file docker-compose.packaging.yml build --parallel