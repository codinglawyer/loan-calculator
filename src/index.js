import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import App from './components/App'
import RootReducer from './reducers'
import { Provider } from 'react-redux'
import {fetchDataRequest} from './actions/index'



const configureStore = () => {
  const store = createStore(
    RootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
  return store
}

let store = configureStore()

const unsubscribe = store.subscribe(() => console.log(store.getState()))

store.dispatch(fetchDataRequest())


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
