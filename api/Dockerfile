FROM node

RUN mkdir -p /opt/app
WORKDIR /opt/app

COPY package.json .
COPY yarn.lock .

RUN yarn install
RUN yarn global add pm2

COPY . .

CMD ["pm2-runtime", "index.js"]