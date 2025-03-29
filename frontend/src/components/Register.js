import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import api from '../services/api';

const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

const Login = () => (
  <div>
    <h1>Login</h1>
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const response = await api.post('/auth/register', values);
          localStorage.setItem('token', response.data.access_token);
          window.location = '/bookings';
        } catch (error) {
          console.error(error);
        }
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="username" placeholder="Username" />
          <ErrorMessage name="username" component="div" />
          
          <Field type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" component="div" />
          
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Login;
