import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsOps';
import styles from './ContactItem.module.css';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success('Contact deleted successfully');
      })
      .catch(() => {
        toast.error('Failed to delete contact');
      });
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <li className={styles.item}>
        <p>{name}: {number}</p>
        <button onClick={openModal}>Delete</button>
      </li>
      {isModalOpen && (
        <div className={styles.modal}>
          <p>Are you sure you want to delete this contact?</p>
          <button onClick={handleDelete}>Yes</button>
          <button onClick={closeModal}>No</button>
        </div>
      )}
    </>
  );
};

export default ContactItem;
