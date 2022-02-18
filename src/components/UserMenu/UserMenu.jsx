import s from './UserMenu.module.css';

export default function UserMenu() {
  return (
    <div className={s.userMenuBox}>
      <h2>User menu</h2>
      <button type="button">Logout</button>
    </div>
  );
}
