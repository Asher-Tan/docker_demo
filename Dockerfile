FROM node

WORKDIR /Users/tanzhiqiang/demos/dockerAppDemo

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]