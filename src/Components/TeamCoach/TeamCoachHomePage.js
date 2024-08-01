import React, { useState, useEffect } from 'react';
import "./TeamCoachHomePage.css";
import img from "../../Assets/Teamcoachhomepage_2.png";
import img2 from "../../Assets/Teamcoachhomepage_5.jpeg";
import img6 from '../../Assets/Teamcoachhomepage_4.png';
import img3 from '../../Assets/arrow-left-s-line.png'
import { Link } from 'react-router-dom';
import axiosInstance from '../Constant/BaseURL';

function TeamCoachHomePage() {
    const [userData, setUserData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3; // Number of items per slide

    useEffect(() => {
        axiosInstance.post('/viewApprovedEvents')
            .then(res => {
                setUserData(res.data.data);
            })
            .catch(err => {
                console.error("Error fetching data: ", err);
            });
    }, []);

    const nextSlide = () => {
        if (currentIndex < Math.ceil(userData.length / itemsPerPage) - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const startIndex = currentIndex * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleItems = userData.slice(startIndex, endIndex);

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
                            <span className='TeamCoachHomePage-span'>To Participate In Upcoming Events <span className='TeamCoachHomePage-span-2'><Link to='/TeamCoachEnrollNow' className='TeamCoachHomePage-link1'> Enroll Now </Link></span>
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
                    <p className='TeamCoachHomePage-p-2'>Team sports bring people together to work towards a common goal. They require strategy, coordination, and communication to outscore the opposing team.</p>
                </div>
                <div className='TeamCoachHomepage-Card-Contain'>
                    {userData.length === 0 ? (
                        <p>No events available.</p>
                    ) : (
                        <div className='slider-container'>
                            <button className='slider-btn TeamCoachHomepageSlideDiv' onClick={prevSlide}><img className='TeamCoachHomepageSlideleft' src={img3}></img></button>
                            <div className='slider'>
                                {visibleItems.map((e, index) => (
                                    <div key={index} className="card rounded-2 TeamCoachHomePage-Card-Start">
                                        <img
                                            src={e?.banner?.filename ? `${axiosInstance.defaults.url}/${e.banner.filename}` : img2} // Fallback image
                                            className="card-img-top TeamCoachHomePage-Card-Img"
                                            alt={e.category || "Event Banner"}
                                        />
                                        <div className="card-body rounded-2 TeamCoachHomePage-Card-Body">
                                            <p className="card-text TeamCoachHomePage-Card-Body-Text-1">{e.category}</p>
                                            <p className='TeamCoachHomePage-Card-Body-Text-2'>{e.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className='slider-btn TeamCoachHomepageSlideDiv' onClick={nextSlide}><img className='TeamCoachHomepageSlide' src={img3}></img></button>
                        </div>
                    )}
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
    );
}

export default TeamCoachHomePage;
