import { useDispatch, useSelector } from 'react-redux';
import {apiErrorMessage,resetError} from '../slice/moviesSlice'
const ErrorMessage=(props)=>{
    let dispatch = useDispatch();
    const err = useSelector(apiErrorMessage);
    return(
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> {err}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={()=> dispatch(resetError())}></button>
        </div>
  )
}
export default ErrorMessage