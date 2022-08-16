import { ListItem, TelNum, DelBtn } from './ContactList.styled';
import { removeContact } from '../../Redux/ContactsSlice';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

export function ContactItem({ contact }) {
  const dispatch = useDispatch();
  return (
    <ListItem>
      {contact.name}: <TelNum>{contact.number}</TelNum>
      <DelBtn type="button" onClick={() => dispatch(removeContact(contact.id))}>
        Delete
      </DelBtn>
    </ListItem>
  );
}
ContactItem.propTypes = {
  contact: PropTypes.object,
  idx: PropTypes.number,
  onDelete: PropTypes.func,
};
