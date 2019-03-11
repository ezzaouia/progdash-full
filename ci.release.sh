#!/bin/bash

SCRIPT_PATH=$(cd `dirname $0` && pwd)

if [ ! -z "$1" ]
then
    export DOCKER_TAG=$1
else
    echo "!!! ERROR: DOCKER_TAG is missing !!!"
    exit 1
fi

# start build phase
./ci.build.sh ${DOCKER_TAG}

# push tag to registry
./ci.push.sh ${DOCKER_TAG}

# point this release to "latest" flag
./ci.build.sh latest
./ci.push.sh latest


exit 0