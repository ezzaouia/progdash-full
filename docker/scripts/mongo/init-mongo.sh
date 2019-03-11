#!/usr/bin/env bash

# Script init creation user pour database progdash
mongo -- "$MONGO_PROGDASH_DB" <<EOF
var user = '$MONGO_PROGDASH_USER';
var passwd = '$MONGO_PROGDASH_PASS';
var admin = db.getSiblingDB('admin');
admin.auth(user, passwd);
db.createUser({user: user, pwd: passwd, roles: ["readWrite"]});
EOF