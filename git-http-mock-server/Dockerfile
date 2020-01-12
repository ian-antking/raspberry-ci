
FROM hypriot/rpi-node

WORKDIR /server/$GITHUB_USER

RUN mkdir /test-1

RUN git -C /test-1 init --bare

RUN mkdir /test-2

RUN git -C /test-2 init --bare

RUN mkdir /test-3

RUN git -C /test-3 init --bare

RUN npm init -y

RUN npm i -S git-http-mock-server

EXPOSE 8174