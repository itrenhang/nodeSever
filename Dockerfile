FROM node:8.14.0-jessie
WORKDIR /usr/nobook/server
COPY package.json package.json
RUN npm i
COPY config config
COPY controllers controllers
COPY middleware middleware
COPY sq sq
COPY app.js app.js
COPY controller.js controller.js
COPY static-files.js static-files.js
COPY static static
EXPOSE 3030
CMD ["npm", "start"]