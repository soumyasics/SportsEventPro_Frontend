import React, { useEffect, useState } from "react";
import './AdminViewOrganiserRequest.css'
import img from "../../../Assets/frame2.png"
import axiosInstance from "../../Constant/BaseURL";
import { Link, useNavigate } from "react-router-dom";

function AdminViewOrganiserRequest() {

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

        <div className="AdminOrganiserRequestParentDiv">

            <div className="container AdminOrganiserRequestListBackground">

                <h3 className="AdminOrganiserRequestH3">Organiser Requests</h3>

                <ul className="AdminOrganiserRequestList">

                    {

                        // userData.map(x => {

                        //     return (

                        //         <div className="AdminOrganiserRequestListElements">

                        //             <li className="col-1 text-end pe-3">

                        //                 {/* <img src={img} alt="frame" /> */}

                        //                 <img
                        //                     src=" "/*put organiser image here */
                        //                     alt=" "
                        //                     className="AdminOrganiserRequest-img"
                        //                 />

                        //             </li>

                        //             <li className="col-3 text-start ">

                        //                 <h5 className="fs-5">{/*Organiser Name*/}</h5>

                        //             </li>

                        //             <li className="col-5 text-start">

                        //                 <h5 className="fs-5">  {/* organiser email */}</h5>
                        //                 <h6 className="fw-light fs-6 ">{/*organiser contact no */}</h6>

                        //             </li>

                        //             <li className="col-3 text-end">
                                        
                        //                 {/* Organiser View Details */}
                        //                 <button className="btn btn-primary px-4" onClick={() => { viewDetails(x._id)}}> View Details</button>

                        //             </li>

                        //         </div>

                        //     )

                        // })

                    }

                </ul>

                <div className="text-end">

                    <a href=" " alt=" " >View More</a>

                </div>

            </div>

        </div>

    )


}

export default AdminViewOrganiserRequest
