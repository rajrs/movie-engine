import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit';
import {
  fetchMoviesList,
  getSimilarMovies
} from '../utilities/serviceClient'
import _get from 'lodash/get'
export const getMoviesList = createAsyncThunk('movies/getMoviesList', fetchMoviesList);
export const getsimilarMovies = createAsyncThunk('movies/getsimilarMovies', getSimilarMovies);
export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    queryString: 'The Summer',
    selectedMovie: {},
    similarMovies: [],
    movieList: [],
    apiStatus: 'idle',
    similarMoviesApiStatus: 'idle',
    totalPages: 0,
    currentPage: 1,
    success: null,
    error: null,
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.queryString = action.payload
    },
    setSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload
    },
    resetError:(state,action)=>{
      state.error = null
    }
  },
  extraReducers: {
    [getMoviesList.pending]: (state, action) => {
      state.apiStatus = 'loading';
    },
    [getMoviesList.fulfilled]: (state, action) => {
      state.apiStatus = 'succeeded';
      //let sort = action.payload.sort((a,b)=>  (a.poster_path===null)-(b.poster_path===null) || +(a.poster_path>b.poster_path)||-(a.poster_path<b.poster_path))
      state.movieList = _get(action.payload, 'results', [])
      state.totalPages = _get(action.payload, 'total_pages', 0)
      state.currentPage = _get(action.payload, 'page', 0)
      state.selectedMovie = _get(action.payload, 'results.0', {})
    },
    [getMoviesList.rejected]: (state, action) => {
      state.apiStatus = 'failed';
      state.error = action.error.message;
    },
    [getsimilarMovies.pending]: (state, action) => {
      state.similarMoviesApiStatus = 'loading';
    },
    [getsimilarMovies.fulfilled]: (state, action) => {
      state.similarMoviesApiStatus = 'succeeded';
      state.similarMovies = _get(action.payload, 'results', [])
    },
    [getsimilarMovies.rejected]: (state, action) => {
      state.similarMoviesApiStatus = 'failed';
      state.error = action.error.message;
    },
  },

});

export const movieList = state => state.movies.movieList;
export const apiStatus = state => state.movies.apiStatus;
export const apiErrorMessage = state => state.movies.error;
export const selectedMovie = state => state.movies.selectedMovie;
export const movieQuery = state => state.movies.queryString;
export const totalPages = state => state.movies.totalPages;
export const currentPage = state => state.movies.currentPage;
export const similarMovies = state => state.movies.similarMovies

export const {
  setSelectedMovie,
  setSearchQuery,
  resetError
} = moviesSlice.actions
export default moviesSlice.reducer;