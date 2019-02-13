#!/bin/bash

docker-compose --project-directory ../. --file docker-compose.yml --file docker-compose.dev.yml up -d