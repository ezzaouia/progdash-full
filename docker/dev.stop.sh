#!/bin/bash

export DOCKER_TAG=latest
docker-compose --project-directory ../. --file docker-compose.yml --file docker-compose.dev.yml stop