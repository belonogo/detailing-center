from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from ..models import Booking, db

bookings_bp = Blueprint('bookings', __name__)

@bookings_bp.route('/', methods=['GET'])
@jwt_required()
def get_bookings():
    user_id = get_jwt_identity()
    bookings = Booking.query.filter_by(user_id=user_id).all()
    return jsonify([b.serialize() for b in bookings]), 200

@bookings_bp.route('/', methods=['POST'])
@jwt_required()
def create_booking():
    data = request.get_json()
    new_booking = Booking(
        user_id=get_jwt_identity(),
        car_model=data['car_model'],
        service_type=data['service_type'],
        appointment_time=data['appointment_time']
    )
    db.session.add(new_booking)
    db.session.commit()
    return jsonify(new_booking.serialize()), 201
