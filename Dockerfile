FROM node:alpine
ENTRYPOINT sh
WORKDIR /code
COPY package.json .
RUN yarn install
COPY . .
