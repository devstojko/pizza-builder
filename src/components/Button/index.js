// @flow

import React from 'react';

import './Button.css';

const Button = ({
  clicked,
  value,
  title,
  group,
  selected
}: {
  clicked: (value: string, group: string) => void,
  value: string,
  title: string,
  group: string,
  selected?: Array<string>
}) => {

  let className = selected === value ? 'selected' : null

  if (typeof selected === 'object') {
    className = selected.includes(value) ? 'selected' : null
  }

  return (
    <button className={className} onClick={() => clicked(value, group)}>{title}</button>
  )
}

export default Button;