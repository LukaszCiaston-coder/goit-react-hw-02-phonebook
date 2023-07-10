import React, { useState } from 'react';
import styles from './ContactForm.module.css';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(name);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
          className={styles.input}
        />
      </label>
      <button type="submit" className={styles.button}>Add Contact</button>
    </form>
  );
};

export default ContactForm;