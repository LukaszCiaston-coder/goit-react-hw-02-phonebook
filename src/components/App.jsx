import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '', 
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

  handleFilter = (filterValue) => {
    this.setState({ filter: filterValue });
  };

  render() {
    const { contacts, filter } = this.state;
    
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <h1>Contacts</h1>
        <ContactForm onSubmit={this.addContact} onFilter={this.handleFilter} />
        <ContactList contacts={filteredContacts} />
      </div>
    );
  }
}

export default App;
