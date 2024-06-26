import React from 'react'
import './OrganiserSideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

function OrganiserSideBar() {

    return (

        <div>

            <div className='OrganiserSideBarmaindiv1'>

                <div className='OrganiserSideBarmaindiv2'>

                    <div>

                        <button className='OrganiserSideBarbutton-1'>Dashboard</button>

                    </div>

                    <div>

                        <button className='OrganiserSideBarbutton-2'>Enroll Requests</button>

                    </div>

                    <div>

                        <button className='OrganiserSideBarbutton-2'>Schedule Events</button>

                    </div>

                    <div class="dropdown">

                        <a class="btn OrganiserSideBarbutton-2" data-bs-toggle="collapse" href="#li-1" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Ticket Management <FontAwesomeIcon className='mt-1 ms-2 ' icon={faAngleDown} />
                        </a>


                        <ul class="collapse list-group mt-2 rounded-2" id='li-1'>

                            <li><a class="list-group-item ms-4 w-75 rounded-top-2" href=" ">Ticket Generation</a></li>
                            <li><a class="list-group-item ms-4 w-75 rounded-bottom-2" href=" ">View Report</a></li>

                        </ul>

                    </div>

                    <div>

                        <button className='OrganiserSideBarbutton-2'>Scoreboard</button>

                    </div>

                    <div class="dropdown">

                        <a class="btn OrganiserSideBarbutton-2" data-bs-toggle="collapse" href="#li-2" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Blogs <FontAwesomeIcon className='mt-1 ' style={{ marginLeft: "66.5%" }} icon={faAngleDown} />
                        </a>

                        <ul class="collapse list-group mt-2 rounded-2" id='li-2'>

                            <li><a class="list-group-item ms-4 rounded-top-2 w-75" href=" ">Add Blogs</a></li>
                            <li><a class="list-group-item ms-4 rounded-bottom-2 w-75" href=" ">View Blogs</a></li>

                        </ul>

                    </div>

                    <div>

                        <button className='OrganiserSideBarbutton-2'>Complaints</button>

                    </div>

                    <div>

                        <button type="button" class="OrganiserSideBarbutton-2" data-bs-toggle="modal" data-bs-target="#Logout-Modal">Logout</button>

                        <div class="modal fade" id="Logout-Modal" tabindex="-1" aria-hidden="true">

                            <div class="modal-dialog modal-dialog-centered" style={{width:"747px" , height:"298px"}}>

                                <div >

                                    <div class="modal-body">

                                        <h1 className='ModalDialog-h1'>Logout</h1>
                                        <p className='ModalDialog-p'>Are you sure you want to log out ? </p>
                                        
                                        <div className='ModalDialog-button-contain'>

                                            <button type="button" class="ModalDialog-button-1">Yes</button>
                                            <button type="button" class="ModalDialog-button-2" data-bs-dismiss="modal">No</button>
                                            
                                        </div>

                                    </div>

                                </div>

                            </div>
                            
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )

}

export default OrganiserSideBar
