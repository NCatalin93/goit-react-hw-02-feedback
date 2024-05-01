import styles from './Notification.module.css';
import PropTypes from 'prop-types';

function Notification({ message }) {
  return message && <h2 className={styles.notification}>{message}</h2>;
}

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
