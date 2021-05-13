import styled from 'styled-components/macro'
import { QUERIES } from '../styles/constants'

const AsideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
    justify-content: space-between;
  }
`

const TextLink = styled.a`
  color: var(--color-primary);
  font-weight: var(--font-weight-medium);

  ${AsideWrapper} & {
    color: var(--color-text);
    font-weight: var(--font-weight-bold);
  }
`
export default TextLink
