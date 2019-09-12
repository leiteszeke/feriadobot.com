FROM node

RUN mkdir -p /opt/app
WORKDIR /opt/app

COPY package.json .
RUN npm install --quiet
RUN npm install pm2 -g

COPY . .

CMD ["pm2-runtime", "index.js"]