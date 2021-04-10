FROM node:14.16.1-alpine

WORKDIR usr/src/app

COPY package*.json ./

RUN npm install --global --force yarn
RUN yarn install

COPY . .
EXPOSE 3000
CMD ["yarn", "start"]