
FROM balenalib/raspberry-pi-alpine-node

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

WORKDIR /server/test-user/

RUN mkdir ./test-1.git

RUN git -C ./test-1.git init --bare

RUN mkdir ./test-2.git

RUN git -C ./test-2.git init --bare

RUN mkdir ./test-3.git

RUN git -C ./test-3.git init --bare

RUN npm init -y

RUN npm i -S git-http-mock-server

EXPOSE 8174
