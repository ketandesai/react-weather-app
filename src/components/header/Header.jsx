import React from 'react'
import styled from 'styled-components/macro'
import GitHubLogo from '../logo/GitHubLogo'
import { DEVICES, WEIGHTS } from '../styles/constants'
import ThemeToggle from '../toggle/ThemeToggle'

export default function Header() {
  return (
    <Wrapper>
      <GitHubLogo />
      <TitleWrapper>React Weather</TitleWrapper>
      <ThemeToggle />
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  text-align: var(--text-align, left);
  padding: var(--text-align, 8px);
  padding-bottom: 30px;

  /* For tablets and larger devices */
  @media (min-width: ${DEVICES.tablet}) {
    justify-content: space-between;
  }
`

const TitleWrapper = styled.h1`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.bold};
`
