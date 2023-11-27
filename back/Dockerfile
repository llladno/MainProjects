FROM node:18
WORKDIR /user/src/backapp
COPY package*.json ./
RUN npm install
COPY . .
RUN npm install express
RUN npm install mysql2
RUN npm install cors
EXPOSE 3005
CMD ["npm", "start"]