import { 
  SET_PIZZA_SIZE,
  SET_PIZZA_CRUST,
  SET_PIZZA_PART,
  SET_TOPPING
} from '../constants'

export const setPizzaSize = (value, group) => ({
  type: SET_PIZZA_SIZE,
  payload: {value, group}
})

export const setPizzaCrust = (value, group) => ({
  type: SET_PIZZA_CRUST,
  payload: {value, group}
})

export const setPizzaPart = (value, group) => ({
  type: SET_PIZZA_PART,
  payload: {value, group}
})

export const setTopping = (value, group) => ({
  type: SET_TOPPING,
  payload: {value, group}
})

