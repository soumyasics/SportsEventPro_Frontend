import React, { useEffect, useRef } from 'react'
import './AdminReviewandRatings.css'
import img from '../../Assets/Group 90(1).svg'
import img2 from "../../Assets/Back Button.svg"
import ReactStars from 'react-stars'
import { Link } from 'react-router-dom'

function AdminReviewandRatings() {

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

        <div className='AdminReviewandRatings'>

            <div className='AdminReviewandRatingsMainDiv'>

                {/* seperated div for backbutton and text */}
                <div className='col  AdminReviewandRatings-headercontainer-container-1'>

                    <Link to='/ViewerHomePage'><button className='AdminReviewandRatingsMainDiv-headercontainer-BackButton'><img src={img2} alt=' ' /></button></Link>
                    <h1 className='AdminReviewandRatingsMainDiv-headercontainer-h1'>Review & Ratings</h1>

                </div>

                {/* div for the rest of the div to display */}
                <div className=' col AdminReviewandRatings-content-container'>

                    {/* arraymap from here */}
                    {/* start */}
                    <div className='AdminReviewandRatings-content'>

                        {/* for the rating stars */}
                        <div style={{ display: "flex", flexDirection: "row" }}>

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

                            <p className='AdminReviewandRatings-star-p' ref={txtpref}></p>

                        </div>

                        <h1 className='AdminReviewandRatings-content-h1'>Good experience{/* put the coach review in here */}</h1>

                        <div className='AdminReviewandRatings-content-contentcontainer'>

                            <div className='AdminReviewandRatings-content-content'>

                                <img src={img} alt='' />
                                <div style={{display:'flex',flexDirection:'column',gap:'0px'}}>
                                    <p className='AdminReviewandRatings-content-p'>Priya{/* TeamCoach name*/}</p>
                                    <p className='AdminReviewandRatings-content-p-2'>TeamCoach</p>
                                </div>
                            </div>
                            <li>
                                <p className='AdminReviewandRatings-content-p'>Feb, 2024{/* review date here */}</p>
                            </li>


                        </div>

                    </div>
                    {/* end */}
                </div>

            </div>

        </div>

    )

}

export default AdminReviewandRatings
