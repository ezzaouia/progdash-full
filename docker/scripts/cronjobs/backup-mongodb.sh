#!/bin/bash

DUMP_FILENAME="/data/backups/dump_mongodb_$(date +\%Y\%m\%d-\%H\%M).gz"

echo ":: Dump mongodb"
/mongo-tools/mongodump --host mongodb --db ${MONGO_PROGDASH_DB} --username ${MONGO_PROGDASH_USER} --password ${MONGO_PROGDASH_PASS} --gzip --archive=${DUMP_FILENAME}

exit 0
