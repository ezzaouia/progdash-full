FROM mongo:3.4.19-jessie

ENV TZ=Europe/Paris
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY ./docker/scripts/mongo/init-mongo.sh /docker-entrypoint-initdb.d/init-mongo.sh