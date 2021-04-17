import React from 'react';
import PropTypes from 'prop-types';
import './Contacts.css';

const Contacts = ({ contacts }) => {
  return (
    <section className="Contacts">
      <ul className="ContactsList">
        {contacts.map(({ id, name }) => (
          <li className="Item" key={id}>
            <span>{name}</span>
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
    }),
  ).isRequired,
};

export default Contacts;
