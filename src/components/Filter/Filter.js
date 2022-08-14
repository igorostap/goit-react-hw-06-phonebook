import PropTypes from 'prop-types';
import {changeFilter } from '../../Redux/ContactsSlice'
import { useSelector, useDispatch } from 'react-redux';
export const Filter = () => {

  const filter = useSelector(store => store.contacts.filter);
  const dispatch = useDispatch();
    return (<div>
            <h3>Find contacts by name</h3>
            <input type="text" value={filter} onChange={evt=>dispatch(changeFilter(evt.currentTarget.value))} />
        </div>
    )
}
Filter.propTypes = {
  filter: PropTypes.string,
  filterChange: PropTypes.func
}