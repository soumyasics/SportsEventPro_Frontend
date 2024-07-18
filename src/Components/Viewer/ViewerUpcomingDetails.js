import React, { useState } from 'react'
import './ViewerUpcomingDetails.css'
import { Link } from 'react-router-dom'
import img2 from "../../Assets/Back Button.svg"
import img3 from '../../Assets/Rectangle 4618(1).png'
import img4 from '../../Assets/button-minus.svg'
import img5 from '../../Assets/button-plus.svg'

function ViewerBookNow() {

    const baseTicketPrice = 499.00; /* replace 499 with array var for ticket price */

    const [num, setNum] = useState(0) /* for storing the number of tickets */
    const [ticketPrice, setTicketPrice] = useState(0) /* for storing total ticket price */
    const [sing, setSing] = useState('Ticket') /* whether or not if the number of tickets is singular or plural*/

    // when the add tickets button is clicked
    function addButtonOnClick() {

        setNum(prevNum => {

            const newNum = prevNum + 1;
            setTicketPrice(newNum * baseTicketPrice);
            return newNum;

        });

        if (num == 0) {

            setSing("Ticket")

        }
        else {

            setSing('Tickets')

        }

    }

    function subButtonOnClick() {

        if (num > 0) {

            setNum(prevNum => {
                const newNum = prevNum - 1;
                setTicketPrice(newNum * baseTicketPrice);


                return newNum;
            });

            if (num == 2) {

                setSing("Ticket")

            }
            else {

                setSing('Tickets')

            }

        }

    }

    return (

        <div className='ViewerBookNow'>

            <div className='ViewerBookNow-container'>

                <div className="ViewerBookNow-header">

                    <Link to='/ViewerUpcoming'><button className='ViewerBookNow-headercontainer-BackButton'><img src={img2} alt=' ' /></button></Link>
                    <h1 className='ViewerBookNow-headercontainer-h1'>Event Details</h1>

                </div>

                <div className='ViewerBookNow-body'>

                    <div className='ViewerBookNow-body-left'>

                        <div className='ViewerBookNow-content-contain-overlay'>

                            <h1 className='ViewerBookNow-content-contain-h1-1'>Match On</h1>
                            <h1 className='ViewerBookNow-content-contain-h1-2'>12/12/2024</h1>

                        </div>
                        <img src={img3} alt='' className='ViewerBookNow-img' />

                    </div>

                    <div className='ViewerBookNow-body-right' >

                        <div className="ViewerBookNow-body-right-top">

                            <div className='ViewerBookNow-body-2'>

                                <h1 className='ViewerBookNow-body-h1'>The Eagles Vs The kings</h1>{/* team names */}

                                <div style={{ display: "flex", flexDirection: 'row', gap: '8px' }}>

                                    <h1 className='ViewerBookNow-body-h1-1'>TVM Junior Sports</h1>{/* event name */}
                                    <h1 className='ViewerBookNow-body-h1-2'>Football</h1>{/* event category */}

                                </div>

                            </div>

                            <div style={{ display: "flex", flexDirection: 'row' }}>

                                <h3 className='ViewerBookNow-body-h3' style={{ marginTop: '3px' }}>Ticket -</h3>
                                <h4 className='ViewerBookNow-body-h4' style={{ marginLeft: '4px' }}>₹499</h4> {/* replace 499 with the array var (ticket price) */}

                            </div>

                            <div className='ViewerBookNow-body-2'>

                                <h5 className='ViewerBookNow-body-h5'>Venue : Trivandrum</h5>{/* event venue */}
                                <h2 className='ViewerBookNow-body-h2'>12/12/2024, 2:00 PM</h2> {/* event date and time */}

                            </div>

                        </div>

                        <div className='ViewerBookNow-body-right-bottom'>

                            <div className='ViewerBookNow-body-right-bottom-header'>

                                <h1 className='ViewerBookNow-body-h3'>Tickets</h1>

                                <div className='ticketnoDiv'>

                                    <button className='ticketbutt' onClick={subButtonOnClick}><img src={img4} alt='' /></button>
                                    <h1 className='ticketnum'>{num}</h1>
                                    <button className='ticketbutt' onClick={addButtonOnClick}><img src={img5} alt='' /></button>

                                </div>

                            </div>

                            <div className='ViewerBookNow-body-right-bottom-body'>

                                <div className='ViewerBookNow-body-right-bottom-body-content'>

                                    <p className='ticketprice'>₹{ticketPrice}</p>
                                    <p className='ticketprice'>{num} {sing}</p>

                                </div>

                                <Link style={{textDecoration:'none'}} to="/ViewerPayment" state={{ num, ticketPrice ,sing }}>
                                    <button className='BookNowButt'>Book Now</button>
                                </Link>

                            </div>

                        </div>


                    </div>

                </div>

            </div>

        </div>

    )

}

export default ViewerBookNow
