import React , { useState,useEffect  }from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  movieList,
  apiStatus,
  getMoviesList,
  getsimilarMovies,
  selectedMovie,
  setSelectedMovie,
  setSearchQuery,
  movieQuery,
  totalPages,
  currentPage,similarMovies} from '../slice/moviesSlice'
import { useRouteMatch } from 'react-router-dom';
import { slug } from '../utilities/common';
import _get from 'lodash/get'
import MovieOverview from './MovieOverview';
import Pagination from './Pagination'
import MovieList from './MovieList';
const Home=(props)=>{
    const dispatch = useDispatch();
    const moviesList = useSelector(movieList);
    const searchQuery = useSelector(movieQuery)
    const currentPg = useSelector(currentPage);
    const totalPg = useSelector(totalPages);
    const movieSelected = useSelector(selectedMovie);
    const movieApiStatus = useSelector(apiStatus);
    const moviesSimilar = useSelector(similarMovies)
    const [query,setQuery ]= useState(searchQuery)
    //const movieApiErrorMessage = useSelector(apiErrorMessage);
    let match = useRouteMatch();

    const getSearchResult = (params) => {
      params = {
        ...params,
        query
      }
      if (query !== searchQuery) {
        dispatch(setSearchQuery(query))
      }
      dispatch(getMoviesList(params));
    }

    const setSelectedItemHandler =(item)=>{
     dispatch(setSelectedMovie(item))
     dispatch(getsimilarMovies(item.id))
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
const updateQuery=(e)=>{
  setQuery(e.target.value)
  if (e.keyCode === 13) {
    getSearchResult()
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
            <div className="card p-2 mb-4 shadow-sm">
              {/* <p>{`localstate:${query},redux:${searchQuery}, currentpage:${currentPg},totalPg:${totalPg},movieList:${movieList.length}` }</p> */}
              {/* <p>{JSON.stringify(movieSelected)}</p> */}
              {/* <p>{JSON.stringify(selectedItem)}</p> */}
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Enter your query" onKeyUp={updateQuery}/>
              <button type="submit" className="btn btn-primary" onClick={()=>getSearchResult()}>Search</button>
            </div>
          </div>
            </div>
          </div>
          <div className="movie-list-block p-2">
            <MovieList moviesList={moviesList} linkPath={match.path} movieSelected={movieSelected} similarMovie={false}setSelectedItemHandler={setSelectedItemHandler}/>
          </div>
            {(moviesList.length>0)? <Pagination next={nextPage} prev={prevPage} currentPage={currentPg} totalPage={totalPg} />:null}
         
        </div>
        <div className="col-md-12 col-sm-4 col-lg-6 d-none d-sm-block d-lg-block">
          {(movieSelected.id)? <MovieOverview  movie={movieSelected}/>:null}
          <h4>Similar Movies</h4>
          <MovieList moviesList={moviesSimilar.slice(0,5)} linkPath={match.path} movieSelected={movieSelected} similarMovie={true}/>
        </div>
    </div>
    {props.childern}
    </>)
}

export default Home