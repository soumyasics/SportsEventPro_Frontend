import './TeamCoachEnrolledEvents.css'
import img from '../../Assets/FOOTBALL POSTER TEMPLATE 1(3).png'
import img2 from "../../Assets/Back Button.svg"
import img3 from '../../Assets/octicon_x-16.svg'
import React, { useEffect, useState } from 'react'
import axiosInstance from '../Constant/BaseURL'
import { Navigate, useNavigate ,Link} from 'react-router-dom'
import ReactStars from 'react-stars'

function TeamCoachEnrolledEvents() {
    const [event, setEvent] = useState([]);

    const [imagePreview, setImagePreview] = useState(img);
const id=localStorage.getItem('tcId')
    const getData = async () => {
        try {
            const res = await axiosInstance.post(`viewApprovedEnrollmentsByTcId/${id}`);
            
            setEvent(res.data.data);

            console.log(res.data.data);

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getData();
        console.log(event);
    }, [id]);
    return (

        <div className='TeamCoachEnrolledEvents'>

            <div className='TeamCoachEnrolledEvents-MainDiv'>

                {/* seperated div for backbutton and text */}
                <div className='col  TeamCoachEnrolledEvents-headercontainer-container-1'>

                <Link to='/TeamCoachHomePage'>    <button className='TeamCoachEnrolledEvents-headercontainer-BackButton'><img src={img2} alt=' ' /></button></Link>
                    <h1 className='TeamCoachEnrolledEvents-headercontainer-h1'>Enrolled Events</h1>

                </div>

                {/* div containing the card */}
                <div >

                    <div className='TeamCoachEnrolledEvents-content'> {/* <--- array map this div or outside this div. Do not remove 
                        class or create a div inside otherwise the page will break*/}

                        {/*a single card is from here to */}
                    {



    (event&&event.length >= 1)?(event.map((x, index) => {


        return (
                        <div className="card TeamCoachEnrolledEvents-content-contain">

                            <img src={img} className="card-img-top TeamCoachEnrolledEvents-img" alt="..." />{/*event image */}

                            <div className="card-body">

                                <div className="card-title" style={{ display: "flex", flexDirection: "row", gap: "107px" }}>

                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <h5 className='CardHeadTxtH5'>{x.name}</h5>{/* event name */}
                                        <h1 className='CardHeadTxtH1'>{x.category}</h1>{/* event category */}
                                    </div>

                                    <div>

                                        <button className='CardHeadTxtButton' data-bs-toggle="modal" data-bs-target="#Rating-Modal">Add Review & Rating</button>

                                    </div>

                                </div>

                                <div className="card-text">
                                    <div className='row'>
                                         <p className='CardTextP'>{x.name} is Organized by {x.organizerId.name}. Don't Miss the Opurtunity of Participation !!</p>{/* event description */}
                                         <div className='col'> <h2 className='CardTextH2'>{x.date.slice(0,10)} &nbsp; {x.time}</h2> {/* event date and time */}
                                    </div>  
                                </div>
                            </div>

                        </div>

                    </div>
        )
    })):<div>No Dta</div>


}
                    {/* here is a single card  */}

                </div>

            </div>


                {/* div containing the modal */}

                <div>

                    <div className="modal fade" id="Rating-Modal" tabIndex="-1" aria-labelledby="Logout-ModalLabel" aria-hidden="true">

                        <div className="modal-dialog modal-dialog-centered">

                            <div className="modal-content">

                                <div className="modal-body EE">

                                    <div>
                                        <img src={img3} alt=' ' className='imageEE' data-bs-dismiss="modal" aria-label="Close" />
                                        <h1 className='ModalDialog-h1EE'>Add Rating</h1>

                                        <div className="d-flex mt-2 ModalRatingEE">

                                            <ReactStars
                                                count={5}
                                                size={50}
                                                value={0}
                                                color1='#D9D9D9'
                                                color2='#56B60B'
                                            />

                                        </div>

                                    </div>

                                    <p className='ModalDialog-h1EE '>Add Comments</p>
                                    <input type='text' className='ModalDialog-textEE' />

                                    <div className='ModalDialog-button-contain'>
                                        <button type="button" className="ModalDialog-button-2EE" data-bs-dismiss="modal">Submit</button>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* div containing "load more" */}
                <div>

                    <a href=" " className='TeamCoachEnrolledEvents-a'>Load More</a>

                </div>

            </div>

        </div>

    )

}

export default TeamCoachEnrolledEvents
