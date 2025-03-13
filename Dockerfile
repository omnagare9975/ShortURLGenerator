FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

EXPOSE 8080

ENV MONGODURL  "mongodb+srv://omnagare83:W3cK8tQwEZJqy5q8@cluster0.i8r9l.mongodb.net/urlshortner?retryWrites=true&w=majority&appName=Cluster0"

COPY . .

CMD [ "npm" , "start" ]