FROM node:18

WORKDIR /usr/src/fornt/src

COPY ./src/package*.json ./

RUN npm install

WORKDIR /usr/src/front

COPY . .

WORKDIR /usr/src/front/src

EXPOSE 3000

CMD ["npm","start"]

