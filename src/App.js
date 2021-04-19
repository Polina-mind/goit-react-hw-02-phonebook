import React, { Component } from 'react';
// import InputForm from './components/InputForm';
import Form from './components/Form';
import Contacts from './components/Contacts';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

class App extends Component {
  state = {
    contacts: [],
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

  render() {
    const { contacts, name } = this.state;
    console.log(contacts);

    return (
      <>
        <h2 className="Title">Phonebook</h2>

        <Form onSubmit={this.addContact}> </Form>
        {/* <InputForm
          id={this.nameInputId}
          name={name}
          number={number}
          onSubmit={this.onSubmit}
          onInputValue={this.onInputValue}
        ></InputForm> */}

        <h2 className="Title">Contacts</h2>

        <Contacts contacts={contacts}> name={name}</Contacts>
      </>
    );
  }
}

export default App;
