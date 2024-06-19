import React from "react";
import "./AdminViewCoachRequest.css"
import img from "../../Assets/frame2.png"

function AdminViewCoachRequest () {

    // const coachreqs = [
    //     "me name uno",
    //     "me name dos",
    //     "me name tres"
    // ];

    // function AdminViewCoachRequestList () {

    // }

    return (

        <div className="AdminCoachRequestParentDiv">

            <div className="container AdminCoachRequestListBackground">

                <h3 className="AdminCoachRequestH3">Team Coach Requests</h3>

                <ul className="AdminCoachRequestListElements">

                    <li className = "col-1 text-end pe-3">

                        <img src = {img} alt="frame"/>

                    </li>

                    <li className="col-3 text-start ">
                        
                        <h5 className="fs-5"> Lenin{/*Player Name*/}</h5>
                        <h6 className = "fw-light fs-6 "> Sport: VolleyBall</h6>

                    </li>

                    <li className="col-5 text-start">

                        <h5 className="fs-5"> Team Name: The Slammers</h5>
                        <h6 className = "fw-light fs-6 "> Total Team Members: 11 {/*Number Of teammates*/}</h6>

                    </li>

                    <li className="col-3 text-end">

                        <button className="btn btn-primary px-4">View Details</button>

                    </li>
                   
                    
                </ul>

                <div className = "text-end">

                    <a href=" " alt=" " >View More</a>

                </div>
                
            </div>

        </div>

    )

}

export default AdminViewCoachRequest