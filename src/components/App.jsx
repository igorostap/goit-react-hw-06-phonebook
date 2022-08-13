
import { useSelector } from 'react-redux';
import { InputForm } from './InputForm/InputForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactLList/ContactList';

export function App() {
  const contacts = useSelector(store => store.contacts.items);
  const filter = useSelector(store => store.contacts.filter);

  
  const filterToLowCase = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact => (contact.name.toLowerCase().includes(filterToLowCase)));
    return (
      <>
        
          <h1>Phonebook</h1>
          <InputForm/>
        
        
          <h2>Contact List</h2>
          <Filter/>
          {contacts.length ?
            <ContactList contacts={filteredContacts} /> :
            <p>No any contacts</p>}
        
      </>
    );
  }
