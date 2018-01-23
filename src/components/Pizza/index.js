import React from 'react'

import './Pizza.css'

const Pizza = ({size, crust, selectedPart}) => {

  const className = selectedPart === ''
    ? 'Pizza'
    : `Pizza selected--${selectedPart}`

  
  return (
    <ul className={className}>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  )
}

export default Pizza