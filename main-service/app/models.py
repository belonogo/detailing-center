from .. import db

class Booking(db.Model):
    __tablename__ = 'bookings'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    car_model = db.Column(db.String(100), nullable=False)
    service_type = db.Column(db.String(100), nullable=False)
    appointment_time = db.Column(db.DateTime, nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())

    def serialize(self):
        return {
            'id': self.id,
            'car_model': self.car_model,
            'service_type': self.service_type,
            'appointment_time': self.appointment_time.isoformat(),
            'created_at': self.created_at.isoformat()
        }
