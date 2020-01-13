FROM balenalib/raspberry-pi-alpine-node

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

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