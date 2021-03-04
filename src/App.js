import React from 'react'
import './App.css'
import { WeatherPage } from './components/weather/WeatherPage'
import { Layout } from './components/layout/Layout'
import { GlobalStyles } from './components/styles/GlobalStyles'
import { selectTheme } from './reducers/themeSlice'
import { useSelector } from 'react-redux'
import { Footer } from './components/footer/Footer'
import Sidebar from './components/sidebar/Sidebar'
import Header from './components/header/Header'
import SearchBar from './components/search/SearchBar'
import { GridLayout } from './components/layout/GridLayout'
import Main from './components/main/Main'

function App() {
  const theme = useSelector(selectTheme)
  return (
    <>
      <GlobalStyles />
      <GridLayout>
        <Header />
        <SearchBar />
        <Main />
        <Sidebar />
        <Footer />
      </GridLayout>
    </>
  )
}

export default App
