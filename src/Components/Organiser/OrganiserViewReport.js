import React from 'react'
import './OrganiserViewReport.css'
import { Link } from 'react-router-dom'
import img2 from "../../Assets/Back Button.svg"

function OrganiserViewReport() {

    return (

        <div>

            <div className='OrganiserViewReport-MainDiv'>
                {/* seperated div for backbutton and text */}
                <div className='col  OrganiserViewReport-headercontainer-container-1'>

                    <div style={{ display: 'flex', flexDirection: 'row', width: 'max-content' }}>

                        <Link to='/OrganizerDashboard'><button className='OrganiserViewReport-headercontainer-BackButton'><img src={img2} alt=' ' /></button></Link>
                        <h1 className='OrganiserViewReport-headercontainer-h1'>Ticket Generation</h1>

                    </div>

                </div>

                <div style={{display:'flex',flexDirection:'row', flexWrap:'wrap', gap:'30px'}}>

                    {/* card start */}
                    <div className='OrganiserViewReport-content'>

                        <div className="OrganiserViewReport-body-top">

                            <div className='OrganiserViewReport-body-2'>

                                <h1 className='OrganiserViewReport-body-h1'>The Eagles Vs The kings</h1>{/* team names */}

                                <div style={{ display: "flex", flexDirection: 'row', gap: '8px' }}>

                                    <h1 className='OrganiserViewReport-body-h1-1'>TVM Junior Sports</h1>{/* event name */}
                                    <h1 className='OrganiserViewReport-body-h1-2'>Football</h1>{/* event category */}

                                </div>

                            </div>

                            <div style={{ display: "flex", flexDirection: 'row' }}>

                                <h4 className='OrganiserViewReport-body-h4' style={{ marginLeft: '4px' }}>₹499</h4> {/* replace 499 with the array var (ticket price) */}

                            </div>

                            <div className='OrganiserViewReport-body-3'>

                                <h5 className='OrganiserViewReport-body-h5'>Trivandrum</h5>{/* event venue */}
                                <h2 className='OrganiserViewReport-body-h2'>12/12/2024, 2:00 PM</h2> {/* event date and time */}

                            </div>

                        </div>

                        <div className='OrganiserViewReport-body-bottom'>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>

                                <div>

                                    <h1 className='OrganiserViewReport-body-h1-1'>Total Tickets Generated</h1>

                                </div>

                                <div>

                                    <h1 className='OrganiserViewReport-body-h1-1'>Sold Out Tickets</h1>

                                </div>

                                <div>

                                    <h1 className='OrganiserViewReport-body-h1-1'>Pending Tickets</h1>

                                </div>

                                <div>

                                    <h1 className='OrganiserViewReport-body-h1-1'>Total Amount Collected</h1>

                                </div>

                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>

                                <div>

                                    <h1 className='OrganiserViewReport-body-h1-1'>: 1000</h1> {/* no of tickets generated */}

                                </div>

                                <div>

                                    <h1 className='OrganiserViewReport-body-h1-1'>: 750</h1> {/* Sold out tickets */}

                                </div>

                                <div>

                                    <h1 className='OrganiserViewReport-body-h1-1'>: 250</h1> {/* no of tickets generated */}

                                </div>

                                <div>

                                    <h1 className='OrganiserViewReport-body-h1-1'>: ₹12,23,345</h1> {/* no of tickets generated */}

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

export default OrganiserViewReport
