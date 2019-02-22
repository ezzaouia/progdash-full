#!/bin/bash

# if empty will be latest

if [ ! -z "$1" ]
  then
  export DOCKER_TAG=$1
fi

if [ -z $DOCKER_TAG ]
then
    export DOCKER_TAG=latest
fi

docker-compose --project-directory . --file docker/docker-compose.yml --file docker/docker-compose.packaging.yml push