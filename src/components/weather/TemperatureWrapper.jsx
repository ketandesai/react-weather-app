import React from 'react'
import styled from 'styled-components/macro'
import Spacer from '../spacer/Spacer'
import Temperature from './Temperature'
import { WEIGHTS, QUERIES } from '../styles/constants'

function TemperatureWrapper({ data, showSymbol }) {
  return (
    <Wrapper>
      <BoldFont>
        <Temperature degrees={data?.temp.max} showSymbol={showSymbol} />
      </BoldFont>
      <Spacer size={2} />
      <BoldFont>
        <Temperature degrees={data?.temp.min} showSymbol={showSymbol} />
      </BoldFont>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;

  /* For tablets and larger devices */
  @media ${QUERIES.tabletAndUp} {
    gap: 4px;
    font-size: 0.9rem;
    width: 100%;
  }
`

const BoldFont = styled.span`
  font-weight: ${WEIGHTS.bold};
`

export default TemperatureWrapper
