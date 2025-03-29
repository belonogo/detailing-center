-- Создание таблицы пользователей
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Создание таблицы услуг
CREATE TABLE IF NOT EXISTS services (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    duration INTERVAL NOT NULL
);

-- Создание таблицы записей
CREATE TABLE IF NOT EXISTS appointments (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    service_type VARCHAR(100) NOT NULL,
    car_model VARCHAR(100) NOT NULL,
    date DATE NOT NULL,
    time TIME NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Наполнение таблицы услуг тестовыми данными
INSERT INTO services (name, description, price, duration) VALUES
('Полная мойка', 'Комплексная мойка кузова, колес, салона', 2000.00, '02:00:00'),
('Полировка кузова', 'Удаление царапин и восстановление блеска', 5000.00, '04:00:00'),
('Химчистка салона', 'Глубокая очистка всех поверхностей салона', 3500.00, '03:30:00'),
('Защитное покрытие', 'Нанесение керамического защитного покрытия', 8000.00, '06:00:00'),
('Чернение резины', 'Обработка резиновых элементов', 1000.00, '00:30:00');

-- Создание тестового пользователя (необязательно)
-- Пароль: testpassword (захешированный)
INSERT INTO users (email, password) VALUES
('test@example.com', '$2b$12$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW');
