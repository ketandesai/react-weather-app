import { createGlobalStyle, css } from 'styled-components'
import { COLORS, BREAKPOINTS } from './constants'

// Create a `GlobalStyles` component.
// I usually already have this, to include a CSS
// reset, set border-box, and other global concerns.
export const GlobalStyles = createGlobalStyle`
  html {
    --color-text:  ${(props) => (props.dark ? 'white' : COLORS.text)};
    --color-background:  ${(props) => (props.dark ? 'black' : 'snow')};
    --color-primary: ${COLORS.primary};

    * {
      box-sizing: border-box;
    }

    ul {
      padding-left: 1.5rem;
    }

    body {
      font-family: 'Poppins', sans-serif;
      margin: 0 auto;
      max-width: 1000px;
    }

    .height-50 {
      height: 50vh;
    }

    .alignleft {
      float: left;
    }

    .alignright {
      float: right;
    }

    --font-size-small: 10px;
    --font-size-medium: 12px;
    
    @media (min-width: ${BREAKPOINTS.tablet}) {
      --font-size-small: 21px;
      --font-size-medium: 24px;

      .current.container {
        grid-template-rows: auto auto;
      }

      .forecast.container {
        grid-template-areas:
        'hourly'
        'daily';
        grid-template-rows: auto auto;
      }

      .wrapper {
        grid-template-columns: auto auto;
      }

      .precipitation {
        text-align: left;
      }

      .temp {
        text-align: left;
      }

      .day.container {
        grid-template-areas: 'day1 day2 day3 day4 day5 day6 day7';
        grid-template-rows: 1fr;
      }

      .hour.container {
        grid-template-areas: 'hour1 hour2 hour3 hour4 hour5 hour6 hour7';
        grid-template-rows: 1fr;
      }
    }
}
`
