import React from 'react'
import'./UserLogin.css'
import logo from '../../Assets/Frame 18.png'
import drop from '../../Assets/Ellipse 1.png'

function UserLogin() {
  return (
    <div>
                            <div className='UserLoginBackground1'>
               <div>
<img className='UserLoginImg1' src={logo}/>
              </div>
              <div>
                
                <img className='UserLoginImg2' src={drop} alt='image not found'></img>
              </div>
              <div className='UserLoginDrop'>
              <div class="dropdown UserLoginDrop">
  <button class="btn btn-secondary dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
    
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
              </div>
                           </div>
              <div>
                          <div class='UserLoginh1' >
                <h1  class='UserLoginh1'> Sign In</h1>
                          </div>
                                    <div>
                                      <p className='UserLoginp1'>Username</p>
                <input className='UserLogininput1' type="text" placeholder="Username"></input>
                                    </div>
                                    <div >
                                    <p className='UserLoginp2'>Email</p>
                <input className='UserLogininput2' type='email' placeholder='Email'></input>
                                    </div>
                <div>
                  <a className='UserLoginReset' href=''>Reset Password</a>
                  
                </div>
                <div>
                  <a className='UserLoginSignin'  href=''>Sign up</a>
                  
                </div>

                                   
                                    <div>
                                      <button className='UserLoginButton' type='submit' >Sign In</button>
                                    </div>
              </div>
              <div>
                <img className='UserLogoImg3' src={logo}/>
              </div>
<div>
                      <div class='UserLoginLinks'>
                      <a  class='UserLoginLinks' href=''>Home</a>
                      <a  class='UserLoginLinks' href=''>About</a>
                      <a  class='UserLoginLinks' href=''>Login</a>
                      <a  class='UserLoginLinks' href=''>Blog</a>
                      <a  class='UserLoginLinks' href=''>Success Stories</a>
                      <a  class='UserLoginLinks' href=''>FAQs</a>
                      
                      </div>


</div>
    </div>
  )
}

export default UserLogin