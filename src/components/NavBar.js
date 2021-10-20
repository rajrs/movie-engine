import React , { useState }from 'react';
import {Link} from "react-router-dom"
import { withRouter } from 'react-router';

const NavBar= (props)=>{
const [menuToggle,setMenuToggle ]= useState(false)
    const mobileMenuToggle =()=>{
        setMenuToggle(!menuToggle)
    }
return (

<nav className="navbar navbar-dark bg-dark shadow-sm navbar-expand-lg mb-3">
  <div className="container">
  <Link className="navbar-brand" to="#">MovieFlex</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" onClick={mobileMenuToggle} data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className={"collapse navbar-collapse "+(menuToggle? 'show':'' )} id="navbarNavDropdown">
  <ul className="navbar-nav">
    <li className="nav-item">
      <Link to="/movie" className="nav-link">Home </Link>
    </li>
    <li className="nav-item">
        <Link to="/about"  className="nav-link">About</Link>
    </li>
    {/* <li className="nav-item dropdown">
      <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown link
      </Link>
      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          
        <Link className="dropdown-item" to="#">Action</Link>
        <Link className="dropdown-item" to="#">Another action</Link>
        <Link className="dropdown-item" to="#">Something else here</Link>
      </div>
    </li> */}
  </ul>
</div>

  </div>

</nav>)
}

export default withRouter(NavBar);