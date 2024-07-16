import React from 'react'
import './ViewerScoreboard.css'
import { Link } from 'react-router-dom'
import img from '../../Assets/FOOTBALL POSTER TEMPLATE 1(3).png'
import img2 from "../../Assets/Back Button.svg"
import img3 from '../../Assets/Search Button.svg'

function ViewerScoreboard() {

    return (

        <div className='ViewerScoreboard'>

            <div className='ViewerScoreboard-MainDiv'>

                {/* seperated div for backbutton and text */}
                <div className='col  ViewerScoreboard-headercontainer-container-1'>

                    <Link to='/ViewerHomePage' style={{textDecoration:'none'}}><button className='ViewerScoreboard-headercontainer-BackButton'><img src={img2} alt=' ' /></button></Link>
                    <h1 className='ViewerScoreboard-headercontainer-h1'>Scoreboard</h1>

                    <div className='Viewer-search-container'>

                        <input type='search' placeholder='Search Here' className='Viewer-search'></input>
                        <button className='Viewer-search-button'> <img src={img3} alt=' ' /> </button>

                    </div>

                </div>

                {/* div containing the card */}
                <div >

                    <div className='ViewerScoreboard-content'> {/* <--- array map in this div. Do not remove class or the page will break*/}

                        {/*a single card is from here to */}
                        <div className="card ViewerScoreboard-content-contain">

                            <img src={img} className="card-img-top ViewerScoreboard-img" alt="..." />{/*event image */}

                            <div className="card-body">

                                <div className="card-title" style={{ display: "flex", flexDirection: "row", gap: "100px" }}>

                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <h5 className='CardHeadTxtH5'>TVM Junior Sports</h5>{/* event name */}
                                        <h1 className='CardHeadTxtH1'>Football</h1>{/* event category */}
                                    </div>

                                </div>

                                <div className="card-text">

                                    <p className='CardTextP'>Biggest Sports tournament held in Trivandrum. Don’t miss it!</p>{/* event description */}
                                    <h2 className='CardTextH2'>12/12/2024, 2:00 PM</h2> {/* event date and time */}
                                    <div className='ViewerScoreboard-button-contain'>

                                        <Link to='/ViewerViewScoreboard' style={{ textDecoration: 'none' }}><button className='ViewerScoreboard-button'> Results</button></Link>

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

export default ViewerScoreboard
