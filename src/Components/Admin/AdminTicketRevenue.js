import React, { useEffect, useRef, useState } from 'react'
import './AdminTicketRevenue.css'
import img from '../../Assets/Search Button.svg'
import img2 from "../../Assets/Back Button.svg"
import { Link } from 'react-router-dom';
import axiosInstance from '../Constant/BaseURL'

function AdminTicketRevenue() {

    const [userData, setUserData] = useState([]);


    useEffect(() => {

        let res;


        axiosInstance.post(`viewTickets`).then(res => {

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

    return (

        <div className='container AdminTicketRevenueMainDivBG AdminTicketRevenue-Stylerow'>


            {/* separated div for backbutton and text */}
            <div className='col  AdminTicketRevenue-headercontainer-container-1'>

                <Link to='/admindashboard'><button className='AdminTicketRevenue-headercontainer-BackButton'><img src={img2} alt=' ' /></button></Link>
                <h1 className='AdminTicketRevenue-h1'>Ticket Revenue</h1>

            </div>

            {/* <div className='AdminViewTeamCoach-search-container'>

                <input type='search' placeholder='Search Here' className='AdminTicketRevenue-search'></input>
                <button className='AdminTicketRevenue-search-button'> <img src={img} alt=' ' /> </button>

            </div> */}

            <table className='AdminTicketRevenue-Table ' >

                <thead >

                    <tr className=' AdminTicketRevenue-tableHeadRow'>

                        <td className='col-2 AdminTicketRevenue-tableHeadData'>Sl</td>
                        <td className='col-2 AdminTicketRevenue-tableHeadData'>Event Name</td>
                        <td className='col-2 AdminTicketRevenue-tableHeadData'>Category</td>
                        <td className='col-2 AdminTicketRevenue-tableHeadData'>Venue</td>
                        <td className='col-2 AdminTicketRevenue-tableHeadData'>Date & Time</td>
                        <td className='col-2 AdminTicketRevenue-tableHeadDataEnd'>Details</td>

                    </tr>
                </thead>

                <tbody>
                {

(userData && userData.length > 0) ? (userData.map((x, index) => {

    return (
                    <tr className='AdminTicketRevenue-tableBodyRow' >

                        <td className='col-2 AdminTicketRevenue-tableBodyData'>{++index}{/* Index */}</td>
                        <td className='col-2 AdminTicketRevenue-tableBodyData'>{x.eventId.name}</td>
                        <td className='col-2 AdminTicketRevenue-tableBodyData'>{x.eventId.category}</td>
                        <td className='col-2 AdminTicketRevenue-tableBodyData'> {x.eventId.venue}</td>
                        <td className='col-2 AdminTicketRevenue-tableBodyData'>

                            <div className='classDiv'>

                                <h1 className='AdminTicketRevenue-tableBodyData-h1'>{x.eventId.date.slice(0,10)}</h1>{/* date */}

                            </div>

                        </td>
                        <td className='col-2 AdminTicketRevenue-tableBodyData-end'><Link to={`/AdminTicketRevenue2/${x._id}`} alt=""> View Details </Link></td>

                    </tr>
                )
                        })
                        ) : (<h1>No Tickets Generated</h1>)

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

export default AdminTicketRevenue
