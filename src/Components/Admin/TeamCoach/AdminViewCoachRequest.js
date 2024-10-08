import React, { useEffect, useState } from "react";
import "./AdminViewCoachRequest.css"
import img from "../../../Assets/frame2.png"
import axiosInstance from "../../Constant/BaseURL";
import { Link, useNavigate } from "react-router-dom";

function AdminViewCoachRequest() {
    const navigate=useNavigate()

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

   const viewDetails=(id)=>{
navigate(`/Teamcoachdetailspopup/${id}`)
    }
    return (

        <div className="AdminCoachRequestParentDiv container">

            <div className="container AdminCoachRequestListBackground">

                <h3 className="AdminCoachRequestH3">Team Coach Requests</h3>
                
                <ul className="AdminCoachRequestList">
{console.log(userData&&userData.length>0)}
                    {

                       (userData&&userData.length>0)?(userData.map(x => {

                            return(
                                 <div className="AdminCoachRequestListElements">

                                    <li className="col-2 text-end pe-3 ml-5">

                                        {/* <img src={img} alt="frame" /> */}

                                        <img
                                            src={`${url}/${x?.profilePic?.filename}`}
                                            alt={img}
                                            className="AdminCoachRequest-img"
                                        />

                                    </li>

                                    <li className="col-3 text-start  ml-1 ">

                                        <h5 className="fs-5"> {x.name}{/*Player Name*/}</h5>
                                        <h6 className="fw-light fs-6 ">Sport : {x.category}</h6>

                                    </li>

                                    <li className="col-5 text-start">

                                        <h5 className="fs-5"> Team Name: {x.teamName}</h5>
                                        <h6 className="fw-light fs-6 ">Total Team Members{x.totalteammembers} {/*Number Of teammates*/}</h6>

                                    </li>

                                    <li className="col-2 text-end">

                                        <button className="btn btn-primary px-4" onClick={()=>{viewDetails(x._id)}}> View Details</button>

                                    </li>

                                </div>
                            )

                               
{console.log(x.teamName)}
                            

                        })):(
                          <h1 className="AdminCoachRequestH5">No New Requests  Found</h1>
                        )
                        
                    }

                </ul>{
                     (userData&&userData.length>0)?(userData.map(x => {
                        <div className="text-end">

                        <a href=" " alt=" " >View More</a>
    
                    </div>}
                     )):(<p></p>)
                }
            
               
                
            </div>

        </div>

    )

}

export default AdminViewCoachRequest