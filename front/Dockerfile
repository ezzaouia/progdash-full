FROM node:alpine

WORKDIR /usr/src/app

COPY package.json package-lock ./

RUN npm install -g @angular/cli

RUN npm install


RUN cli build --prod
# The default port from ng serve (4200)
# and 49153 for Webpack Hot Module Reload
EXPOSE 4200 49153