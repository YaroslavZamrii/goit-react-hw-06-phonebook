import PropTypes from 'prop-types';
import css from './Contact.module.css';
import { AiOutlineUser } from 'react-icons/ai';
import { RiDeleteBinLine } from 'react-icons/ri';

function Contact({ name, number, contactId, onDeleteContact }) {
  return (
    <>
      <div className={css.wrapper}>
        <span className={css.icon}>
          <AiOutlineUser />
        </span>
        <p>{name}</p>
      </div>
      <div className={css.wrapper}>
        <p className={css.number}>{number}</p>
        <button
          className={css.button}
          type="button"
          onClick={() => onDeleteContact(contactId)}
        >
          <RiDeleteBinLine />
        </button>
      </div>
    </>
  );
}

Contact.prototype = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
