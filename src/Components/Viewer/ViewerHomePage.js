import React from 'react'
import './ViewerHomePage.css'
import img2 from "../../Assets/Teamcoachhomepage_5.jpeg"
import img3 from "../../Assets/Teamcoachhomepage_6.jpeg"
import img4 from "../../Assets/Teamcoachhomepage_7.jpeg"
import img5 from "../../Assets/Teamcoachhomepage_3.png"
import img6 from '../../Assets/Teamcoachhomepage_4.png'
import img7 from '../../Assets/ViewerHomepage-1.jpg'
import img8 from '../../Assets/viewerhomepage-2.png'
import img9 from '../../Assets/Rectangle 1.png'

function ViewerHomePage() {

    return (

        <div>

            {/* div containing the header and the header abckground img */}
            <div className='ViewerHomePage-PrioDiv-1'>

                {/* div containing the black layer over the header bg img */}
                <div className='ViewerHomePage-Div-Header-Text'>

                    <div>

                        <h1 className='ViewerHomePage-Div-Header-Text-h1'>Welcome to Sports Event Pro!</h1>

                    </div>

                    <div className='ViewerHomePage-Div-Header-Text-p-contain'>

                        <p className='ViewerHomePage-Div-Header-Text-p'>Sports are a broad category of activities that involve physical exertion and skill.
                            They are often competitive, with participants striving to achieve a goal or outdo their opponents.
                            Sports can be individual or team-based, and they can be played for fun, exercise, or competition.
                        </p>

                    </div>

                    <div>

                        <button type="button" class="btn btn-outline-light ViewerHomePage-Div-Header-Text-Button">Book Now</button>

                    </div>

                </div>


            </div>


            {/* Upcoming events section start */}
            <div className='text-center ViewerHomePage-PrioDiv-2'>

                <div className='TeamViewCoachHomePage-Text-Contain-Div-2'>

                    <h1 className='ViewerHomePage-h1-2'>Upcoming Events</h1>
                    <p className='ViewerHomePage-p-2'>Team sports bring people together to work towards a common goal.  They require strategy, coordination, and communication to outscore the opposing team.</p>

                </div>

                <div className=''>

                    <div className='ViewerHomepage-Card-Contain'>

                        {/* CARD NO. 1 */}
                        <div className="card rounded-2 ViewerHomePage-Card-Start">

                            <img src={img2} className="card-img-top ViewerHomePage-Card-Img " alt="..." />

                            <div className="card-body rounded-2 ViewerHomePage-Card-Body">

                                <p className="card-text ViewerHomePage-Card-Body-Text-1 ">Soccer Tournament</p>
                                <p className='ViewerHomePage-Card-Body-Text-2'>7:30 pm / 2-11 September</p>

                            </div>

                        </div>

                        {/* CARD NO. 2 */}
                        <div className="card rounded-2 ViewerHomePage-Card">

                            <img src={img3} className="card-img-top ViewerHomePage-Card-Img " alt="..." />

                            <div className="card-body rounded-2 ViewerHomePage-Card-Body">

                                <p className="card-text ViewerHomePage-Card-Body-Text-1 ">Volleyball Tournament</p>
                                <p className='ViewerHomePage-Card-Body-Text-2'>5:30 pm / 2-11 september</p>

                            </div>

                        </div>

                        {/* CARD NO. 3 */}
                        <div className="card rounded-2 ViewerHomePage-Card">

                            <img src={img4} className="card-img-top ViewerHomePage-Card-Img " alt="..." />

                            <div className="card-body rounded-2 ViewerHomePage-Card-Body">

                                <p className="card-text ViewerHomePage-Card-Body-Text-1 ">Tennis Tournament</p>
                                <p className='ViewerHomePage-Card-Body-Text-2'>6:30 pm/2-11 December</p>

                            </div>

                        </div>

                        {/* CARD NO. 4 */}
                        <div className="card rounded-2 ViewerHomePage-Card">

                            <img src={img5} className="card-img-top ViewerHomePage-Card-Img " alt="..." />

                            <div className="card-body rounded-2 ViewerHomePage-Card-Body">

                                <p className="card-text ViewerHomePage-Card-Body-Text-1 ">Football Tournament</p>
                                <p className='ViewerHomePage-Card-Body-Text-2'>6:30 pm/2-11 November</p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* Upcoming events section end */}

            {/* Enroll for events section start */}

            <div className='ViewerHomePage-PrioDiv-3'>

                <div className='ViewerHomePage-Enroll-Contain'>

                    <div className='ViewerHomePage-Text-Contain-Div-2'>

                        <div>

                            <p className='ViewerHomePage-Text-Contain-p-1'>Book your tickets</p>

                        </div>

                        <div>

                            <p className=' ViewerHomePage-Text-Contain-p-2'>Sports are physical activities that test your skills and fitness.
                                They can be competitive, with teams or individuals vying for victory.
                                From soccer to swimming, sports offer fun, exercise, and a chance to push your limits.
                            </p>

                        </div>

                        <div>

                            <p className='ViewerHomePage-Text-Contain-p-3'>Choose the favouirite sports you are looking for and book your slot now...</p>

                        </div>

                        <div>

                            <button className='btn btn-light rounded-4 ViewerHomePage-Text-Contain-Button-1'>Book Now</button>

                        </div>

                    </div>

                    <div>

                        <img src={img6} alt='...' />

                    </div>

                </div>

            </div>

            {/* Enroll for events section end */}

            {/* suggestions for you section start */}
            <div className='ViewerHomePage-PrioDiv-4'>

                <div className='ViewerHomePage-img-1'>

                    <img src={img7} alt=' '/>

                </div>
                
                <div>

                    <h1 className='ViewerHomePage-img-h1'>Suggestions for you...</h1>

                    <div className='ViewerHomePage-img-contain'>

                        <div className='card'>

                            <img src={img8} alt=' ' className='rounded-top'/>

                            <div className='card-body ViewerHomePage-img-cardtext-contain'>

                                <h1 className='card-title ViewerHomePage-img-cardtext-1'>local cricket match</h1>
                                <p className='card-text ViewerHomePage-img-cardtext-2'>next week</p>

                            </div>

                        </div>
                        <div className='card'>

                            <img src={img9} alt=' ' className='rounded-top'/>

                            <div className='card-body ViewerHomePage-img-cardtext-contain'>

                                <h1 className='card-title ViewerHomePage-img-cardtext-1'>Foot Ball Event</h1>
                                <p className='card-text ViewerHomePage-img-cardtext-2'>Coming soon</p>

                            </div>

                        </div>

                    </div>

                </div>
                
            </div>

        </div>

    )

}

export default ViewerHomePage
