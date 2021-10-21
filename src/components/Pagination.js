
import { CaretBackOutline, CaretForwardOutline} from 'react-ionicons'
const Pagination=(props)=>{
    const setFwdColor=(props.currentPage !== props.totalPage)? "#00000":"#cccccc"
    const setPrevColor= (props.currentPage !== 1)? "#00000":"#cccccc"
    return(<> <div className="row ">
                <div className=" col d-flex justify-content-center">  
                  <CaretBackOutline onClick={props.prev}
                    color={setPrevColor} 
                    title={"ico-back"}
                    height="30px"
                    width="30px"
                  /> 
                  <span>Showing page {`${props.currentPage} of ${props.totalPage}`} pages</span>
                  <CaretForwardOutline onClick={props.next}
                  color={setFwdColor} 
                  title={"ico-fwd"}
                  height="30px"
                  width="30px"
                  />
                </div>
            </div>
         </>)
}
export default Pagination