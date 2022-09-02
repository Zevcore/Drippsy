FROM node:12-alpine

RUN mkdir -p /var/www/client
WORKDIR var/www/client

COPY package*.json /var/www/client
RUN npm install

EXPOSE 3000
CMD "npm" "run" "dev"