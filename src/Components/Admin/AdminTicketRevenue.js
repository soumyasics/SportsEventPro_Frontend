import React from 'react'
import './AdminTicketRevenue.css'
import img from '../../Assets/Search Button.svg'
import img2 from "../../Assets/Back Button.svg"
import { Link } from 'react-router-dom';

function AdminTicketRevenue() {

    return (

        <div className='container AdminTicketRevenueMainDivBG AdminTicketRevenue-Stylerow'>


            {/* separated div for backbutton and text */}
            <div className='col  AdminTicketRevenue-headercontainer-container-1'>

                <Link to='/admindashboard'><button className='AdminTicketRevenue-headercontainer-BackButton'><img src={img2} alt=' ' /></button></Link>
                <h1 className='AdminTicketRevenue-h1'>Ticket Revenue</h1>

            </div>

            <div className='AdminViewTeamCoach-search-container'>

                <input type='search' placeholder='Search Here' className='AdminTicketRevenue-search'></input>
                <button className='AdminTicketRevenue-search-button'> <img src={img} alt=' ' /> </button>

            </div>

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

                    <tr className='AdminTicketRevenue-tableBodyRow' >

                        <td className='col-2 AdminTicketRevenue-tableBodyData'>1 {/* Index */}</td>
                        <td className='col-2 AdminTicketRevenue-tableBodyData'>TVM Junior Sports{/* Event Name */}</td>
                        <td className='col-2 AdminTicketRevenue-tableBodyData'>Football{/* Category */}</td>
                        <td className='col-2 AdminTicketRevenue-tableBodyData'>Trivandrum {/* Venue */}</td>
                        <td className='col-2 AdminTicketRevenue-tableBodyData'>

                            <div className='classDiv'>

                                <h1 className='AdminTicketRevenue-tableBodyData-h1'>12/12/2024</h1>{/* date */}
                                <h1 className='AdminTicketRevenue-tableBodyData-h1'>2:00 PM</h1>{/* time */}

                            </div>

                        </td>
                        <td className='col-2 AdminTicketRevenue-tableBodyData-end'><Link to={''} alt=""> View Details </Link></td>

                    </tr>

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
