import s from './App.module.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PhonebookPage from './views/PhonebookPage/PhonebookPage';
import SignInPage from './views/SignInPage/SignInPage';
import SignUpPage from './views/SignUpPage/SignUpPage';
import { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refreshCurrentUser } from './redux/auth/auth-operations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    <div className={s.wrapper}>
      <Header className={s.header} />
      <main className={(s.main, s.phonebookSection)}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<h1>Homepage</h1>} />;
            <Route path="/phonebook" element={<PhonebookPage />} />;
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
