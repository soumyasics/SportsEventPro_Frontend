import React, { useEffect, useState } from 'react';
import './OrganiserViewEvents.css'
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from "../Constant/BaseURL";
import img from '../../Assets/Search Button.svg'
import img2 from '../../Assets/Group 228.svg'
import img3 from '../../Assets/Group 229.svg'
import img4 from '../../Assets/Group 227.svg'

function OrganiserViewEvents() {

    const [isApproved, setIsApproved] = useState(false)

    const navigate = useNavigate()
const id=localStorage.getItem('organizerId')
    const [userData, setUserData] = useState([]);
    const url = axiosInstance.defaults.url;
    console.log("url,", url);
    useEffect(() => {

        let res;


        axiosInstance.post(`viewEventByOrganizerId/${id}`).then(res => {

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
        // navigate(`/Teamcoachdetailspopup/${id}`) replace this with correct navpath
    }

    return (

        <div className='container OrganizerViewEventsMainDivBG'>

            <h1 className='OrganizerViewEvents-h1'>View All Events</h1>

            <div className='OrganizerViewEvents-search-container'>

                <input type='search' placeholder='Search Here' className='OrganizerViewEvents-search'></input>
                <button className='OrganizerViewEvents-search-button'> <img src={img} alt=' ' /> </button>

            </div>

            <table className='OrganizerViewEvents-Table container ' >

                <thead>

                    <tr className=' OrganizerViewEvents-tableHeadRow container'>

                        <td className='col-2 OrganizerViewEvents-tableHeadData-start'>Sl</td>
                        <td className='col-2 OrganizerViewEvents-tableHeadData'>Event Name</td>
                        <td className='col-2 OrganizerViewEvents-tableHeadData'>Date</td>
                        <td className='col-2 OrganizerViewEvents-tableHeadData'>Category</td>
                        <td className='col-2 OrganizerViewEvents-tableHeadData'>Venue</td>
                        <td className='col-2 OrganizerViewEvents-tableHeadDataEnd'>Request Status</td>

                    </tr>

                </thead>

                <tbody className='tbodyclass'>

                    {

                        (userData && userData.length > 0) ? (userData.map((x, index) => {

                            return (
                                <tr className='OrganizerViewEvents-tableBodyRow container' >

                                    <td className='col-2 OrganizerViewEvents-tableBodyData'>{++index}</td>
                                    <td className='col-2 OrganizerViewEvents-tableBodyData'>{x.name}</td>
                                    <td className='col-2 OrganizerViewEvents-tableBodyData'>{x.date.split('T')[0]}</td>
                                    <td className='col-2 OrganizerViewEvents-tableBodyData'> {x.category}</td>
                                    <td className='col-2 OrganizerViewEvents-tableBodyData'> {x.venue}</td>
                                    <td className='col-2 OrganizerViewEvents-tableBodyData-end'>
                                        {x.adminApprved === "Approved" ? (
                                            <div className='tdDiv'>
                                                <img src={img3} alt='' />
                                                <h1 className='tdDiv-h1'>Approved</h1>
                                            </div>
                                        ):x.adminApprved === "Pending" ? (
                                            <div className='tdDiv'>
                                                <img src={img2} alt='' />
                                                <h1 className='tdDiv-h1'>Pending</h1>
                                            </div>
                                        ):
                                            <div className='tdDiv'>
                                                <img src={img4} alt=''/>
                                                <h1 className='tdDiv-h1'>Rejected</h1>
                                            </div>
                                        }
                                    </td>

                                </tr>
                            )
                        })) : (
                            <h1 className="AdminCoachRequestH5">No Events Found</h1>
                        )

                    }

                </tbody>

            </table>

            <div className="btn-group OrganizerViewEvents-Pagination" role="group" >
                <button type="button" className="btn btn-outline-secondary text-outline-light ">Previous</button>
                <button type="button" className="btn btn-outline-secondary text-outline-light ps-4 pe-4 ">Next</button>
            </div>

        </div>

    )

}

export default OrganiserViewEvents
