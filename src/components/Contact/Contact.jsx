import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { deleteContact } from '../../redux/contactsSlice';

import { BiUser } from 'react-icons/bi';
import { AiOutlinePhone } from 'react-icons/ai';

const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();
  const maxLength = 15;

  return (
    <div className={css.contact}>
      <div className={css.contactGroup}>
        <div className={css.contactItem}>
          <BiUser className={css.icon} size="20" />
          <p className={css.contactDescription}>
            {name.length <= maxLength
              ? name
              : `${name.substring(0, maxLength)}...`}
          </p>
        </div>
        <div className={css.contactItem}>
          <AiOutlinePhone className={css.icon} size="20" />
          <p className={css.contactDescription}>+38-{number}</p>
        </div>
      </div>
      <div className={css.blockBtn}>
        <button
          className={css.button}
          onClick={() => {
            dispatch(deleteContact(id));
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Contact;
