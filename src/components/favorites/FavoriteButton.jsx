import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import styled from 'styled-components/macro'
import blueGrey from '@material-ui/core/colors/blueGrey'

function FavoriteButton({ theme }) {
  const hue = theme === 'dark' ? 50 : 800
  //TODO save favorits and lookup
  const favorite = false

  return (
    <Button>
      {favorite ? (
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
