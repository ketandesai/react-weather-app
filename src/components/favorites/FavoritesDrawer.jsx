import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { selectFavorites, favoriteDeleted } from '../../reducers/favoriteSlice'
import { locationUpdated } from '../../reducers/locationSlice'
import { selectTheme } from '../../reducers/themeSlice'

import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import ReactGA from 'react-ga'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
})

export default function FavoritesDrawer() {
  const favoritesArray = useSelector(selectFavorites)
  const theme = useSelector(selectTheme)
  const dispatch = useDispatch()
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const muiTheme = createMuiTheme({
    palette: {
      type: theme,
    },
  })

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    setOpen(open)
  }

  const list = () => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <FavoriteBorderIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary={'Favorites'} />
        </ListItem>
      </List>
      <Divider />
      <List>
        {favoritesArray.map((fav) => (
          <ListItem button key={fav.id}>
            <ListItemText
              primary={fav.city}
              onClick={() => {
                dispatch(
                  locationUpdated({
                    lon: fav.lon,
                    lat: fav.lat,
                    city: fav.city,
                  })
                )

                ReactGA.event({
                  category: 'Favorites',
                  action: 'Select Favorite',
                  label: fav.city,
                })
              }}
            />
            <ListItemIcon>
              <DeleteForeverIcon
                color="secondary"
                onClick={() => {
                  dispatch(favoriteDeleted({ id: fav.id, city: fav.city }))
                }}
              />
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </div>
  )

  return (
    <div>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer(true)}
        edge="start"
      >
        <MenuIcon />
      </IconButton>
      <ThemeProvider theme={muiTheme}>
        <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
          {list('left')}
        </Drawer>
      </ThemeProvider>
    </div>
  )
}
