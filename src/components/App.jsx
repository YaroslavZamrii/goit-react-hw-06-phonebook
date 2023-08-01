import { useSelector } from 'react-redux';

import ContactList from './ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter';
import Message from './Message';

import css from './App.module.css';

export const App = () => {
  const contacts = useSelector(state => state.contacts.item);

  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Phone<span className={css.title__color}>book</span>
      </h1>
      <ContactForm />
      <h2 className={css.subtitle}>Contacts</h2>
      <Filter />
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <Message text="Contact list is empty." />
      )}
    </div>
  );
};
