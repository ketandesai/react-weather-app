import React from 'react'
import { FaHeart, FaReact } from 'react-icons/fa'
import moment from 'moment-timezone'
import { selectTheme } from '../../reducers/themeSlice'
import { useSelector } from 'react-redux'
import TextLink from '../styles/TextLink'
import styled from 'styled-components/macro'
import ReactGA from 'react-ga'

export default function Footer() {
  const theme = useSelector(selectTheme)

  const emitGA = (action, label) => {
    ReactGA.event({
      category: 'Footer Links',
      action,
      label,
    })
  }

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
          onClick={() => emitGA('Visit Github', 'Github Link')}
        >
          Ketan Desai
        </TextLink>
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  grid-area: var(--grid-area, footer);
  text-align: var(--text-align, center);
  padding: var(--text-align, 8px);
  border-radius: var(--border-radius, 6px);
  margin-top: auto;
`

const HeartSpan = styled.span`
  color: #ed2324;
  font-size: 1rem;
`

const ReactSpan = styled(HeartSpan)`
  color: #2acef7;
`
