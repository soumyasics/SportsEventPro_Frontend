import React from 'react'
import "./Aboutpage.css"
import img1 from "../../Assets/image 47.jpg"
import img2 from "../../Assets/image 48.jpg"
import img3 from "../../Assets/plane 32.jpg"
function Aboutpage() {
  return (
    <div>
      <form>
        <div className='Aboutpagemaindiv-1' >

<div className='Aboutpagediv-2'>

          <div className='row'> 
               <h1 className='Aboutpagetext-1 '>About Us</h1>

</div>
<div className='row'>  
     <h6 className='Aboutpagetext-2 '>Learn more about The Sport Tournament app And how it promotes The sports engagement</h6>
</div>
</div>
 


<div className='Aboutpagemaindiv2'>

<div className='row '>
  <div className='col-2 '>
  <img className='Aboutpageimg-1'  src={img1}/>

  </div>


  <div className='col-4 Aboutdiv1' >

  <label className='Aboutpagetextmission'>Our Mission</label>

<h5 className='Aboutpagetext-5'>To provide a platform for sports enthusiasts to compltete and connect</h5>



  </div>




  
<div className='col-2 '>  <img className='Aboutpageimg-2' src={img2}/>
</div>

  <div className='col-4 Aboutdiv2'>

  <label className='Aboutpagetextmission'>Why Choose Us</label>

  <h5 className='Aboutpagetext-3'>we offer a veriety of sports events catering to different interests</h5>


    
  </div>
  </div>
  </div>




<div className='Aboutpagemaindiv3'>
  <div className='row'>

    <div className='col-2'>

    <img className='Aboutpageimg-3' src={img3}/>

      </div> 
      <div className='col-10'>

               <h3 className='Aboutpagetext-4'>Welcome to ous us sports tournament website,your hub for exciting competitons nationwide.Explore 
               upcoming events register your team, and stay updated with live scores and match schedules </h3>
               </div>
</div>
</div>




</div>










      </form>
      
    </div>
  )
}

export default Aboutpage