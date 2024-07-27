import './ViewerBookedTickets.css'
import img from '../../Assets/Rectangle 4618.png'
import img2 from "../../Assets/Back Button.svg"
import React, { useEffect, useState } from 'react';
import './ViewerUpcoming.css';
import { Link } from 'react-router-dom';
import img3 from '../../Assets/Search Button.svg';
import axiosInstance from '../Constant/BaseURL';
import ReactStars from 'react-stars'
function ViewerBookedTickets() {
    const [userData, setUserData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedEventId, setSelectedEventId] = useState(null);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    useEffect(() => {
        axiosInstance.post(`/viewTicketBookingByViwerId/${localStorage.getItem('viewerId')}`)
            .then(res => {
                console.log("DATA",res.data.data);
                setUserData(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
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
                viewerId:localStorage.getItem('viewerId'),
                 userRole:'Viewer',
     
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

        <div className='ViewerBookedTickets'>

            <div className='ViewerBookedTickets-MainDiv'>

                {/* seperated div for backbutton and text */}
                <div className='col  ViewerBookedTickets-headercontainer-container-1'>

                    <button className='ViewerBookedTickets-headercontainer-BackButton'><img src={img2} alt=' ' /></button>
                    <h1 className='ViewerBookedTickets-headercontainer-h1'>Booked Tickets</h1>

                </div>

                {/* div containing the card */}
                <div >

                    <div className='ViewerBookedTickets-content'> {/* <--- array map in this div. Do not remove class or the page will break*/}

                        {/*a single card is from here to */}
                        {userData.map((e, index) => (

                        <div className="card ViewerBookedTickets-content-contain">

                            <div className='ViewerBookedTickets-content-contain-overlay'>
                                <h1 className='ViewerBookedTickets-content-contain-h1-1'>Match On</h1>
                                <h1 className='ViewerBookedTickets-content-contain-h1-2'>{e.eventId.date.slice(0,10)}</h1>

                            </div>
                            <img src={`${axiosInstance.defaults.url}/${e?.eventId?.banner?.filename}`}className="card-img-top ViewerBookedTickets-img" alt="..." />{/*event image */}

                            <div className="card-body" style={{ width: '100%' }}>

                                <div className="card-title" style={{ display: "flex", flexDirection: "column" }}>

                                    <h5 className='CardHeadTxtH5'>{e.eventId.name}</h5>{/* event name */}

                                    <div style={{ display: "flex", flexDirection: 'row', gap: '8px' }}>

                                        {/* <h1 className='CardHeadTxtH1-1'>TVM Junior Sports</h1> */}
                                        <h1 className='CardHeadTxtH1'>{e.eventId.category}</h1>{/* event category */}
                                        <div>
                                          
                                            <button className='ViewerBookedTxtButton1' data-bs-toggle="modal" data-bs-target="#Rating-Modal"
                                                        onClick={() => setSelectedEventId(e.eventId._id)}>
                                                            Add Review & Rating</button>
                                        </div>
                                    </div>

                                    <div style={{ display: "flex", flexDirection: 'row' }}>
                                        <h3 className='CardHeadTxtH3'> {e.ticketCount}Tickets</h3> {/*replace 1 with the no of tickets */}
                                        <h4 className='ViewerBookedPrice'>{e.amount}</h4>
                                    </div>


                                </div>

                                <div className="card-text" style={{ display: 'flex', flexDirection: 'row' }}>

                                    <div>

                                        <p className='CardTextP'>Venue : {e.eventId.venue}</p>{/* event description */}
                                        <h2 className='CardTextH2'>{e.eventId.date.slice(0,10)}</h2> {/* event date and time */}

                                    </div>


                                </div>

                            </div>

                        </div>
                        ))
                    }
                        {/* here is a single card  */}
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

        </div>

    )

}

export default ViewerBookedTickets
