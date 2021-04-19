import React from 'react';
import PropTypes from 'prop-types';
import './Contacts.css';

const Contacts = ({ contacts }) => {
  return (
    <section className="Contacts">
      <ul className="ContactsList">
        {contacts.map(({ id, name, number }) => (
          <li className="Item" key={id}>
            <span className="Name">{name}:</span>
            <span>{number}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Contacts.protoTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Contacts;
