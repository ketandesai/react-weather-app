FROM node:12-alpine
WORKDIR /weather-app
COPY package.json ./
RUN yarn install --production
COPY . .
CMD ["node", "src/index.js"]