#!/bin/bash

if [ ! -z "$1" ]
then
    export DOCKER_TAG=$1
fi

if [ -z $DOCKER_TAG ]
then
    export DOCKER_TAG=latest
fi

echo "DOCKER_TAG: $DOCKER_TAG"

docker-compose --project-directory ../. --file docker-compose.yml --file docker-compose.packaging.yml up -d