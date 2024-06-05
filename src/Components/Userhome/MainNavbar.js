import React from 'react'
import "./Mainnavbar.css"
import img from "../../Assets/Frame 18.jpg"
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
    <a class="nav-link active mainnavbartext" aria-current="page" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link mainnavbartext" href="#">About</a>
  </li>
  <li class="nav-item">
    <a class="nav-link mainnavbartext" href="#">Contact</a>
  </li>
  <li class="nav-item">
    <a class="nav-link mainnavbartext" href="#">Login</a>
  </li>
</ul>
</div>



      </div>



      </div>

    </div>
  )
}

export default MainNavbar