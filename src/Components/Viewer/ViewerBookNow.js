import React from 'react'
import './ViewerBookNow.css'
import img2 from "../../Assets/Back Button.svg"
import img3 from '../../Assets/Rectangle 4618(1).png'

function ViewerBookNow() {

    return (

        <div className='ViewerBookNow'>

            <div className='ViewerBookNow-container'>

                <div className="ViewerBookNow-header">

                    <button className='ViewerBookNow-headercontainer-BackButton'><img src={img2} alt=' ' /></button>
                    <h1 className='ViewerBookNow-headercontainer-h1'>Results</h1>

                </div>

                <div className='ViewerBookNow-body'>

                    <div>

                        <img src={img3} alt='' className='ViewerBookNow-img' />
                        <div className='ViewerUpcoming-content-contain-overlay'>

                            <h1 className='ViewerUpcoming-content-contain-h1-1'>Match On</h1>
                            <h1 className='ViewerUpcoming-content-contain-h1-2'>12/12/2024</h1>

                        </div>

                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: "15px" }}>

                        <div className="ViewerBookNow-body-1">

                            <h1 className='ViewerBookNow-body-h1'>The Eagles Vs The kings</h1>

                            <div style={{ display: "flex", flexDirection: 'row', gap: '8px' }}>

                                <h1 className='ViewerBookNow-body-h1-1'>TVM Junior Sports</h1>
                                <h1 className='ViewerBookNow-body-h1-2'>Football</h1>{/* event category */}

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default ViewerBookNow
