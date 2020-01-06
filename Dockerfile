FROM arm32v7/node:8.17.0-stretch

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD npm start