import { useRouteMatch,Link } from 'react-router-dom';
const MovieList =(props)=>{
   console.log(props)
    const{poster_path,overview,title,popularity,}=props.movie
    let img
    if(poster_path !== null ){
        img= <img alt={title} className="bd-placeholder-img card-img-top poster-img" src={"https://image.tmdb.org/t/p/original"+poster_path}/>
    } else{
        img = <svg className="bd-placeholder-img card-img-top poster-svg" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text className="svg-text-field" textAnchor="middle" x="50%" y="50%" fill="#dee2e6" dy=".3em">{title}</text></svg>
    }
    let card 
    if(props.plainList){
      card = (
      <div className="col movie-col" onClick={props.onClick}>
        <div className="card">
          <div className="card-body">
            {title}
          </div>
        </div>
      </div>)
    }
    else {
      card = (<div className="col movie-col" >
      <div className="card shadow-sm">
         {/* {img} */}
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
          <p className="card-text">{overview}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
            </div>
          </div>
        </div>
      </div>
    </div>)
    }
    return card
}

export default MovieList