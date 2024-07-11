import React from 'react'
import './OrganiserScoreboard.css'
import img from '../../Assets/FOOTBALL POSTER TEMPLATE 1(3).png'
import { Link } from 'react-router-dom'

function OrganiserScoreboard() {

    return (

        <div className='OrganiserScoreBoard'>

            <div className='OrganiserScoreBoard-MainDiv'>

                

                {/* div containing the card */}
                <div >

                    <div className='OrganiserScoreBoard-content'> {/* <--- array map in this div. Do not remove class or the page will break*/}

                        {/*a single card is from here to */}
                        <div className="card OrganiserScoreBoard-content-contain">

                            <img src={img} className="card-img-top OrganiserScoreBoard-img" alt="..." />{/*event image */}

                            <div className="card-body" style={{width:"100%"}}>

                                <div className="card-title">

                                    <h5 className='CardHeadTxtH5'>TVM Junior Sports</h5>{/* event name */}
                                    <h1 className='CardHeadTxtH1'>Football</h1>{/* event category */}

                                </div>

                                <div className="card-text">

                                    <p className='CardTextP'>Place:{/* event location */}</p>
                                    <h2 className='CardTextH2'>12/12/2024, 2:00 PM</h2> {/* event date and time */}
                                    <div className='OrganiserScoreBoard-button-contain'>

                                        <Link to='/OrganizerViewScore' style={{textDecoration:"none"}}><button className='OrganiserScoreBoard-button'>View Score</button></Link>

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

export default OrganiserScoreboard
