import React, { useEffect, useRef } from 'react'
import './ViewerReviewRating.css'
import img from '../../Assets/Group 90.svg'
import img2 from "../../Assets/Back Button.svg"
import ReactStars from 'react-stars'
import { Link } from 'react-router-dom'

function ViewerReviewRating() {

    // match the (a) to the variable of the value of ReactStars you change to
    let a = 4

    const txtpref = useRef(null)

    useEffect(() => {

        let TxTP = txtpref.current

        if (a === 5) {

            TxTP.innerHTML = "Great"

        }
        else if (a === 4) {

            TxTP.innerHTML = "Good"

        }
        else if (a === 3) {

            TxTP.innerHTML = "Average"

        }
        else if (a === 2) {

            TxTP.innerHTML = "Bad"

        }
        else {

            TxTP.innerHTML = "Very Bad"

        }

    });

    return (

        <div className='ViewerReviewRating'>

            <div className='ViewerReviewRatingMainDiv'>

                {/* seperated div for backbutton and text */}
                <div className='col  ViewerReviewRating-headercontainer-container-1'>

                    <Link to='/ViewerHomePage'><button className='ViewerReviewRatingMainDiv-headercontainer-BackButton'><img src={img2} alt=' ' /></button></Link>
                    <h1 className='ViewerReviewRatingMainDiv-headercontainer-h1'>Review & Ratings</h1>

                </div>

                {/* div for the rest of the div to display */}
                <div className=' col ViewerReviewRating-content-container'>

                    {/* arraymap from here */}
                    {/* start */}
                    <div className='ViewerReviewRating-content'>

                        {/* for the rating stars */}
                        <div style={{display:"flex",flexDirection:"row"}}>

                            <div className="d-flex mt-2">
                                <ReactStars
                                    count={5}
                                    size={30}
                                    value={a}
                                    color1='#D9D9D9'
                                    color2='#56B60B'
                                    edit={false}
                                />
             {/* please make sure to match the value of  ReacStars (a) to the above given useEffect so that the dynamic ratings text will work */}
                            </div>

                            <p className='ViewerReviewRating-star-p' ref={txtpref}></p>

                        </div>
                        
                        <h1 className='ViewerReviewRating-content-h1'>Good experience{/* put the coach review in here */}</h1>

                        <div className='ViewerReviewRating-content-contentcontainer'>

                            <div className='ViewerReviewRating-content-content'>

                                <img src={img} alt='' />
                                <p className='ViewerReviewRating-content-p'>Enrolled team coach{/* TeamCaoch name maybe? or team name? */}</p>

                            </div>
                            <li>
                                <p className='ViewerReviewRating-content-p'>Feb, 2024{/* review date here */}</p>
                            </li>


                        </div>

                    </div>
                    {/* end */}
                </div>

            </div>

        </div>

    )

}

export default ViewerReviewRating
