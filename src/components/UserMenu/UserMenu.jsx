import { useDispatch } from 'react-redux';
import s from './UserMenu.module.css';
import { logout } from '../../redux/auth/auth-operations';

export default function UserMenu() {
  const dispatch = useDispatch();

  return (
    <div className={s.userMenuBox}>
      <h2>User menu</h2>
      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
}
