import React from 'react'
import './App.css'
import { WeatherPage } from './components/weather/WeatherPage'
import { Layout } from './components/layout/Layout'
import { GlobalStyles } from './components/styles/GlobalStyles'

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <WeatherPage />
      </Layout>
    </>
  )
}

export default App
