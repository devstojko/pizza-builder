// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { 
  setPizzaSize,
  setPizzaCrust,
  setPizzaPart,
  setTopping
} from '../../actions'

import Layout from '../../components/Layout'
import Container from '../../components/Layout/Container'
import Pizza from '../../components/Pizza'
import ButtonGroup from '../../components/ButtonGroup'
import Button from '../../components/Button'
import Card from '../../components/Card'

const pizza = {
  size: {
    group: 'pizzaSize',
    action: 'setPizzaSize',
    values: ['xl', 'large', 'medium', 'small']
  },
  crust: {
    group: 'pizzaCrust',
    action: 'setPizzaCrust',
    values: ['deepCrust', 'thinCrust', 'plainCrust', 'thin']
  }
}

const pizzaParts = [
  'topLeft',
  'topRight',
  'bottomLeft',
  'bottomRight',
  'leftHalf',
  'whole',
  'rightHalf'
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

type Props = { /* ... */ }

type State = {
  pizzaSize: string,
  pizzaCrust: string,
  pizzaPart: string,
  pizzaPrice: {
    [string]: number
  },
  pizzaToppings: {
    topLeft: Array<string>,
    topRight: Array<string>,
    bottomLeft: Array<string>,
    bottomRight: Array<string>,
    leftHalf: Array<string>,
    rightHalf: Array<string>,
    whole: Array<string>
  }
}

class PizzaBuilder extends Component<Props, State> {

  state = {
    pizzaSize: 'xl',
    pizzaCrust: 'thinCrust',
    pizzaPart: 'whole',
    pizzaPrice: {
      'xl': 30,
      'large': 20,
      'medium': 10,
      'small': 5
    },
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

  handleButtonClick = (value: string, group: string) => {
    this.setState({[group]: value})
  }

  handleToppingSelection = (value: string, group: string) => {
    const { pizzaPart, pizzaToppings } = this.state;

    const updatedToppings = pizzaToppings[pizzaPart].includes(value)
      ? pizzaToppings[pizzaPart].filter(topping => topping !== value)
      : [...pizzaToppings[pizzaPart], value]

    this.setState({
      pizzaToppings: {
        ...pizzaToppings,
        [pizzaPart]: updatedToppings
      }
    })
  }

  handleToppingRemove = (value: string, topping: string) => {
    const { pizzaToppings, pizzaPart } = this.state;

    if (value === pizzaPart) {
      const updatedToppings = pizzaToppings[pizzaPart].filter(item => {
        return item !== topping;
      })
  
      this.setState({
        pizzaToppings: {
          ...pizzaToppings,
          [pizzaPart]: updatedToppings
        }
      })
    }   
  }

  render () {

    const {
      pizzaSize,
      pizzaCrust,
      pizzaPart,
      pizzaToppings,
      pizzaPrice 
    } = this.state;

    return (
      <div>

       <Container>
        {
          Object.values(pizza).map((item: any, i) => {
            return (
              <ButtonGroup key={i} title={item.group}>
                {
                  item.values.map((val: any) => {
                    return (
                      <Button
                        key={val}
                        clicked={this.props[item.action]}
                        group={item.group}
                        selected={this.props.pizza[item.group]}
                        value={val}
                        title={val}
                      />
                    )

                  })
                }
              </ButtonGroup>
            )
          })
        }
         <h2 style={{ color: 'white', textAlign: 'center' }}>Price: {pizzaPrice[this.props.pizzaSize]}$</h2>
       </Container>

       <Container>
        <Layout>
            
            {
              pizzaParts.map(part => {
                return (
                  <Card
                    key={part}
                    clicked={this.props.setPizzaPart}
                    group='pizzaPart'
                    value={part}
                    selected={this.props.pizza['pizzaPart']}
                    toppings={pizzaToppings[part]}
                    onToppingRemove={this.handleToppingRemove}
                  />
                )
              })
            }
          
          <Pizza
            selectedPart={this.props.pizza['pizzaPart']}
            toppings={pizzaToppings}
            onPartClick={this.props.setPizzaPart}
          />
          </Layout>
       </Container>
      
        <Container>          
          <ButtonGroup title="Pizza Toppings">
            {
              toppings.map(topping => {
                return (
                  <Button
                    key={topping}
                    clicked={this.props.setTopping}
                    group="pizzaToppings"
                    title={topping}
                    selected={pizzaToppings[pizzaPart]}
                    value={topping}
                  />
                )
              })
            }
          </ButtonGroup>

          {/* <ButtonGroup title="Pizza Sauce">
            <Button title="plain" />
            <Button title="White Sauce"
             />
          </ButtonGroup>

          <ButtonGroup>
            <Button title="Cancel" />
            <Button title="Delete This Pizza" />
          </ButtonGroup> */}
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => ({ 
  pizza: state.pizza,
})

const mapDispatchToProps = dispatch => ({
  setPizzaSize(value, group) {
    dispatch(setPizzaSize(value, group))
  },
  setPizzaCrust(value, group) {
    dispatch(setPizzaSize(value, group))
  },
  setPizzaPart(value, group) {
    dispatch(setPizzaPart(value, group))
  },
  setTopping(value, group) {
    dispatch(setTopping(value, group))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PizzaBuilder)