import { createSlice } from '@reduxjs/toolkit';


export const loaderSlice = createSlice({
    name: 'preloader',
    initialState: {
      loader:false,
    },
    reducers: {
      setLoader:(state,action)=>{
          state.loader = action.payload
      }
    },
    
  });
  export const {setLoader}= loaderSlice.actions
  export const loader = state => state.preloader.loader;
  
  export default loaderSlice.reducer;