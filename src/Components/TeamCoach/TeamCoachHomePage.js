import React from 'react'
import "./TeamCoachHomePage.css"
import img from "../../Assets/teamcoachhomepage_2.png"

function TeamCoachAfterLoginPage() {

    return (

        //splash image section start

        <div className = 'container text-center'>

            <div className = 'TeamCoachHomePage-img-1 '>

                <div className = 'TeamCoachHomePage-TextContainDiv'>

                    <h1 className = 'TeamCoachHomePage-h1-1'>Welcome to Sports Event Pro!</h1>
                    <p className = 'TeamCoachHomePage-p-1'>Manage your team and stay updated with upcoming events.</p>

                </div>

                <div className = 'TeamCoachHomePage-SpanContainDiv'>
                    <span className = 'TeamCoachHomePage-span'>To Participate In Upcoming Events <span className = 'TeamCoachHomePage-h1-2'> Enrol Now </span><img src={img} alt='click here' className = 'justify-content-end TeamCoachHomePage-icon-1 '/></span>
                </div>

            </div>

        </div>

        //splash image section end

        

    )

}

export default TeamCoachAfterLoginPage