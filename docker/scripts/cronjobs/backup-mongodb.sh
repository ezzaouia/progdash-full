#!/bin/bash

BACKUP_PATH="/data/backups"
DUMP_FILENAME="dump_mongodb_$(date +\%Y\%m\%d-\%H\%M).gz"
cd ${BACKUP_PATH}

echo ":: Dump mongodb"
/mongo-tools/mongodump --host mongodb --db ${MONGO_PROGDASH_DB} --username ${MONGO_PROGDASH_USER} --password ${MONGO_PROGDASH_PASS} --gzip --archive=${BACKUP_PATH}/${DUMP_FILENAME}

echo ":: clean older backup"
if [ -f ${BACKUP_PATH}/${DUMP_FILENAME} ];
then
    find ${BACKUP_PATH} -name "*.gz" ! -name "${DUMP_FILENAME}" -type f -exec rm -f {} \;
fi

exit 0