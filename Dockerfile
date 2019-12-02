From node:alpine

WORKDIR /app

copy . .

EXPOSE 9898

CMD node index.js
