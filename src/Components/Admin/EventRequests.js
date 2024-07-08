import React, { useEffect, useState } from 'react';
import './EventRequests.css'
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from "../Constant/BaseURL";
import img from '../../Assets/Search Button.svg'

function EventRequests() {

    const navigate = useNavigate()

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

    const viewDetails = (id) => {
        // navigate(`/Teamcoachdetailspopup/${id}`) replace this with correct db
    }

    return (

        <div className='container EventRequestsMainDivBG'>

            <h1 className='EventRequests-h1'>Events List</h1>

            <div className='EventRequests-search-container'>

                <input type='search' placeholder='Search Here' className='EventRequests-search'></input>
                <button className='EventRequests-search-button'> <img src={img} alt=' ' /> </button>

            </div>

            <table className='EventRequests-Table container ' >

                <thead >

                    <tr className=' EventRequests-tableHeadRow container'>

                        <td className='col-2 EventRequests-tableHeadData'>Sl</td>
                        <td className='col-2 EventRequests-tableHeadData'>Event Name</td>
                        <td className='col-2 EventRequests-tableHeadData'>Date and Time</td>
                        <td className='col-2 EventRequests-tableHeadData'>Category</td>
                        <td className='col-2 EventRequests-tableHeadData'>Venue</td>
                        <td className='col-2 EventRequests-tableHeadDataEnd'>Approve/Reject</td>

                    </tr>

                </thead>

                <tbody>

                    {

                        (userData && userData.length > 0) ? (userData.map((x, index) => {

                            return (
                                <tr className='EventRequests-tableBodyRow container' >

                                    <td className='col-2 EventRequests-tableBodyData'>{index}</td>
                                    <td className='col-2 EventRequests-tableBodyData'>{/* Event Name */}</td>
                                    <td className='col-2 EventRequests-tableBodyData'>{/* Date and time of event */}</td>
                                    <td className='col-2 EventRequests-tableBodyData'> {/* Category */}</td>
                                    <td className='col-2 EventRequests-tableBodyData'> {/* Venue */}</td>
                                    <td className='col-2 EventRequests-tableBodyData-end'><Link to={`/AdminallViewOrganizerRequest/${x._id}`} alt=""> View More </Link> {/* View more */}</td>

                                </tr>
                            )
                        })) : (
                            <h1 className="AdminCoachRequestH5">No Events Found</h1>
                        )

                    }

                </tbody>

            </table>

            <div className="btn-group EventRequests-Pagination" role="group" >
                <button type="button" className="btn btn-outline-secondary text-outline-light ">Previous</button>
                <button type="button" className="btn btn-outline-secondary text-outline-light ps-4 pe-4 ">Next</button>
            </div>

        </div>

    )

}

export default EventRequests
