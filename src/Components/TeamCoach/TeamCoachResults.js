import React from 'react'
import './TeamCoachResults.css'
import { Link } from 'react-router-dom'

import img from '../../Assets/FOOTBALL POSTER TEMPLATE 1(3).png'
import img2 from "../../Assets/Back Button.svg"


function TeamCoachResults() {

    return (

        <div className='TeamCoachResults'>

            <div className='TeamCoachResults-MainDiv'>

                {/* seperated div for backbutton and text */}
                <div className='col  TeamCoachResults-headercontainer-container-1'>

                    <button className='OrganiserEditProfile-headercontainer-BackButton'><img src={img2} alt=' ' /></button>
                    <h1 className='TeamCoachResults-headercontainer-h1'>Results</h1>

                </div>

                {/* div containing the card */}
                <div >

                    <div className='TeamCoachResults-content'> {/* <--- array map in this div. Do not remove class or the page will break*/}

                        {/*a single card is from here to */}
                        <div className="card TeamCoachResults-content-contain">

                            <img src={img} className="card-img-top TeamCoachResults-img" alt="..." />{/*event image */}

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
                                    <div className='TeamCoachResults-button-contain'>

                                        <Link to='/TeamCoachViewResults' style={{textDecoration:'none'}}><button className='TeamCoachResults-button'> Results</button></Link>

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

export default TeamCoachResults
