import React, { useEffect, useState } from 'react';
import './ViewAllEvents.css'
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from "../Constant/BaseURL";
import img from '../../Assets/Search Button.svg'

function ViewAllEvents() {



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

        <div className='container ViewAllEventsMainDivBG'>

            <h1 className='ViewAllEvents-h1'>View All Events</h1>

            <div className='ViewAllEvents-search-container'>

                <input type='search' placeholder='Search Here' className='ViewAllEvents-search'></input>
                <button className='ViewAllEvents-search-button'> <img src={img} alt=' ' /> </button>

            </div>

            <table className='ViewAllEvents-Table container ' >

                <thead>

                    <tr className=' ViewAllEvents-tableHeadRow container'>

                        <td className='col-2 ViewAllEvents-tableHeadData-start'>Sl</td>
                        <td className='col-2 ViewAllEvents-tableHeadData'>Event Name</td>
                        <td className='col-2 ViewAllEvents-tableHeadData'>Date</td>
                        <td className='col-2 ViewAllEvents-tableHeadData'>Time</td>
                        <td className='col-2 ViewAllEvents-tableHeadData'>Category</td>
                        <td className='col-2 ViewAllEvents-tableHeadDataEnd'>Venue</td>

                    </tr>

                </thead>

                <tbody className='tbodyclass'>

                    {

                        (userData && userData.length > 0) ? (userData.map((x, index) => {

                            return (
                                <tr className='ViewAllEvents-tableBodyRow container' >

                                    <td className='col-2 ViewAllEvents-tableBodyData'>{index}</td>
                                    <td className='col-2 ViewAllEvents-tableBodyData'>{/* Event Name */}</td>
                                    <td className='col-2 ViewAllEvents-tableBodyData'>{/* Date of event */}</td>
                                    <td className='col-2 ViewAllEvents-tableBodyData'>{/* Time of event */}</td>
                                    <td className='col-2 ViewAllEvents-tableBodyData'> {/* Category */}</td>
                                    <td className='col-2 ViewAllEvents-tableBodyData-end'> {/* Venue */}</td>
                                    
                                </tr>
                            )
                        })) : (
                            <h1 className="AdminCoachRequestH5">No Events Found</h1>
                        )

                    }

                </tbody>

            </table>

            <div className="btn-group ViewAllEvents-Pagination" role="group" >
                <button type="button" className="btn btn-outline-secondary text-outline-light ">Previous</button>
                <button type="button" className="btn btn-outline-secondary text-outline-light ps-4 pe-4 ">Next</button>
            </div>

        </div>

    )

}

export default ViewAllEvents
