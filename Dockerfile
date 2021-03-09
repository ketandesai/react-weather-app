# Docker Image which is used as foundation to create
# a custom Docker Image with this Dockerfile
FROM node:12.18-alpine
ENV NODE_ENV=production
# A directory within the virtualized Docker environment
# Becomes more relevant when using Docker Compose later
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN yarn install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
CMD ["yarn", "start"]
