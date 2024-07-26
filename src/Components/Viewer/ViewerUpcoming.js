import React, { useEffect, useState } from 'react';
import './ViewerUpcoming.css';
import { Link } from 'react-router-dom';
import img2 from "../../Assets/Back Button.svg";
import img3 from '../../Assets/Search Button.svg';
import axiosInstance from '../Constant/BaseURL';

function ViewerUpcoming() {
    const [userData, setUserData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axiosInstance.post('/addScoreByEnrollmentById')
            .then(res => {
                setUserData(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const handleSearch = () => {
        // Implement search functionality here
    };

    return (
        <div className='ViewerUpcoming'>
            <div className='ViewerUpcoming-MainDiv'>
            <div class="container text-center">
                <div className='col ViewerUpcoming-headercontainer-container-1'>
                    
                    <div style={{ display: 'flex', flexDirection: 'row', width: 'max-content' }}>
                        <Link to='/ViewerHomePage'>
                            <button className='ViewerUpcoming-headercontainer-BackButton'>
                                <img src={img2} alt='Back' />
                            </button>
                        </Link>
                        <h1 className='ViewerUpcoming-headercontainer-h1'>Upcoming Events</h1>
                    </div>
                    <div className='ViewerUpcoming-search-container'>
                        <input 
                            type='search' 
                            placeholder='Search Here' 
                            className='Viewer-search'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className='Viewer-search-button' onClick={handleSearch}>
                            <img src={img3} alt='Search' />
                        </button>
                    </div>
                </div>
                <div className='ViewerUpcoming-content'>
                    {userData.map((e, index) => (
                        <div key={index} className="card ViewerUpcoming-content-contain">
                            <img src={`${axiosInstance.defaults.url}/${e?.banner?.filename}`} className="card-img-top ViewerUpcoming-img" alt={e.name} />
                            <div className="card-body" style={{ width: '100%' }}>
                                <div className="card-title" style={{ display: "flex", flexDirection: "column" }}>
                                    <h5 className='ViewerUpcomingCardHeadTxtH5'>{e.name}</h5>
                                    <div style={{ display: "flex", flexDirection: 'row', gap: '8px' }}>
                                        <h1 className='ViewerUpcomingCardHeadTxtH1-1'>{e.venue}</h1>
                                        <h1 className='ViewerUpcomingCardHeadTxtH1'>{e.category}</h1>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: 'row' }}>
                                        <h3 className='ViewerUpcomingCardHeadTxtH3' style={{ marginTop: '3px' }}>Ticket -</h3>
                                        <h4 className='ViewerUpcomingCardHeadTxtH4' style={{ marginLeft: '4px' }}>₹{e.ticketPrice}</h4>
                                    </div>
                                </div>
                                <div className="ViewerUpcomingcard-text">
                                    {/* <p className='ViewerUpcomingCardTextP'>Venue: {e.venue}</p> */}
                                    <h2 className='ViewerUpcomingCardTextH2'>{e.date}</h2>
                                    <div className='ViewerUpcoming-button-contain'>
                                        <Link to='/ViewerUpcomingDetails' style={{ textDecoration: 'none' }}>
                                            <button className='ViewerUpcoming-button'>Book Now</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div></div>
        </div>
    );
}

export default ViewerUpcoming;
