import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import styled from 'styled-components/macro'

function FavoriteButton() {
  return (
    <Button>
      <FavoriteBorderIcon />
    </Button>
  )
}

const Button = styled.button`
  background: transparent;
  border: none;
  outline: none;
`

export default FavoriteButton
