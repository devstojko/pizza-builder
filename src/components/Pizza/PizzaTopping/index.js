// @flow

import React, { Component } from 'react'

import './PizzaTopping.css'

import '../../../assets/olives.png'
import '../../../assets/mashrooms.png'

const PizzaTopping = ({
  type
}: {
  type: string
}) => {



  return <span className={type}></span>
}

export default PizzaTopping