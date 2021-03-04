import { Wrapper as AsideWrapper } from './Wrapper'
import styled from 'styled-components'

const TextLink = styled.a`
  color: var(--color-primary);
  font-weight: var(--font-weight-medium);

  ${AsideWrapper} & {
    color: var(--color-text);
    font-weight: var(--font-weight-bold);
  }
`
export default TextLink
