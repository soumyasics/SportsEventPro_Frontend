import React, { useEffect, useState } from "react";
import './OrganiserEnroll.css'
import img from "../../Assets/frame2.png"
import img2 from '../../Assets/charm_square-tick.svg'
import img3 from '../../Assets/mynaui_x-square.svg'
import axiosInstance from "../Constant/BaseURL";
import { Link, useNavigate } from "react-router-dom";

function OrganiserEnroll() {

    const navigate = useNavigate()

    const [userData, setUserData] = useState([]);
    const url = axiosInstance.defaults.url;
    console.log("url,", url);
    useEffect(() => {

        let res;


        axiosInstance.post(`viewTeamCoachReqsByAdmin`).then(res => {

            console.log(res);

            if ((res.data.data).length > 0)
                setUserData(res.data.data);
            else
                setUserData(null)
            console.log(res.data.data);
        }).catch(err => {
            console.log(err);
        })



    }, []);
    useEffect(() => {
        console.log("users", userData);
    })

    const viewDetails = (id) => {
        navigate(`/Teamcoachdetailspopup/${id}`)
    }
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
                                            src={`${url}/${x?.profilePic?.filename}`}
                                            alt={img}
                                            className="OrganiserEnroll-img"
                                        />

                                    </li>

                                    <li className="col-3 text-start  ml-1 ">

                                        <h5 className="fs-5"> {x.name}{/*Player Name*/}</h5>
                                        <h6 className="fw-light fs-6 ">Sport : {x.category}</h6>

                                    </li>

                                    <li className="col-3 text-start">

                                        <h5 className="fs-5"> Team Name: {x.teamName}</h5>
                                        <h6 className="fw-light fs-6 ">Total Team Members{x.totalteammembers} {/*Number Of teammates*/}</h6>

                                    </li>

                                    <li className="col-3 text-start">

                                        <h5 className="fs-5"> Event: {/* event name */}</h5>
                                        <h6 className="fw-light fs-6 "> {/*Event date,time (in this order)*/}</h6>

                                    </li>

                                    <li className="col-1 text-end">

                                        <button className="btn btn-success px-4" ><img src={img2} alt=""/> Accept</button>

                                    </li>
                                    <li className="col-1 text-end">

                                        <button className="btn btn-outline-danger px-4" ><img src={img3} alt=""/> Reject</button>

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
