import { createStore, compose, applyMiddleware } from 'redux'
import reducer from './reducers'

import { setPizzaSize } from './reducers'

const persistedState = {
  myState: ''
}

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

    const enhancer = composeEnhancers(
     
      // other store enhancers if any
    );

const store = createStore(
  reducer,
  enhancer
)

console.log(store.getState());

export default store