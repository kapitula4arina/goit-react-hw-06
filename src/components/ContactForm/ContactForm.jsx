import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import clsx from 'clsx';
import ContactFormBase from '../ContactFromBase/ContactFromBase';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, actions) => {
    dispatch(addContact({ ...values, id: nanoid() }));
    actions.resetForm();
  };

  return (
    <div className={clsx('container', css.containerForm)}>
      <div className={css.block}>
        <h2 className={css.title}>Add Contact</h2>
        <ContactFormBase
          onSubmit={handleSubmit}
          initialValues={initialValues}
          contentBtn="Add"
        />
      </div>
    </div>
  );
};

export default ContactForm;
