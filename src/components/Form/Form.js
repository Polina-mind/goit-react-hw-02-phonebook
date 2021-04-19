import React, { Component } from 'react';
import InputForm from '../InputForm';
// import { v4 as uuidv4 } from 'uuid';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  onInputValue = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  onSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);
    // console.log(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <InputForm
        id={this.nameInputId}
        name={name}
        number={number}
        onInputValue={this.onInputValue}
        onSubmit={this.onSubmit}
      ></InputForm>
    );
  }
}

export default Form;
