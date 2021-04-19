import React from 'react'
import styled from 'styled-components/macro'
import GitHubLogo from '../logo/GitHubLogo'
import { DEVICES, WEIGHTS } from '../styles/constants'
import ThemeToggle from '../toggle/ThemeToggle'
import FavoritesDrawer from '../favorites/FavoritesDrawer'

export default function Header() {
  return (
    <Wrapper>
      <GitHubLogo />
      <NavWrapper>
        <FavoritesDrawer />
        <TitleWrapper>React Weather</TitleWrapper>
        <ThemeToggle />
      </NavWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: var(--text-align, left);
  padding-bottom: 32px;

  /* For tablets and larger devices */
  @media (min-width: ${DEVICES.tablet}) {
    justify-content: space-between;
  }
`

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 56px;
  margin-left: 12px;
  margin-right: 12px;
`

const TitleWrapper = styled.h1`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.bold};
`
