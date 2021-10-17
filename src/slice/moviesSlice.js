import { createSlice ,createAsyncThunk} from '@reduxjs/toolkit';
import {fetchMoviesList} from '../utilities/serviceClient'

export const getMoviesList = createAsyncThunk('movies/getMoviesList', fetchMoviesList);
export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
      queryString:'',
      similarMovies:[],
      movieList: [],
      apiStatus:'idle',
      totalPages:0,
      currentPage:1
      success:null,
      error: null,
    },
    reducers: {
    setquery
    },
    extraReducers: {
      [getMoviesList.pending]: (state, action) => {
        state.apiStatus = 'loading';
      },
      [getMoviesList.fulfilled]: (state, action) => {
        state.apiStatus = 'succeeded';
        let sort = action.payload.sort((a,b)=>  (a.poster_path===null)-(b.poster_path===null) || +(a.poster_path>b.poster_path)||-(a.poster_path<b.poster_path))
        state.movieList=sort
      },
      [getMoviesList.rejected]: (state, action) => {
        state.apiStatus = 'failed';
        state.error = action.error.message;
      },
    },
    
  });

  export const movieList = state => state.movies.movieList;
  export const apiStatus = state => state.movies.apiStatus;
  export const apiErrorMessage = state => state.movies.error;
  
  export default moviesSlice.reducer;