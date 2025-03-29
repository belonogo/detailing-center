FROM node:16-alpine

WORKDIR /app
COPY package.json .
RUN npm install

# Копируем ВСЕ файлы
COPY public /app/public
COPY src /app/src

# Убедимся что файлы скопированы
RUN ls -la /app/public/

CMD ["npm", "start"]
