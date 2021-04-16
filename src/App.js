import React from 'react'
import styled, { ThemeProvider } from 'styled-components/macro'
import { GlobalStyles } from './components/styles/GlobalStyles'

import { useSelector } from 'react-redux'
import { selectTheme } from './reducers/themeSlice'

import Footer from './components/footer/Footer'
import Sidebar from './components/sidebar/Sidebar'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Autocompleter from './components/search/Autocompleter'
import { COLORS } from './components/styles/constants'

export const STYLES = {
  light: {
    '--color': COLORS.darkblue[100],
    '--background': COLORS.palegreen,
    mainBackground: COLORS.gray[400],
  },
  dark: {
    '--color': COLORS.white,
    '--background': COLORS.darkblue[300],
    mainBackground: COLORS.darkblue[500],
  },
}

function App() {
  const theme = useSelector(selectTheme)
  const style = STYLES[theme]
  return (
    <>
      <ThemeProvider theme={{ background: style.mainBackground }}>
        <GlobalStyles />

        <Wrapper style={style}>
          <Header />
          <Section>
            <Autocompleter />
            <Main theme={theme} />
            <Sidebar theme={theme} />
          </Section>
          <Footer theme={theme} />
        </Wrapper>
      </ThemeProvider>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: var(--box-shadow, 0px 2px 6px rgba(0, 0, 0, 0.25));
  color: var(--color);
  background: var(--background);
`

const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
export default App
