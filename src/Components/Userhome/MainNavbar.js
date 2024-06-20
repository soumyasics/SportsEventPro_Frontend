import React from 'react'
import "./Mainnavbar.css"
import img from "../../Assets/Frame 18.jpg"
import coachImg from "../../Assets/admininNav.png"
import orgImg from "../../Assets/orgNavImg.png"
import viwerImg from "../../Assets/viwerNavImg.png"
import admImg from "../../Assets/AdminrealNavImg.png"

import { Link } from 'react-router-dom'
function MainNavbar() {
  return (
    <div>
      <div className='navbarmaindiv '>


        <div className='row navbarmaindiv-4'>

<div className='col-1'>
  <img className='navbarmainimg-1' src={img}/>
</div>

<div className='col-8'>
<h1 className='navbarmaintext-1 '>Sports Event Pro</h1>
</div>

<div className='col-3 navbarmaindiv-3 '>
<ul class="nav justify-content-end">
  <li class="nav-item">
  <Link to="/"  class="nav-link mainnavbartext">Home</Link>
  </li>
  <li class="nav-item">
    
  <Link to="/Aboutpage"  class="nav-link mainnavbartext">About</Link>
  </li>
  <li class="nav-item">
  <Link to="/Enquiries"  class="nav-link mainnavbartext">Contact</Link>
  </li>
  <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle mainnavbartext" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Login
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link to="/AdminLogin" className="dropdown-item"><img src={admImg} alt="Team Coach" className="navbarmainimg"/> Admin</Link></li>
                  <hr className="dropdown-divider"/>
                  <li><Link to="/TeamCoachLogin" className="dropdown-item">
                  <img src={coachImg} alt="Team Coach" className="navbarmainimg"/>Team Coach</Link></li>
                  <hr className="dropdown-divider"/>
                  <li><Link to="/ViewerLogin" className="dropdown-item">
                  <img src={viwerImg} alt="Team Coach" className="navbarmainimg"/>Viewer</Link></li>
                  <hr className="dropdown-divider"/>
                  <li><Link to="/OrganizerLogin" className="dropdown-item">
                  <img src={orgImg} alt="Team Coach" className="navbarmainimg"/>Organizer</Link></li>
                </ul>
              </li>
</ul>
</div>



      </div>



      </div>

    </div>
  )
}

export default MainNavbar