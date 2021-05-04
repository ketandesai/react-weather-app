import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './app/store'
import { fetchLocation } from './reducers/locationSlice'

import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'

import LogRocket from 'logrocket'
import setupLogRocketReact from 'logrocket-react'

// custom console message
console.clear()
console.log(
  `%c

lloHe   HelloH lloHelloHel  HelloH       loHell          oHello
lloHe   Hello  lloHelloHell HelloH       loHell         loHelloH
loH     ell   lloH    Hell   llo          Hel         lloH  loHe
loH     ell    loH           ll           He          llo    oHe
loH     ell    loHell        ll           He         ello    oHel
loHelloHell    loHello       ll           He         ello    oHel
loHel o ell    loHello       llo          Hel         llo    oHe
loH     ell    loH          ello    oH   oHel    ll   llo    oHe
loH     ell    loHe    ell   llo    oH    Hel    ll   lloH  loHe
lloHe   Hello  lloHell Hell HelloHelloH  loHelloHell    loHelloH
lloHe   Hello  lloHelloHell HelloHelloH  loHelloHell     oHello

%c Interested in the code behind this application? Well you're in luck - this application is open source! 
Come say hi, tell me what you're debugging, or if interested in the codebase, 
check out the repo on GitHub - https://github.com/ketandesai/react-weather-app`,
  'font-size: 1vmin',
  'margin-bottom: 5px; line-height: 1.5'
)

//after calling  LogRocket.init()
const APP_ID = process.env.REACT_APP_LOG_ROCKET_APP_ID
LogRocket.init(APP_ID)
setupLogRocketReact(LogRocket)
store.dispatch(fetchLocation())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
