import React, { Component } from 'react';
// import InputForm from './components/InputForm';
import Form from './components/Form';
import Contacts from './components/Contacts';
import Filter from './components/Filter';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
  };

  // onInputValue = event => {
  //   const { name, value } = event.currentTarget;
  //   this.setState({ [name]: value });
  // };

  // onSubmit = event => {
  //   // event.preventDefault();

  //   this.onSubmit(this.state);
  //   this.reset();
  // };

  // reset = () => {
  //   this.setState({ name: '', number: '' });
  // };

  addContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name: name,
      number: number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = event => {
    event.preventDefault();
    const id = event.currentTarget.id;

    const newContacts = this.state.contacts.filter(
      contact => contact.id !== id,
    );

    this.setState({
      contacts: [...newContacts],
    });
  };

  onInputFilter = event => {
    const filterInputValue = event.currentTarget.value;

    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterInputValue),
    );
    console.log(filteredContacts);

    this.setState({
      contacts: [...filteredContacts],
    });
  };

  render() {
    const { contacts, name } = this.state;
    console.log(contacts);

    return (
      <>
        <h2 className="Title">Phonebook</h2>

        <Form onSubmit={this.addContact}></Form>
        {/* <InputForm
          id={this.nameInputId}
          name={name}
          number={number}
          onSubmit={this.onSubmit}
          onInputValue={this.onInputValue}
        ></InputForm> */}

        <h2 className="Title">Contacts</h2>

        <Filter onInputFilter={this.onInputFilter}></Filter>

        <Contacts
          contacts={contacts}
          name={name}
          onSubmit={this.deleteContact}
        ></Contacts>
      </>
    );
  }
}

export default App;
