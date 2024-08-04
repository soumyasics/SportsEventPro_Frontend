import './TeamCoachReviewRatings.css'
import img from '../../Assets/Group 90.svg'
import img2 from "../../Assets/Back Button.svg"
import ReactStars from 'react-stars'
import React, { useEffect, useRef, useState } from 'react'

import { Link } from 'react-router-dom'
import axiosInstance from '../Constant/BaseURL'
function TeamCoachReviewRatings() {

    
    let a = 4
    const [userData, setUserData] = useState([]);


    const txtpref = useRef(null)
    useEffect(() => {

        let res;


        axiosInstance.post(`viewApprovedEvents`).then(res => {

            console.log(res);

            if ((res.data.data).length > 0)
                setUserData(res.data.data);
            else
                setUserData(null)
            console.log(res.data.data);
        }).catch(err => {
            console.log(err);
        })

    }, []);

    return (

        <div className='TeamCoachReviewRatings'>

            <div className='TeamCoachRRMainDiv'>

                {/* seperated div for backbutton and text */}
                <div className='col  TeamCoachRR-headercontainer-container-1'>

                <Link to='/TeamCoachHomePage'>
                <button className='TeamCoachRRMainDiv-headercontainer-BackButton'><img src={img2} alt=' ' /></button></Link>
                    <h1 className='TeamCoachRRMainDiv-headercontainer-h1'>Review & Ratings</h1>

                </div>

                {/* div for the rest of the div to display */}
                <div className=' col TeamCoachRR-content-container'>

                    {/* arraymap from here */}
                    {/* start */}
                    {

(userData && userData.length > 0) ? (userData.map((x, index) => {

    return (
                    <div className='TeamCoachRR-content'>

                        {/* for the rating stars */}
                        <div style={{display:"flex",flexDirection:"row"}}>

                            <div className="d-flex mt-2">
                                <ReactStars
                                    count={5}
                                    size={30}
                                    value={x.rating}
                                    color1='#D9D9D9'
                                    color2='#56B60B'
                                    edit={false}
                                />
             {/* please make sure to match the value of  ReacStars (a) to the above given useEffect so that the dynamic ratings text will work */}
                            </div>

                            <p className='TeamCoachRR-star-p' ref={txtpref}></p>

                        </div>
                        
                        <h1 className='TeamCoachRR-content-h1'>{x.name}{/* put the coach review in here */}</h1>

                        <div className='TeamCoachRR-content-contentcontainer'>

                            <div className='TeamCoachRR-content-content'>

                                <img src={img} alt='' />
                                <p className='TeamCoachRR-content-p'>{x.organizerId.name}{/* TeamCaoch name maybe? or team name? */}</p>

                            </div>
                                <p className='TeamCoachRR-content-p'>{x.date.slice(0, 10)}{/* review date here */}</p>
                            <Link to={`/TeamCoachViewReviews/${x._id}`} style={{textDecoration:'none'}}><button className='AButt'>View Details</button></Link>


                        </div>

                    </div>
                     )
                    })
                    ) : (<h1>No reviews</h1>)

                }
                    {/* end */}
                </div>

            </div>

        </div>

    )

}

export default TeamCoachReviewRatings
