import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './styles/index.css'
import App from './components/App'
import rootReducer from './state/reducers'

const store = createStore(
  rootReducer,
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)