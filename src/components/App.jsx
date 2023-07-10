import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '' // Dodane pole "number" w stanie komponentu
  };

  addContact = (newContact) => {
    const { name, number } = newContact;
    const contact = {
      id: nanoid(),
      name,
      number
    };
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact]
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <div>
        <h1>Contacts</h1>
        <ContactForm onSubmit={this.addContact} />
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

export default App;
