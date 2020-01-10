FROM hypriot/rpi-node

WORKDIR /server

RUN mkdir /server/test-1

RUN git -C /server/test-1 init --bare

RUN npm init -y

RUN npm i -S git-http-mock-server

EXPOSE 8174

RUN ./node_modules/.bin/git-http-mock-server

