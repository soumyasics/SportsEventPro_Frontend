import './OrganiserViewDetails.css'
import img from "../../Assets/Back Button.svg"
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../Constant/BaseURL';

function OrganiserViewDetails() {
    const {id}=useParams()
    const [userData, setUserData] = useState([]);
    const [coach, setCoach] = useState({});

    const url = axiosInstance.defaults.url;
    console.log("url,", url);
    useEffect(() => {

        let res;


        axiosInstance.post(`viewTeamMemberByCoachId/${id}`).then(res => {

            console.log(res);

            if ((res.data.data).length > 0){
                setUserData(res.data.data);
setCoach(res.data.coach)
            }
            else
                setUserData(null)
            console.log(res.data.data);
        }).catch(err => {
            console.log(err);
        })

    }, []);
    return (

        <div>

            <div className='container OrganiserViewDetailsMainDivBG'>

                <div className='OrganiserViewDetails-header'>

                    <h1 className='OrganiserViewDetails-headercontainer-h1'>View Team Details </h1>

                </div>

                <table className='OrganiserViewDetails-Table container ' >

                    <thead>

                        <tr className=' OrganiserViewDetails-tableHeadRow container'>

                            <td className='col-2 OrganiserViewDetails-tableHeadData-start'>Sl</td>
                            <td className='col-3 OrganiserViewDetails-tableHeadData'>Name</td>
                            <td className='col-2 OrganiserViewDetails-tableHeadData'>Contact Number</td>
                            <td className='col-3 OrganiserViewDetails-tableHeadData'>Email Id</td>
                            <td className='col-2 OrganiserViewDetails-tableHeadDataEnd'>Address</td>

                        </tr>

                    </thead>

                    <tbody className='tbodyclass'>

                        {/* map coach details to the v-below <tr> */}
                        <tr className='OrganiserViewDetails-tableBodyRow-2 container' >

                            <td className='col-2 OrganiserViewDetails-tableBodyData'>Team Coach</td>
                        <td className='col-3 OrganiserViewDetails-tableBodyData'>{coach.name}</td>
                            <td className='col-2 OrganiserViewDetails-tableBodyData'>{coach.contact}</td>{/* Team Coach Contact number */}
                            <td className='col-3 OrganiserViewDetails-tableBodyData'>{coach.email}</td>{/* Team Coach Email */}
                            <td className='col-2 OrganiserViewDetails-tableBodyData-end'>{coach.address}</td>{/* team coach address */}

                        </tr>
                        
                        {

(userData && userData.length > 0) ? (userData.map((x, index) => {

    return (
                        <tr className='OrganiserViewDetails-tableBodyRow container' >

                            <td className='col-2 OrganiserViewDetails-tableBodyData'>{++index}</td>{/* Sl no */}
                            <td className='col-3 OrganiserViewDetails-tableBodyData'>{x.name}</td>{/* Team member Name */}
                            <td className='col-2 OrganiserViewDetails-tableBodyData'>{x.contact}</td>{/* Team Member contact number */}
                            <td className='col-3 OrganiserViewDetails-tableBodyData'>{x.email}</td>{/* Team member email id */}
                            <td className='col-2 OrganiserViewDetails-tableBodyData-end'> {x.address}</td>{/* Team member address */}

                        </tr>
   )
})) : (
    <h1 className="AdminCoachRequestH5">No Team Members Found</h1>
)

}


                    </tbody>

                </table>

            </div>


        </div>

    )

}

export default OrganiserViewDetails
