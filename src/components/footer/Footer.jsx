import React from 'react'
import { FaHeart, FaReact } from 'react-icons/fa'
import moment from 'moment-timezone'
import { selectTheme } from '../../reducers/themeSlice'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Wrapper } from '../styles/Wrapper'
import TextLink from '../styles/TextLink'

export const Footer = () => {
  const theme = useSelector(selectTheme)

  return (
    <Wrapper
      as="footer"
      style={{
        '--grid-area': 'footer',
        '--text-align': 'center',
      }}
    >
      <div>
        <p>
          Made with{' '}
          <HeartSpan title="Love" role="img" aria-label="Love">
            <FaHeart />
          </HeartSpan>{' '}
          using{' '}
          <ReactSpan title="React" role="img" aria-label="React">
            <FaReact />
          </ReactSpan>
        </p>
      </div>
      <p className="mx-auto text-center text-sm">
        &copy; {moment().format('YYYY')}{' '}
        <TextLink
          className={`link z-0 hover:text-${theme}`}
          href="https://github.com/ketandesai/weather-app"
          target="_blank"
          rel="noreferrer noopener"
        >
          Ketan Desai
        </TextLink>
      </p>
    </Wrapper>
  )
}

const HeartSpan = styled.span`
  color: #ed2324;
  font-size: 1rem;
`

const ReactSpan = styled(HeartSpan)`
  color: #2acef7;
`
