import React from 'react'

import './Card.css'

const Card = ({value, group, children, clicked, selected}) => {

  const className = selected === value
    ? 'Card__header Card__header--active'
    : 'Card__header'

  return (
    <div className="Card">
      <div onClick={() => clicked(value, group)} className={className}>
        <h3 className="Card__title">{value}</h3>
      </div>
      <div className="Card__body">{children}</div>
    </div>
  )
}

export default Card