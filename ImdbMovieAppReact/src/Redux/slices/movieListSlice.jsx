import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_DISCOVER,API_KEY } from '../../constants/api';

const initialState = {
    movieList: [],
}
// "https://api.themoviedb.org/3/genre/movie/list?api_key=09e640a34693ebfeede75978b900fcdf"
export const getMovieList = createAsyncThunk('getMovieList',async () => {
    const res = await axios.get(`${API_DISCOVER}?api_key=${API_KEY}`);
    return res.data.results;
    console.log(res)
})

export const movieListSlice = createSlice({
  name: 'movieList',
  initialState,
  reducers: {},
  extraReducers: (builder) => { //HTTP Request
    builder.addCase(getMovieList.fulfilled,(state,action) =>{
          state.movieList = action.payload
     })
  }
})

export const { } = movieListSlice.actions

export default movieListSlice.reducer