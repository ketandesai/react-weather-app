import React from 'react'
import Spacer from '../spacer/Spacer'

export const Accumulation = ({ rain, snow }) => {
  let mmRain = rain ? rain : 0
  let mmSnow = snow ? snow : 0
  let mmTotal = mmRain + mmSnow
  let inchesAmount = Number.parseFloat(mmTotal / 25.4).toFixed(1)
  return <> {inchesAmount > 0 ? `${inchesAmount} in` : <Spacer size={40} />} </>
}
