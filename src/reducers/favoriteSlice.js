import { createSlice } from '@reduxjs/toolkit'

const favoritePlaces = window.localStorage.getItem('favoritePlaces')

const initialState = {
  favoritePlaces: favoritePlaces !== null ? JSON.parse(favoritePlaces) : [],
}

const favoriteSlice = createSlice({
  name: 'favoritePlaces',
  initialState,
  reducers: {
    favoriteAdded(state, action) {
      state.favoritePlaces.push(action.payload)
      //save to local storage
      window.localStorage.setItem(
        'favoritePlaces',
        JSON.stringify(state.favoritePlaces)
      )
    },

    favoriteDeleted(state, action) {
      state.favoritePlaces.filter((fav) => fav !== action.payload)
      // Construct a new array immutably
      const newFavorites = state.favoritePlaces.filter(
        (fav) => fav !== action.payload
      )
      //save to local storage
      window.localStorage.setItem(
        'favoritePlaces',
        JSON.stringify(newFavorites)
      )
      state.favoritePlaces = newFavorites
    },
  },
})

export const { favoriteAdded } = favoriteSlice.actions
export const { favoriteDeleted } = favoriteSlice.actions

export default favoriteSlice.reducer

export const selectFavorites = (state) => state.favorites.favoritePlaces
