import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import clsx from 'clsx';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.filter);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={clsx('container', css.cotainerList)}>
      <ul className={css.contactList}>
        {visibleContacts.map(contact => (
          <li key={contact.id} className={css.contactItem}>
            <Contact data={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
