import React from 'react'
import "./Mainnavbar.css"
import img from "../../Assets/Frame 18.jpg"
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
  <li class="nav-item">
  <Link to="/AdminLogin"  class="nav-link mainnavbartext">Login</Link>
  </li> 
</ul>
</div>



      </div>



      </div>

    </div>
  )
}

export default MainNavbar