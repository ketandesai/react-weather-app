import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import './App.css'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { WeatherPage } from './components/weather/WeatherPage'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <WeatherPage />
              </>
            )}
          />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
