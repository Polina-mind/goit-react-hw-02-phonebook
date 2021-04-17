import React from 'react';
import PropTypes from 'prop-types';
import './InputForm.css';

const InputForm = ({ onInputName }) => {
  return (
    <form className="Form">
      <label className="Label">
        Name
        <input
          className="Input"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <button className="Button" type="submit" onClick={onInputName}>
        Add contact
      </button>
    </form>
  );
};

// InputForm.protoTypes = {
//   props: PropTypes.string.isRequired,
// };

export default InputForm;
