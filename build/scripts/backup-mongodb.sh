#!/bin/bash

DUMP_FILENAME="/data/backups/dump_mongodb_$(date +\%Y\%m\%d-\%H\%M).sql.gz"

echo ":: Dump mongodb"
mongodump --host mongodb --username ${MONGO_USER} --password ${MONGO_PASS} --gzip --archive=$DUMP_FILENAME

exit 0