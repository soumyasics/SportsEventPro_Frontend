import React from 'react'
import './ViewerBookedTickets.css'
import { Link } from 'react-router-dom'
import img from '../../Assets/Rectangle 4618.png'
import img2 from "../../Assets/Back Button.svg"

function ViewerBookedTickets() {

    return (

        <div className='ViewerBookedTickets'>

            <div className='ViewerBookedTickets-MainDiv'>

                {/* seperated div for backbutton and text */}
                <div className='col  ViewerBookedTickets-headercontainer-container-1'>

                    <button className='ViewerBookedTickets-headercontainer-BackButton'><img src={img2} alt=' ' /></button>
                    <h1 className='ViewerBookedTickets-headercontainer-h1'>Booked Tickets</h1>

                </div>

                {/* div containing the card */}
                <div >

                    <div className='ViewerBookedTickets-content'> {/* <--- array map in this div. Do not remove class or the page will break*/}

                        {/*a single card is from here to */}
                        <div className="card ViewerBookedTickets-content-contain">

                            <div className='ViewerBookedTickets-content-contain-overlay'>
                                <h1 className='ViewerBookedTickets-content-contain-h1-1'>Match On</h1>
                                <h1 className='ViewerBookedTickets-content-contain-h1-2'>12/12/2024</h1>

                            </div>
                            <img src={img} className="card-img-top ViewerBookedTickets-img" alt="..." />{/*event image */}

                            <div className="card-body" style={{ width: '100%' }}>

                                <div className="card-title" style={{ display: "flex", flexDirection: "column" }}>

                                    <h5 className='CardHeadTxtH5'>The Eagles Vs The Kings</h5>{/* event name */}

                                    <div style={{ display: "flex", flexDirection: 'row', gap: '8px' }}>

                                        <h1 className='CardHeadTxtH1-1'>TVM Junior Sports</h1>
                                        <h1 className='CardHeadTxtH1'>Football</h1>{/* event category */}
                                        <div>
                                            <button className='ViewerBookedTxtButton1'>Add Review & Rating</button>
                                        </div>
                                    </div>

                                    <div style={{ display: "flex", flexDirection: 'row' }}>
                                        <h3 className='CardHeadTxtH3'> 1 Tickets</h3> {/*replace 1 with the no of tickets */}
                                        <h4 className='ViewerBookedPrice'>₹499.00</h4>
                                    </div>


                                </div>

                                <div className="card-text" style={{ display: 'flex', flexDirection: 'row' }}>

                                    <div>

                                        <p className='CardTextP'>Venue : Trivandrum</p>{/* event description */}
                                        <h2 className='CardTextH2'>12/12/2024, 2:00 PM</h2> {/* event date and time */}

                                    </div>


                                </div>

                            </div>

                        </div>
                        {/* here is a single card  */}

                    </div>

                </div>

            </div>

        </div>

    )

}

export default ViewerBookedTickets
