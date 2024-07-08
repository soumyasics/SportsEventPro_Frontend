import React, { useEffect, useState } from 'react';
import "./AdminViewTeamCoach.css"
import img from '../../../Assets/Search Button.svg'
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from "../../Constant/BaseURL";

function AdminViewTeamCoach () {
    const navigate=useNavigate()

    const [userData, setUserData] = useState([]);
    const url = axiosInstance.defaults.url;
    console.log("url,", url);
    useEffect(() => {

        let res;


        axiosInstance.post(`viewTeamCoachs`).then(res => {

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

        <div className = 'container AdminViewTeamCoachMainDivBG AdminViewTeamCoach-Stylerow'>


            <h1 className = 'AdminViewTeamCoach-h1'>Team Coaches List</h1>
            
            <div className = 'AdmiViewTeamCoach-search-container'>

                <input type = 'search' placeholder = 'Search Here' className = 'AdminViewTeamCoach-search'></input>
                <button className = 'AdminViewTeamCoach-search-button'> <img src = {img} alt = ' '/> </button>

            </div>

            <table className = 'AdminViewTeamCoach-Table ' >

                <thead >

                    <tr className = ' AdminViewTeamCoach-tableHeadRow'>

                        <td className = 'col-2 AdminViewTeamCoach-tableHeadData'>Sl</td>
                        <td className = 'col-2 AdminViewTeamCoach-tableHeadData'>Coach Name</td>
                        <td className = 'col-2 AdminViewTeamCoach-tableHeadData'>Team Name</td>
                        <td className = 'col-2 AdminViewTeamCoach-tableHeadData'>Sport</td>
                        <td className = 'col-2 AdminViewTeamCoach-tableHeadData'>Team Count</td>
                        <td className = 'col-2 AdminViewTeamCoach-tableHeadDataEnd'>View</td>

                    </tr>
                </thead>

                <tbody>
                {

(userData&&userData.length>0)?(userData.map((x,index,) => {

     return(
                    <tr className='AdminViewTeamCoach-tableBodyRow' >

                        <td className='col-2 AdminViewTeamCoach-tableBodyData'> {index+1}</td>
                        <td className='col-2 AdminViewTeamCoach-tableBodyData'>{x.name} {/* Coach Name */}</td>
                        <td className='col-2 AdminViewTeamCoach-tableBodyData'>{x.teamName} {/* Team Name */}</td>
                        <td className='col-2 AdminViewTeamCoach-tableBodyData'>{x.category} {/* Sport */}</td>
                        <td className='col-2 AdminViewTeamCoach-tableBodyData'>{x.totalteammembers} {/* Team Count */}</td>
                        <td className='col-2 AdminViewTeamCoach-tableBodyData'x><Link to={`/AdminViewAprvdCoachIndividual/${x._id}`} alt=""> View More </Link> {/* Coach Name */}</td>
                        
                    </tr>
     )})):(
        <h1 className="AdminCoachRequestH5">No Approved Teamcoaches Found</h1>
      )
      
  }

                </tbody>

            </table>

            <div className="btn-group mt-3 mb-3" role="group" >
                <button type="button" className="btn btn-outline-secondary text-outline-light ">Previous</button>
                <button type="button" className="btn btn-outline-secondary text-outline-light ps-4 pe-4 ">Next</button>
            </div>

       </div> 

    );

}

export default AdminViewTeamCoach;