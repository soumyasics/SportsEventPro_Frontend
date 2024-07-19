import React from 'react'
import './AdminEventWiseReport.css'
import { Link } from 'react-router-dom'
import img from '../../Assets/FOOTBALL POSTER TEMPLATE 1(3).png'
import img2 from "../../Assets/Back Button.svg"

function AdminEventWiseReport() {

    return (

        <div>

            <div className='AdminEventWiseReport'>

                <div className='AdminEventWiseReport-MainDiv'>

                    {/* separated div for backbutton and text */}
                    <div className='col  AdminEventWiseReport-headercontainer-container-1'>

                        <button className='AdminEventWiseReport-headercontainer-BackButton'><img src={img2} alt=' ' /></button>
                        <h1 className='AdminEventWiseReport-headercontainer-h1'>Results</h1>

                    </div>

                    {/* div containing the card */}
                    <div >

                        <div className='AdminEventWiseReport-content'> {/* <--- array map in this div. Do not remove class or the page will break*/}

                            {/*a single card is from here to */}
                            <div className="card AdminEventWiseReport-content-contain">

                                <img src={img} className="card-img-top AdminEventWiseReport-img" alt="..." />{/*event image */}

                                <div className="card-body">

                                    <div className="card-title" style={{ display: "flex", flexDirection: "row", gap: "100px" }}>

                                        <div style={{ display: "flex", flexDirection: "column" }}>
                                            <h5 className='CardHeadTxtH5'>TVM Junior Sports</h5>{/* event name */}
                                            <h1 className='CardHeadTxtH1'>Football</h1>{/* event category */}
                                        </div>

                                        <div>

                                            <button className='CardHeadTxtButton1'>Add Review & Rating</button>

                                        </div>

                                    </div>

                                    <div className="card-text">

                                        <p className='CardTextP'>Biggest Sports tournament held in Trivandrum. Don’t miss it!</p>{/* event description */}
                                        <h2 className='CardTextH2'>12/12/2024, 2:00 PM</h2> {/* event date and time */}
                                        <div className='AdminEventWiseReport-button-contain'>

                                            <Link to='/TeamCoachViewResults' style={{ textDecoration: 'none' }}><button className='AdminEventWiseReport-button'> Results</button></Link>

                                        </div>

                                    </div>

                                </div>

                            </div>
                            {/* here is a single card  */}

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default AdminEventWiseReport
