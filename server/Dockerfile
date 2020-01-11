FROM hypriot/rpi-node

ARG port=4000
ARG env="production"

WORKDIR /app

COPY package*.json ./

EXPOSE $port

RUN echo $NODE_ENV

RUN if [ $env = "development" ]; \
	then npm install;  \
	else npm install --only=production; \
	fi

COPY . .
