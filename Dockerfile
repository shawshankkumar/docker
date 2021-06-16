FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . .

ENV PORT=9000 

RUN yarn build

EXPOSE 9000 

CMD ["yarn","start"]
