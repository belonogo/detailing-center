import { useState } from 'react';
import api from '../../services/api';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    carModel: '',
    serviceType: 'Комплексная мойка',
    date: '',
    time: ''
  });

  const serviceTypes = [
    'Комплексная мойка',
    'Полировка кузова',
    'Химчистка салона',
    'Защитное покрытие'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/bookings', formData);
      alert('Запись успешно создана!');
    } catch (err) {
      alert('Ошибка при создании записи');
    }
  };

  return (
    <div className="booking-form">
      <h2>Запись в детейлинг-центр</h2>
      <form onSubmit={handleSubmit}>
        <select
          value={formData.serviceType}
          onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
        >
          {serviceTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        
        <input
          type="text"
          placeholder="Модель автомобиля"
          value={formData.carModel}
          onChange={(e) => setFormData({...formData, carModel: e.target.value})}
        />
        
        <div className="datetime-inputs">
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({...formData, date: e.target.value})}
          />
          <input
            type="time"
            value={formData.time}
            onChange={(e) => setFormData({...formData, time: e.target.value})}
          />
        </div>
        
        <button type="submit">Записаться</button>
      </form>
    </div>
  );
}
