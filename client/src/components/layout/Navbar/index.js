import React from 'react';
import { string } from 'prop-types';

const Navbar = ({ title, icon }) => {
  return (
    <div>
      <h1 className={icon}>{title}</h1>
    </div>
  );
};

Navbar.propTypes = {
  title: string.isRequired,
  icon: string,
};
Navbar.defaultProps = {
  title: 'Contact Keeper',
  icon: 'fal fa-address-card',
};

export default Navbar;
