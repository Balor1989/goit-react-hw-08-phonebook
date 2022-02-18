import s from './UserMenu.module.css';
import { NavLink } from 'react-router-dom';

export default function UserMenu() {
  return (
    <div className={s.userMenuBox}>
      <NavLink to="/user-menu">User menu</NavLink>
      <button type="button">Logout</button>
    </div>
  );
}
