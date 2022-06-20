import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem';

function ContactList() {
  const contactList = useSelector(state => state.contacts.items);
  const filterValue = useSelector(state => state.contacts.filter);

  const getFilteredContacts = () => {
    const toLowerCaseFilter = filterValue.toLowerCase();
    return contactList.filter(contact =>
      contact.name.toLowerCase().includes(toLowerCaseFilter),
    );
  };
  const filteredContacts = getFilteredContacts();

  return (
    <>
      <ul>
        {filteredContacts.map(({ number, name, id }) => (
          <ContactItem number={number} name={name} key={id} id={id} />
        ))}{' '}
      </ul>
    </>
  );
}

export default ContactList;
