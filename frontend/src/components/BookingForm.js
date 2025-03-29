import { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import api from '../services/api';

const BookingSchema = Yup.object().shape({
  car_model: Yup.string().required('Required'),
  service_type: Yup.string().required('Required'),
  appointment_time: Yup.date().required('Required'),
});

const BookingForm = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    api.get('/main/bookings')
      .then(res => setBookings(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Bookings</h1>
      <Formik
        initialValues={{ car_model: '', service_type: '', appointment_time: '' }}
        validationSchema={BookingSchema}
        onSubmit={async (values, { resetForm }) => {
          try {
            await api.post('/main/bookings', values);
            resetForm();
            window.location.reload();
          } catch (error) {
            console.error(error);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="car_model" placeholder="Car Model" />
            <ErrorMessage name="car_model" component="div" />
            
            <Field type="text" name="service_type" placeholder="Service Type" />
            <ErrorMessage name="service_type" component="div" />
            
            <Field type="datetime-local" name="appointment_time" />
            <ErrorMessage name="appointment_time" component="div" />
            
            <button type="submit" disabled={isSubmitting}>
              Create Booking
            </button>
          </Form>
        )}
      </Formik>

      <h2>Your Bookings</h2>
      <ul>
        {bookings.map(booking => (
          <li key={booking.id}>
            {booking.car_model} - {booking.service_type} ({booking.appointment_time})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingForm;
