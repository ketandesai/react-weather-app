import React from 'react'
import styled from 'styled-components/macro'

import { useDispatch, useSelector } from 'react-redux'
import { selectLocation } from '../../reducers/locationSlice'
import {
  favoriteAdded,
  favoriteDeleted,
  selectFavorites,
} from '../../reducers/favoriteSlice'

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import blueGrey from '@material-ui/core/colors/blueGrey'

import ReactGA from 'react-ga'

function FavoriteButton({ theme }) {
  const dispatch = useDispatch()
  const location = useSelector(selectLocation)
  const favoritesArray = useSelector(selectFavorites)
  const latLonKey = `${location?.lat},${location?.lon}`
  const hue = theme === 'dark' ? 50 : 800

  let isFavorite = favoritesArray.find((element) => element.id === latLonKey)
  const onButtonClick = () => {
    isFavorite = favoritesArray.find((element) => element.id === latLonKey)
    if (isFavorite) {
      dispatch(
        favoriteDeleted({
          id: latLonKey,
          city: location.city,
          lat: location.lat,
          lon: location.lon,
        })
      )
      //track event to google analytics
      ReactGA.event({
        category: 'Favority Place',
        action: 'Removed Favorite',
        label: location.city,
      })
    } else {
      dispatch(
        favoriteAdded({
          id: latLonKey,
          city: location.city,
          lat: location.lat,
          lon: location.lon,
        })
      )

      //track event to google analytics
      ReactGA.event({
        category: 'Favority Place',
        action: 'Save Favorite',
        label: location.city,
      })
    }
  }

  return (
    <Button onClick={onButtonClick} aria-label="Add Favorite">
      {isFavorite ? (
        <FavoriteIcon style={{ color: blueGrey[hue] }} />
      ) : (
        <FavoriteBorderIcon style={{ color: blueGrey[hue] }} />
      )}
    </Button>
  )
}

const Button = styled.button`
  background: transparent;
  border: none;
  outline: none;
`

export default FavoriteButton
