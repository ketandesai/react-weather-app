import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
//import './api/server'
import App from './App'
import store from './app/store'
import { fetchLocation } from './reducers/locationSlice'

store.dispatch(fetchLocation())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
