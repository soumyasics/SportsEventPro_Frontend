import React from 'react'
import './ViewerBlogs.css'
import { Link } from 'react-router-dom'
import img from '../../Assets/Rectangle 4622.png'
import img2 from "../../Assets/Back Button.svg"
import img3 from '../../Assets/image 67.png'
import img4 from '../../Assets/mdi_play.svg'

function ViewerBlogs() {

    return (

        <div>

            <div className='ViewerBlogs-MainDiv'>

                {/* separated div for backbutton and text */}
                <div className='col  ViewerBlogs-headercontainer-container-1'>

                    <div style={{ display: 'flex', flexDirection: 'row', width: 'max-content' }}>

                        <Link to='/ViewerHomePage'><button className='ViewerBlogs-headercontainer-BackButton'><img src={img2} alt=' ' /></button></Link>
                        <h1 className='ViewerBlogs-headercontainer-h1'>Blogs</h1>

                    </div>

                </div>

                <div className='ViewerBlogsimgDiv'>
                    {/* array map here */}

                    {/* a single card start */}
                    <div className='ViewerBlogsimgDiv-contain'>

                        <div className='ViewerBlogsimgDiv-img'>

                            <img src={img} alt=' ' className='ViewerBlogsImg' />

                        </div>

                        <div className='ViewerBlogsimgDiv-content'>

                            <div className='ViewerBlogsimgDiv-content-1'>

                                <h1 className='ViewerBlogsimgDiv-content-1-h1'>Sport Event Pro - Your Guide to Epic Sporting Events</h1>
                                <h1 className='ViewerBlogsimgDiv-content-1-h1-2'>12/12/2024</h1>
                                <h1 className='ViewerBlogsimgDiv-content-1-h1-3'>Elevate your sports events from ordinary to extraordinary with Sports Event Pro!
                                    Our blog offers insightful tips, expert advice, and powerful tools to help you plan, manage, and host unforgettable athletic experiences.
                                    Join our passionate community and transform your next game, race, or competition into a legendary event. </h1>

                            </div>

                            <div className='ViewerBlogsimgDiv-content-2'>

                                <img src={img3} alt='' className='ViewerBlogsimgDiv-content-2-img' />{/* blog author img */}
                                <h1 className='ViewerBlogsimgDiv-content-2-h1'>Lenin</h1>{/* Blog author */}

                            </div>

                        </div>

                    </div>
                    {/* a single card end */}
                </div>

            </div>

        </div>

    )

}

export default ViewerBlogs
