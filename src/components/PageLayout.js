import {Switch,Route,Redirect} from "react-router-dom"
import Preloader from "./Preloader"
import{apiErrorMessage} from '../slice/moviesSlice'
import Home from "./Home"
import About from "./About"
import MovieDetails from "./MovieDetails"

import React from 'react';
import { useSelector } from 'react-redux';
import {loader} from "../slice/loaderSlice";
import ErrorMessage from "./ErrorMessage"

const PageLayout = (props)=>{
    const preloader = useSelector(loader);
    const apiError= useSelector(apiErrorMessage)
    
return (
<div className="app-block">
    {preloader ? <Preloader/> : null}
    <div className="container">
    {apiError && <ErrorMessage/>}
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/movie-details/:id">
                <MovieDetails />
            </Route>
            <Route path="/movie">
                <Home/>
            </Route>
            <Route path="/">
            <Redirect to="/movie" />
            </Route>
        </Switch> 
        {props.childern}
    </div>
</div>
)
}
export default PageLayout