import { useDispatch } from 'react-redux';
import s from './UserMenu.module.css';
import { logout } from '../../redux/auth/auth-operations';
import { useSelector } from 'react-redux';
import { getUserName } from '../../redux/auth/auth-selectors';

export default function UserMenu() {
  const dispatch = useDispatch();
  const login = useSelector(getUserName);

  return (
    <div className={s.userMenuBox}>
      <h2>Welcome, {login}</h2>
      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
}
