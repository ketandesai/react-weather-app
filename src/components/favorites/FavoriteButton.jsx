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

function FavoriteButton({ theme }) {
  const dispatch = useDispatch()
  const location = useSelector(selectLocation)
  const favoritesArray = useSelector(selectFavorites)
  const latLonKey = `${location?.lat},${location?.lon}`
  const hue = theme === 'dark' ? 50 : 800

  const onButtonClick = () => {
    if (favoritesArray?.includes(latLonKey)) {
      dispatch(favoriteDeleted(latLonKey))
    } else {
      dispatch(favoriteAdded(latLonKey))
    }
  }

  return (
    <Button onClick={onButtonClick}>
      {favoritesArray?.includes(latLonKey) ? (
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
