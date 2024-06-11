import React from 'react'
import '../../Components/TeamCoach/TeamCoachForgetPass.css'


function TeamCoachForgetPass() {
  return (
    <div>
        <div class="container text-center">
  <div class="row">
    <div class="col">
      <div className='TeamCoachForgetPass-img'></div>
    </div>
    <div class="col">
        <div>
      <div className='TeamCoachForgetPass-Head'>
        <h1>Forget Password</h1>
        <h4>Forget you password to secure your account</h4>
      </div>
      <div className='TeamCoachForgetPassDiv-1'>
        <div>
        <label>E-mail</label>
        </div>
        <input className="" type="email" placeholder="Enter your E-mail" name="email"/>
      <div className='TeamCoachForgetPassDiv-1'>
        <div>
        <label>Enter a new password</label>
        </div>
        <input className="" type="password" placeholder="Enter a new password" name="password"/>
      </div>
      <div className='TeamCoachForgetPassDiv-1'>
        <div>
        <label>Confirm password</label>
        </div>
        <input className="" type="email" placeholder="Enter confirm password" name="cpassword"/>
      </div>
      </div>
      </div>
    </div>
  </div>
  </div>
    </div>
  )
}

export default TeamCoachForgetPass
