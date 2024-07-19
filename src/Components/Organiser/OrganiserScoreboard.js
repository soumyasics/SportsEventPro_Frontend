import React, { useEffect, useState } from 'react'
import './OrganiserScoreboard.css'
import img from '../../Assets/FOOTBALL POSTER TEMPLATE 1(3).png'
import { Link } from 'react-router-dom'
import axiosInstance from '../Constant/BaseURL';

function OrganiserScoreboard() {


    const url = axiosInstance.defaults.url;

    const [event, setEvent] = useState([]);

    const [imagePreview, setImagePreview] = useState(img);

    const getData = async () => {
        try {
            const res = await axiosInstance.post(`/viewPAprvdEnrollmentsByOrganizerId/${localStorage.getItem('organizerId')}`);
            // const fetchedCategory = res.data.data.category;
            // setCategory(fetchedCategory);
            setEvent(res.data.data);
            // setImagePreview(res.data.data.banner ? `${url}/${res.data.data.banner.filename}` : img);

            console.log(res.data.data);

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getData();
    }, []);
   


    return (

        <div className='OrganiserScoreBoard'>

            <div className='OrganiserScoreBoard-MainDiv'>

                

                {/* div containing the card */}
                <div >

                    <div className='OrganiserScoreBoard-content'> {/* <--- array map in this div. Do not remove class or the page will break*/}

                        {/*a single card is from here to */}
                           {/*a single card is from here to */}
                    {



(event&&event.length >= 1)?(event.map((x, index) => {


    return (
                        <div className="card OrganiserScoreBoard-content-contain">

<img   src={`${url}/${x?.eventId?.banner?.filename}`} className="card-img-top OrganiserScoreBoard-img" alt="..." />{/*event image */}

                            <div className="card-body" style={{width:"100%"}}>

                                <div className="card-title">

                                    <h5 className='CardHeadTxtH5'>{x.eventId.name}</h5>{/* event name */}
                                    <h1 className='CardHeadTxtH1'>{x.eventId.category}</h1>{/* event category */}

                                </div>

                                <div className="card-text">

                                    <p className='CardTextP'>Place:{x.eventId.venue}</p>
                                    <h2 className='CardTextH2'>{x.eventId.date.slice(0,10)}, {x.eventId.time}</h2> {/* event date and time */}
                                    <div className='OrganiserScoreBoard-button-contain'>

                                        <Link to={`/OrganizerViewScore/${x._id}`} style={{textDecoration:"none"}}><button className='OrganiserScoreBoard-button'>View Score</button></Link>

                                    </div>

                                </div>

                            </div>

                        </div>
                       
                    )
                })):<div>No Events Found</div>
            
            
            }
                    </div>

                </div>


            </div>

        </div>

    )

}

export default OrganiserScoreboard
