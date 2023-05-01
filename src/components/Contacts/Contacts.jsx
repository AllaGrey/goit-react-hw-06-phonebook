import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';



export const Contacts = () => {
  const contacts = useSelector(({ contacts }) => contacts)
  const filter = useSelector( ({ filter  }) => filter)
  
  const filteredContacts = contacts.filter(contact =>
  (contact.name.toLowerCase().includes(filter.toLowerCase())
  ));
  
  return filteredContacts.map(filteredContact => (
    <Contact key={filteredContact.id} contact={filteredContact} />
  ));

};
