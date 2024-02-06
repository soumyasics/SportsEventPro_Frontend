import React from 'react'
import './Features.css'
import i from './Assets/Rectangle 7.png'
import i2 from './Assets/Rectangle 8.png'
import i3 from './Assets/Rectangle 9.png'
import i4 from './Assets/Rectangle 10.png'
import i5 from './Assets/Rectangle 6.png'
import i6 from './Assets/Ellipse 5.png'
import i7 from './Assets/Rectangle 32.png'
import i8 from './Assets/Rectangle 11.png'



function Features() {
  return (
    <div>
      <div>
        <h3>Features</h3>
        <p>What all it is all about</p>
        <div>
        <img src={i} alt=""/>
        <img src={i2} alt=""/>
        <img src={i3} alt=""/>
        <img src={i4} alt=""/>
        </div>
        <div class='q'>
            <div>
            <button class='qa'>Search</button>
            </div>
            <div>
            <button class='qb'>Follow</button>
            </div>
            <div>
            <button class='qc'>Book</button>
            </div>
            <div>
            <button class='qd'>Play</button>
            </div>
        </div>
        <div>
        <button class='qe'>KNOW MORE</button>
        </div>
      </div>
      <div class='qf'>
        <img src={i5} alt=""style={{maxWidth:"100%"}}/>
        <div class='qg'>
        <h1 class='qj'>Its not just a play its</h1>
        </div>
        <div class='qh'>
        <h1 class='qk'>Its an emotion</h1>
      </div>
      </div>
      <div class='qi'>
        <h3 class='ql'>Recent added event</h3>
        <img src={i6} alt="" class='qm'/>
        <div>
        <button class='qn'>Book NOW</button>
        </div>
        <h4 class='qo'>Share your first spark and set the stage for an epic adventure.</h4>
        <h3 class='qp'>AMAZING CYCLE RACING EVENT IN YOUR CITY</h3>
        <h6 class='qq'>CHECK IF ITS YOUR CHOICE</h6>
      </div>
    <div>
    <img src={i7} alt="" class='qm'/>
    <div>
        <button class='qy'>5KM TRACK</button>
        <button class='qz'>ALL TEAMS</button>
        <div>
        <button class='na'>BOOK EVENT</button>
        <div class='nb'></div>
    <h></h>
        </div>
    </div>
    </div>
    <div>
    <img src={i8} alt="" class='nc'/>
    <p class='nd'>THE FIRST OF ITS KIND SPORTS</p>
    <p class='ne'>EVENT PRO PLATFORM.</p>
    <p class='nf'>JUST AMAZING WOW!</p>
    <h3 class='ng'>ITS NOT JUST SPORTS</h3>
    <h3 class='nh'>START YOUR FIRST EVENT TODAY</h3>
    </div>
    <div>
    <div class="card">
  <div class="card-body">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16" style={{marginTop:"-3px"}}>
                      <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                  </svg>
                  <button class='nl'>ABOUT</button>
                  <button class='nl'>GALLERY</button>
                  <button class='nl'>CONTACT</button>
  </div>
  </div>
</div>
    </div>
  )
}

export default Features
