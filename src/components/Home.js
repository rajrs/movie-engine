import React , { useState,useEffect  }from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {movieList,apiStatus,apiErrorMessage,getMoviesList} from '../slice/moviesSlice'
import MovieListItem from './MovieListItem';
const Home=()=>{
    const [query,setQuery ]= useState('The Summer')
    const dispatch = useDispatch();
    const moviesList = useSelector(movieList);
    const movieApiStatus = useSelector(apiStatus);
    const movieApiErrorMessage = useSelector(apiErrorMessage);

    useEffect(() => {
        if (movieApiStatus === 'idle') {
            let params= {query, page: 1,include_adult: false}
          dispatch(getMoviesList(params));
        }
      }, [movieApiStatus, dispatch,query]);

    return (<>
    <div className="row">
        <div className="col-12">
        <div className="card p-2 mb-4">
            <p>{query}</p>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="" onChange={(e)=>{setQuery(e.target.value)}}/>
            <button type="submit" className="btn btn-secondary">Search</button>
          </div>
        </div>

        </div>
    </div>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
        {}
        {moviesList.map((movie)=> (<MovieListItem key={movie.id} movie={movie}/>))}
    </div>
    </>)
}

export default Home