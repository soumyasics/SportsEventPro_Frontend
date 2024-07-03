import React from 'react'
import './ViewerNavBar.css'
import img from '../../Assets/Frame 19.png'
import img2 from '../../Assets/iconamoon_profile-bold.svg'
import img3 from '../../Assets/iconamoon_profile-bold(1).svg'
import img4 from '../../Assets/Log_Out.svg'


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

                                <a className="nav-link text-light ViewerNavBar-Nav-li-a" aria-current="page" href=" ">Home</a>

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

                        <li className="nav-item" style={{ listStyle: "none" , marginLeft:"78.5px" , marginRight:'20px'}}>

                            {/* className='nav-link text-light ' */}

                            <div className="dropdown-center">

                                <button className="btn btn-secondary ViewerNavBar-Nav-button"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{ background: "none", border: "none" }}
                                >

                                    <img src={img2} alt=' ' /> 
                                    
                                </button>

                                <ul className="dropdown-menu " style={{ marginLeft: "-105px" }} >

                                    <li>

                                        <a className="dropdown-item" href=" "><img src={img3} alt=' ' />Profile</a>

                                    </li>

                                    <li>

                                        <a className="dropdown-item" href=" "><img src={img4} alt=' ' />Logout</a>

                                    </li>

                                </ul>

                            </div>

                        </li>

                    </div>

                </div>

            </nav>

        </div>

    )

}

export default ViewerNavBar
