import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={s.headerBox}>
      Header
      <nav>
        <NavLink to="/">Homepage</NavLink>
        <NavLink to="/phonebook">Phonebook</NavLink>
        <NavLink to="/signIn">Sign In</NavLink>
        <NavLink to="/signUp">Sign Up</NavLink>
      </nav>
    </header>
  );
};

export default Header;
