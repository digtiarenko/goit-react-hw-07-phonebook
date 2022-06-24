import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { RotatingSquare } from 'react-loader-spinner';
import ContactItem from '../ContactItem';
import { useGetContactsQuery } from '../../redux/contactsSlice';

function ContactList() {
  const filterValue = useSelector(state => state.filter);
  const { data: contacts, isLoading } = useGetContactsQuery();

  const getFilteredContacts = useMemo(
    () =>
      contacts?.filter(
        contact =>
          contact.name
            .toLowerCase()
            .includes(filterValue.trim().toLowerCase()) ?? [],
      ),
    [contacts, filterValue],
  );

  return (
    <>
      {isLoading && (
        <RotatingSquare
          ariaLabel="rotating-square"
          visible={true}
          color="grey"
        />
      )}
      {contacts && (
        <ul>
          {getFilteredContacts.map(({ phone, name, id }) => (
            <ContactItem phone={phone} name={name} key={id} id={id} />
          ))}{' '}
        </ul>
      )}
    </>
  );
}

export default ContactList;
