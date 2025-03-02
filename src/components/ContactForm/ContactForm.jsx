import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { addContact } from '../../redux/contacts/contactsOps';
import { toast } from 'react-hot-toast';
import styles from './ContactForm.module.css';

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  number: Yup.string().required('Number is required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values))
      .unwrap()
      .then(() => {
        toast.success('Contact added successfully');
        resetForm();
      })
      .catch(() => {
        toast.error('Failed to add contact');
      });
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="number">Number</label>
            <Field type="text" name="number" />
          </div>
          <button type="submit" disabled={isSubmitting}>Add Contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
