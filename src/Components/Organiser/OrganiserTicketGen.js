import React from 'react'
import './OrganiserTicketGen.css'
import { Link } from 'react-router-dom'
import img2 from "../../Assets/Back Button.svg"

function OrganiserTicketGen() {

    return (

        <div className='OrganiserTicketGen'>

            <div className='OrganiserTicketGenMainDiv'>

                {/* seperated div for backbutton and text */}
                <div className='col  OrganiserTicketGen-headercontainer-container-1'>

                    <div style={{ display: 'flex', flexDirection: 'row', width: 'max-content' }}>

                        <Link to='/OrganizerDashboard'><button className='OrganiserTicketGen-headercontainer-BackButton'><img src={img2} alt=' ' /></button></Link>
                        <h1 className='OrganiserTicketGen-headercontainer-h1'>Ticket Generation</h1>

                    </div>

                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', alignItems: 'center' }}>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>

                        <label className='OrganiserTicketGen-label-h1'>Event Name</label>

                        <select className="OrganiserTicketGen-Content-Input-Country" aria-label="Default select example">

                            <option className='OrganiserTicketGen-Content-Input-Select-Option'>Select Event</option>

                            <option value="Kerala">Goa</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Maharashtra">Maharashtra</option>

                        </select>

                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>

                        <label className='OrganiserTicketGen-label-h1'>Select Teams</label>

                        <select className="OrganiserTicketGen-Content-Input-Country" aria-label="Default select example">

                            <option className='OrganiserTicketGen-Content-Input-Select-Option'>Team A</option>

                            <option value="Kerala">Goa</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Maharashtra">Maharashtra</option>

                        </select>

                        <select className="OrganiserTicketGen-Content-Input-Country" aria-label="Default select example">

                            <option className='OrganiserTicketGen-Content-Input-Select-Option'>Team B</option>

                            <option value="Kerala">Goa</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Maharashtra">Maharashtra</option>

                        </select>

                    </div>

                    <div>

                        <Link to='/OrganizerTicketGen2' style={{textDecoration:'none'}}><button className='OrganiserTicketGen-button'>Confirm</button></Link>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default OrganiserTicketGen
