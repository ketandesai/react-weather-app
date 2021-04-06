import React from 'react'
import TextLink from '../styles/TextLink'
import styled from 'styled-components/macro'

const Sidebar = () => {
  return (
    <Wrapper>
      Favorites aaa
      <ul>
        <li>Charlotte, NC</li>
        <li>Miami, FL</li>
        <li>Atlanta, GA</li>
        <li>
          <TextLink href="">Chicago, IL</TextLink>
        </li>
      </ul>
    </Wrapper>
  )
}

export const Wrapper = styled.aside`
  grid-area: var(--grid-area, aside);
  text-align: var(--text-align, left);
  padding: var(--text-align, 8px);
  background-color: var(--color, white);
  border: var(--border, 1px solid blue);
  border-radius: var(--border-radius, 6px);
  box-shadow: var(--box-shadow, 0px 2px 6px rgba(0, 0, 0, 0.25));
  height: auto;
`

export default Sidebar
