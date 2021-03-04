import styled from 'styled-components'

export const Wrapper = styled.div`
  grid-area: var(--grid-area);
  text-align: var(--text-align, left);
  padding: var(--text-align, 8px);
  background-color: var(--color, white);
  border: var(--border, 1px solid blue);
  border-radius: var(--border-radius, 6px);
  box-shadow: var(--box-shadow, 0px 2px 6px rgba(0, 0, 0, 0.25));
`
