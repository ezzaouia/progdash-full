FROM maven:3.6.0-jdk-8-slim

COPY ./docker/dockerfiles/dev/maven/cacerts /docker-java-home/jre/lib/security/cacerts
COPY ./docker/dockerfiles/dev/maven/settings.xml /usr/share/maven/ref/settings.xml

ENV MAVEN_OPTS="-Xms128m -Xmx2048m -XX:MaxPermSize=512m"

WORKDIR /usr/src/mymaven

CMD mvn -s /usr/share/maven/ref/settings.xml clean install -DskipTests