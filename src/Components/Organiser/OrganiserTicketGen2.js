import React from 'react'
import './OrganiserTicketGen2.css'
import { Link } from 'react-router-dom'
import img2 from "../../Assets/Back Button.svg"


function OrganiserTicketGen2() {

    return (

        <div className='OrganiserTicketGen2'>

            <div className='OrganiserTicketGen2MainDiv'>

                {/* seperated div for backbutton and text */}
                <div className='col  OrganiserTicketGen2-headercontainer-container-1'>

                    <div style={{ display: 'flex', flexDirection: 'row', width: 'max-content' }}>

                        <Link to='/OrganizerDashboard'><button className='OrganiserTicketGen2-headercontainer-BackButton'><img src={img2} alt=' ' /></button></Link>
                        <h1 className='OrganiserTicketGen2-headercontainer-h1'>Ticket Generation</h1>

                    </div>

                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', alignItems: 'center' }}>

                    <div className="OrganiserTicketGen2-body-right-top">

                        <div className='OrganiserTicketGen2-body-2'>

                            <h1 className='OrganiserTicketGen2-body-h1'>The Eagles Vs The kings</h1>{/* team names */}

                            <div style={{ display: "flex", flexDirection: 'row', gap: '8px' }}>

                                <h1 className='OrganiserTicketGen2-body-h1-1'>TVM Junior Sports</h1>{/* event name */}
                                <h1 className='ViewerBookNow-body-h1-2'>Football</h1>{/* event category */}

                            </div>

                        </div>

                        <div className='OrganiserTicketGen2-body-2-2'>

                            <h5 className='OrganiserTicketGen2-body-h5'>Trivandrum</h5>{/* event venue */}
                            <h2 className='OrganiserTicketGen2-body-h2'>12/12/2024, 2:00 PM</h2> {/* event date and time */}

                        </div>

                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', gap: '45px', alignItems: 'center', width: '100%' }}>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>

                            <div>

                                <label className='OrganiserTicketGen2-label-h1'>Event Name</label>
                                <input className='OrganiserTicketGen2-input' type='text' placeholder='Enter The Ticket Price' />

                            </div>

                            <div>

                                <label className='OrganiserTicketGen2-label-h1'>Ticket Opening Date</label>
                                <input className='OrganiserTicketGen2-input-date' type='date' />

                            </div>

                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>

                            <div>

                                <label className='OrganiserTicketGen2-label-h1'>Seating Capacity</label>
                                <input className='OrganiserTicketGen2-input' type='text' placeholder='Enter Total Seating Capacity' />

                            </div>

                            <div>

                                <label className='OrganiserTicketGen2-label-h1'>Ticket Closing Date</label>
                                <input className='OrganiserTicketGen2-input-date' type='date' />

                            </div>

                        </div>

                    </div>

                    <div>

                        <Link to='OrganiserTicketGen2' style={{ textDecoration: 'none' }}><button className='OrganiserTicketGen2-button'>Generate</button></Link>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default OrganiserTicketGen2
