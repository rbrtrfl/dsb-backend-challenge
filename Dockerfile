# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
COPY ./src/services/govDataService/departments.json ./dist/services/govDataService/departments.json
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8000
CMD ["npm","start"]