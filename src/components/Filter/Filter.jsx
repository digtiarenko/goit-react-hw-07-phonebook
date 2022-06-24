import { useDispatch, useSelector } from 'react-redux';
import styles from '../ContactForm/ContactForm.module.css';
import { changeFilter } from '../../redux/store';

export default function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter);

  const onChangeFilter = event => {
    const { value } = event.target;
    dispatch(changeFilter(value));
  };

  return (
    <div className={styles.form}>
      <label className={styles.label}>
        <span>Find contacts by name</span>
        <input
          className={styles.input}
          onChange={onChangeFilter}
          type="text"
          name="name"
          value={filterValue}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
    </div>
  );
}
