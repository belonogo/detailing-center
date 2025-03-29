from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://user:password@postgres:5432/db'
    
    db.init_app(app)
    
    with app.app_context():
        db.create_all()
    
    from .routes import bookings_bp
    app.register_blueprint(bookings_bp, url_prefix='/bookings')
    
    return app
