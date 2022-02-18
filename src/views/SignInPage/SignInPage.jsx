import s from './SignInPage.module.css';

const formSubmit = () => {
  console.log('submit');
};

export default function SignInPage() {
  return (
    <section>
      <form className={s.phonebookForm} onSubmit={formSubmit}>
        <div className={s.inputBox}>
          <label className={s.label}>Email</label>
          <input
            className={s.input}
            // value={email}
            // onChange={handleChange}
            type="email"
            name="email"
            required
          />
        </div>
        <div className={s.inputBox}>
          <label className={s.label}>Password</label>
          <input
            className={s.input}
            // value={password}
            // onChange={handleChange}
            type="text"
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
