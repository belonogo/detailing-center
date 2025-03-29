from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager

db = SQLAlchemy()
jwt = JWTManager()

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # Добавьте эту строку
    # остальная конфигурация
    
    from app.routes import auth_bp  # Абсолютный импорт
    app.register_blueprint(auth_bp)
    
    return app
