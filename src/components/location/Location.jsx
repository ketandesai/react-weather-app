import React from 'react'
import styled from 'styled-components/macro'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import { WEIGHTS } from '../styles/constants'
import LocationInfo from './LocationInfo'

function Location() {
  return (
    <LocationWrapper>
      <LocationOnIcon fontSize="small" />
      <LocationInfo />
    </LocationWrapper>
  )
}

const LocationWrapper = styled.span`
  font-weight: ${WEIGHTS.bold};
`

export default Location
