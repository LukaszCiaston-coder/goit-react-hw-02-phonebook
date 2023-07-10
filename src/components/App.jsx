import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [],
    name: ''
  };

  addContact = (newName) => {
    const newContact = {
      id: nanoid(),
      name: newName
    };
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact]
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
