from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTExtended

db = SQLAlchemy()
jwt = JWTExtended()

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://user:password@postgres:5432/db'
    app.config['JWT_SECRET_KEY'] = 'super-secret-key'
    
    db.init_app(app)
    jwt.init_app(app)
    
    with app.app_context():
        db.create_all()
    
    from .routes.auth import auth_bp
    app.register_blueprint(auth_bp, url_prefix='/auth')
    
    return app
