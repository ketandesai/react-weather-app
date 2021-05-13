import React from 'react'
import styled from 'styled-components/macro'

import { QUERIES } from '../styles/constants'

import OpacityIcon from '@material-ui/icons/Opacity'

import { Accumulation } from './Accumulation'
import Spacer from '../spacer/Spacer'

export default function Precipitation({ data, color, daily }) {
  const percentage =
    data?.pop > 0 ? (
      <span>
        <OpacityIcon color={color} fontSize="small" />
        {Math.round(data?.pop * 100)} %
      </span>
    ) : (
      <Spacer size={12} />
    )

  const accumulation = daily ? (
    <Accumulation rain={data?.rain} snow={data?.snow} />
  ) : (
    <Accumulation
      rain={data?.rain ? data?.rain['1h'] : 0}
      snow={data?.snow ? data?.snow['1h'] : 0}
    />
  )
  return (
    <Wrapper>
      {percentage}
      <span>{accumulation}</span>
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
