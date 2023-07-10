import { Component } from 'react';
import { nanoid } from 'nanoid';
import  ContactForm  from './ContactForm/ContactForm';
import  ContactList  from './ContactList/ContactList';
import  Filter  from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: ''
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

  handleFilterChange = (filterValue) => {
    this.setState({ filter: filterValue });
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilterChange} />
        <ContactList contacts={filteredContacts} />
      </div>
    );
  }
}

export default App;