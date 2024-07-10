import React from 'react'
import './TeamCoachViewEvents.css'
import img from '../../Assets/FOOTBALL POSTER TEMPLATE 1(3).png'
import img2 from "../../Assets/Back Button.svg"

function TeamCoachViewEvents() {

    return (

        <div className='TeamCoachViewEvents'>

            <div className='TeamCoachViewEvents-MainDiv'>

                {/* seperated div for backbutton and text */}
                <div className='col  TeamCoachViewEvents-headercontainer-container-1'>

                    <button className='OrganiserEditProfile-headercontainer-BackButton'><img src={img2} alt=' ' /></button>
                    <h1 className='TeamCoachViewEvents-headercontainer-h1'>Upcoming Events</h1>

                </div>

                {/* div containing the card */}
                <div >

                    <div className='TeamCoachViewEvents-content'> {/* <--- array map in this div. Do not remove class or the page will break*/}

                        {/*a single card is from here to */}
                        <div className="card TeamCoachViewEvents-content-contain">

                            <img src={img} className="card-img-top TeamCoachViewEvents-img" alt="..." />{/*event image */}

                            <div className="card-body">

                                <div className="card-title">

                                    <h5 className='CardHeadTxtH5'>TVM Junior Sports</h5>{/* event name */}
                                    <h1 className='CardHeadTxtH1'>Football</h1>{/* event category */}

                                </div>

                                <div className="card-text">

                                    <p className='CardTextP'>Biggest Sports tournament held in Trivandrum. Don’t miss it!</p>{/* event description */}
                                    <h2 className='CardTextH2'>12/12/2024, 2:00 PM</h2> {/* event date and time */}
                                    <div className='TeamCoachViewEvents-button-contain'>

                                        <button className='TeamCoachViewEvents-button'> Enroll Now</button>

                                    </div>

                                </div>

                            </div>

                        </div>
                        {/* here is a single card  */}

                    </div>

                </div>

                {/* div containing "load more" */}
                <div>

                    <a href=" " className='TeamCoachViewEvents-a'>Load More</a>

                </div>

            </div>

        </div>

    )

}

export default TeamCoachViewEvents
