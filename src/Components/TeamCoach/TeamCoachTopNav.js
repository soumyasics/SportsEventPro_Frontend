import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../Assets/Frame 19.png';
import img1 from '../../Assets/Search Button.svg';
import img2 from '../../Assets/iconamoon_profile-bold.svg';
import img3 from '../../Assets/iconamoon_profile-bold(1).svg';
import img4 from '../../Assets/Log_Out.svg';
import img5 from '../../Assets/fe_arrow-up.svg';
import img6 from '../../Assets/mingcute_notification-line.svg';
import img7 from '../../Assets/octicon_x-16.svg';
import "../../Components/TeamCoach/TeamCoachTopNav.css"; // Adjust path as per your project structure
import axiosInstance from '../Constant/BaseURL';
import toast from 'react-hot-toast';
import { RiLockPasswordFill } from "react-icons/ri";


function TeamCoachTopNav() {
    const navigate = useNavigate();
    const [events, setEvents] = useState([]);
    const [showNotificationModal, setShowNotificationModal] = useState(false);
    const [data1, setData1] = useState({ name: '' });
    const [data, setData] = useState({
        complaint: '',
        name: data1.name,
        userRole: 'Team Coach'
    });


    // Logout function
    const handleLogout = () => {


        console.log("Logging out...");
        localStorage.setItem('tcId', "")
        navigate('/Aboutpage')
    };



    useEffect(() => {
        axiosInstance
            .post(`viewTeamCoachById/${localStorage.getItem('tcId')}`)
            .then((res) => {
                console.log(res);
                setData1(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [localStorage.getItem('tcId')]);

    useEffect(() => {
        axiosInstance
            .post(`viewUpcomingEvents`)
            .then((res) => {
                console.log("dat", res);
                setEvents(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [localStorage.getItem('tcId')]);

    const handleChange = (event) => {
        data.userRole = 'Team Coach';
        const { name, value } = event.target;
        console.log("work");
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleComplaintSubmit = () => {
        axiosInstance
            .post(`addComplaint`, data)
            .then((res) => {
                console.log(res);
                toast.success("Complaint submitted");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const toggleNotificationModal = () => {
        setShowNotificationModal(!showNotificationModal);
    };

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
                                        <div className='OrganiserProfContainDiv'>
                                            <img src={img2} alt=' ' />{/* put organiser image here pls */}
                                        </div>
                                    </ul>
                                </div>
                            </li>
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
                            <li className="nav-item" style={{ listStyle: "none" }}>
                                <div className="dropdown-center">
                                    <button className="btn btn-secondary TeamCoachNavBar-Nav-button"
                                        type="button"
                                        onClick={toggleNotificationModal}
                                        style={{ background: "none", border: "none" }}>
                                        <img src={img6} alt="Notifications" />
                                    </button>
                                </div>
                            </li>
                            <li className="nav-item" style={{ listStyle: "none", marginLeft: "10px", marginRight: '10px' }}>
                                <div className="dropdown-center">
                                    <button className="btn btn-secondary TeamCoachNavBar-Nav-button"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        style={{ background: "none", border: "none" }}>
                                        <h1 className='teamCoach-nav-h1'>{data1.name}</h1>{/*organiser name */}
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
                                            <Link className="dropdown-item" to="/TCResetPwd" >
                                            <RiLockPasswordFill  style={{marginRight:0, width:"35px" }} />

                                                Reset Password
                                            </Link>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/" onClick={handleLogout}>
                                                <img src={img4} alt="Logout" style={{ marginRight: "10px" }} />
                                                Logout
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {showNotificationModal && (

<div className="tc_modal-overlay">
<div className="tc_modal-content">
  <button className="tc_modal-close" onClick={toggleNotificationModal}>X</button>
  {events&&events.length > 0 ? (
                                    events.map(event => (
                                        <div className="notification-item tc_border" key={event._id}>
                                            <h5 className=''>{event.name}</h5>
                                            <h1 className='CardHeadTxtH1'>{event.category}</h1>
                                            <p className=''>Biggest Sports tournament held in {event.venue}. Don’t miss it!</p>{/* event description */}
                                            <h6 className=''>{event.date.slice(0,10)} {event.time}</h6> {/* event date and time */}
                                        </div>
                                    ))
                                ) : (
                                    <p>No notifications</p>
                                )}
  </div>
</div>




                // <div className="modal TeamCoach-Notification-Modal show" role="dialog" style={{ display: 'block' }}>
                //     <div className="modal-dialog modal-dialog-centered">
                //         {/* <div className="TeamCoach-modal-content"> */}
                //            <div>
                //             <div className="modal-body">
                //                 
                //             </div>
                //             <div className="TeamCoach-modal-footer">
                //                 <button type="button" className="btn btn-secondary" onClick={toggleNotificationModal}>Close</button>
                //             </div>
                //         </div>
                // </div>
                // </div>
            )}

            <div className="modal fade" id="Complaint-Modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Register Complaint</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <img src={img7} alt="Close" />
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="complaint" className="form-label">Complaint</label>
                                    <textarea className="form-control" id="complaint" name="complaint" rows="3" onChange={handleChange}></textarea>
                                </div>
                                <button type="button" className="btn btn-primary" onClick={handleComplaintSubmit}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamCoachTopNav;
