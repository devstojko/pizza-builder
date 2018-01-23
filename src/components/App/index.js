import React, { Component } from 'react'
import './App.css'

import '../../assets/pizza-bck.jpg'

import Navigation from '../Navigation'
import PizzaBuilder from '../../containers/PizzaBuilder'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation />
        <PizzaBuilder />     
      </div>
    );
  }
}

export default App
