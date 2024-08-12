import React, { useEffect, useState } from 'react'
import './ViewerHomePage.css'
import img2 from "../../Assets/Teamcoachhomepage_5.jpeg"
import img3 from "../../Assets/Teamcoachhomepage_6.jpeg"
import img4 from "../../Assets/Teamcoachhomepage_7.jpeg"
import img5 from "../../Assets/Teamcoachhomepage_3.png"
import img6 from '../../Assets/Teamcoachhomepage_4.png'
import img7 from '../../Assets/ViewerHomepage-1.jpg'
import img8 from '../../Assets/viewerhomepage-2.png'
import img9 from '../../Assets/Rectangle 1.png'
import img10 from '../../Assets/image 4.png'
import img11 from '../../Assets/image 3.png'
import img12 from '../../Assets/image 15.png'
import { Link } from 'react-router-dom'
import axiosInstance from '../Constant/BaseURL'
function ViewerHomePage() {

    const [userData, setUserData] = useState([]);
    const [sportData, setsportData] = useState([]);

    const id = localStorage.getItem('viewerId')


    useEffect(() => {
        console.log("VGDFGFD");
        axiosInstance.post('/getValidTickets')
            .then(res => {
                console.log("DATA", res.data.data);
                setUserData(res.data.data);

            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    useEffect(() => {

        let res;


        axiosInstance.post(`getEventSuggestionsForViewer/${id}`).then(res => {

            console.log(res);

            if ((res.data.data) && (res.data.data).length > 0) {
                setsportData(res.data.data);
                console.log("datas", res.data.data);
            }
            else
                setsportData(null)
            console.log(res.data.data);
        }).catch(err => {
            console.log(err);
        })

    }, []);

    return (

        <div>

            {/* div containing the header and the header background img */}
            <div className='ViewerHomePage-PrioDiv-1'>

                <div className='ViewerHomePage-bgDiv'>

                    <div class="carousel slide carousel-fade ViewerHomePage-Carousel" data-bs-ride="carousel" data-bs-interval="2000" >

                        <div class="carousel-inner" style={{ height: "100%" }}>

                            <div class="carousel-item active">

                                <img src={img10} class="w-100" style={{ height: "80%" }} alt="..." />

                            </div>

                            <div class="carousel-item">

                                <img src={img11} class="w-100" style={{ height: "80%" }} alt="..." />

                            </div>

                            <div class="carousel-item">

                                <img src={img12} class="w-100" style={{ height: "80%" }} alt="..." />

                            </div>

                        </div>

                    </div>

                </div>

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

                        <Link to='/ViewerUpcoming' style={{ textDecoration: 'none' }}><button type="button" class="btn btn-outline-light ViewerHomePage-Div-Header-Text-Button">Book Now</button></Link>

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

                        {

                            (userData && userData.length >= 1) ? (userData.map((x, index) => {

                                return (
                                    <>
                                        <Link to={`/ViewerUpcoming`} style={{ textDecoration: 'none' }}> <div className="card rounded-2 ViewerHomePage-Card-Start">

                                            <img src={`${axiosInstance.defaults.url}/${x?.eventId?.banner?.filename}`} className="card-img-top ViewerHomePage-Card-Img " alt="..." />

                                            <div className="card-body rounded-2 ViewerHomePage-Card-Body">

                                                <p className="card-text ViewerHomePage-Card-Body-Text-1 ">{x?.eventId?.name}</p>
                                                <p className="card-text ViewerHomePage-Card-Body-Text-1 ">Category : {x?.eventId?.category}</p>

                                                <p className='ViewerHomePage-Card-Body-Text-2'>{x?.eventId?.time}/ {x?.eventId?.date.slice(0, 10)}</p>

                                            </div>

                                        </div></Link>
                                    </>
                                )
                            })
                            ) : (
                                <>
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

                                </>
                            )
                        }

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

                            <Link to='/ViewerUpcoming' style={{ textDecoration: 'none' }}><button className='btn btn-light rounded-4 ViewerHomePage-Text-Contain-Button-1'>Book Now</button></Link>

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

                <div className='ViewerHomePage-PrioDiv-4-imgcontain'>

                    <div className='ViewerHomePage-img-1'>

                        <img src={img7} alt=' ' />

                    </div>

                    <div>

                        <h1 className='ViewerHomePage-img-h1'>Suggestions for you...</h1>

                        <div className='ViewerHomePage-img-contain'>

                            {console.log(sportData)
                            }
                            {

                                (sportData && sportData.length >= 1) ? (sportData.map((x, index) => {

                                    return (
                                        <>
                                            <div className='card'>

                                                <img src={`${axiosInstance.defaults.url}/${x?.eventId?.banner?.filename}`} className="card-img-top ViewerHomePage-Card-Img " alt="..." />

                                                <div className='card-body ViewerHomePage-img-cardtext-contain'>

                                                    <h1 className='card-title ViewerHomePage-img-cardtext-1'>{x?.eventId?.name}</h1>
                                                    <p className="card-text ViewerHomePage-Card-Body-Text-1 ">Category : {x?.eventId?.category}</p>

                                                    <p className='ViewerHomePage-Card-Body-Text-2'>{x?.eventId?.time}/ {x?.eventId?.date.slice(0, 10)}</p>

                                                </div>

                                            </div>
                                        </>

                                    )
                                })) : (
                                    <>

                                        <div className='card'>

                                            <img src={img8} alt=' ' className='rounded-top' />

                                            <div className='card-body ViewerHomePage-img-cardtext-contain'>

                                                <h1 className='card-title ViewerHomePage-img-cardtext-1'>local cricket match</h1>
                                                <p className='card-text ViewerHomePage-img-cardtext-2'>next week</p>

                                            </div>

                                        </div>

                                        <div className='card'>

                                            <img src={img9} alt=' ' className='rounded-top' />

                                            <div className='card-body ViewerHomePage-img-cardtext-contain'>

                                                <h1 className='card-title ViewerHomePage-img-cardtext-1'>Foot Ball Event</h1>
                                                <p className='card-text ViewerHomePage-img-cardtext-2'>Coming soon</p>

                                            </div>

                                        </div>
                                    </>
                                )
                            }
                        </div>

                    </div>
                </div>

            </div>

        </div>

    )

}

export default ViewerHomePage
