import styled from 'styled-components'

export const GridLayout = styled.div`
  display: grid;
  height: 100vh;
  gap: 4px;
  margin: 10px;
  grid-template-rows: auto auto 1fr auto auto;
  grid-template-areas:
    'header'
    'search'
    'main'
    'aside'
    'footer';
`

/*export const Nav = styled.nav`
  grid-area: nav;
`

export const Search = styled.div`
  grid-area: search;
`

export const Aside = styled.aside`
  grid-area: aside;
`

export const Main = styled.main`
  grid-area: main;
`

export const Footer = styled.footer`
  grid-area: footer;
  text-align: center;
`
*/
