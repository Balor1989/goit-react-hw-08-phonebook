import s from './SignInPage.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/auth/auth-operations';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const formSubmit = e => {
    e.preventDefault();
    dispatch(signIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <section>
      <form className={s.phonebookForm} onSubmit={formSubmit}>
        <div className={s.inputBox}>
          <label className={s.label}>Email</label>
          <input
            className={s.input}
            value={email}
            onChange={handleChange}
            type="email"
            name="email"
            required
          />
        </div>
        <div className={s.inputBox}>
          <label className={s.label}>Password</label>
          <input
            className={s.input}
            value={password}
            onChange={handleChange}
            type="password"
            name="password"
            required
          />
        </div>
        <div className={s.buttonBox}>
          <button className={s.addButton} type="submit">
            Sign-in
          </button>
        </div>
      </form>
    </section>
  );
}
