
import { useSelector } from 'react-redux';
import { InputForm } from './InputForm/InputForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactLList/ContactList';

export function App() {
  const contacts = useSelector(store => store.contacts.items);
 
    return (
      <>
        
          <h1>Phonebook</h1>
          <InputForm/>
        
        
          <h2>Contact List</h2>
          <Filter/>
          {contacts.length ?
            <ContactList  /> :
            <p>No any contacts</p>}
        
      </>
    );
  }
