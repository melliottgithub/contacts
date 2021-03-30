import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../../Input';

const formElements = [
  {
    inputType: 'text',
    inputName: 'fName',
    placeholder: 'Name',
  },
  {
    inputType: 'text',
    inputName: 'lName',
    placeholder: 'Last Name',
  },
  {
    inputType: 'email',
    inputName: 'email',
    placeholder: 'Email',
  },
  {
    inputType: 'radio',
    inputName: 'email',
    // placeholder: 'Email',
    value: 'FullStack',
  },
];

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
      <ul>
        {formElements.map(({ value, inputName, inputType, placeholder }) => {
          if (inputType === 'radio'){

          }
            return (
              <li key={inputType}>
                <Input
                  value={value}
                  name={inputName}
                  placeholder={placeholder}
                  type={inputType}
                />
              </li>
            );
        })}
      </ul>
    </form>
  );
};

ContactForm.propTypes = {};

export default ContactForm;
