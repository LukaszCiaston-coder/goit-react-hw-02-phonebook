import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Notiflix from 'notiflix';
import './App.css';

export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: ''
  };

  addContact = (newContact) => {
    const { name, number } = newContact;
    const isContactExists = this.state.contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isContactExists) {
      Notiflix.Notify.failure('This contact already exists!');
      return;
    }
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
    deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== contactId)
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
       <div className="appContainer">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilterChange} />
        <ContactList contacts={filteredContacts} onDeleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default App;