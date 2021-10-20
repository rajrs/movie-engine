import React , { useState,useEffect  }from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {movieList,apiStatus,apiErrorMessage,getMoviesList,selectedMovie,setSelectedMovie,setSearchQuery,movieQuery,totalPages,currentPage} from '../slice/moviesSlice'
import { useRouteMatch ,Link} from 'react-router-dom';
import { slug } from '../utilities/common';
import _get from 'lodash/get'
import MovieOverview from './MovieOverview';
import Pagination from './Pagination';
const Home=(props)=>{
    const [query,setQuery ]= useState('The Summer')
    const dispatch = useDispatch();
    const moviesList = useSelector(movieList);
    const searchQuery = useSelector(movieQuery)
    const currentPg = useSelector(currentPage);
    const totalPg = useSelector(totalPages);
    const movieSelected = useSelector(selectedMovie);
    const movieApiStatus = useSelector(apiStatus);
    //const movieApiErrorMessage = useSelector(apiErrorMessage);
    let match = useRouteMatch();
    const getSearchResult = (params)=>{
      params = {...params,query}
        if(query !== searchQuery){
         dispatch(setSearchQuery(query))
        }
        dispatch(getMoviesList(params));
      }
    const setSelectedItemHandler =(item)=>{
      console.log(item)
     dispatch(setSelectedMovie(item))
    } 
    const nextPage =()=>{ 
      if(currentPg !== totalPg){
        let pageCount=currentPg+1
        getSearchResult({page:pageCount})
      }
     
    }
    const prevPage =()=>{ 
      if(currentPg >1 ){
        let pageCount=currentPg-1
        getSearchResult({page:pageCount})
      }
  }

    useEffect(() => {
        if (movieApiStatus === 'idle') {
          getSearchResult()
        } else if(moviesList.length >0){
          let path = match.path+"/"+slug(_get(moviesList,'[0].title',''))
          window.history.replaceState(null, '', path);
        }
      
      }, [moviesList,dispatch]);

    return (<>
    <div className="row">
        <div className="col-md-12 col-sm-4 col-lg-6">
          <div className="row">
            <div className="col-12">
            <div className="card p-2 mb-4">
              <p>{`localstate:${query},redux:${searchQuery}, currentpage:${currentPg},totalPg:${totalPg},movieList:${movieList.length}` }</p>
              {/* <p>{JSON.stringify(movieSelected)}</p> */}
              {/* <p>{JSON.stringify(selectedItem)}</p> */}
            <div className="input-group">
              <input type="text" className="form-control" placeholder="" onChange={(e)=>{setQuery(e.target.value)}}/>
              <button type="submit" className="btn btn-secondary" onClick={()=>getSearchResult()}>Search</button>
            </div>
          </div>
            </div>
          </div>
          <div className="row movie-list-block">
            {moviesList.map((movie)=>( <div className={(movieSelected.id === movie.id)? "col-12 movie-item selected-movie mb-2":"col-12 movie-item mb-2" } key={movie.id} onClick={()=>setSelectedItemHandler(movie)}>
                          <div className="card">
                          <Link to={{
                                pathname: `${match.path}/${slug(movie.title)}` ,
                                state: movie
                              }}>
                            <div className="card-body">
                              {movie.title}
                            </div>
                            </Link>
                          </div>
                        </div>)
                        )}
          </div>
          <Pagination next={nextPage} prev={prevPage} currentPage={currentPg} totalPage={totalPg} />
         
        </div>
        <div className="col-md-12 col-sm-4 col-lg-6 d-none d-sm-block d-lg-block">
        <MovieOverview  movie={movieSelected}/>
        </div>
    </div>
    {props.childern}
    </>)
}

export default Home