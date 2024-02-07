import React from 'react'
import'./UserSignup.css'
import img1 from '../../Assets/Frame 18.png'
import img2 from '../../Assets/Ellipse 1.png'

function UserSignup() {
  return (
    <div>
      <div>
      <div className='UserSignupBackground1'>
               <div>
<img className='UserSignupImg1' src={img1}/>
              </div>
              <div>
                
                <img  className='UserSignupImg2' src={img2} alt='image not found'></img>
              </div>
              <div className='UserSignupDrop'>
              <div class="dropdown UserSignupDrop">
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
                           </div>
              <div>

      </div>
                                 <div class='UserSignuph1' >
                <h1  class='UserSignuph1'> Sign In</h1>
                                </div>
                                <div>
                                    <input className='UserSignupInput1' type='text' placeholder='Username'/>
                                </div>
                                <div>
                                    <input  className='UserSignupInput2'type='email' placeholder='Email'/>
                                </div>
                                <div>
                                    <input className='UserSignupInput3' type='text' placeholder='Date of birth'/>
                                </div>
                                <div>
                                    <input className='UserSignupInput4' type='text' placeholder='About'/>
                                </div>
                        <div>
                            <p className='UserSignupP1'>Already have an account , Login</p>
                        </div>
                        <div>
                            <button className='UserSignupButton1' type='submit'>Sign up</button>
                        </div>
    </div>
  )
}

export default UserSignup
