import s from './App.module.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PhonebookPage from './views/PhonebookPage/PhonebookPage';
import SignInPage from './views/SignInPage/SignInPage';
import SignUpPage from './views/SignUpPage/SignUpPage';

const App = () => {
  return (
    <div className={s.wrapper}>
      <Header className={s.header} />
      <main className={(s.main, s.phonebookSection)}>
        <PhonebookPage />
        <SignInPage />
        <SignUpPage />
      </main>
      <Footer className={s.footer} />
    </div>
  );
};
export default App;
