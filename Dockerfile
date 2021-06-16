FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . .

ENV PORT=9000 \ 
    PORT1=3000

RUN yarn build

EXPOSE 9000 3000

CMD ["yarn","start"]
