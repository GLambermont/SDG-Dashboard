FROM node:11-alpine

RUN apk add --no-cache bash git openssh

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm run build

COPY . .

EXPOSE 3001

CMD ["npm", "start"]
