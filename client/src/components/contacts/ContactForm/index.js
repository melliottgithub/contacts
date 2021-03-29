import React, { useState } from 'react';
import PropTypes from 'prop-types';

const formElements = [
  {
    inputType : "text",
    inputName : "name",
    placeholder : "enter your name",
  }
]

const ContactForm = (props) => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  });
  const { name, email, phone, type } = contact;
  return (
    <form>
      <h2>Add Contact</h2>
      <label htmlFor="name"></label>
      <input type="text"/>
    </form>
  );
};

ContactForm.propTypes = {};

export default ContactForm;
