npm install --save redux
// or, if using yarn
yarn add redux


npm install --save react-redux
// or, if using yarn
yarn add react-redux

...
import { createStore } from 'redux';
...

...
// setup action
// action is function with return value object. usually has a property type and payload
// the `type` property contains a string corresponding to the case in the reducer
// the `payload` property usually contains data to throw to the reducer
const actionINC = () => {
    return {
      type: 'INCREMENT',
      payload: null
    }
  }
...

...
// setup reducer
const initialState = {
    number: 0
  }
  function counter(state = initialState, action) {
    switch (action.type) {
      case 'INCREMENT':
        return {
          number: state.number + 1
        }
      case 'DECREMENT':
        return {
          number: state.number - 1
        }
      default:
        return state
    }
  }
  ...

...
  // initial store 
let store = createStore(counter)
...

// listen value global state, with `store.subscribe`
// global state can be access to `store.getState()`
store.subscribe(() => {
    console.log(store.getState().number))
  }

  //functional component
const App = () => {
    return (
      <div>
        <h1>COUNTER</h1>
        <button onClick={actionINC}>INC</button>
      </div>
    )
  }
  
  export default App;


  npm i --save redux-logger


  import logger from 'redux-logger'

export {
  logger
}

npm i redux-promise-middleware --save