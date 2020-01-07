FROM hypriot/rpi-node

ARG port=4000

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE $port

CMD npm start