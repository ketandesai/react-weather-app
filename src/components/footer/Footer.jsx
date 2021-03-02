import React from 'react'
import { FaHeart, FaReact } from 'react-icons/fa'
import moment from 'moment-timezone'
import { selectTheme } from '../../reducers/themeSlice'
import { useSelector } from 'react-redux'
import classes from './footer.module.css'
import styled from 'styled-components'

const HeartSpan = styled.span`
  color: #ed2324;
  font-size: 1rem;
`

const ReactSpan = styled(HeartSpan)`
  color: #2acef7;
`

export const Footer = () => {
  const theme = useSelector(selectTheme)

  return (
    <div class="item footer">
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
        <a
          className={`link z-0 hover:text-${theme}`}
          href="https://github.com/ketandesai/weather-app"
          target="_blank"
          rel="noreferrer noopener"
        >
          Ketan Desai
        </a>
      </p>
    </div>
  )
}
