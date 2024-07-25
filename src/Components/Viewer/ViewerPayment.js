import React from 'react'
import './ViewerPayment.css'
import { Link, useLocation } from 'react-router-dom'
import img2 from "../../Assets/Back Button.svg"


function ViewerPayment() {

    const location = useLocation();
    const { num, ticketPrice, sing } = location.state || { num: 0, ticketPrice: 0, sing: "Tickets" };

    console.log(num, "Num")
    console.log(ticketPrice, " ticketprice")
    console.log(sing, "sing or plural")

    return (

        <div>

            <div className='ViewerPayment-MainDiv'>

                <div className="ViewerPayment-header">

                    <Link to='/ViewerUpcomingDetails'><button className='ViewerPayment-headercontainer-BackButton'><img src={img2} alt=' ' /></button></Link>
                    <h1 className='ViewerPayment-headercontainer-h1'>Payment</h1>

                </div>

                <div className='ViewerPayment-bottom-body'>

                    <div className="ViewerPayment-body-right-top">

                        <div className='ViewerPayment-body-2'>

                            <h1 className='ViewerPayment-body-h1'>The Eagles Vs The kings</h1>{/* team names */}

                            <div style={{ display: "flex", flexDirection: 'row', gap: '8px' }}>

                                <h1 className='ViewerPayment-body-h1-1'>TVM Junior Sports</h1>{/* event name */}
                                <h1 className='ViewerBookNow-body-h1-2'>Football</h1>{/* event category */}

                            </div>

                        </div>

                        <div style={{ display: "flex", flexDirection: 'row' ,width :'100%' }}>

                            <h3 className='ViewerPayment-body-h3'>{num} {sing}</h3>
                            <h4 className='ViewerPayment-body-h4'>₹ {ticketPrice}</h4>

                        </div>

                        <div className='ViewerPayment-body-2-2'>

                            <h5 className='ViewerPayment-body-hz5'>Trivandrum</h5>{/* event venue */}
                            <h2 className='ViewerPayment-body-h2'>12/12/2024, 2:00 PM</h2> {/* event date and time */}

                        </div>

                    </div>

                    <div className='ViewerPayment-body-right-bottom'>

                        <div>

                            <label>Cardholder Name</label>
                            <input className='ViewerPayment-body-right-bottom-inp' type='text' placeholder='Enter Cardholder Name' />

                        </div>
                        
                        <div>

                            <label>Card Number</label>
                            <input className='ViewerPayment-body-right-bottom-inp' type='text' placeholder='Enter Card Number' />

                        </div>
                        
                        <div style={{ display:'flex' , flexDirection: 'row' , gap:"30px"}}>

                            <div>

                                <label>CVV</label>
                                <input className='ViewerPayment-body-right-bottom-inp-2' type='text' placeholder='CVV' />

                            </div>

                            <div>

                                <label>Expiry </label>
                                <input className='ViewerPayment-body-right-bottom-inp-2' type='date' placeholder='DD/MM/YYYY' />

                            </div>

                        </div>

                        <div>

                            <button className='ViewerPayment-body-right-bottom-button'>Confirm</button>

                        </div>
                        
                    </div>

                </div>

            </div>


        </div>

    )

}

export default ViewerPayment
