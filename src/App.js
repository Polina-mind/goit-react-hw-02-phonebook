import React, { Component } from 'react';
import InputForm from './components/InputForm';
import Contacts from './components/Contacts';
import './App.css';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  // onInputName = event => {
  //   const inputName = event.currentTarget.textContent;
  //   console.log(event.target);

  //   this.setState(prevState => {
  //     return {
  //       contacts: prevState.push({ id: 2, name: inputName }),
  //       name: inputName,
  //     };
  //   });
  // };

  render() {
    const { contacts, name } = this.state;
    console.log(this.state);

    return (
      <>
        <h2 className="Title">Phonebook</h2>

        <InputForm onInputName={this.onInputName}></InputForm>

        <h2 className="Title">Contacts</h2>

        <Contacts contacts={contacts}> name={name}</Contacts>
      </>
    );
  }
}

export default App;
