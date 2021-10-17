import { configureStore } from '@reduxjs/toolkit'
import loaderSlice from './slice/loaderSlice'
import moviesSlice from './slice/moviesSlice'
export default configureStore({
  reducer: {
    preloader:loaderSlice,
    movies:moviesSlice
  }
})