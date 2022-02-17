import s from './App.module.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PhonebookPage from './views/PhonebookPage/PhonebookPage';
import SignInPage from './views/SignInPage/SignInPage';
import SignUpPage from './views/SignUpPage/SignUpPage';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className={s.wrapper}>
      <Header className={s.header} />
      <main className={(s.main, s.phonebookSection)}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<PhonebookPage />} />;
            <Route path="/signIn" element={<SignInPage />} />;
            <Route path="/SignUp" element={<SignUpPage />} />;
          </Routes>
        </Suspense>
      </main>
      <Footer className={s.footer} />
    </div>
  );
};
export default App;
