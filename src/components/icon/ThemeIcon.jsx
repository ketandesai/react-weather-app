import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import classes from './icon.module.css'

const ThemeIcon = ({ iconType }) => {
  return (
    <div className={classes.wrapper}>
      {iconType === 'light' ? (
        <p className={classes.text}>
          <FaSun />
        </p>
      ) : (
        <p className={classes.text}>
          <FaMoon />
        </p>
      )}
    </div>
  )
}

export default ThemeIcon
