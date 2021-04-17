import React, { Component } from 'react';
import InputForm from './components/InputForm';
import Contacts from './components/Contacts';
import './App.css';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  onInputChange = event => {
    const inputName = event.currentTarget.value;
    this.setState({ name: inputName });

    // this.setState(prevState => {
    //   return {
    //     contacts: prevState.push({ id: 2, name: inputName }),
    //     name: inputName,
    //   };
    // });
  };

  onInputNumber = event => {
    const inputNumber = event.currentTarget.value;
    this.setState({ number: inputNumber });
  };

  render() {
    const { contacts, name, number } = this.state;
    console.log(this.state);

    return (
      <>
        <h2 className="Title">Phonebook</h2>

        <InputForm
          name={name}
          number={number}
          onInputChange={this.onInputChange}
          onInputNumber={this.onInputNumber}
          onInputName={this.onInputName}
        ></InputForm>

        <h2 className="Title">Contacts</h2>

        <Contacts contacts={contacts}> name={name}</Contacts>
      </>
    );
  }
}

export default App;
