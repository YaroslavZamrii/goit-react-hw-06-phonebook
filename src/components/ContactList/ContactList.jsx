import Contact from '../Contact';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactReducer';

function ContactList() {
  const contacts = useSelector(state => state.contactBook.contacts);
  const filter = useSelector(state => state.contactBook.filter);
  const dispatch = useDispatch();

  const deleteSelectedContact = contactId => dispatch(deleteContact(contactId));

  const filteredContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li className={css.item} key={id}>
            <Contact
              name={name}
              number={number}
              contactId={id}
              onDeleteContact={deleteSelectedContact}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;
