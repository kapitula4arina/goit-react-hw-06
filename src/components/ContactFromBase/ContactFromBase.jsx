import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import css from './ContactFromBase.module.css';

const ContactFormBase = ({ onSubmit, initialValues, contentBtn }) => {
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .matches(/^\d+$/, 'Only digits are allowed')
      .min(3, 'Too Short!')
      .max(13, 'Too Long!')
      .required('Required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={FeedbackSchema}
    >
      {() => (
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
              inputMode="numeric"
              pattern="\d*"
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
