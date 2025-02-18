import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import css from './ContactFromBase.module.css';

const ContactFormBase = ({ onSubmit, initialValues, contentBtn }) => {
  // Функція для форматування телефону
  const formatPhoneNumber = value => {
    let digits = value.replace(/\D/g, '').slice(0, 10);

    let formattedNumber = '';
    if (digits.length > 0) formattedNumber += digits.slice(0, 3);
    if (digits.length > 3) formattedNumber += '-' + digits.slice(3, 6);
    if (digits.length > 6) formattedNumber += '-' + digits.slice(6, 8);
    if (digits.length > 8) formattedNumber += '-' + digits.slice(8, 10);

    return formattedNumber;
  };

  // Валідація для імені та телефону
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .matches(/^\d{3}-\d{3}-\d{2}-\d{2}$/, 'Invalid phone number format') // Перевірка формату телефону
      .required('Required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={FeedbackSchema}
    >
      {({ setFieldValue, values }) => (
        <Form className={css.contactForm}>
          <div className={css.groupForm}>
            <label htmlFor="name" className={css.labelForm}>
              Name
            </label>
            <Field
              type="text"
              name="name"
              id="name"
              className={css.inputForm}
              placeholder="Enter name"
            />
            <ErrorMessage
              name="name"
              component="span"
              className={css.errorMessage}
            />
          </div>

          <div className={css.groupForm}>
            <label htmlFor="number" className={css.labelForm}>
              Number
            </label>
            <Field
              type="tel"
              name="number"
              id="number"
              className={css.inputForm}
              placeholder="xxx-xxx-xx-xx"
              value={values.number}
              onChange={e =>
                setFieldValue('number', formatPhoneNumber(e.target.value))
              }
            />
            <ErrorMessage
              name="number"
              component="span"
              className={css.errorMessage}
            />
          </div>

          <button type="submit" className={css.buttonForm}>
            {contentBtn}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactFormBase;
