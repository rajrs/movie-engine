import {Link } from 'react-router-dom';
import { slug } from '../utilities/common';
import { SadOutline } from 'react-ionicons'
const NoResult =(props)=>{
  return (
  <div className="col text-center pt-4">
    <div className="mb-3">
      <SadOutline
        color={'#00000'} 
        height="40px"
        width="40px"
      />
    </div>
    <div>
        <h5 className="text-muted">No results to display </h5>
    </div>
  </div>)
}
const getURL =(movie,flag,path)=>{
  return  flag? `/movie-details/${movie.id}`:`${path}/${slug(movie.title)}`
}
const MovieList =(props)=>{
   const{moviesList,linkPath,movieSelected,setSelectedItemHandler,similarMovie}=props
    return (<div className="row">
          {(moviesList.length>0)? (moviesList.map((movie)=>( <div className={(movieSelected.id === movie.id && !similarMovie)? "col movie-item selected-movie mb-2":"col-12 movie-item mb-2" } key={movie.id} onClick={(e)=> !similarMovie? setSelectedItemHandler(movie):e.preventDefault()}>
                          <div className="card">
                            
                          <Link to={{
                                pathname: getURL(movie,similarMovie,linkPath) ,
                                state: movie
                              }}>
                            <div className="card-body">
                              {movie.title}
                            </div>
                            </Link>
                          </div>
                        </div>)
                        )):(<NoResult/>)}
  </div>)
}

export default MovieList