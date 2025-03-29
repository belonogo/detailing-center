FROM node:16-alpine

WORKDIR /app
COPY package.json .
RUN npm install

COPY public /app/public
COPY src /app/src

# Проверка наличия ключевых файлов
RUN ls -la /app/public/ && ls -la /app/src/

CMD ["npm", "start"]
