import React, { useEffect, useState } from "react";
import './OrganiserEnroll.css'
import img from "../../Assets/frame2.png"
import img2 from '../../Assets/charm_square-tick.svg'
import img3 from '../../Assets/mynaui_x-square.svg'
import axiosInstance from "../Constant/BaseURL";
import { Link, useNavigate } from "react-router-dom";

function OrganiserEnroll() {

    const navigate = useNavigate()
const id=localStorage.getItem('organizerId')
    const [userData, setUserData] = useState([]);
    const url = axiosInstance.defaults.url;
    console.log("url,", url);
    const getData=()=>{
        axiosInstance.post(`viewEnrollmentsByOrganizerId/${id}`).then(res => {

            console.log(res);

            if ((res.data.data).length > 0)
                setUserData(res.data.data);
            else
                setUserData(null)
            console.log(res.data.data);
        }).catch(err => {
            console.log(err);
        })

    }
    useEffect(() => {

        let res;


     getData()


    }, []);
    useEffect(() => {
        console.log("users", userData);
    })




    const approve = (id) => {

        axiosInstance
          .post(`/approveEnrollmentById/${id}`)
          .then((res) => {
            if (res.data.status === 200) {
              alert("Event Approved");
              getData()

            }
          })
          .catch((error) => {
            console.error("Error!", error);
          });
      };
    
      const reject = (id) => {
        axiosInstance
          .post(`/rejectEnrollmentById/${id}`)
          .then((res) => {
            if (res.data.status === 200) {
              alert(" Request Rejected");
              getData()

            }
          })
          .catch((error) => {
            console.error("Error!", error);
          });
      };


    return (

        <div className="OrganiserEnrollParentDiv container">

            <div className="container OrganiserEnrollListBackground">

                <h3 className="OrganiserEnrollH3">Enroll Requests</h3>

                <ul className="OrganiserEnrollList">
                    {console.log(userData && userData.length > 0)}
                    {

                        (userData && userData.length > 0) ? (userData.map(x => {

                            return (
                                <div className="OrganiserEnrollListElements">

                                    {/* organizer image */}
                                    <li className="col-1 text-end pe-3 ml-5">

                                        {/* <img src={img} alt="frame" /> */}

                                        <img
                                            src={`${url}/${x?.eventId.banner?.filename}`}
                                            alt={img}
                                            className="OrganiserEnroll-img"
                                        />

                                    </li>

                                    <li className="col-3 text-start  ml-1 ">

                                        <h5 className="fs-5"> {x.coachId.name}{/*Player Name*/}</h5>
                                        <h6 className="fw-light fs-6 ">Sport : {x.coachId.category}</h6>

                                    </li>

                                    <li className="col-3 text-start">

                                        <h5 className="fs-5"> Team Name: {x.coachId.teamName}</h5>
                                        {/* <h6 className="fw-light fs-6 ">Total Team Members{x.totalteammembers} Number Of teammates</h6> */}

                                    </li>

                                    <li className="col-3 text-start">

                                        <h5 className="fs-5"> Event: {x.eventId.teamName} {/* event name */}</h5>
                                        <h6 className="fw-light fs-6 ">  {x.eventId.date.slice(0,10)}{x.eventId.time}{/*Event date,time (in this order)*/}</h6>

                                    </li>

                                    <li className="col-1 text-end">

                                        <button className="btn btn-success px-4" ><img src={img2} alt="" onClick={()=>{approve(x._id)}}/> Accept</button>

                                    </li>
                                    <li className="col-1 text-end">

                                        <button className="btn btn-outline-danger px-4" ><img src={img3} alt="" onClick={()=>{reject(x._id)}}/> Reject</button>

                                    </li>

                                </div>

                            )

                        })) : (
                            <h1 className="OrganiserEnrollH5">No New Requests  Found</h1>
                        )

                    }

                </ul>{
                    (userData && userData.length > 0) ? (userData.map(x => {
                        <div className="text-end">

                            <a href=" " alt=" " >View More</a>

                        </div>
                    }
                    )) : (<p></p>)
                }



            </div>

        </div>

    )

}

export default OrganiserEnroll
