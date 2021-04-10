import React from 'react'
import { GlobalStyles } from './components/styles/GlobalStyles'
import { selectTheme } from './reducers/themeSlice'
import { useSelector } from 'react-redux'
import { Footer } from './components/footer/Footer'
import Sidebar from './components/sidebar/Sidebar'
import Header from './components/header/Header'
import SearchBar from './components/search/SearchBar'
import Main from './components/main/Main'
import styled from 'styled-components/macro'

function App() {
  const theme = useSelector(selectTheme)
  return (
    <>
      <GlobalStyles />

      <Wrapper>
        <Header />
        <Section>
          <SearchBar />
          <Main />
          <Sidebar />
        </Section>
        <Footer />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
export default App
