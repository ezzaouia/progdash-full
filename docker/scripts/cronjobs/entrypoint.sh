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
echo "export MONGO_USER='${MONGODB_ROOT_USERNAME}'" > /home/woonoz/.env
echo "export MONGO_PASS='${MONGODB_ROOT_PASSWORD}'" >> /home/woonoz/.env

echo ":: Cron job install"
crontab -u woonoz /tmp/cronjobs.txt
rm -rf /tmp/cronjobs.txt

echo ":: All done folks"
