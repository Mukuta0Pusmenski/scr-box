import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import { toast } from 'react-hot-toast';
import styles from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout())
      .unwrap()
      .then(() => {
        toast.success('Logged out successfully');
      })
      .catch(() => {
        toast.error('Failed to logout');
      });
  };

  return (
    <div className={styles.userMenu}>
      <span className={styles.name}>Welcome, {user.name}</span>
      <button className={styles.button} onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
