import React from 'react'
import Toggle from 'react-toggle'
import ThemeIcon from '../icon/ThemeIcon'
import { useDispatch, useSelector } from 'react-redux'
import { selectTheme, themeUpdated } from '../../reducers/themeSlice'
import './Toggle.css'
import VisuallyHidden from '../VisuallyHidden/VisuallyHidden'
import ReactGA from 'react-ga'

function ThemeToggle() {
  const dispatch = useDispatch()
  const theme = useSelector(selectTheme)

  const onThemeChanged = () => {
    let currentTheme = theme === 'light' ? 'dark' : 'light'
    dispatch(themeUpdated(currentTheme))

    //track event to google analytics
    ReactGA.event({
      category: 'Theme',
      action: 'Toggle Theme',
      label: currentTheme,
    })
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
        aria-label={`Change Theme to ${theme === 'light' ? 'dark' : 'light'}`}
      />
      <VisuallyHidden>
        Change Theme to {theme === 'light' ? 'dark' : 'light'}
      </VisuallyHidden>
    </div>
  )
}

export default ThemeToggle
