import React from 'react'
import "../../Components/Admin/AdminDashbordTopContent_2.css"
import { Link } from 'react-router-dom'

function AdminDashbordTopContent_2() {
  return (
    <div>
      <div class="container text-center"style={{height:"160px"}}>
  <div class="row" style={{marginTop:"-49px"}}>
    <div class="col style">
<h1 className='AdminDashbordTopContent_Div1'>Team Coaches</h1>
    </div>
    <div className='AdminDashbordTopContent_2-Div2'>
    <div class="col style">
      <div className='AdminDashbordTopContent_2-img1'></div>
      <button className='AdminDashbordTopContent_2-button1'><Link to='/ViewCoachRequest' className='AdminDashbordTopContent_2-link'>View All Requests</Link></button>
    </div></div>
    <div className='AdminDashbordTopContent_2-Div3'>
    <div class="col style">
      <div className='AdminDashbordTopContent_2-img2'></div>
      <button className='AdminDashbordTopContent_2-button1'><Link to='/AdminViewTeamCoach' className='AdminDashbordTopContent_2-link'>View All Team Coaches</Link></button>    </div>
  </div>
  </div>
</div>
<hr className='AdminDashbordTopContent_2-line'></hr>
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
</div>

    </div>
  )
}

export default AdminDashbordTopContent_2
