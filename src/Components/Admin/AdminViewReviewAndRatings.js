import React, { useEffect, useRef, useState } from 'react'
import './AdminViewReviewAndRatings.css'
import img from '../../Assets/Group 90.svg'
import img2 from "../../Assets/Back Button.svg"
import ReactStars from 'react-stars'
import axiosInstance from '../Constant/BaseURL'
import { Link } from 'react-router-dom'

function AdminViewReviewAndRatings() {
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
                                    <div style={{ display: "flex", flexDirection: "row" }}>

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

                                    </div>

                                    <div>
                                        <div>

                                            <h1 className='adminRR-content-h1'>{x.name}</h1>
                                            <h1 className='adminRR-content-h1-2'>{x.organizerId.name}</h1>

                                        </div>

                                    </div>

                                    <div className='adminRR-content-contentcontainer'>

                                        <div className='adminRR-content-content'>

                                           
                                            
                                                <p className='adminRR-content-p'>{x.date.slice(0, 10)}{/* review date here */}</p>
                                         

                                        </div>
                                        <div>

                                            <Link to={`/AdminReviewAndRatings/${x._id}`} style={{textDecoration:'none'}}><button className='AButt'>View Details</button></Link>

                                        </div>


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

export default AdminViewReviewAndRatings