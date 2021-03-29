import React, { Fragment } from 'react';
import { object } from 'prop-types';

const ContactItem = ({ contact }) => {
  const { id, name, email, type, phone } = contact;
  return (
    <Fragment>
      <h3>
        {name} <span>{type}</span>
      </h3>
      <ul>
        {email && (
          <li>
            <i className="fal fa-envelope-open" /> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-mobile-android-alt" /> {phone}
          </li>
        )}
      </ul>
      <p>
        <button>Edit</button>
        <button>Delete</button>
      </p>
    </Fragment>
  );
};

ContactItem.propTypes = { contact: object.isRequired };

export default ContactItem;
