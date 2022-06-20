import styles from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/actions';
import PropTypes from 'prop-types';

const ContactItem = ({ id, number, name }) => {
  const dispatch = useDispatch();

  return (
    <li key={id} className={styles.listUnit}>
      <span className={styles.span}>
        {name}: {number}
      </span>
      <button
        onClick={() => {
          dispatch(deleteContact(id)); ///!!!
        }}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ContactItem;
