#!/bin/bash

USER_ID=${LOCAL_USER_ID:-9001}

echo ":: Changing woonoz user with UID : $USER_ID"
usermod -u $USER_ID woonoz
groupmod -g $USER_ID woonoz
export HOME=/home/woonoz

echo ":: Set permissions"
chown -R woonoz. /data/backups
chown woonoz. /logs
chown woonoz. /home/woonoz/.env

echo ":: Export Mongodb User / Password"
echo "export MONGO_PROGDASH_DB='${MONGO_PROGDASH_DB}'" > /home/woonoz/.env
echo "export MONGO_PROGDASH_USER='${MONGO_PROGDASH_USER}'" >> /home/woonoz/.env
echo "export MONGO_PROGDASH_PASS='${MONGO_PROGDASH_PASS}'" >> /home/woonoz/.env

echo ":: Cron job install"
if [ -e /tmp/cronjobs.txt ];
then
    crontab -u woonoz /tmp/cronjobs.txt
    rm -rf /tmp/cronjobs.txt
fi

echo ":: All done folks"
