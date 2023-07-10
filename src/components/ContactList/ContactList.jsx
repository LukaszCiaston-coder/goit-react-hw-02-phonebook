import css from '../ContactList/ContactList.module.css';


export const ContactList = ({ contacts }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => (
        <li key={contact.id} className={css.contactItem}>
          {contact.name}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;