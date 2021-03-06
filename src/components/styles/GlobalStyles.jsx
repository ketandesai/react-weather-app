import { createGlobalStyle, css } from 'styled-components'
import { COLORS, DEVICES } from './constants'

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
    
    /* For tablets and larger devices */
    @media (min-width: ${DEVICES.tablet}) {
      --font-size-small: 21px;
      --font-size-medium: 24px;

      .current.container {
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
    }

    .react-toggle {
      touch-action: pan-x;
      display: inline-block;
      position: relative;
      cursor: pointer;
      background-color: transparent;
      border: 0;
      padding: 0;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-tap-highlight-color: transparent;
    }

    .react-toggle-screenreader-only {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    .react-toggle--disabled {
      cursor: not-allowed;
      opacity: 0.5;
      -webkit-transition: opacity 0.25s;
      transition: opacity 0.25s;
    }

    .react-toggle-track {
      width: 58px;
      height: 24px;
      padding: 0ch;
      border-radius: 30px;
      background-color: #4d4d4d;
      -webkit-transition: all 0.2s ease;
      -moz-transition: all 0.2s ease;
      transition: all 0.2s ease;
    }

    .react-toggle-track-check {
      position: absolute;
      width: 20px;
      height: 60px;
      top: 0px;
      bottom: 0px;
      margin-top: auto;
      margin-bottom: auto;
      line-height: 0;
      left: 4px;
      opacity: 0;
      -webkit-transition: opacity 0.25s ease;
      -moz-transition: opacity 0.25s ease;
      transition: opacity 0.25s ease;
    }

    .react-toggle--checked .react-toggle-track-check {
      opacity: 1;
      -webkit-transition: opacity 0.25s ease;
      -moz-transition: opacity 0.25s ease;
      transition: opacity 0.25s ease;
    }

    .react-toggle-track-x {
      position: absolute;
      width: 20px;
      height: 60px;
      top: 0px;
      bottom: 0px;
      margin-top: auto;
      margin-bottom: auto;
      line-height: 0;
      right: 8px;
      opacity: 1;
      -webkit-transition: opacity 0.25s ease;
      -moz-transition: opacity 0.25s ease;
      transition: opacity 0.25s ease;
    }

    .react-toggle--checked .react-toggle-track-x {
      opacity: 0;
    }

    .react-toggle-thumb {
      transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
      position: absolute;
      top: 2px;
      left: 4px;
      right: 4px;
      bottom: 1px;
      width: 20px;
      height: 20px;
      border: 1px solid hsla(0, 0%, 100%, 0.05);
      border-radius: 50%;
      background-color: #f8f9f5;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-transition: all 0.25s ease;
      -moz-transition: all 0.25s ease;
      transition: all 25s ease;
    }

    .react-toggle--checked .react-toggle-thumb {
      left: 36px;
      border-color: #333;
    }

}
`
