import React from 'react'
import "../../Components/Admin/AdminDashbordTopContent_2.css"
import { Link } from 'react-router-dom'
import topcontent6 from '../../Assets/AdminDashbordTopContent6.png'
import topcontent5 from '../../Assets/AdminDashbordTopContent5.png'
import axiosInstance from '../Constant/BaseURL'

function AdminDashbordTopContent_2() {
  return (
    <div className='container'>
      <div className='row container'>
        <div className='col container ms-5 ps-5 '>
          <h1 className='AdminDashbordTopContent_Div1'>Team Coaches</h1>
        </div>
        <div className='col container'>
          <Link to='/ViewCoachRequest' className='AdminDashbordTopContent_2-link'>
            <div className='text-center'>
              <img src={topcontent6} className='Admin-Dashbord-TopContent-img6' />
            </div>
            <div className='text-center'>
              <button className='AdminDashbordTopContent_2-button1'>View All Requests</button>
            </div>
            </Link>
        </div>
        <div className='col'>
        <Link to='/AdminViewTeamCoach' className='AdminDashbordTopContent_2-link'>
          <div className='text-center'>
            <img src={topcontent5} className='Admin-Dashbord-TopContent-img6' />
          </div>
          <div className='text-center'>
            <button className='AdminDashbordTopContent_2-button1'>View All Coaches</button>
          </div>
          </Link>
        </div>
      </div>
      <hr></hr>
      <div className='row container'>
        <div className='col container ms-5 ps-5 '>
          <h1 className='AdminDashbordTopContent_Div1'>Organizers</h1>
        </div>
        <div className='col container'>
          <div className='text-center'>
            <img src={topcontent6} className='Admin-Dashbord-TopContent-img6' />
          </div>
          <div className='text-center'>
            <button className='AdminDashbordTopContent_2-button1'><Link to='/ViewCoachRequest' className='AdminDashbordTopContent_2-link'>View All Requests</Link></button>
          </div>
        </div>
        <div className='col'>
          <div className='text-center'>
            <img src={topcontent5} className='Admin-Dashbord-TopContent-img6' />
          </div>
          <div className='text-center'>
            <button className='AdminDashbordTopContent_2-button1'><Link to='/ViewCoachRequest' className='AdminDashbordTopContent_2-link'>View All Requests</Link></button>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className='row container'>
        <div className='col container ms-5 ps-5 '>
          <h1 className='AdminDashbordTopContent_Div1'>View All Team Viewers</h1>
        </div>

        <div className='col-8 text-center'>
          <div className=''>
            <img src={topcontent5} className='Admin-Dashbord-TopContent-img6' />
          </div>
          <div className=''>
            <button className='AdminDashbordTopContent_2-button1'><Link to='/ViewCoachRequest' className='AdminDashbordTopContent_2-link'>View All Requests</Link></button>
          </div>
        </div>
      </div>
      {/* <div class="container text-center">
      <div class="row" >
        <div class="col style">
        
        </div>
        <div className='AdminDashbordTopContent_2-Div2'>
        <div class="col style">
          <div className='row'>
            <div className='col'>
              
            </div>
            <div>
            </div>
          </div>
        </div></div>
        <div className='AdminDashbordTopContent_2-Div3'>
        <div class="col style">
          <div className='row'>
            <div className='col'>
              <img src={topcontent5} className='Admin-Dashbord-TopContent-img5'/>
            </div>
            <div className='col'>
                <button className='AdminDashbordTopContent_2-button1'><Link to='/AdminViewTeamCoach' className='AdminDashbordTopContent_2-link'>View All Team Coaches</Link></button>    </div>

            </div>
          
          </div>
      </div>
      </div>
</div> */}
      {/* <hr className='AdminDashbordTopContent_2-line'></hr>
<div class="container text-center" style={{height:"160px"}}>
  <div class="row">
    <div class="col style">
<h1 className='AdminDashbordTopContent_Div2'>Organizers</h1>
    </div>
    <div className='AdminDashbordTopContent_2-Div2'>
    <div class="col style">
      <div className='AdminDashbordTopContent_2-img1'></div>
      <button className='AdminDashbordTopContent_2-button1'>View All Requests</button>
    </div></div>
    <div className='AdminDashbordTopContent_2-Div3'>
    <div class="col style">
      <div className='AdminDashbordTopContent_2-img2'></div>
      <button className='AdminDashbordTopContent_2-button1'>View All Team Organizers</button>    </div>
  </div>
  </div>
</div>
<hr className='AdminDashbordTopContent_2-line'></hr>
<div class="container text-center">
  <div class="row">
    <div class="col style">
<h1 className='AdminDashbordTopContent_Div3'>Viewers</h1>
    </div>
    <div className='AdminDashbordTopContent_2-Div4'>
    <div class="col style">
      <div className='AdminDashbordTopContent_2-img2'></div>
      <button className='AdminDashbordTopContent_2-button1'>View All Team Viewers</button>    </div>
  </div>
  </div>
</div> */}

    </div>
  )
}

export default AdminDashbordTopContent_2
