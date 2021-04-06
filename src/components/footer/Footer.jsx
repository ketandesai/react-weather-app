import React from 'react'
import { FaHeart, FaReact } from 'react-icons/fa'
import moment from 'moment-timezone'
import { selectTheme } from '../../reducers/themeSlice'
import { useSelector } from 'react-redux'
import TextLink from '../styles/TextLink'
import styled from 'styled-components/macro'

const Wrapper = styled.footer`
  grid-area: var(--grid-area, footer);
  text-align: var(--text-align, center);
  padding: var(--text-align, 8px);
  background-color: var(--color, white);
  border: var(--border, 1px solid blue);
  border-radius: var(--border-radius, 6px);
  box-shadow: var(--box-shadow, 0px 2px 6px rgba(0, 0, 0, 0.25));
  margin-top: auto;
`

export const Footer = () => {
  const theme = useSelector(selectTheme)

  return (
    <Wrapper>
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
