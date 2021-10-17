const Preloader= ()=>{
    return(
        <div className="spinner-warp">
            <div id="spinner" className="active">
                <span id="ball_1" className="spinner_ball"></span>
                <span id="ball_2" className="spinner_ball"></span>
                <span id="ball_3" className="spinner_ball"></span>
            </div>
        </div>
    )
}

export default Preloader