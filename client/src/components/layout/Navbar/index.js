import React from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
  return (
    <div>
      <h1>
        <i className={icon} />
        {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  title: string.isRequired,
  icon: string,
};

Navbar.defaultProps = {
  title: 'Contact / Interview / Tracker',
  icon: 'fal fa-address-card',
};

export default Navbar;
