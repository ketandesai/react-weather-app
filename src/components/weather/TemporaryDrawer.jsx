import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

import { useDispatch, useSelector } from 'react-redux'
import { selectFavorites, favoriteDeleted } from '../../reducers/favoriteSlice'
import { locationUpdated } from '../../reducers/locationSlice'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
})

export default function TemporaryDrawer() {
  const favoritesArray = useSelector(selectFavorites)
  const dispatch = useDispatch()
  const classes = useStyles()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
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
                console.log('fav %j', fav)
                dispatch(
                  locationUpdated({
                    lon: fav.lon,
                    lat: fav.lat,
                    city: fav.city,
                  })
                )
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
      <Button onClick={toggleDrawer('left', true)}>left</Button>
      <Drawer
        anchor="left"
        variant="persistent"
        open={open}
        onClose={toggleDrawer('left', false)}
      >
        {list('left')}
      </Drawer>
    </div>
  )
}
