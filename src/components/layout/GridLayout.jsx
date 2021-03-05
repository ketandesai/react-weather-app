import styled from 'styled-components'
import { DEVICES } from '../styles/constants'

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

  @media (min-width: ${DEVICES.tablet}) {
    grid-template-areas:
      'header header header header'
      'search search search search'
      'aside main main main'
      'footer footer footer footer';
    grid-template-rows: auto auto 1fr auto;
  }
`
