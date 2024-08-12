import React, { useEffect, useState } from 'react';
import './TeamCoachResults.css';
import { Link } from 'react-router-dom';
import img2 from "../../Assets/Back Button.svg";
import axiosInstance from '../Constant/BaseURL';
import img7 from '../../Assets/octicon_x-16.svg'
import img3 from '../../Assets/Search Button.svg';
import ReactStars from 'react-stars'

function TeamCoachResults() {
    const [userData, setUserData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axiosInstance.post('/viewPastEvents')
            .then(res => {
                setUserData(res.data.data);
            })
            .catch(err => {
                console.error("Error fetching data: ", err);
            });
    }, []);
    const handleSearch = () => {
        // Implement search functionality here, filtering userData by searchTerm
    };
    const [selectedEventId, setSelectedEventId] = useState(null);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const addRatingReview = async (eventId) => {
        console.log("it worked", eventId);
        try {
            const res = await axiosInstance.post(`addRating/${eventId}`, {
            
                rating,
                comment,
               
            });
            console.log(res.data);
            // Optionally refresh the data
            // getData();
        } catch (err) {
            console.log(err);
        }
        try {
            const res = await axiosInstance.post(`addReview/`, {
            
                eventId:eventId,
                tcId:localStorage.getItem('tcId'),
                 userRole:'Team Coach',
     
      review:comment,
            });
            console.log(res.data);
            // Optionally refresh the data
            // getData();
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className='TeamCoachResults'>
            <div className='TeamCoachResults-MainDiv'>
                <div className='col TeamCoachResults-headercontainer-container-1'>
                <Link to='/TeamCoachHomePage'>  <button className='TeamCoachResults-headercontainer-BackButton'>
                        <img src={img2} alt='Back' />
                    </button></Link>
                    <h1 className='TeamCoachResults-headercontainer-h1'>Results</h1>
                </div>

                <div className='TeamCoachResults-content'>
                    {userData.map((e, index) => (
                        <div key={index} className="card TeamCoachResults-content-contain">
                            <img src={`${axiosInstance.defaults.url}/${e?.banner?.filename}`} className="card-img-top TeamCoachResults-img" alt={e.name} />
                            <div className="TeamCoachResultscard-body">
                                <div className="TeamCoachResultscard-title" style={{ display: "flex", flexDirection: "row", gap: "100px" }}>
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <h5 className='TeamCoachResultsCardHeadTxtH5'>{e.name}</h5>
                                        <h1 className='TeamCoachResultsCardHeadTxtH1'>{e.category}</h1>
                                    </div>
                                    <div>
                                        <button className='TeamCoachResultsCardHeadTxtButton1'data-bs-toggle="modal"  onClick={() => setSelectedEventId(e._id)} data-bs-target="#Rating-Modal">Add Review & Rating</button>




                                        <div>

{/* <div className="modal fade" id="Rating-Modal" tabIndex="-1" aria-labelledby="Complaint-ModalLabel" aria-hidden="true">

    <div className="modal-dialog modal-dialog-centered">

        <div className="modal-content">

            <div className="modal-body TeamCoachResultDivMain">

                <div className='modal-body-in'>
                    <img src={img7}  alt=' ' className='TeamCoachResultsimageEE' data-bs-dismiss="modal" aria-label="Close" />

                    <h1 className='TeamCoachResultsH2'>Add Rating</h1>
                    <div class="rate">
                    <input type="radio" id="star5" name="rate" value="5" />
                    <label for="star5" title="text">5 stars</label>
                    <input type="radio" id="star4" name="rate" value="4" />
                    <label for="star4" title="text">4 stars</label>
                    <input type="radio" id="star3" name="rate" value="3" />
                    <label for="star3" title="text">3 stars</label>
                    <input type="radio" id="star2" name="rate" value="2" />
                    <label for="star2" title="text">2 stars</label>
                    <input type="radio" id="star1" name="rate" value="1" />
                    <label for="star1" title="text">1 star</label>
                    </div>
                    <h1 className='TeamCoachResultsH1'>Add Comments</h1>
                    <input
                                    type='text'
                                    className='ModalDialog-textEE'
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                />
                </div>
                <div className='ModalDialog-button-contain'>
                    <button type="button" className="ModalDialog-button-2EE" data-bs-dismiss="modal">Submit</button>
                </div>

            </div>

        </div>

    </div>

</div> */}
 {/* Modal for adding rating and review */}
 <div className="modal fade" id="Rating-Modal" tabIndex="-1" aria-labelledby="Logout-ModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body EE">
                                <div>
                                    <img src={img3} alt='Close' className='imageEE' data-bs-dismiss="modal" aria-label="Close" />
                                    <h1 className='ModalDialog-h1EE'>Add Rating</h1>
                                    <div className="d-flex mt-2 ModalRatingEE">
                                        <ReactStars
                                            count={5}
                                            size={50}
                                            value={rating}
                                            onChange={(newRating) => setRating(newRating)}
                                            color1='#D9D9D9'
                                            color2='#56B60B'
                                        />
                                    </div>
                                </div>
                                <p className='ModalDialog-h1EE '>Add Comments</p>
                                <input
                                    type='text'
                                    className='ModalDialog-textEE'
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                />
                                <div className='ModalDialog-button-contain'>
                                    <button
                                        type="button"
                                        className="ModalDialog-button-2EE"
                                        data-bs-dismiss="modal"
                                        onClick={() => addRatingReview(selectedEventId)}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

</div>


                                                









                                    </div>
                                </div>
                                <div className="TeamCoachResultscard-text">
                                    <p className='TeamCoachResultsCardTextP'>
                                        Biggest Sports tournament held in {e.venue}. Don’t miss it!
                                    </p>
                                    <h2 className='TeamCoachResultsCardTextH2'>{e.date.slice(0,10)}</h2>
                                    <div className='TeamCoachResults-button-contain'>
                                        <Link to={`/TeamCoachViewResults/${e._id}`} style={{ textDecoration: 'none' }}>
                                            <button className='TeamCoachResults-button'> Results</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TeamCoachResults;
