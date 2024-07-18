
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../Assets/Frame 19.png';
import img1 from '../../Assets/Search Button.svg';
import img2 from '../../Assets/iconamoon_profile-bold.svg';
import img3 from '../../Assets/iconamoon_profile-bold(1).svg';
import img4 from '../../Assets/Log_Out.svg';
import img5 from '../../Assets/fe_arrow-up.svg';
import img6 from '../../Assets/mingcute_notification-line.svg';
import img7 from '../../Assets/octicon_x-16.svg'
import "../../Components/TeamCoach/TeamCoachTopNav.css"; // Adjust path as per your project structure
import ReactStars from 'react-stars';
import axiosInstance from '../Constant/BaseURL';

function TeamCoachTopNav() {

    const navigate = useNavigate()
    const handleLogout = () => {

        console.log("Logging out...");
        localStorage.setItem('tcId', "")
        navigate('/')
    };
    useEffect(() => {
        if (localStorage.getItem("tcId") == "") {
            navigate("/TeamCoachLogin");
        }
    }, [navigate]);
    const [data1, setData1] = useState({
        name: '',
    })
    useEffect(() => {
        axiosInstance
            .post(`viewTeamCoachById/${localStorage.getItem('tcId')}`)
            .then((res) => {
                console.log(res);
                setData(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [localStorage.getItem('tcId')]);
    const [data, setData] = useState({

        complaint: '',
        name: data1.name,
        userRole:'Team Coach'
      })
    const handleChange=(event)=>{
        data.userRole='Team Coach'
        const { name, value } = event.target;
        console.log("work");
        setData(prevData => ({
          ...prevData,
          [name]: value
        }));
    }

    const handleComplaintSubmit = () => {
        // Your function logic here
        console.log("Complaint submitted");
        axiosInstance
        .post(`addComplaint`,data)
        .then((res) => {
            console.log(res);
            // setData(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }    
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-black TeamCoachNavbar-Nav">
                <div className="TeamCoachNavbar-Nav-1">
                    <a className="navbar-brand TeamCoachNavBar-Nav-a-1" href="/">

                        <img src={img} alt="Logo" style={{ marginLeft: "20px", marginRight: "20px" }} />
                        Sports Event Pro
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav TeamCoachNavbarNav-ul" style={{ marginRight: "180px" }}>

                            <li className="nav-item" style={{ marginRight: "20px" }}>

                                <Link to="/TeamCoachHomePage" style={{ textDecoration: "none" }}>
                                    <a className="nav-link text-light TeamCoachNavBar-Nav-li-a" href="/">Home</a>
                                </Link>

                            </li>

                            {/* My Team dropdown */}

                            <li className="nav-item" style={{ listStyle: "none", marginLeft: "10px", marginRight: '10px' }}>

                                <div className="dropdown-center">

                                    <button className="btn btn-secondary TeamCoachNavBar-Nav-button"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        style={{ background: "none", border: "none" }}>
                                        My Team
                                    </button>

                                    <img src={img5} alt=""
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    />

                                    <ul className="dropdown-menu" style={{ marginTop: "10px" }}>

                                        <Link to="/TeamCoachAddTeamMembers" className='TeamCoachLink'>

                                            <li>
                                                <a className="dropdown-item TeamCoachNavBar-Nav-li-a-2" href="/">Add Team Members</a>
                                            </li>

                                        </Link>

                                        <Link to="/TeamCoachViewTeamMembers" className='TeamCoachLink'>

                                            <li>
                                                <a className="dropdown-item TeamCoachNavBar-Nav-li-a-2" href="/">View Team Members</a>
                                            </li>

                                        </Link>

                                        {/* <li>
                                            <a className="dropdown-item TeamCoachNavBar-Nav-li-a-2" href="/">Add Substitute</a>
                                        </li> */}

                                    </ul>

                                </div>

                            </li>




                            {/* My events dropdown */}


                            <li className="nav-item" style={{ listStyle: "none", marginLeft: "10px", marginRight: '10px' }}>
                                <div className="dropdown-center">
                                    <button className="btn btn-secondary TeamCoachNavBar-Nav-button"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        style={{ background: "none", border: "none" }}>
                                        My Events
                                    </button>

                                    <img src={img5} alt="" data-bs-toggle="dropdown" aria-expanded="false" />

                                    <ul className="dropdown-menu" style={{ marginTop: "10px" }}>

                                    <li>
                                            <Link to="/TeamCoachEnrollNow" className='TeamCoachLink'>

                                                <a className="dropdown-item TeamCoachNavBar-Nav-li-a-2" href="/">Enroll Now</a>
                                            </Link>
                                        </li>
                                        
                                        <Link to="/TeamCoachEnrolledEvents" className='TeamCoachLink'>
                                        <li>
                                                <a className="dropdown-item TeamCoachNavBar-Nav-li-a-2" href="/">Enrolled Events</a>
                                            </li>

                                        </Link>

                                        <Link to='/TeamCoachResults' className='TeamCoachLink'>

                                            <li>
                                                <a className="dropdown-item TeamCoachNavBar-Nav-li-a-2" href="/">Results</a>
                                            </li>

                                        </Link>

                                        <Link to='/TeamCoachRR' className='TeamCoachLink'>

                                            <li>
                                                <a className="dropdown-item TeamCoachNavBar-Nav-li-a-2" href="/">View Reviews</a>
                                            </li>

                                        </Link>

                                        <li>
                                            <a className="dropdown-item TeamCoachNavBar-Nav-li-a-2" href=" " data-bs-toggle="modal" data-bs-target="#Complaint-Modal">Register Complaint</a>
                                        </li>

                                    </ul>

                                </div>

                            </li>

                            {/* Search */}
                            <li className='nav-item '>
                                <div className='TeamCoach-search-container'>
                                    <input type='search' placeholder='Search Here' className='TeamCoach-search'></input>
                                    <button className='TeamCoach-search-button'>
                                        <img src={img1} alt="Search" />
                                    </button>
                                </div>
                            </li>
                        </ul>
                        <div className='TeamCoachNavBar-Navli'>
                            {/* Notification */}
                            <li className="nav-item" style={{ listStyle: "none" }}>
                                <div className="dropdown-center">
                                    <button className="btn btn-secondary TeamCoachNavBar-Nav-button"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        style={{ background: "none", border: "none" }}>
                                        <img src={img6} alt="Notifications" />
                                    </button>
                                    <ul className="dropdown-menu TeamCoachNavBar-noti-contain">
                                        {/* Notification items can go here */}
                                    </ul>
                                </div>
                            </li>
                            {/* Profile */}
                            <li className="nav-item" style={{ listStyle: "none", marginLeft: "10px", marginRight: '10px' }}>
                                <div className="dropdown-center">
                                    <button className="btn btn-secondary TeamCoachNavBar-Nav-button"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        style={{ background: "none", border: "none" }}>
                                        <img src={img2} alt="Profile" />
                                    </button>
                                    <ul className="dropdown-menu" style={{ marginLeft: "-110px", marginTop: "10px" }}>
                                        <li>
                                            <Link to="/Teamcoachviewprofilepopup" className='TeamCoachLink'>
                                                <a className="dropdown-item" href="/">
                                                    <img src={img3} alt="Profile" style={{ marginRight: "10px" }} />
                                                    Profile
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <button className="dropdown-item" data-bs-toggle="modal" data-bs-target="#Logout-Modal">
                                                <img src={img4} alt="Logout" style={{ marginRight: "10px" }} />
                                                Logout
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                        </div>
                    </div>
                </div>
            </nav>
            {/* <div className="modal fade" id="Logout-Modal" tabIndex="-1" aria-labelledby="Logout-ModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" style={{ width: "747px", height: "298px" }}>
                    <div className="modal-content">
                        <div className="modal-body">
                            <h1 className='ModalDialog-h1'>Logout</h1>
                            <p className='ModalDialog-p'>Are you sure you want to log out ?</p>
                            <div className='ModalDialog-button-contain'>
                                <button type="button" className="ModalDialog-button-1">Yes</button>
                                <button type="button" className="ModalDialog-button-2" data-bs-dismiss="modal">No</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="modal fade" id="Logout-Modal" tabIndex="-1" aria-labelledby="Logout-ModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" style={{ width: "747px", height: "298px" }}>
                    <div className="modal-content">
                        <div className="modal-body">
                            <h1 className='ModalDialog-h1'>Logout</h1>
                            <p className='ModalDialog-p'>Are you sure you want to log out ?</p>
                            <div className='ModalDialog-button-contain'>
                                <button type="button" className="ModalDialog-button-1" onClick={handleLogout} data-bs-dismiss="modal">Yes</button>
                                <button type="button" className="ModalDialog-button-2" data-bs-dismiss="modal">No</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* div containing the modal */}

            <div>

                <div className="modal fade" id="Complaint-Modal" tabIndex="-1" aria-labelledby="Complaint-ModalLabel" aria-hidden="true">

                    <div className="modal-dialog modal-dialog-centered">

                        <div className="modal-content">

                            <div className="modal-body EEP">

                                <div className='modal-body-in'>
                                    <img src={img7} alt=' ' className='imageEE' data-bs-dismiss="modal" aria-label="Close" />

                                    <h1 className='h1ishere'>Register a Complaint</h1>
                                    <input type='textarea' className='txtArea' name="complaint" onChange={handleChange}></input>
                                </div>
                                <div className='ModalDialog-button-contain'>
                                    <button type="button" className="ModalDialog-button-2EE" data-bs-dismiss="modal"  onClick={handleComplaintSubmit}>Submit</button>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default TeamCoachTopNav;

