import React from 'react'
import styled from 'styled-components/macro'

import { useDispatch, useSelector } from 'react-redux'
import { selectFavorites, favoriteDeleted } from '../../reducers/favoriteSlice'
import { locationUpdated } from '../../reducers/locationSlice'

import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
/*export const STYLES = {
  light: {
    '--color': COLORS.darkblue[100],
    '--background': COLORS.palegreen,
  },
  dark: {
    '--color': COLORS.white,
    '--background': COLORS.darkblue[300],
  },
}*/

const Sidebar = ({ theme }) => {
  //const style = STYLES[theme]
  const dispatch = useDispatch()
  const favoritesArray = useSelector(selectFavorites)

  let content = favoritesArray?.map((fav) => (
    <ListItem key={fav.id}>
      <button
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
      >
        {fav.city}
      </button>
      <Button
        onClick={() => {
          dispatch(favoriteDeleted({ id: fav.id, city: fav.city }))
        }}
      >
        <DeleteForeverIcon color="secondary" fontSize="small" />
      </Button>
    </ListItem>
  ))
  return (
    <Wrapper>
      Favorites
      <ul>{content}</ul>
    </Wrapper>
  )
}

export const Wrapper = styled.aside`
  grid-area: var(--grid-area, aside);
  text-align: var(--text-align, left);
  padding: var(--text-align, 8px);
  //color: var(--color);
  //background: var(--background);
  //border: var(--border, 1px solid blue);
  border-radius: var(--border-radius, 6px);
  //box-shadow: var(--box-shadow, 0px 2px 6px rgba(0, 0, 0, 0.25));
  height: auto;
`

const ListItem = styled.li`
  display: flex;
`

const Button = styled.button`
  background: transparent;
  border: none;
  outline: none;
`

export default Sidebar
