import React from 'react'
import './ViewerNavBar.css'
import img from '../../Assets/Frame 19.png'
import img2 from '../../Assets/iconamoon_profile-bold.svg'
import img3 from '../../Assets/iconamoon_profile-bold(1).svg'
import img4 from '../../Assets/Log_Out.svg'
import { Link } from 'react-router-dom'


function ViewerNavBar() {

    return (

        <div>

            <nav className="navbar navbar-expand-lg bg-black ViewerNavbar-Nav">

                <div className="container-fluid">

                    <a className="navbar-brand ViewerNavBar-Nav-a-1" href=" "><img src={img} alt='' style={{ marginLeft: "20px", marginRight: "20px" }} />Sports Event Pro</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

                        <span className="navbar-toggler-icon"></span>

                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav" style={{ marginLeft: "151px", marginRight: "151px" }}>

                            <li className="nav-item">

                                <Link to="/ViewerHomePage" style={{textDecoration:"none"}}><a className="nav-link text-light ViewerNavBar-Nav-li-a" href=" ">Home</a></Link>

                            </li>

                            <li className="nav-item">

                                <a className="nav-link text-light ViewerNavBar-Nav-li-a" href=" ">About</a>

                            </li>

                            <li className="nav-item">

                                <a className="nav-link text-light ViewerNavBar-Nav-li-a" href=" ">Upcoming Events</a>

                            </li>

                            <li className="nav-item">

                                <a className="nav-link text-light ViewerNavBar-Nav-li-a" href=" ">Book Tickets</a>

                            </li>

                            <li className="nav-item">

                                <a className="nav-link text-light ViewerNavBar-Nav-li-a" href=" ">Scoreboard</a>

                            </li>

                            <li className="nav-item">

                                <a className="nav-link text-light ViewerNavBar-Nav-li-a" href=" ">Reviews & Ratings</a>

                            </li>

                            <li className="nav-item">

                                <a className="nav-link text-light ViewerNavBar-Nav-li-a" href=" ">Blogs</a>

                            </li>

                        </ul>

                        <li className="nav-item" style={{ listStyle: "none", marginLeft: "78.5px", marginRight: '20px' }}>

                            <div className="dropdown-center">

                                <button className="btn btn-secondary ViewerNavBar-Nav-button"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{ background: "none", border: "none" }}
                                >

                                    <img src={img2} alt=' ' />

                                </button>

                                <ul className="dropdown-menu " style={{ marginLeft: "-110px" }} >

                                    <li>

                                        <Link to="/ViewerProfile" className='ViewerLink'><a className="dropdown-item" href=" x"><img src={img3} alt=' ' style={{ marginRight: "10px" }} />Profile</a></Link>

                                    </li>

                                    <li>

                                        <button className="dropdown-item" data-bs-toggle="modal" data-bs-target="#Logout-Modal" ><img src={img4} alt=' ' style={{ marginRight: "10px" }} />Logout</button>

                                    </li>

                                </ul>

                            </div>

                        </li>

                    </div>

                </div>

            </nav>

            <div class="modal fade" id="Logout-Modal" tabindex="-1" aria-labelledby="Logout-ModalLabel" aria-hidden="true">

                <div class="modal-dialog modal-dialog-centered" style={{ width: "747px", height: "298px" }}>

                    <div className="modal-content">

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

    )

}

export default ViewerNavBar
