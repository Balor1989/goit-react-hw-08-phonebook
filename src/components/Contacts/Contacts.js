import { useDispatch, useSelector } from 'react-redux';
import s from './Contacts.module.css';
import {
  deleteContacts,
  fetchContacts,
  getVisibleContacts,
} from '../../redux/phonebook/selectors';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

export default function Contacts() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedIn = useSelector(getIsLoggedIn);

  const onDeleteContactCard = id => {
    dispatch(deleteContacts(id));
  };

  useEffect(() => {
    if (!loggedIn) {
      return navigate('/signIn');
    }
  }, [loggedIn, navigate]);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={s.cardList}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.cardBox} key={id}>
          <p className={s.cardValues}>
            {name}: {number}
          </p>
          <div className={s.buttonBox}>
            <button className={s.deleteButton} onClick={() => onDeleteContactCard(id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
