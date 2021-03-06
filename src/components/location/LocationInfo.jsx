import React from 'react'
import { selectLocation } from '../../reducers/locationSlice'
import { useSelector } from 'react-redux'
const LocationInfo = () => {
  const location = useSelector(selectLocation)
  let region = location?.region ? `, ${location.region}` : ''
  let country = location?.country ? `, ${location.country}` : ''
  return (
    <b>
      {location?.city}
      {region}
      {country}
    </b>
  )
}

export default LocationInfo
