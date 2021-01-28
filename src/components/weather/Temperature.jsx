import React from 'react'
import { useSelector } from 'react-redux'
import { selectUnits } from '../../reducers/weatherSlice'

export const Temperature = ({ degrees, showUnits }) => {
  const symbol = '\u00B0'
  const units = useSelector(selectUnits)
  const unit = units === 'imperial' ? 'F' : 'C'

  return (
    <>
      {Math.round(degrees)} {symbol} {showUnits ? unit : ''}
    </>
  )
}
