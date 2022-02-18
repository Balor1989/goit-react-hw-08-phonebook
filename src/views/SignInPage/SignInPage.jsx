import s from './SignInPage.module.css';
import { useState } from 'react';

export default function SignInPage() {
  const [email, setEmail] = useState('');
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
      default:
        return;
    }
  };

  const formSubmit = e => {
    e.preventDefault();
    console.log(email, password);
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
