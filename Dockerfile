# To build container
# docker build -t weather-app .
# To run container
# docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3000:3000 weather-app

# Docker Image which is used as foundation to create
# a custom Docker Image with this Dockerfile
FROM node:15-alpine
# A directory within the virtualized Docker environment
# Becomes more relevant when using Docker Compose later
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH=/app/node_modules/.bin:$PATH

# install app dependencies
COPY ["package.json", "yarn.lock", "./"]

RUN yarn install
RUN yarn global add react-scripts -g

#add app
COPY . ./

#port to expose
EXPOSE 3000

# start the app
CMD ["yarn", "start"]