from app import db  # Абсолютный импорт

class Booking(db.Model):
    __tablename__ = 'bookings'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, nullable=False)
    car_model = db.Column(db.String(100), nullable=False)
    service_type = db.Column(db.String(100), nullable=False)
    appointment_time = db.Column(db.DateTime, nullable=False)
