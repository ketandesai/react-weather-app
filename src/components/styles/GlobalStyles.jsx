import { createGlobalStyle } from 'styled-components'

// Create a `GlobalStyles` component.
// I usually already have this, to include a CSS
// reset, set border-box, and other global concerns.
export const GlobalStyles = createGlobalStyle`
  html {
    --color-text: black;
    --color-background: white;
    --color-primary: rebeccapurple;

    --font-size-small: 10px;
    --font-size-medium: 12px;
    
    @media (min-width: 1024px) {
      --font-size-small: 21px;
      --font-size-medium: 24px;
    }
  }
`
