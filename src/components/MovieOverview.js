import React from "react";
import {
  Link
} from "react-router-dom";
const MovieOverview =(props)=>{
  const{title,overview,}=props.movie
  return (<div className="movie-col mb-2" >
   
  <div className="card shadow-sm">
    <div className="card-body">
    <h5 className="card-title">{title}</h5>
      <p className="card-text">{overview?.slice(0,180)+'....'}</p>
      <div className="d-flex justify-content-between align-items-center">
        <div className="btn-group">
          <Link to={ {pathname: `/movie-details/${props.movie.id}` ,
                       state: props.movie}} className="btn btn-sm btn-outline-secondary">View</Link>
        </div>
      </div>
    </div>
  </div>
</div>);
}

export default MovieOverview