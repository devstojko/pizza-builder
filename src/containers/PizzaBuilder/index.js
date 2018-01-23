import React, { Component } from 'react'

import Pizza from '../../components/Pizza'
import ButtonGroup from '../../components/ButtonGroup'
import Button from '../../components/Button'
import Card from '../../components/Card'

const pizza = {
  size: {
    group: 'pizzaSize',
    values: ['xl', 'large', 'medium', 'small']
  },
  crust: {
    group: 'pizzaCrust',
    values: ['deepCrust', 'thinCrust', 'plainCrust', 'thin']
  }
}

const pizzaParts = [
  'topLeft',
  'topRight',
  'bottomLeft',
  'bottomRight',
  'leftHalf',
  'rightHalf',
  'whole'
]

const toppings = [
  'beef',
  'jalapeno',
  'sausage',
  'pepper',
  'olives',
  'pepperoni',
  'tomato',
  'onions',
  'mashroom'
]

export default class PizzaBuilder extends Component {

  state = {
    pizzaSize: 'xl',
    pizzaCrust: 'deepCrust',
    pizzaPart: 'whole',
    pizzaToppings: {
      topLeft: [],
      topRight: [],
      bottomLeft: [],
      bottomRight: [],
      leftHalf: [],
      rightHalf: [],
      whole: []
    }
  }

  handleButtonClick = (value, group) => {
    this.setState({[group]: value})
  }

  handleToppingSelection = (group, value) => {
    const { pizzaPart, pizzaToppings } = this.state;

    this.setState({
      pizzaToppings: {
        ...pizzaToppings,
        [pizzaPart]: [...pizzaToppings[pizzaPart], value]
      }
    })

  }


  render () {

    const { pizzaSize, pizzaCrust, pizzaPart, pizzaToppings } = this.state;

    return (
      <div>

        {
          Object.values(pizza).map(item => {
            return (
              <ButtonGroup title={item.group}>
                {
                  item.values.map(val => {
                    return <Button clicked={this.handleButtonClick} group={item.group} selected={this.state[item.group]} value={val} title={val} />

                  })
                }
              </ButtonGroup>
            )
          })
        }

        {
          pizzaParts.map(part => {
            return <Card clicked={this.handleButtonClick} group='pizzaPart' value={part} selected={pizzaPart}/>
          })
        }

        <Pizza size={pizzaSize} crust={pizzaCrust} selectedPart={pizzaPart}/>
      
        <h2>Price: $ 20.00</h2>


        <ButtonGroup title="Pizza Toppings">
          {
            toppings.map(topping => {
              return (
                <Button 
                  clicked={this.handleToppingSelection}
                  group="pizzaToppings"
                  title={topping}
                  selected={pizzaToppings[pizzaPart]}
                  value={topping}
                />
              )
            })
          }
        </ButtonGroup>

        <ButtonGroup title="Pizza Sauce">
          <Button title="plain" />
          <Button title="White Sauce" />
        </ButtonGroup>

        <ButtonGroup>
          <Button title="Cancel" />
          <Button title="Delete This Pizza" />
        </ButtonGroup>
      </div>
    )
  }
}