import React, { useEffect, useState } from 'react'
import './TeamCoachViewResults.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import img from "../../Assets/Back Button.svg"
import axiosInstance from '../Constant/BaseURL';


function TeamCoachViewResults() {

    const [isApproved, setIsApproved] = useState(false)
    const [eve, setEve] = useState({
        name:''}
    )

    const navigate = useNavigate()
const {id}=useParams()
    const [userData, setUserData] = useState([]);
    const url = axiosInstance.defaults.url;
    console.log("url,", url);
    useEffect(() => {

        let res;


        axiosInstance.post(`viewApprovedEnrollmentsByEventId/${id}`).then(res => {

            console.log(res);

            if ((res.data.data).length > 0){
                setUserData(res.data.data);
            setEve(res.data.data[0].eventId.name)}
            else
                setUserData(null)
            console.log(res.data.data);
        }).catch(err => {
            console.log(err);
        })

    }, []);
    useEffect(() => {

        let res;


        axiosInstance.post(`viewEventById/${id}`).then(res => {

            console.log(res);

            
                setEve(res.data.data);
           
          
            console.log(res.data.data);
        }).catch(err => {
            console.log(err);
        })

    }, []);
    useEffect(() => {
        console.log("users", userData);
        console.log(eve);
    })

    const viewDetails = (id) => {
        // navigate(`/Teamcoachdetailspopup/${id}`) replace this with correct navpath
    }
    return (

        <div>

            <div className='container TeamCoachViewResultsMainDivBG'>

                <div className='TeamCoachViewResults-header'>

                    <button className='TeamCoachViewResults-headercontainer-BackButton' ><Link to='/TeamCoachResults'><img src={img} alt=' ' /></Link></button>
                    <h1 className='TeamCoachViewResults-headercontainer-h1'>  </h1>

                </div>

                <table className='TeamCoachViewResults-Table container ' >

                    <thead>

                        <tr className=' TeamCoachViewResults-tableHeadRow container'>

                            <td className='col-2 TeamCoachViewResults-tableHeadData-start'>Sl</td>
                            <td className='col-4 TeamCoachViewResults-tableHeadData'>Team Name</td>
                            <td className='col-3 TeamCoachViewResults-tableHeadData'>Score</td>
                            <td className='col-3 TeamCoachViewResults-tableHeadDataEnd'>Result</td>

                        </tr>

                    </thead>

                    <tbody className='tbodyclass'>

{

    (userData && userData.length > 0) ? (userData.map((x, index) => {

        return (



                        <tr className='TeamCoachViewResults-tableBodyRow container' >

                            <td className='col-2 TeamCoachViewResults-tableBodyData'>{++index}</td>{/* Sl no */}
                            <td className='col-4 TeamCoachViewResults-tableBodyData'>{x.coachId.name}</td>{/* Team Name */}
                            <td className='col-3 TeamCoachViewResults-tableBodyData'>{x.score}</td>{/* Score */}
                            <td className='col-3 TeamCoachViewResults-tableBodyData-end'>{x.position}</td>{/* Result */}

                        </tr>
                                                    )


})): (
    <h1 className="AdminCoachRequestH5">No Events Found</h1>
) }

                    </tbody>

                </table>

            </div>

        </div>

    )

}

export default TeamCoachViewResults
