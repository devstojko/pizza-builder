import { combineReducers } from 'redux'

import { 
  SET_PIZZA_SIZE,
  SET_PIZZA_CRUST,
  SET_PIZZA_PART,
  SET_TOPPING
} from '../constants'


const initState = {
  selectedSize: '',
  selectedCrust: '',
  selectedSlice: '',
  toppings: {
    topLeft: [],
    topRight: [],
    bottomLeft: [],
    bottomRight: [],
    leftHalf: [],
    whole: [],
    rightHalf: []
  }
}

// reducers
const pizza = (state = '', action) => {

  switch (action.type) {
    case SET_PIZZA_SIZE:
    case SET_PIZZA_CRUST:
    case SET_PIZZA_PART:
      return {
        ...state,
        [action.payload.group]: action.payload.value
      }
    
    // case SET_TOPPING:
    //   return {
    //     ...state,
    //     [group]: {
    //       ...state.pizzaToppings,
    //       [state.pizzaPart]: [...state.pizzaToppings[state.pizzaPart], value]
    //   }
    // }
    default:
      return state
  }
}

// const updatedToppings = pizzaToppings[pizzaPart].includes(value)
//       ? pizzaToppings[pizzaPart].filter(topping => topping !== value)
//       : [...pizzaToppings[pizzaPart], value]


const rootReducer = combineReducers({
  pizza,
})

export default rootReducer