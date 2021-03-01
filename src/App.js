import React from 'react'
import './App.css'
import { WeatherPage } from './components/weather/WeatherPage'
import { Layout } from './components/layout/Layout'
import { GlobalStyles } from './components/styles/GlobalStyles'
import { selectTheme } from './reducers/themeSlice'
import { useSelector } from 'react-redux'

function App() {
  const theme = useSelector(selectTheme)
  console.log(`theme ${theme}`)
  return (
    <div className={theme}>
      <Layout>
        <WeatherPage />
      </Layout>
    </div>
  )
}

export default App
