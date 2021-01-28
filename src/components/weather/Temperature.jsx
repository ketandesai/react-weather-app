import React from 'react'
import { useSelector } from 'react-redux'
import { selectUnits } from '../../reducers/weatherSlice'
import { RiCelsiusFill, RiFahrenheitFill } from 'react-icons/ri'

export const Temperature = ({ degrees, showUnits, showSymbol }) => {
  const symbol = '\u00B0'
  const units = useSelector(selectUnits)
  const unit = units === 'imperial' ? <RiFahrenheitFill /> : <RiCelsiusFill />

  return (
    <>
      {Math.round(degrees)} {showSymbol ? symbol : ''} {showUnits ? unit : ''}
    </>
  )
}
