import React from 'react'
import styled from 'styled-components/macro'
import { useSelector } from 'react-redux'
import { selectCurrentWeather } from '../../reducers/weatherSlice'
import Location from '../location/Location'
import DateComponent from '../time/DateComponent'
import TimeComponent from '../time/TimeComponent'

function CurrentInfo() {
  const weather = useSelector(selectCurrentWeather)
  return (
    <Wrapper>
      <Location />
      <div>
        <DateComponent seconds={weather?.dt} /> |{' '}
        <TimeComponent seconds={weather?.dt} />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`

export default CurrentInfo
