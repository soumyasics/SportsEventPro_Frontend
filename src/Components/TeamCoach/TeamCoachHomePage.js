import React from 'react'
import "./TeamCoachHomePage.css"
import img from "../../Assets/Teamcoachhomepage_2.png"
import img2 from "../../Assets/Teamcoachhomepage_5.jpeg"
import img3 from "../../Assets/Teamcoachhomepage_6.jpeg"
import img4 from "../../Assets/Teamcoachhomepage_7.jpeg"
import img5 from "../../Assets/Teamcoachhomepage_3.png"
import img6 from '../../Assets/Teamcoachhomepage_4.png'

function TeamCoachHomePage() {

    return (

        <div>
            {/* splash image section start */}

            <div className='text-center justify-content-center TeamCoachHomePage-PrioDiv-1'>

                <div className='TeamCoachHomePage-img-1 '>

                    <div className='TeamCoachHomePage-img-content-contain'>

                        <div className='TeamCoachHomePage-Text-Contain-Div-1'>

                            <h1 className='TeamCoachHomePage-h1-1'>Welcome to Sports Event Pro!</h1>
                            <p className='TeamCoachHomePage-p-1'>Manage your team and stay updated with upcoming events.</p>

                        </div>

                        <div className='TeamCoachHomePage-SpanContainDiv'>

                            <span className='TeamCoachHomePage-span'>To Participate In Upcoming Events <span className='TeamCoachHomePage-span-2'> Enroll Now </span>
                                <img src={img} alt='click here' className='justify-content-end TeamCoachHomePage-icon-1 ' />
                            </span>

                        </div>
                    </div>

                </div>

            </div>

            {/* splash image section end */}

            {/* Upcoming events section start */}

            <div className='text-center TeamCoachHomePage-PrioDiv-2'>

                <div className='TeamViewCoachHomePage-Text-Contain-Div-2'>

                    <h1 className='TeamCoachHomePage-h1-2'>Upcoming Events</h1>
                    <p className='TeamCoachHomePage-p-2'>Team sports bring people together to work towards a common goal.  They require strategy, coordination, and communication to outscore the opposing team.</p>

                </div>

                <div className=''>

                    <div className='TeamCoachHomepage-Card-Contain'>

                        {/* CARD NO. 1 */}
                        <div className="card rounded-2 TeamCoachHomePage-Card-Start">

                            <img src={img2} className="card-img-top TeamCoachHomePage-Card-Img " alt="..." />

                            <div className="card-body rounded-2 TeamCoachHomePage-Card-Body">

                                <p className="card-text TeamCoachHomePage-Card-Body-Text-1 ">Soccer Tournament</p>
                                <p className='TeamCoachHomePage-Card-Body-Text-2'>7:30 pm / 2-11 September</p>

                            </div>

                        </div>

                        {/* CARD NO. 2 */}
                        <div className="card rounded-2 TeamCoachHomePage-Card">

                            <img src={img3} className="card-img-top TeamCoachHomePage-Card-Img " alt="..." />

                            <div className="card-body rounded-2 TeamCoachHomePage-Card-Body">

                                <p className="card-text TeamCoachHomePage-Card-Body-Text-1 ">Volleyball Tournament</p>
                                <p className='TeamCoachHomePage-Card-Body-Text-2'>5:30 pm / 2-11 september</p>

                            </div>

                        </div>

                        {/* CARD NO. 3 */}
                        <div className="card rounded-2 TeamCoachHomePage-Card">

                            <img src={img4} className="card-img-top TeamCoachHomePage-Card-Img " alt="..." />

                            <div className="card-body rounded-2 TeamCoachHomePage-Card-Body">

                                <p className="card-text TeamCoachHomePage-Card-Body-Text-1 ">Tennis Tournament</p>
                                <p className='TeamCoachHomePage-Card-Body-Text-2'>6:30 pm/2-11 December</p>

                            </div>

                        </div>

                        {/* CARD NO. 4 */}
                        <div className="card rounded-2 TeamCoachHomePage-Card">

                            <img src={img5} className="card-img-top TeamCoachHomePage-Card-Img " alt="..." />

                            <div className="card-body rounded-2 TeamCoachHomePage-Card-Body">

                                <p className="card-text TeamCoachHomePage-Card-Body-Text-1 ">Football Tournament</p>
                                <p className='TeamCoachHomePage-Card-Body-Text-2'>6:30 pm/2-11 November</p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* Upcoming events section end */}

            {/* Enroll for events section start */}

            <div className='TeamCoachHomePage-PrioDiv-3'>

                <div className='TeamCoachHomePage-Enroll-Contain'>

                    <div className='TeamCoachHomePage-Text-Contain-Div-2'>

                        <p className='TeamCoachHomePage-Text-Contain-p-1'>Enroll For Events</p>
                        <p className=' TeamCoachHomePage-Text-Contain-p-2'>Sports are physical activities that test your skills and fitness. They can be competitive, with teams or individuals vying for victory. From soccer to swimming, sports offer fun, exercise, and a chance to push your limits.</p>
                        <p className='TeamCoachHomePage-Text-Contain-p-3'>Choose the favouirite sports you are looking for and enrol your slot now...</p>
                        <button className='btn btn-light rounded-4 TeamCoachHomePage-Text-Contain-Button-1'>Enroll Now</button>

                    </div>

                    <div>

                        <img src={img6} alt='...' />

                    </div>

                </div>

            </div>

            {/* Enroll for events section end */}


        </div>



    )

}

export default TeamCoachHomePage