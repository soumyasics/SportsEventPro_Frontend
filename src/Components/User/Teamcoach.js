import React from 'react'
import "./Teamcoach.css"
import img from './Assets/image 6.png'
function Teamcoach() {
  return (
        <div>

            <div className='div5'>
            <form>
                <hi class="text">Teamcoach Registration Page</hi>
            <div class="div" >
                <img className='img1' src={img}/>
                </div>
            <div class="mainform" >
            <div >



                <input className='input1' type='text' placeholder='Name' />
            </div>
            <div>
                <input className='input2' type='text' placeholder='District' />

            </div>
            <div>
                <input className='input3' type='email' placeholder='Email' />

            </div>
            <div>
                <input className='input4' type='number' placeholder='Contact number' />
            </div>
            <div>
                <input className='input5' type='text' placeholder='Team name' />

            </div>


            <div class="dropdown dropdowninput">
                <button class="btn btn-secondary dropdown-toggle dropdowninput" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Teamsport
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Football</a></li>
                    <li><a class="dropdown-item" href="#">Cricket</a></li>
                    <li><a class="dropdown-item" href="#">Hockey</a></li>
                </ul>
            </div>
            <div>
                <input className='input6' type='text' placeholder='Experience in years' />

            </div>

            <div>
                <input className='input6' type='file' placeholder='Experience in years' />

            </div>
            <div>
                <input className='input6' type='submit' placeholder='submit' />

            </div>


            </div>







            </form>

            </div>



        </div>
    )
}

export default Teamcoach