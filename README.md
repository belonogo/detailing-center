# Детейлинг-центр: Сервис онлайн-записи

![Docker](https://img.shields.io/badge/Docker-20.10%2B-blue)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-13-green)
![React](https://img.shields.io/badge/React-18-blue)
![Flask](https://img.shields.io/badge/Flask-2.0-lightgrey)

## Оглавление
1. [Особенности](#особенности)
2. [Технологии](#технологии)
3. [Быстрый старт](#быстрый-старт)
4. [Развертывание в облаке](#развертывание-в-облаке)
5. [API](#api)
6. [Структура проекта](#структура-проекта)
7. [Разработка](#разработка)

## Особенности
- JWT аутентификация
- Микросервисная архитектура
- Управление записями клиентов
- Docker-контейнеризация
- Балансировка нагрузки через Nginx

## Технологии
**Backend:**
- Python 3.9 + Flask
- PostgreSQL
- JWT-аутентификация

**Frontend:**
- React 18
- Formik + Yup
- Axios

**Инфраструктура:**
- Docker + docker-compose
- Nginx

## Быстрый старт

### Требования
- Docker 20.10+
- docker-compose 1.29+

```bash
# 1. Клонируйте репозиторий
git clone https://github.com/ваш-репозиторий/detailing-center.git
cd detailing-center

# 2. Запустите сервисы
docker-compose up -d --build

# 3. Приложение будет доступно:
# Frontend: http://localhost:3000
# API: http://localhost/api
