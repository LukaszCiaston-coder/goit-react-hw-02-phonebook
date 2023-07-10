import { useState } from 'react';
import styles from '../ContactForm/ContactForm.module.css';

const ContactForm = ({ onSubmit, onFilter }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeNumber = (event) => {
    setNumber(event.target.value);
  };

  const handleChangeFilter = (event) => {
    const filterValue = event.target.value;
    setFilter(filterValue);
    onFilter(filterValue.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <label className={styles.label}>
        Name:
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChangeName}
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Phone Number:
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChangeNumber}
          className={styles.input}
        />
      </label>
      <button type="submit" className={styles.button}>Add Contact</button>
      <label className={styles.label}>
        Filter by Name:
        <input
          type="text"
          value={filter}
          onChange={handleChangeFilter}
          className={styles.input}
        />
          </label>
      </form>
  );
};

export default ContactForm;