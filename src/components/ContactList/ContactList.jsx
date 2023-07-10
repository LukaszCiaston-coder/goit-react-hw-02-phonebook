import css from '../ContactList/ContactList.module.css';

export const ContactList = ({ contacts }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => (
        <li key={contact.id} className={css.contactItem}>
          <span className={css.contactName}>{contact.name}</span>
          <span className={css.contactNumber}>{contact.number}</span>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;