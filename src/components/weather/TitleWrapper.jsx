import React from 'react'
import styled from 'styled-components/macro'
import DateComponent from '../time/DateComponent'
import TimeComponent from '../time/TimeComponent'
import Image from '../image/Image'
import { DEVICES, WEIGHTS, GRADIENTS } from '../styles/constants'
import Spacer from '../spacer/Spacer'

export default function TitleWrapper({ date, icon, daily }) {
  const component = daily ? (
    <DateComponent seconds={date} options={{ weekday: 'short' }} />
  ) : (
    <TimeComponent seconds={date} options={{ hour: 'numeric' }} />
  )

  return (
    <Wrapper>
      <BoldFont>{component}</BoldFont>
      <Spacer size={12} />
      <Image src={`https://openweathermap.org/img/wn/${icon}.png`} alt="" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  /* For tablets and larger devices */
  @media (min-width: ${DEVICES.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`

const BoldFont = styled.span`
  font-weight: ${WEIGHTS.bold};
`
