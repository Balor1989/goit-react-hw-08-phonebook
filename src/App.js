import s from './App.module.css';
import Contacts from './components/Contacts/Contacts';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Phonebook from './components/Phonebook/Phonebook';
import Filter from './components/Filter';

const App = () => {
  return (
    <div className={s.wrapper}>
      <Header className={s.header} />
      <main className={(s.main, s.phonebookSection)}>
        <Phonebook />
        <Filter />
        <Contacts />
      </main>
      <Footer className={s.footer} />
    </div>
  );
};
export default App;
