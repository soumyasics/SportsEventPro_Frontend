import React from 'react'
import './TeamCoachTopNav.css'
import img from '../../Assets/Frame 19.png'
import img1 from '../../Assets/Search Button.svg'
import img2 from '../../Assets/iconamoon_profile-bold.svg'
import img3 from '../../Assets/iconamoon_profile-bold(1).svg'
import img4 from '../../Assets/Log_Out.svg'
import img5 from '../../Assets/fe_arrow-up.svg'
import img6 from '../../Assets/mingcute_notification-line.svg'
import img7 from '../../Assets/ep_place.svg'
import { Link } from 'react-router-dom'

function TeamCoachTopNav() {

    return (

        <div>

            <nav className="navbar navbar-expand-lg bg-black TeamCoachNavbar-Nav">

                <div className="container-fluid" style={{zIndex:"1"}}>

                    <a className="navbar-brand TeamCoachNavBar-Nav-a-1" href=" "><img src={img} alt='' style={{ marginLeft: "20px", marginRight: "20px" }} />Sports Event Pro</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

                        <span className="navbar-toggler-icon"></span>

                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav Ul-Nav">

                            <li className="nav-item" style={{ marginLeft: "20px", marginRight: "20px" }}>

                                <Link to="/TeamCoachHomePage" style={{ textDecoration: "none" }}><a className="nav-link text-light TeamCoachNavBar-Nav-li-a" href=" ">Home</a></Link>

                            </li>

                            {/* My Team dropdown */}
                            <li className="nav-item" style={{ marginLeft: "20px", marginRight: "20px" }}>

                                <button className="nav-link text-light TeamCoachNavBar-Nav-li-a"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false" >My Team<img src={img5} alt=' ' /></button>
                                <div className="dropdown-center">

                                    <ul className="dropdown-menu " style={{ marginLeft: "-30px", marginTop: "10px" }} >

                                        <li>

                                            <a className="dropdown-item TeamCoachNavBar-Nav-li-a-2" href=" ">Add Team Members</a>

                                        </li>
                                        <li>

                                            <a className="dropdown-item TeamCoachNavBar-Nav-li-a-2" href=" ">View Team Members</a>

                                        </li>
                                        <li>

                                            <a className="dropdown-item TeamCoachNavBar-Nav-li-a-2" href=" ">Add Substitute</a>

                                        </li>

                                    </ul>

                                </div>

                            </li>

                            {/* My events dropdown */}
                            <li className="nav-item" style={{ marginLeft: "20px", marginRight: "20px" }}>

                                <button className="nav-link text-light TeamCoachNavBar-Nav-li-a"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">My Events
                                    <img src={img5} alt=' ' />
                                </button>

                                <div className="dropdown-center">

                                    <ul className="dropdown-menu " style={{ marginLeft: "-30px", marginTop: "10px" }} >

                                        <li>

                                            <a className="dropdown-item TeamCoachNavBar-Nav-li-a-2" href=" ">Enrolled Events</a>

                                        </li>

                                        <li>

                                            <a className="dropdown-item TeamCoachNavBar-Nav-li-a-2" href=" ">Results</a>

                                        </li>

                                        <li>

                                            <a className="dropdown-item TeamCoachNavBar-Nav-li-a-2" href=" ">View Reviews</a>

                                        </li>
                                        
                                        <li>

                                            <a className="dropdown-item TeamCoachNavBar-Nav-li-a-2" href=" ">Register Complaint</a>

                                        </li>

                                    </ul>

                                </div>

                            </li>

                        </ul>

                        {/* Search */}
                        <li className='nav-item ' style={{ listStyle: "none" }}>

                            <div className='TeamCoach-search-container'>

                                <input type='search' placeholder='Search Here' className='TeamCoach-search'></input>
                                <button className='TeamCoach-search-button'> <img src={img1} alt=' ' /> </button>

                            </div>

                        </li>


                        {/* Notification dropdown */}
                        <li className="nav-item" style={{ listStyle: "none", marginLeft: "10px" }}>

                            <div className="dropdown-center">
                                
                                {/* the button */}
                                <button className="btn btn-secondary TeamCoachNavBar-Nav-button"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{ background: "none", border: "none" }}
                                >

                                    <img src={img6} alt=' ' />

                                </button>
                                
                                {/* the dropdown starts here..... */}
                                <ul className="dropdown-menu TeamCoachNavBar-noti-contain" >

                                    <li className='TeamCoachNavBar-noti-li'>
                                        
                                        {/* a single row start */}
                                        <div className='TeamCoachNavBar-noti-div'> 
                                            
                                            <div className='TeamCoachNavbar-noti-div-div'>

                                                <div>
                                                    <img src={img7} alt=''/>
                                                </div>

                                                <div>
                                                    
                                                    {/* to map notfification array do it to stuff inside this */}
                                                    <div>

                                                        <h1 className='TeamCoachNavBar-noti-div-div-h1'>TVM Junior Sports</h1>
                                                        
                                                        <div className='TeamCoachNavBar-noti-div-div-div'>
                                                            <h2 className='TeamCoachNavBar-noti-div-div-h2'>Football</h2>
                                                        </div>

                                                    </div>
                                                    
                                                    <div>
                                                        
                                                        <h2 className='TeamCoachNavBar-noti-div-div-h2'>Biggest Sports tournament held in Trivandrum. Don’t miss it!</h2>
                                                        
                                                        <div className='TeamCoachNavBar-noti-div-div-div-2'>
                                                            <h2 className='TeamCoachNavBar-noti-div-div-h2'>12/12/2024, 2:00 PM</h2>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>
                                            

                                        </div>
                                        {/* a single row end */}
                                        {/* a single row start */}
                                        <div className='TeamCoachNavBar-noti-div'> 
                                            
                                            <div className='TeamCoachNavbar-noti-div-div'>

                                                <div>
                                                    <img src={img7} alt=''/>
                                                </div>

                                                <div>
                                                    
                                                    {/* to map notfification array do it to stuff inside this */}
                                                    <div>

                                                        <h1 className='TeamCoachNavBar-noti-div-div-h1'>TVM Junior Sports</h1>
                                                        
                                                        <div className='TeamCoachNavBar-noti-div-div-div'>
                                                            <h2 className='TeamCoachNavBar-noti-div-div-h2'>Football</h2>
                                                        </div>

                                                    </div>
                                                    
                                                    <div>
                                                        
                                                        <h2 className='TeamCoachNavBar-noti-div-div-h2'>Biggest Sports tournament held in Trivandrum. Don’t miss it!</h2>
                                                        
                                                        <div className='TeamCoachNavBar-noti-div-div-div-2'>
                                                            <h2 className='TeamCoachNavBar-noti-div-div-h2'>12/12/2024, 2:00 PM</h2>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>
                                            

                                        </div>
                                        {/* a single row end */}
                                        {/* a single row start */}
                                        <div className='TeamCoachNavBar-noti-div'> 
                                            
                                            <div className='TeamCoachNavbar-noti-div-div'>

                                                <div>
                                                    <img src={img7} alt=''/>
                                                </div>

                                                <div>
                                                    
                                                    {/* to map notfification array do it to stuff inside this */}
                                                    <div>

                                                        <h1 className='TeamCoachNavBar-noti-div-div-h1'>TVM Junior Sports</h1>
                                                        
                                                        <div className='TeamCoachNavBar-noti-div-div-div'>
                                                            <h2 className='TeamCoachNavBar-noti-div-div-h2'>Football</h2>
                                                        </div>

                                                    </div>
                                                    
                                                    <div>
                                                        
                                                        <h2 className='TeamCoachNavBar-noti-div-div-h2'>Biggest Sports tournament held in Trivandrum. Don’t miss it!</h2>
                                                        
                                                        <div className='TeamCoachNavBar-noti-div-div-div-2'>
                                                            <h2 className='TeamCoachNavBar-noti-div-div-h2'>12/12/2024, 2:00 PM</h2>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>
                                            

                                        </div>
                                        {/* a single row end */}
                                        {/* a single row start */}
                                        <div className='TeamCoachNavBar-noti-div'> 
                                            
                                            <div className='TeamCoachNavbar-noti-div-div'>

                                                <div>
                                                    <img src={img7} alt=''/>
                                                </div>

                                                <div>
                                                    
                                                    {/* to map notfification array do it to stuff inside this */}
                                                    <div>

                                                        <h1 className='TeamCoachNavBar-noti-div-div-h1'>TVM Junior Sports</h1>
                                                        
                                                        <div className='TeamCoachNavBar-noti-div-div-div'>
                                                            <h2 className='TeamCoachNavBar-noti-div-div-h2'>Football</h2>
                                                        </div>

                                                    </div>
                                                    
                                                    <div>
                                                        
                                                        <h2 className='TeamCoachNavBar-noti-div-div-h2'>Biggest Sports tournament held in Trivandrum. Don’t miss it!</h2>
                                                        
                                                        <div className='TeamCoachNavBar-noti-div-div-div-2'>
                                                            <h2 className='TeamCoachNavBar-noti-div-div-h2'>12/12/2024, 2:00 PM</h2>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>
                                            

                                        </div>
                                        {/* a single row end */}
                                    </li>

                                </ul>
                                {/* dropdown ends here...... */}

                            </div>

                        </li>

                        {/* Profile */}
                        <li className="nav-item" style={{ listStyle: "none", marginLeft: "10px", marginRight: '10px' }}>

                            <div className="dropdown-center">

                                <button className="btn btn-secondary TeamCoachNavBar-Nav-button"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{ background: "none", border: "none" }}
                                >

                                    <img src={img2} alt=' ' />

                                </button>

                                <ul className="dropdown-menu " style={{ marginLeft: "-110px", marginTop: "10px" }} >

                                    <li>

                                        <Link to="/TeamCoachProfile" className='TeamCoachLink'><a className="dropdown-item" href=" "><img src={img3} alt=' ' style={{ marginRight: "10px" }} />Profile</a></Link>

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

export default TeamCoachTopNav
