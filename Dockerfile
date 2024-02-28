FROM node:20-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

COPY dist .

EXPOSE 8080

CMD [ "npm", "run", "preview" ]