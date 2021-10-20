import {setLoader} from "../slice/loaderSlice";
import axios from 'axios';
const  baseUrl= 'https://api.themoviedb.org/3/search/movie?';
const ApiKey = 'api_key=7b642aed2489a8f6bfc80d04a2421e1c&language=en-US'
let defaultParams = {
  api_key:'7b642aed2489a8f6bfc80d04a2421e1c',
  language:'en-US',
  query: 'value_ 1',
  page: 1,
  include_adult: false 
};
function constructQuery(params){
  let defaultParams = {
    api_key:'7b642aed2489a8f6bfc80d04a2421e1c',
    language:'en-US',
  };
  params = Object.assign(defaultParams, params);
let esc = encodeURIComponent;
var queryString = Object.keys(params)
  .map(k => `${esc(k)}=${esc(params[k])}`)
  .join('&');
return queryString
}
//&query=The%20summer&page=1&include_adult=false'

// export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
//     const response = await axios.get(
//       'https://eager-supreme-appalachiosaurus.glitch.me/todos'
//     );
//     return response.data.todoList;
//   });

  export const fetchMoviesList =  async (Params,{dispatch}) => {
    dispatch(setLoader(true))
    let query = constructQuery(Params)
    const response = await axios.get(`${baseUrl}${query}`
    );
    dispatch(setLoader(false))
    return response.data;
  }
  export const getSimilarMovies= async(searchParam,{dispatch}) => {
    dispatch(setLoader(true))
    const response = await axios.get(
     baseUrl+'&query='+searchParam+'&page=1&include_adult=false'
    );
    dispatch(setLoader(false))
    return response.data.results;
  }

  export const getMovieDetails= async(movieId,{dispatch}) => {
    dispatch(setLoader(true))
    const response = await axios.get(
     `${baseUrl}${movieId}${ApiKey}`
    );
    dispatch(setLoader(false))
    return response.data.results;
  }
