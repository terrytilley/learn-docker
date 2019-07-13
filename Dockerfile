FROM node:8.16.0-alpine

WORKDIR /usr/app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8000

CMD node ./dist/index.js
