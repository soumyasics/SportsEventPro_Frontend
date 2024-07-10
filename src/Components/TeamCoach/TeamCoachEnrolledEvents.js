import React from 'react'
import './TeamCoachEnrolledEvents.css'
import img from '../../Assets/FOOTBALL POSTER TEMPLATE 1(3).png'
import img2 from "../../Assets/Back Button.svg"

function TeamCoachEnrolledEvents() {

    return (

        <div className='TeamCoachEnrolledEvents'>

            <div className='TeamCoachEnrolledEvents-MainDiv'>

                {/* seperated div for backbutton and text */}
                <div className='col  TeamCoachEnrolledEvents-headercontainer-container-1'>

                    <button className='TeamCoachEnrolledEvents-headercontainer-BackButton'><img src={img2} alt=' ' /></button>
                    <h1 className='TeamCoachEnrolledEvents-headercontainer-h1'>Upcoming Events</h1>

                </div>

                {/* div containing the card */}
                <div >

                    <div className='TeamCoachEnrolledEvents-content'> {/* <--- array map this div or outside this div. Do not remove 
                    class or create a div inside otherwise the page will break*/}

                        {/*a single card is from here to */}
                        <div className="card TeamCoachEnrolledEvents-content-contain">

                            <img src={img} className="card-img-top TeamCoachEnrolledEvents-img" alt="..." />{/*event image */}

                            <div className="card-body">

                                <div className="card-title" style={{display:"flex",flexDirection:"row", gap:"107px"}}>

                                    <div style={{display:"flex",flexDirection:"column"}}>
                                        <h5 className='CardHeadTxtH5'>TVM Junior Sports</h5>{/* event name */}
                                        <h1 className='CardHeadTxtH1'>Football</h1>{/* event category */}
                                    </div>

                                    <div>

                                        <button className='CardHeadTxtButton'>Add Review & Rating</button>

                                    </div>

                                </div>

                                <div className="card-text">

                                    <p className='CardTextP'>Biggest Sports tournament held in Trivandrum. Don’t miss it!</p>{/* event description */}
                                    <h2 className='CardTextH2'>12/12/2024, 2:00 PM</h2> {/* event date and time */}

                                </div>

                            </div>

                        </div>
                        {/* here is a single card  */}

                    </div>

                </div>

                {/* div containing "load more" */}
                <div>

                    <a href=" " className='TeamCoachEnrolledEvents-a'>Load More</a>

                </div>

            </div>

        </div>

    )

}

export default TeamCoachEnrolledEvents
