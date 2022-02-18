import s from './SignInPage.module.css';

const formSubmit = () => {
  console.log('submit');
};

export default function SignInPage() {
  return (
    <section>
      <form className={s.phonebookForm} onSubmit={formSubmit}>
        <div className={s.inputBox}>
          <label className={s.label}>Login</label>
          <input
            className={s.input}
            // value={name}
            // onChange={handleChange}
            type="text"
            name="login"
            pattern="^[a-zA-Zа-яА-Я]+((['-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа и тире. Например Adrian,Castelmore, d'Artagnan и т. п."
            required
          />
        </div>
        <div className={s.inputBox}>
          <label className={s.label}>Password</label>
          <input
            className={s.input}
            // value={phone}
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
