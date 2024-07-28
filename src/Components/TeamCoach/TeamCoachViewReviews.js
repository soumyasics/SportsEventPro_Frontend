import React, { useEffect, useRef, useState } from 'react'
import '../Viewer/ViewerReviewRating.css'
import img from '../../Assets/Group 90.svg'
import img2 from "../../Assets/Back Button.svg"
import ReactStars from 'react-stars'
import { Link, useParams } from 'react-router-dom'
import axiosInstance from '../Constant/BaseURL'
function TeamCoachViewReviews() {
  
    const [userData, setUserData] = useState([]);
 const {id}=useParams()

    useEffect(() => {

        let res;


        axiosInstance.post(`viewAllreviewsByeventId/${id}`).then(res => {

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

        <div className='AdminReviewandRatings'>

            <div className='AdminReviewandRatingsMainDiv'>

                {/* seperated div for backbutton and text */}
                <div className='col  AdminReviewandRatings-headercontainer-container-1'>

                    <Link to='/AdminViewReviewAndRatings'><button className='AdminReviewandRatingsMainDiv-headercontainer-BackButton'><img src={img2} alt=' ' /></button></Link>
                    <h1 className='AdminReviewandRatingsMainDiv-headercontainer-h1'>Reviews</h1>

                </div>

                {/* div for the rest of the div to display */}
                <div className=' col AdminReviewandRatings-content-container'>

                    {/* arraymap from here */}
                    {/* start */}
                    {

(userData && userData.length > 0) ? (userData.map((x, index) => {

    return (
                    <div className='AdminReviewandRatings-content'>

                        <h1 className='AdminReviewandRatings-content-h1' style={{marginTop:'20px'}}>{x.review}{/* put the coach review in here */}</h1>

                        <div className='AdminReviewandRatings-content-contentcontainer'>

                            <div className='AdminReviewandRatings-content-content'>

                                <img src={img} alt='' />
                                <div style={{display:'flex',flexDirection:'column',gap:'0px'}}>
                                    <p className='AdminReviewandRatings-content-p'>
                                        {x.viewerId?x.viewerId.name:x.tcId?x.tcId.name:'Unknown'}
                                    </p>
                                    <p className='AdminReviewandRatings-content-p-2'>{x.userRole}</p>
                                </div>
                            </div>
                         
                                <p className='AdminReviewandRatings-content-p'>{x.date.slice(0,10)}{/* review date here */}</p>
                         


                        </div>

                    </div>
                  
                    
                )
            })
            ) : (<h1>No reviews</h1>)

        }
                </div>

            </div>

        </div>

    )

}
export default TeamCoachViewReviews