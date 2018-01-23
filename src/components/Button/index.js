import React from 'react';

import './Button.css';

const Button = ({clicked, value, title, group, selected}) => {

  const className = selected === value || selected.includes(value) ? 'selected' : null;


  return (
    <button className={className} onClick={() => clicked(group, value)}>{title}</button>
  )
}

export default Button;