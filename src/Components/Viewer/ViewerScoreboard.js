import './ViewerScoreboard.css'
import { Link } from 'react-router-dom'
import img from '../../Assets/FOOTBALL POSTER TEMPLATE 1(3).png'
import img2 from "../../Assets/Back Button.svg"
import img3 from '../../Assets/Search Button.svg'
import React, { useEffect, useState } from 'react'
import axiosInstance from '../Constant/BaseURL'
import { useNavigate } from 'react-router-dom'
function ViewerScoreboard() {
    const [userData, setUserData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        console.log("VGDFGFD");
        axiosInstance.post('/viewPastEvents')
            .then(res => {
                console.log("DATA",res.data.data);
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

        <div className='ViewerScoreboard'>

            <div className='ViewerScoreboard-MainDiv'>

                {/* seperated div for backbutton and text */}
                <div className='col  ViewerScoreboard-headercontainer-container-1'>

                    <Link to='/ViewerHomePage' style={{textDecoration:'none'}}><button className='ViewerScoreboard-headercontainer-BackButton'><img src={img2} alt=' ' /></button></Link>
                    <h1 className='ViewerScoreboard-headercontainer-h1'>Scoreboard</h1>
{/* 
                    <div className='Viewer-search-container'>

                        <button className='Viewer-search-button'> <img src={img3} alt=' ' /> </button>
           <input type='search' placeholder='Search Here' className='Viewer-search'></input>
             
                    </div> */}

                </div>

                {/* div containing the card */}
                <div >

                    <div className='ViewerScoreboard-content'> {/* <--- array map in this div. Do not remove class or the page will break*/}

                        {/*a single card is from here to */}
                        {userData.map((e, index) => (
                        <div className="card ViewerScoreboard-content-contain">

                            <img src={`${axiosInstance.defaults.url}/${e?.banner?.filename}`} className="card-img-top ViewerScoreboard-img" alt="..." />{/*event image */}

                            <div className="card-body">

                                <div className="card-title" style={{ display: "flex", flexDirection: "row", gap: "100px" }}>

                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <h5 className='CardHeadTxtH5'>{e.name}</h5>{/* event name */}
                                        <h1 className='CardHeadTxtH1'>{e.category}</h1>{/* event category */}
                                    </div>

                                </div>

                                <div className="card-text">

                                    <p className='CardTextP'>Biggest Sports tournament held in {e.venue}. Don’t miss it!</p>{/* event description */}
                                    <h2 className='CardTextH2'>{e.date.slice(0,10)}</h2> {/* event date and time */}
                                    <div className='ViewerScoreboard-button-contain'>

                                        <Link to={`/ViewerViewScoreboard/${e._id}`} style={{ textDecoration: 'none' }}><button className='ViewerScoreboard-button'> Results</button></Link>

                                    </div>

                                </div>

                            </div>

                        </div>
                        ))
                    }
                        {/* here is a single card  */}

                    </div>

                </div>

            </div>

        </div>

    )

}

export default ViewerScoreboard
