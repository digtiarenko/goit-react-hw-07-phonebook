import styles from './ContactItem.module.css';
// import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { useDeleteContactMutation } from '../../redux/contactsSlice';

const ContactItem = ({ id, phone, name }) => {
  // const dispatch = useDispatch();
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <li key={id} className={styles.listUnit}>
      <span className={styles.span}>
        {name}: {phone}
      </span>
      <button
        disabled={isLoading}
        onClick={() => deleteContact(id)}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ContactItem;
