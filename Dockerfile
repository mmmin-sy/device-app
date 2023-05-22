FROM node:latest
RUN mkdir -p /usr/src/test
WORKDIR /usr/src/test
COPY package.json /usr/src/test/
RUN npm install
COPY . /usr/src/test
EXPOSE 3000
CMD node index.js