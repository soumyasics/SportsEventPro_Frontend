import React from 'react'
import "./TeamCoachHomePage.css"
import img from "../../Assets/teamcoachhomepage_2.png"
import SoccerTourneyImg from "../../Assets/FOOTBALL POSTER TEMPLATE 1(1).png"

function TeamCoachHomePage() {

    return (

        //splash image section start

        <div className='container'>

            <div className='text-center TeamCoachHomePage-PrioDiv-1'>

                <div className='TeamCoachHomePage-img-1 '>

                    <div className='TeamCoachHomePage-TextContainDiv-1'>

                        <h1 className='TeamCoachHomePage-h1-1'>Welcome to Sports Event Pro!</h1>
                        <p className='TeamCoachHomePage-p-1'>Manage your team and stay updated with upcoming events.</p>

                    </div>

                    <div className='TeamCoachHomePage-SpanContainDiv'>

                        <span className='TeamCoachHomePage-span'>To Participate In Upcoming Events <span className='TeamCoachHomePage-span-2'> Enrol Now </span><img src={img} alt='click here' className='justify-content-end TeamCoachHomePage-icon-1 ' /></span>

                    </div>

                </div>

            </div>

            {/* splash image section end */}

            <div className='text-center TeamCoachHomePage-PrioDiv-2'>

                <div className='TeamViewCoachHomePage-TextContainDiv-2'>

                    <h1 className='TeamCoachHomePage-h1-2'>Upcoming Events</h1>
                    <p className='TeamCoachHomePage-p-2'>Team sports bring people together to work towards a common goal.  They require strategy, coordination, and communication to outscore the opposing team.</p>

                </div>

                <div>

                    <div className = 'TeamCoachHomepage-CardContain'>

                        <div className = "card TeamCoachHomePage-Card">

                            <img src = {SoccerTourneyImg} className = "card-img-top" alt = "..."/>

                            <div className = "card-body TeamCoachHomePage-Card-CardBody">

                                <p className = "card-text ">Soccer Tournament</p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


        </div>



    )

}

export default TeamCoachHomePage