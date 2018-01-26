// @flow

import React from 'react'

import './Card.css'

const Card = ({
  value,
  group,
  toppings,
  clicked,
  selected,
  onToppingRemove
}: {
  value: string,
  group: string,
  toppings: Array<string>,
  clicked: (value: string, group: string) => void,
  selected: string,
  onToppingRemove: (value: string, group: string) => void,
}) => {

  const className = selected === value
    ? 'Card__header Card__header--active'
    : 'Card__header'

  return (
    <div className="Card">
      <div onClick={() => clicked(value, group)} className={className}>
        <h3 className="Card__title">{value}</h3>
      </div>
      <div className="Card__body">
        
       
        {
          toppings.map(topping => {
            return (
              <div
                className="Card__body-item"
                key={topping}>
                <span>{topping}</span>
                <span onClick={() => onToppingRemove(value, topping)}>X</span>
              </div> 
            )
            
          })
        }
        
      </div>
    </div>
  )
}

export default Card