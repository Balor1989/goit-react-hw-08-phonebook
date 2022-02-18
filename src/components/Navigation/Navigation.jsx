import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <div className={s.navigationBox}>
      <NavLink to="/">Homepage</NavLink>
      <NavLink to="/phonebook">Phonebook</NavLink>
    </div>
  );
}
