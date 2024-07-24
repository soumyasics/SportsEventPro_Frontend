import React, { useEffect, useState } from 'react'
import './ViewerUpcoming.css'
import { Link } from 'react-router-dom'
import img from '../../Assets/Rectangle 4618.png'
import img2 from "../../Assets/Back Button.svg"
import img3 from '../../Assets/Search Button.svg'
import axiosInstance from '../Constant/BaseURL'


function ViewerUpcoming() {
    const url = axiosInstance.defaults.url;
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axiosInstance.post('/viewEvents')
            .then(res => {
                console.log(res);
                setUserData(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (

        <div className='ViewerUpcoming'>

            <div className='ViewerUpcoming-MainDiv'>

                {/* seperated div for backbutton and text */}
                <div className='col  ViewerUpcoming-headercontainer-container-1'>

                    <div style={{display:'flex' , flexDirection:'row',width:'max-content'}}>

                        <Link to='/ViewerHomePage'><button className='ViewerUpcoming-headercontainer-BackButton'><img src={img2} alt=' ' /></button></Link>
                        <h1 className='ViewerUpcoming-headercontainer-h1'>Upcoming Events</h1>

                    </div>

                    <div className='Viewer-search-container'>

                        <input type='search' placeholder='Search Here' className='Viewer-search'></input>
                        <button className='Viewer-search-button'> <img src={img3} alt=' ' /> </button>

                    </div>

                </div>

                {/* div containing the card */}
                <div >

                    <div className='ViewerUpcoming-content'> {/* <--- array map in this div. Do not remove class or the page will break*/}

                        {/*a single card is from here to */}
                        <div className="card ViewerUpcoming-content-contain">

                            <div className='ViewerUpcoming-content-contain-overlay'>
                                <h1 className='ViewerUpcoming-content-contain-h1-1'>Match On</h1>
                                <h1 className='ViewerUpcoming-content-contain-h1-2'>12/12/2024</h1>

                            </div>
                            <img src={img} className="card-img-top ViewerUpcoming-img" alt="..." />{/*event image */}

                            <div className="card-body" style={{ width: '100%' }}>

                                <div className="card-title" style={{ display: "flex", flexDirection: "column" }}>

                                    <h5 className='CardHeadTxtH5'>The Eagles Vs The Kings</h5>{/* event name */}

                                    <div style={{ display: "flex", flexDirection: 'row', gap: '8px' }}>

                                        <h1 className='CardHeadTxtH1-1'>TVM Junior Sports</h1>
                                        <h1 className='CardHeadTxtH1'>Football</h1>{/* event category */}
                                    </div>

                                    <div style={{ display: "flex", flexDirection: 'row' }}>
                                        <h3 className='CardHeadTxtH3' style={{ marginTop: '3px' }}>Ticket -</h3>
                                        <h4 className='CardHeadTxtH4' style={{ marginLeft: '4px' }}>₹499</h4> {/* replace 499 with the array var */}
                                    </div>


                                </div>

                                <div className="card-text">

                                    <p className='CardTextP'>Venue : Trivandrum</p>{/* event description */}
                                    <h2 className='CardTextH2'>12/12/2024, 2:00 PM</h2> {/* event date and time */}
                                    <div className='ViewerUpcoming-button-contain'>

                                        <Link to='/ViewerUpcomingDetails' style={{ textDecoration: 'none' }}><button className='ViewerUpcoming-button'> Book Now</button></Link>

                                    </div>

                                </div>

                            </div>

                        </div>
                        {/* here is a single card  */}

                    </div>

                </div>


            </div>

        </div>

    )

}

export default ViewerUpcoming
