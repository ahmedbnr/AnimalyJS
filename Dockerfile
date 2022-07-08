FROM node:12

WORKDIR /usr/my_app

COPY . .

RUN npm i

EXPOSE 3000

CMD ["npm","start"]