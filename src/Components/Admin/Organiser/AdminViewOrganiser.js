import './AdminViewOrganiser.css'
import img from '../../../Assets/Search Button.svg'
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from "../../Constant/BaseURL";
function AdminViewOrganiser() {
    const navigate=useNavigate()

    const [userData, setUserData] = useState([]);
    const url = axiosInstance.defaults.url;
    console.log("url,", url);
    useEffect(() => {

        let res;


        axiosInstance.post(`viewOrganizers  `).then(res => {

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
  
        <div className = 'container AdminViewOrganiserMainDivBG'>

            <h1 className = 'AdminViewOrganiser-h1'>Organiser List</h1>
            
            <div className = 'AdmiViewOrganiser-search-container'>

                <input type = 'search' placeholder = 'Search Here' className = 'AdminViewOrganiser-search'></input>
                <button className = 'AdminViewOrganiser-search-button'> <img src = {img} alt = ' '/> </button>

            </div>

            <table className = 'AdminViewOrganiser-Table container ' >

                <thead >

                    <tr className = ' AdminViewOrganiser-tableHeadRow container'>

                        <td className = 'col-2 AdminViewOrganiser-tableHeadData'>Sl</td>
                        <td className = 'col-2 AdminViewOrganiser-tableHeadData'>Organizer Name</td>
                        <td className = 'col-2 AdminViewOrganiser-tableHeadData'>Contact Number</td>
                        <td className = 'col-2 AdminViewOrganiser-tableHeadData'>Email Id</td>
                        <td className = 'col-2 AdminViewOrganiser-tableHeadData'>State</td>
                        <td className = 'col-2 AdminViewOrganiser-tableHeadDataEnd'>View</td>

                    </tr>
                </thead>

                <tbody>
                {

(userData&&userData.length>0)?(userData.map((x,index) => {

     return(
                    <tr className = 'AdminViewOrganiser-tableBodyRow container' >

                        <td className = 'col-2 AdminViewOrganiser-tableBodyData'>{index}</td>
                        <td className = 'col-2 AdminViewOrganiser-tableBodyData'>{x.name}</td>
                        <td className = 'col-2 AdminViewOrganiser-tableBodyData'>{x.contact}</td>
                        <td className = 'col-2 AdminViewOrganiser-tableBodyData'>{x.email} {/* Email id */}</td>
                        <td className = 'col-2 AdminViewOrganiser-tableBodyData'>{x.state} {/* State */}</td>
                        <td className = 'col-2 AdminViewOrganiser-tableBodyData-end'><Link to = {`/AdminallViewOrganizerRequest/${x._id}`} alt = ""> View More </Link> {/* View more */}</td>

                    </tr>
  )})):(
    <h1 className="AdminCoachRequestH5">No Approved Teamcoaches Found</h1>
  )
  
}
                </tbody>

            </table>

            <div className = "btn-group AdminViewOrganiser-Pagination" role = "group" >
                <button type = "button" className = "btn btn-outline-secondary text-outline-light ">Previous</button>
                <button type = "button" className = "btn btn-outline-secondary text-outline-light ps-4 pe-4 ">Next</button>
            </div>

        </div>

    )
}

export default AdminViewOrganiser
