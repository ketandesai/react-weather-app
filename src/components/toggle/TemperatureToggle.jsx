import React from 'react'
import Toggle from 'react-toggle'
import DegreeIcon from '../icon/DegreeIcon'
import { useDispatch, useSelector } from 'react-redux'
import { selectUnits, unitsUpdated } from '../../reducers/weatherSlice'
import VisuallyHidden from '../VisuallyHidden/VisuallyHidden'

function TemperatureToggle() {
  const units = useSelector(selectUnits)
  const dispatch = useDispatch()
  const farOrCelcius = units === 'imperial' ? 'Celcius' : 'Farenheight'
  const onUnitsChanged = () => {
    units === 'imperial'
      ? dispatch(unitsUpdated('metric'))
      : dispatch(unitsUpdated('imperial'))
  }
  return (
    <div>
      <Toggle
        checked={units === 'metric'}
        icons={{
          checked: <DegreeIcon iconType={'F'} />,
          unchecked: <DegreeIcon iconType={'C'} />,
        }}
        onChange={onUnitsChanged}
        aria-label={`Change Temperature Units to ${farOrCelcius}`}
      />
      <VisuallyHidden>
        Change Temperature Units to {farOrCelcius}
      </VisuallyHidden>
    </div>
  )
}

export default TemperatureToggle
