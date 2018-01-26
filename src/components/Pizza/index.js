// @flow

import React from 'react'

import './Pizza.css'
import PizzaTopping from './PizzaTopping'
import '../../assets/pizzaPart.png'

const Pizza = ({
    selectedPart,
    toppings,
    onPartClick
  }: {
    selectedPart: string,
    toppings: {
      [string]: Array<string>
    },
    onPartClick: (string, string) => void
  }) => {

  const className = selectedPart === ''
    ? 'Pizza'
    : `Pizza selected--${selectedPart}`

  
  return (
    <ul className={className}>
      <li onClick={() => onPartClick('topLeft', 'pizzaPart')}>
        {
          toppings.topLeft.map((topping: string) => {
            return <PizzaTopping key={topping} type={topping} />
          })
        }
      </li>
      <li onClick={() => onPartClick('topRight', 'pizzaPart')}>
      {
          toppings.topRight.map(topping => {
            return <PizzaTopping key={topping} type={topping} />
          })
        }
      </li>
      <li onClick={() => onPartClick('bottomLeft', 'pizzaPart')}>
      {
          toppings.bottomLeft.map(topping => {
            return <PizzaTopping key={topping} type={topping} />
          })
        }
      </li>
      <li onClick={() => onPartClick('bottomRight', 'pizzaPart')}>
      {
          toppings.bottomRight.map(topping => {
            return <PizzaTopping key={topping} type={topping} />
          })
        }
      </li>
    </ul>
  )
}

export default Pizza