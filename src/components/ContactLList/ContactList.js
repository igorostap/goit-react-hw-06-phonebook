import { ContactItem } from "./ContactItem";
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

export function ContactList() {
 const contacts = useSelector(store => store.contacts.items);
  const contactsFilter = useSelector(store => store.contacts.filter);

  const normalizedFilter = contactsFilter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
    return (
        <>
            {filteredContacts.map((contact) => (
                <ContactItem key={contact.id} contact={contact} />
            ))}
        </>
    )
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func
}

  
