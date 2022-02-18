import s from './AuthNav.module.css';
import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <div className={s.authNavBox}>
      <NavLink to="/signIn">Sign In</NavLink>
      <NavLink to="/signUp">Sign Up</NavLink>
    </div>
  );
}
