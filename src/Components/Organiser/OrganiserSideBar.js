import React, { useEffect, useState } from 'react'
import './OrganiserSideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import img7 from '../../Assets/octicon_x-16.svg'
import axiosInstance from '../Constant/BaseURL'


function OrganiserSideBar() {

    const [data1, setData1] = useState({
        name: '',
    })
    useEffect(() => {
        axiosInstance
            .post(`/viewOrganizerById/${localStorage.getItem("organizerId")}`)
            .then((res) => {
                console.log(res);
                setData(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [localStorage.getItem("organizerId")]);
    const [data, setData] = useState({

        complaint: '',
        name: data1.name,
        userRole:'Organizer'
      })
    const handleChange=(event)=>{
        data.userRole='Organizer'
        const { name, value } = event.target;
        console.log("work");
        setData(prevData => ({
          ...prevData,
          [name]: value
        }));
    }

    const handleComplaintSubmit = () => {
        // Your function logic here
        alert("Complaint submitted");
        axiosInstance
        .post(`/addComplaint`,data)
        .then((res) => {
            console.log(res);
            // setData(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }    




























    const url = axiosInstance.defaults.url;
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axiosInstance.post('/addComplaint')
            .then(res => {
                console.log(res);
                setUserData(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);






    const navigate = useNavigate()
    const [comp, setComp] = useState({
        organizerId:localStorage.getItem('organizerId'),
        complaint:'',
        userRole:'organizer'
    });
    const handleChange = (event) => {
    
        const { name, value } = event.target;
       
            setComp(prevData => ({
                ...prevData,
                [name]: value
            }));
        
    };
    const handleLogout = (e) => {
        console.log(e);

        console.log("Logging out...");
        localStorage.setItem('organizerId', "")
        navigate('/')
    };
    useEffect(() => {
        if (localStorage.getItem("organizerId") == "") {
            navigate("/");
        }
    }, [navigate]);

    const addcomplaint=()=>{
        console.log("fun called", comp);

        axiosInstance.post('addComplaint', comp)

            .then(response => {

                console.log(response);

                if (response.data.status == 200) {

                    alert("Complaint Added Succesfully")
                    navigate('/OrganizerDashboard')
                }

                else {

                    alert(response.data.msg)
                }

            })
            .catch(error => {

                console.error(error);

            })
    }
    return (

        <div className='OrganiserSideBar'>

            <div className='OrganiserSideBarmaindiv1'>

                <div className='OrganiserSideBarmaindiv2'>

                    <div>

                        <Link to='/OrganizerDashboard' style={{ textDecoration: "none", color: "white" }}>
                            <button className='OrganiserSideBarbutton-1'>Dashboard</button>
                        </Link>

                    </div>

                    <div>

                        <Link to='/OrganizerEnroll' style={{ textDecoration: "none", color: "white" }}>
                            <button className='OrganiserSideBarbutton-2'>Enroll Requests</button>
                        </Link>

                    </div>

                    <div>

                        <Link to='/OrganizerScheduleEvents' style={{ textDecoration: "none", color: "white" }}>
                            <button className='OrganiserSideBarbutton-2'>Schedule Events</button>
                        </Link>
                    </div>

                    <div>

                        <Link to='/OrganizerViewEvents' style={{ textDecoration: "none", color: "white" }}>
                            <button className='OrganiserSideBarbutton-2'>View Events</button>
                        </Link>

                    </div>
                    <div class="dropdown">

                        <a class="btn OrganiserSideBarbutton-2" data-bs-toggle="collapse" href="#li-1" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Ticket Management
                            <FontAwesomeIcon className='mt-1 ms-2 ' icon={faAngleDown} />
                        </a>

                        <ul class="collapse list-group mt-2 rounded-2" id='li-1'>

                            <Link to='/OrganizerTicketGen2' style={{ textDecoration: 'none' }}><li style={{ listStyle: 'none' }}><a class="list-group-item ms-4 w-75 rounded-top-2" href=" ">Ticket Generation</a></li></Link>
                            <Link to='/OrganizerViewReport' style={{ textDecoration: 'none' }}><li style={{ listStyle: 'none' }}><a class="list-group-item ms-4 w-75 rounded-bottom-2" href=" ">View Report</a></li></Link>

                        </ul>

                    </div>

                    <div>

                        <Link to='/OrganizerScoreBoard' style={{ textDecoration: "none", color: "white" }}>
                            <button className='OrganiserSideBarbutton-2'>Scoreboard</button>
                        </Link>

                    </div>

                    <div class="dropdown">

                        <a class="btn OrganiserSideBarbutton-2" data-bs-toggle="collapse" href="#li-2" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Blogs <FontAwesomeIcon className='mt-1 ' style={{ marginLeft: "66.5%" }} icon={faAngleDown} />
                        </a>

                        <ul class="collapse list-group mt-2 rounded-2" id='li-2'>

                            <li style={{ listStyle: 'none' }}><Link to="/OrganiserAddBlogs " class="list-group-item ms-4 rounded-top-2 w-75" href=" ">Add Blogs</Link></li>
                            <li style={{ listStyle: 'none' }}><Link to="/OrganizerViewBlogs " class="list-group-item ms-4 rounded-bottom-2 w-75" href=" ">View Blogs</Link></li>

                        </ul>

                    </div>

                    <div>

                        <button className='OrganiserSideBarbutton-2' data-bs-toggle="modal" data-bs-target="#Complaint-Modal">Complaints</button>

                    </div>

                    <div>

                        <button type="button" class="OrganiserSideBarbutton-2" data-bs-toggle="modal" data-bs-target="#Logout-Modal">Logout</button>

                        {/* <div class="modal fade" id="Logout-Modal" tabIndex="-1" aria-hidden="true">

                            <div class="modal-dialog modal-dialog-centered" style={{ width: "747px", height: "298px" }}>

                                <div>

                                    <div class="modal-body">

                                        <h1 className='ModalDialog-h1'>Logout</h1>
                                        <p className='ModalDialog-p'>Are you sure you want to log out ? jhjhj</p>

                                        <div className='ModalDialog-button-contain'>
                            <Link onClick={()=>{console.log('hi')}}>
                            <button type="button" >Yes</button>
                            </Link>
                                    <input type='button' onClick={()=>{alert('hello');}} value='btn'       ></input>

                                            <button type="button" class="ModalDialog-button-2" data-bs-dismiss="modal" >No</button>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div> */}

                        {/* Logout modal */}
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

                        {/* complaints */}
                        <div>

                            <div className="modal fade" id="Complaint-Modal" tabIndex="-1" aria-labelledby="Complaint-ModalLabel" aria-hidden="true">

                                <div className="modal-dialog modal-dialog-centered">

                                    <div className="modal-content">

                                        <div className="modal-body EEP">

                                            <div className='modal-body-in'>
                                                <img src={img7} alt=' ' className='imageEE' data-bs-dismiss="modal" aria-label="Close" />

                                                <h1 className='h1ishere'>Register a Complaint</h1>
                                                <input type='textarea' className='txtArea' name='complaint' onChange={handleChange}></input>
                                            </div>
                                            <div className='ModalDialog-button-contain'>
                                                <button type="button" className="ModalDialog-button-2EE" data-bs-dismiss="modal" onClick={handleComplaintSubmit} onClick={addcomplaint}>Submit</button>
                                            </div>

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
