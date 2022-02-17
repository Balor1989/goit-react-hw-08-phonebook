import Contacts from '../../components/Contacts/Contacts';
import Phonebook from '../../components/Phonebook/Phonebook';
import Filter from '../../components/Filter';

export default function PhonebookPage() {
  return (
    <section>
      <Phonebook />
      <Filter />
      <Contacts />
    </section>
  );
}
