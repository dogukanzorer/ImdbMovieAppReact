import { configureStore } from '@reduxjs/toolkit'
import genreSlice from './slices/genreSlice'
import movieListSlice from './slices/movieListSlice'

export const store = configureStore({
  reducer: {
    //istediğin componentin içerisinden store dosyasına useSelector ile erişebilicez Slice'Lara
    genre: genreSlice,
    movieList: movieListSlice
  },
})