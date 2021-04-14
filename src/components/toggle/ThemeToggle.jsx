import React from 'react'
import Toggle from 'react-toggle'
import ThemeIcon from '../icon/ThemeIcon'
import { useDispatch, useSelector } from 'react-redux'
import { selectTheme, themeUpdated } from '../../reducers/themeSlice'
import './Toggle.css'

function ThemeToggle() {
  const dispatch = useDispatch()
  const theme = useSelector(selectTheme)

  const onThemeChanged = () => {
    let currentTheme = theme === 'light' ? 'dark' : 'light'
    dispatch(themeUpdated(currentTheme))
  }
  return (
    <div>
      <Toggle
        checked={theme === 'dark'}
        icons={{
          checked: <ThemeIcon iconType={'light'} />,
          unchecked: <ThemeIcon iconType={'dark'} />,
        }}
        onChange={onThemeChanged}
      />
    </div>
  )
}

export default ThemeToggle
