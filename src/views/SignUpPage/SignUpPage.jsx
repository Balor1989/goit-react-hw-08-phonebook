import s from './SignUpPage.module.css';
import { useState } from 'react';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'login':
        setLogin(value);
        break;
      default:
        return;
    }
  };

  const formSubmit = e => {
    e.preventDefault();
    console.log(email, password, login);
  };

  return (
    <section>
      <form className={s.phonebookForm} onSubmit={formSubmit}>
        <div className={s.inputBox}>
          <label className={s.label}>Login</label>
          <input
            className={s.input}
            value={login}
            onChange={handleChange}
            type="text"
            name="login"
            required
          />
        </div>
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
            Sign-up
          </button>
        </div>
      </form>
    </section>
  );
}
