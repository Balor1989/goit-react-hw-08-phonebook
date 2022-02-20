import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

export default function Navigation() {
  const loggedIn = useSelector(getIsLoggedIn);
  return (
    <div className={s.navigationBox}>
      <NavLink to="/">Homepage</NavLink>
      {loggedIn && <NavLink to="/phonebook">Phonebook</NavLink>}
    </div>
  );
}
