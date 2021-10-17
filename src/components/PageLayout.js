import {Switch,Route} from "react-router-dom"
import Preloader from "./Preloader"
import Home from "./Home"
import About from "./About"
import MovieDetails from "./MovieDetails"

import React from 'react';
import { useSelector } from 'react-redux';
import {loader} from "../slice/loaderSlice";

const PageLayout = (props)=>{
    const preloader = useSelector(loader);
return (
<div className="app-block">
    {preloader ? <Preloader/> : null}
    <div className="container">
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/movie-details/:id">
                <MovieDetails />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch> 
        {props.childern}
    </div>
</div>
)
}
export default PageLayout