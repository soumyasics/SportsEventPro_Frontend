import React, { useEffect, useRef } from 'react'
import './TeamCoachReviewRatings.css'
import img from '../../Assets/Group 90.svg'
import img2 from "../../Assets/Back Button.svg"
import ReactStars from 'react-stars'

function TeamCoachReviewRatings() {

    let a = 4

    const txtpref = useRef(null)

    // match the (a) inside to the variable of the value of ReactStars you change to
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

        <div className='TeamCoachReviewRatings'>

            <div className='TeamCoachRRMainDiv'>

                {/* seperated div for backbutton and text */}
                <div className='col  TeamCoachRR-headercontainer-container-1'>

                    <button className='TeamCoachRRMainDiv-headercontainer-BackButton'><img src={img2} alt=' ' /></button>
                    <h1 className='TeamCoachRRMainDiv-headercontainer-h1'>Review & Ratings</h1>

                </div>

                {/* div for the rest of the div to display */}
                <div className=' col TeamCoachRR-content-container'>

                    {/* arraymap from here */}
                    {/* start */}
                    <div className='TeamCoachRR-content'>

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

                            <p className='TeamCoachRR-star-p' ref={txtpref}></p>

                        </div>
                        <h1 className='TeamCoachRR-content-h1'>Good experience{/* put the coach review in here */}</h1>

                        <div className='TeamCoachRR-content-contentcontainer'>

                            <div className='TeamCoachRR-content-content'>

                                <img src={img} alt='' />
                                <p className='TeamCoachRR-content-p'>Enrolled team coach{/* TeamCaoch name maybe? or team name? */}</p>

                            </div>
                            <li>
                                <p className='TeamCoachRR-content-p'>Feb, 2024{/* review date here */}</p>
                            </li>


                        </div>

                    </div>
                    {/* end */}
                </div>

            </div>

        </div>

    )

}

export default TeamCoachReviewRatings
