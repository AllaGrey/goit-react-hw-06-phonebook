import { Item, Button } from './Contact.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';

export const Contact = ({ contact: { id, name, number }}) => {
  const dispatch = useDispatch()
  
  return (
    <Item>
      {name} {number}
      <Button type="button" onClick={()=>dispatch(removeContact(id))}>
        Delete
      </Button>
    </Item>
  );
};

Contact.propTypes = {
  contacts: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
