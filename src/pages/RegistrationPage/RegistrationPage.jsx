import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations';
import styles from './RegistrationPage.module.css';

const RegistrationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password is too short').required('Password is required'),
});

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(register(values));
    setSubmitting(false);
  };

  return (
    <div className={styles.container}>
      <h1>Register</h1>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={RegistrationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" />
            </div>
            <button type="submit" disabled={isSubmitting}>Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationPage;
