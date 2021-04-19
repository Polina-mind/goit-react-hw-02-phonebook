import React from 'react';
import PropTypes from 'prop-types';
import './InputForm.css';

const InputForm = ({ id, name, number, onInputValue, onSubmit }) => {
  return (
    <form className="Form">
      <label className="Label">
        Name
        <input
          id={id}
          className="Input"
          value={name}
          onChange={onInputValue}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>

      <label className="Label">
        Number
        <input
          id={id}
          className="Input"
          value={number}
          onChange={onInputValue}
          type="text"
          name="number"
        />
      </label>

      <button className="Button" type="submit" onClick={onSubmit}>
        Add contact
      </button>
    </form>
  );
};

InputForm.protoTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default InputForm;