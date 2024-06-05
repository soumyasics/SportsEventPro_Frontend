import React from 'react'
import './Landingpage3.css'
import img1 from '../../Assets/userhomeimg-2.jpeg'
import img2 from '../../Assets/userhomeimg-3.jpeg'
import img3 from '../../Assets/userhomeimg-4.jpeg'

function Landingpage3() {
  return (
    <div>
      <div className='landingPageHead'>
        <div className='landingPageImg-1'>
        </div>
            <div>
        <h1 className='landingpagehead-1'>Featured Tournaments</h1>
        </div>
        
        </div>

            <div className='landingpagediv-1'>
        <div class="row">
  <div class="col-4">
    <button className='landingpagebutton-1'>REGISTER NOW</button>
  <img className='landingpageimg2' src={img1}alt="" />
  <h4 className='landingpageh1'>Football Tournament</h4>
  <h2 className='landingpageh2'>July 10-12</h2>
  </div>
  <div class="col-4">
<button className='landingpagebutton-2'>VIEW DETAILS</button>
  <img class='landingpageimg3' src={img2}alt="" />
  <h4 className='landingpageh1'>Basketball Championship</h4>
  <h2 className='landingpageh2'>August 15-18</h2>
  </div>
  <div class="col-4">
    <button className='landingpagebutton-3'>EXPLORE MORE</button>
  <img className='landingpageimg4' src={img3}alt="" />
  <h4 className='landingpageh1'>Tennis Open</h4>
  <h2 className='landingpageh2'>September 5-7</h2>
  </div>
</div>  
</div>
        

    </div>
  )
}

export default Landingpage3
