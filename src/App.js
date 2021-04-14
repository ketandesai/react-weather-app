import React from 'react'
import { GlobalStyles } from './components/styles/GlobalStyles'
import { selectTheme } from './reducers/themeSlice'
import { useSelector } from 'react-redux'
import { Footer } from './components/footer/Footer'
import Sidebar from './components/sidebar/Sidebar'
import Header from './components/header/Header'
//import SearchBar from './components/search/SearchBar'
import Main from './components/main/Main'
import styled from 'styled-components/macro'
import Autocompleter from './components/search/Autocompleter'
import { COLORS } from './components/styles/constants'

function App() {
  const theme = useSelector(selectTheme)
  return (
    <>
      <GlobalStyles />

      <Wrapper>
        <Header />
        <Section>
          <Autocompleter />
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
  box-shadow: var(--box-shadow, 0px 2px 6px rgba(0, 0, 0, 0.25));
  color: ${COLORS.darkblue[100]};
  background: ${COLORS.palegreen};
  //background: ${COLORS.darkblue[300]};
`

const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
export default App
