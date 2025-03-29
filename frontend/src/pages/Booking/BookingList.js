import { useEffect, useState } from 'react';
import api from '../../services/api';
import './BookingList.css'; // Стили для компонента

export default function BookingList() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const { data } = await api.get('/bookings');
        setBookings(data);
      } catch (err) {
        setError('Не удалось загрузить записи');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handleCancel = async (id) => {
    if (!window.confirm('Вы уверены, что хотите отменить запись?')) return;
    
    try {
      await api.delete(`/bookings/${id}`);
      setBookings(bookings.filter(booking => booking.id !== id));
    } catch (err) {
      alert('Ошибка при отмене записи');
    }
  };

  if (loading) return <div className="loading">Загрузка...</div>;
  if (error) return <div className="error">{error}</div>;
  if (bookings.length === 0) return <div className="empty">У вас нет активных записей</div>;

  return (
    <div className="booking-list">
      <h2>Мои записи</h2>
      
      <div className="bookings-container">
        {bookings.map(booking => (
          <div key={booking.id} className="booking-card">
            <div className="booking-info">
              <h3>{booking.car_model}</h3>
              <p><strong>Услуга:</strong> {booking.service_type}</p>
              <p><strong>Дата:</strong> {new Date(booking.appointment_time).toLocaleString()}</p>
              <p><strong>Статус:</strong> {booking.status || 'Подтверждено'}</p>
            </div>
            
            <div className="booking-actions">
              <button 
                onClick={() => handleCancel(booking.id)}
                className="cancel-btn"
              >
                Отменить
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
