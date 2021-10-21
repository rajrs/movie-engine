import { useLocation,useHistory  } from "react-router"
import { ArrowBackOutline } from 'react-ionicons'
const MovieDetails=(props)=>{
    let location = useLocation()
    let history = useHistory();
    console.log(location)
    const{original_title,title,overview,poster_path,vote_average,vote_count}=location.state;
    let img
    if(poster_path !== null ){
        img= <img alt={title} className="bd-placeholder-img card-img-top poster-img" src={"https://image.tmdb.org/t/p/original"+poster_path}/>
    } else{
        img = <svg className="bd-placeholder-img card-img-top poster-svg" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text className="svg-text-field" textAnchor="middle" x="50%" y="50%" fill="#dee2e6" dy=".3em">{title}</text></svg>
    }
    return (<>
    <div className="row  justify-content-center mt-4">
        <div className="col-4 movie-col" >
            <div className="pb-2 pointer">
            <ArrowBackOutline onClick={history.goBack}
            color={'#00000'}
            height="30px"
            width="30px"
            />
            </div>
       
            <div className="card shadow-sm">
            {img}
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
                <p className="card-text">{overview}</p>
                <div className="d-flex justify-content-between align-items-center">
               
                </div>
            </div>
            </div>
        </div>
    </div>
</>)  
}

export default MovieDetails