import s from './Header.module.css';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';

const Header = () => {
  return (
    <header className={s.headerBox}>
      <nav className={s.navigationBox}>
        <Navigation />
        <AuthNav />
        <UserMenu />
      </nav>
    </header>
  );
};

export default Header;
