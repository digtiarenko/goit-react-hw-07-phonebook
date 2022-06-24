import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

function App() {
  return (
    <div style={{ marginLeft: '30px' }}>
      <h1> Phonebook </h1>
      <ContactForm />

      <h1> Contacts </h1>
      <Filter />
      <ContactList />
    </div>
  );
}

export { App };
