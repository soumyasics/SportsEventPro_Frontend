import React, { useEffect, useRef, useState } from 'react'
import './AdminViewReviewAndRatings.css'
import img from '../../Assets/Group 90.svg'
import img2 from "../../Assets/Back Button.svg"
import ReactStars from 'react-stars'
import axiosInstance from '../Constant/BaseURL'

function AdminViewReviewAndRatings() {
    let a = 4
    const [userData, setUserData] = useState([]);


    const txtpref = useRef(null)
    useEffect(() => {

        let res;


        axiosInstance.post(`viewAllreviews`).then(res => {

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
    // match the (a) inside to the variable of the value of ReactStars you change to
    // useEffect(() => {

    //     let TxTP = txtpref.current

    //     if (a === 5) {

    //         TxTP.innerHTML = "Great"

    //     }
    //     else if (a === 4) {

    //         TxTP.innerHTML = "Good"

    //     }
    //     else if (a === 3) {

    //         TxTP.innerHTML = "Average"

    //     }
    //     else if (a === 2) {

    //         TxTP.innerHTML = "Bad"

    //     }
    //     else {

    //         TxTP.innerHTML = "Very Bad"

    //     }

    // });

    return (

        <div className='adminReviewRatings'>

            <div className='adminRRMainDiv'>

                {/* seperated div for backbutton and text */}
                <div className='col  adminRR-headercontainer-container-1'>

                    <h1 className='adminRRMainDiv-headercontainer-h1'>Review & Ratings</h1>

                </div>

                {/* div for the rest of the div to display */}
                <div className=' col adminRR-content-container'>

                    {/* arraymap from here */}
                    {/* start */}
                    
                    {

(userData && userData.length > 0) ? (userData.map((x, index) => {

    return (
                    <div className='adminRR-content'>

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

                            <p className='adminRR-star-p' ref={txtpref}></p>

                        </div>
                        
                        <h1 className='adminRR-content-h1'>{x.review}</h1>

                        <div className='adminRR-content-contentcontainer'>

                            <div className='adminRR-content-content'>

                                <img src={img} alt='' />
                                <p className='adminRR-content-p1'>{x.tcId?x.tcId.name:''}{/* TeamCaoch name maybe? or team name? */}</p>

                                <p className='adminRR-content-p'>{x.tcId?'Enrolled Team Coach':''}{/* TeamCaoch name maybe? or team name? */}</p>

                            </div>
                            <li>
                                <p className='adminRR-content-p'>{x.date.slice(0,10)}{/* review date here */}</p>
                            </li>


                        </div>

                    </div>

                    )
                })
            ):(<h1>No reviews</h1>)

            }
                    {/* end */}
                </div>

            </div>

        </div>

    )

}

export default AdminViewReviewAndRatings