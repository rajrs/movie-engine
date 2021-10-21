import {setLoader} from "../slice/loaderSlice";
import axios from 'axios';
const  baseUrl= 'https://api.themoviedb.org/3/';

function constructQuery(params){
  let defaultParams = {
    api_key:'7b642aed2489a8f6bfc80d04a2421e1c',
    language:'en-US',
    page: 1,
    include_adult: false
  };
  params = Object.assign(defaultParams, params);
  console.log(params)
  let esc = encodeURIComponent;
  var queryString = Object.keys(params)
    .map(k => `${esc(k)}=${esc(params[k])}`)
    .join('&');
  return queryString
}

let controlFlick= (flag)=>{
  if(flag){
    document.body.classList.add('flow-block')
  }else {
    document.body.classList.remove('flow-block')
  }
}
  export const fetchMoviesList =  async (Params,{dispatch}) => {
    controlFlick(true)
    dispatch(setLoader(true))
    let queryString = `${baseUrl}search/movie?${constructQuery(Params)}`
    console.log(queryString)
    try{
      const response = await axios.get(queryString);
      controlFlick(false)
      dispatch(setLoader(false))
      return response.data;
    }catch(err){
      controlFlick(false)
      dispatch(setLoader(false))
      return err.response.data
    }

  }
  export const getSimilarMovies= async(movieId,{dispatch}) => {
    controlFlick(true)
    dispatch(setLoader(true))
    let queryString = `${baseUrl}movie/${movieId}/similar?${constructQuery()}`
    console.log(queryString)
    const response = await axios.get(queryString);
    controlFlick(false)
    dispatch(setLoader(false))
    return response.data;
  }
