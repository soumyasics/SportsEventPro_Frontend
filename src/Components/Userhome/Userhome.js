import React from 'react'
import './Userhome.css'
import img from '../../Assets/people-soccer-stadium 1.jpg'
import img1 from '../../Assets/image 76.png'
import img2 from '../../Assets/image 127.png'
import img3 from '../../Assets/Rectangle 128.png'

function Userhome() {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <div className='userHomeDiv-1'>
        <div className='UserHome-bgDiv'>

          <div class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="2000" >

            <div class="carousel-inner">

              <div class="carousel-item active">

                <img src={img} class="w-100" style={{ height: "859px" }} alt="..." />

              </div>

              <div class="carousel-item">

                <img src={img1} class="w-100" style={{ height: "859px" }} alt="..." />

              </div>

              <div class="carousel-item">

                <img src={img2} class="w-100" style={{ height: "859px" }} alt="..." />

              </div>

              <div class="carousel-item">

                <img src={img3} class="w-100" style={{ height: "859px" }} alt="..." />

              </div>

            </div>

          </div>

        </div>
      </div>
      <div style={{width:'100%',height:'100%',paddingTop:'81px'}}>

        <div class='userHomeDiv-2'>

          <h1 class='userHomeHead'>Welcome To The
            <br></br>Sports Event Pro</h1>

          <h2 className='userHomeDiv-3'>Join us for a thrilling experience filled with competitive matches</h2>

          <div className='userHomebuttons'>

            <button class='userHomeButton-1'>Learn More</button>
            <button class='userHomeButton-2'>Register Now</button>

          </div>

        </div>
      </div>


    </div>
  )
}

export default Userhome
