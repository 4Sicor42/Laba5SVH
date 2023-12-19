import React from 'react';

const LinkButton = ({ hovered, setHovered }) => {
  return (
    <a
      href="/Contacts"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered ? 'Узнать больше!' : 'Узнать больше'}
    </a>
  );
};

export default LinkButton;
