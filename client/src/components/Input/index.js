import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, placeholder, name, value }) => {
  return (
    <input
      value={value}
      name={name}
      type={type}
      placeholder={placeholder}
    ></input>
  );
};

Input.propTypes = {};

export default Input;
