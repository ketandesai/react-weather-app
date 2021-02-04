import React from 'react'
import { RiCelsiusFill, RiFahrenheitFill } from 'react-icons/ri'
import classes from './icon.module.css'

const DegreeIcon = ({ iconType }) => {
  return (
    <div>
      {iconType === 'F' ? (
        <p className={classes.temp}>
          <RiFahrenheitFill />
        </p>
      ) : (
        <p className={classes.temp}>
          <RiCelsiusFill />
        </p>
      )}
    </div>
  )
}

export default DegreeIcon
