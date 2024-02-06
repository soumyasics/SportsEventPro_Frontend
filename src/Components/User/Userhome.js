import React from 'react'
import './Userhome.css'
import logo from './Assets/Frame 17.png'
import second from './Assets/Ellipse 1.png'

function Userhome() {
  return (
      <div>
          <div>
              <nav class="navbar">
                <div class='c'>
              <img src={logo}alt="" />
              </div>
                <div class='a'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                      <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                  </svg>
                  </div>
                  <a class="nav-link" href="#">ABOUT</a>
                  <a class="nav-link" href="#">EVENTS</a>
                  <div class='b'>
                  <a class="nav-link" href="#">CONTACT</a>
                  </div>
              </nav>
          </div>
          <div class='secondbox'>
            <div class='f'>
              <img src={second} alt="" style={{marginTop:"25px"}} />
              </div>
              <div class='e'>
              <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor: "#57cdff",border:"0px"}}>
                    
                  </button>
                  <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">nunnu</a></li>
                      <li><a class="dropdown-item" href="#">nunnu</a></li>
                      <li><a class="dropdown-item" href="#">nunnu</a></li>
                  </ul>
              </div>
              </div>
          </div>
          <div class='i'>
            <div class='g'>
              
                <h1>FIND THE SPORTS EVENT NEAR YOU</h1>

                <h2>Where Furniture become economic,<br></br>Just Buy if you really want to own</h2>
                <button class='h'>FIND NOW</button>
            </div>
          </div>
          <div class='j'>
            <h1 class='er'>Upcoming Event</h1>
            <h4 class='et'>What all it is all about</h4>
          </div>
          <div class='k'>
            <div class='l'>
              
                <h1 class='oo'>Roller scating championship</h1>
                <p class='oo'>Date:20th</p>
                <h2 class='oo'>Venue:Roller scating track</h2>
                <button class='m'>Confirm Your Seats</button>
            </div>
          </div>
      </div>
    )
}

export default Userhome
