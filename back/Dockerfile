FROM node:18
WORKDIR /user/src/backapp
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3005
CMD ["npm", "start"]