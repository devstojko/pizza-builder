import React, { Component } from 'react'
import './App.css'
import '../../assets/pizza-bck.jpg'
import { Provider } from 'react-redux'
import store from '../../store'

import Navigation from '../Navigation'
import PizzaBuilder from '../../containers/PizzaBuilder'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Navigation />
          <PizzaBuilder />     
        </div>
      </Provider>
    );
  }
}

export default App
