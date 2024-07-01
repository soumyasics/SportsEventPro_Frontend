
import React from 'react'
import "../../Userhome/Mainnavbar.css"
import img from "../../../Assets/Frame 18.jpg"
import coachImg from "../../../Assets/admininNav.png"
import orgImg from "../../../Assets/orgNavImg.png"
import viwerImg from "../../../Assets/viwerNavImg.png"
import admImg from "../../../Assets/AdminrealNavImg.png"

import { Link } from 'react-router-dom'

function AdminNav() {
 

const adminLogout=()=>{
localStorage.setItem('admin',0)
}
  return (
    <div>
      <div className='navbarmaindiv '>


        <div className='row navbarmaindiv-4'>

<div className='col-1'>
  <img className='navbarmainimg-1' src={img}/>
</div>

<div className='col-9'>
<h1 className='navbarmaintext-1 '>Sports Event Pro</h1>
</div>

<div className='col-1 navbarmaindiv-3 '>
<ul class="nav justify-content-end">
  <li class="nav-item">
  <Link to="/AdminLogin"  class="nav-link mainnavbartext" onClick={()=>adminLogout()}>Logout</Link>
  </li>
 
  
</ul>
</div>



      </div>



      </div>

    </div>
  )



}
export default AdminNav