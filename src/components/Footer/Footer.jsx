import { format } from 'date-fns';
import s from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={s.footerBox}>
      <p>Phonebook © 2021 - {format(new Date(), 'yyyy')}</p>
      <p>All rights reserved</p>
    </footer>
  );
};

export default Footer;
