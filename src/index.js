import React from 'react'
import ReactDOM from 'react-dom/client'
import { applyMiddleware, createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import { thunk } from 'redux-thunk'

import 'normalize.css'
import './index.scss'
import rootReducer from './store/reducers'
import App from './components/app'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
