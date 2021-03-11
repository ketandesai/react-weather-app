import React from 'react'
import { Wrapper } from '../styles/Wrapper'
import TextLink from '../styles/TextLink'

const Sidebar = () => {
  return (
    <Wrapper
      as="aside"
      style={{
        '--gridarea': 'aside',
        '--text-align': 'left',
        '--color-text': 'green',
      }}
    >
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

export default Sidebar
