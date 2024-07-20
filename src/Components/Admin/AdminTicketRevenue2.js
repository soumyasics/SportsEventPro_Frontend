import React from 'react'
import './AdminTicketRevenue2.css'
import { Link } from 'react-router-dom'
import img2 from "../../Assets/Back Button.svg"

function AdminTicketRevenue2() {

    return (

        <div>

            <div className='AdminTicketRevenue2-MainDiv'>
                {/* seperated div for backbutton and text */}
                <div className='col  AdminTicketRevenue2-headercontainer-container-1'>

                    <div style={{ display: 'flex', flexDirection: 'row', width: 'max-content' }}>

                        <Link to='/AdminTicketRevenue'><button className='AdminTicketRevenue2-headercontainer-BackButton'><img src={img2} alt=' ' /></button></Link>
                        <h1 className='AdminTicketRevenue2-headercontainer-h1'>TVM Junior Sport’s Event Revenue</h1>

                    </div>

                </div>

                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '30px' }}>

                    {/* card start */}
                    <div className='AdminTicketRevenue2-content'>

                        <div className="AdminTicketRevenue2-body-top">

                            <div className='AdminTicketRevenue2-body-2'>

                                <h1 className='AdminTicketRevenue2-body-h1'>The Eagles Vs The kings</h1>{/* team names */}

                                <div style={{ display: "flex", flexDirection: 'row', gap: '8px' }}>

                                    <h1 className='AdminTicketRevenue2-body-h1-1'>TVM Junior Sports</h1>{/* event name */}
                                    <h1 className='AdminTicketRevenue2-body-h1-2'>Football</h1>{/* event category */}

                                </div>

                            </div>

                            <div style={{ display: "flex", flexDirection: 'row' }}>

                                <h4 className='AdminTicketRevenue2-body-h4' style={{ marginLeft: '4px' }}>₹499</h4> {/* replace 499 with the array var (ticket price) */}

                            </div>

                            <div className='AdminTicketRevenue2-body-3'>

                                <h5 className='AdminTicketRevenue2-body-h5'>Trivandrum</h5>{/* event venue */}
                                <h2 className='AdminTicketRevenue2-body-h2'>12/12/2024, 2:00 PM</h2> {/* event date and time */}

                            </div>

                        </div>

                        <div className='AdminTicketRevenue2-body-bottom'>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>

                                <div>

                                    <h1 className='AdminTicketRevenue2-body-h1-1'>Total Tickets Generated</h1>

                                </div>

                                <div>

                                    <h1 className='AdminTicketRevenue2-body-h1-1'>Sold Out Tickets</h1>

                                </div>

                                <div>

                                    <h1 className='AdminTicketRevenue2-body-h1-1'>Pending Tickets</h1>

                                </div>

                                <div>

                                    <h1 className='AdminTicketRevenue2-body-h1-1'>Total Amount Collected</h1>

                                </div>

                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>

                                <div>

                                    <h1 className='AdminTicketRevenue2-body-h1-1'>: 1000</h1> {/* no of tickets generated */}

                                </div>

                                <div>

                                    <h1 className='AdminTicketRevenue2-body-h1-1'>: 750</h1> {/* Sold out tickets */}

                                </div>

                                <div>

                                    <h1 className='AdminTicketRevenue2-body-h1-1'>: 250</h1> {/* no of tickets generated */}

                                </div>

                                <div>

                                    <h1 className='AdminTicketRevenue2-body-h1-1'>: ₹12,23,345</h1> {/* no of tickets generated */}

                                </div>

                            </div>



                        </div>

                    </div>
                    {/* card end */}

                </div>

            </div>

        </div>

    )

}

export default AdminTicketRevenue2
