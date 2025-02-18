import css from './Header.module.css';
import clsx from 'clsx';

const Header = () => {
  return (
    <header className={css.header}>
      <div className={clsx('container', css.containerHeader)}>
        <a className={css.logo} href="/">
          Phonebook
        </a>
      </div>
    </header>
  );
};

export default Header;
