import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import App from './components/App'
import RootReducer from './reducers'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/sagas'

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    RootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware)
  )
  sagaMiddleware.run(rootSaga)
  return store
}

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('app')
)
