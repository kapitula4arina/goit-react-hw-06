import { useSelector } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import css from './Main.module.css';

const Main = () => {
  const contacts = useSelector(state => state.contacts.items);

  return (
    <main>
      <div>
        <ContactForm />
        {contacts.length > 0 ? (
          <>
            <SearchBox />
            <ContactList />
          </>
        ) : (
          <h2 className={css.noContacts}>You have no contacts!</h2>
        )}
      </div>
    </main>
  );
};

export default Main;
