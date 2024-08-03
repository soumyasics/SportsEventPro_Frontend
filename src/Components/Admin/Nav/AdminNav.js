
import React from 'react'
import "../../Userhome/Mainnavbar.css"
import img from "../../../Assets/Frame 18.jpg"
import coachImg from "../../../Assets/admininNav.png"
import orgImg from "../../../Assets/orgNavImg.png"
import viwerImg from "../../../Assets/viwerNavImg.png"
import admImg from "../../../Assets/AdminrealNavImg.png"

import { Link } from 'react-router-dom'

function AdminNav() {


  const adminLogout = () => {
    localStorage.setItem('admin', 0)
  }
  return (
    <div>
      <div className='navbarmaindiv '>


        <div className='row navbarmaindiv-4'>

          <Link to='/admindashboard' style={{textDecoration:'none'}}>
            <div style={{ display: "flex", flexDirection: 'row', gap: '20px', marginLeft: '20px' }}>
              <img className='navbarmainimg-1' src={img} />
              <h1 className='navbarmaintext-1 '>Sports Event Pro</h1>
            </div>
          </Link>

        </div>



      </div>

    </div>
  )



}
export default AdminNav