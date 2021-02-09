import React from 'react'
import { useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import './App.css'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { selectTheme } from './reducers/themeSlice'
import { WeatherPage } from './components/weather/WeatherPage'
import background from './images/backgrounds/daytime.jpg'

function App() {
  const theme = useSelector(selectTheme)
  return (
    <Router>
      <div style={{ backgroundImage: `url(${background})` }}>
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
