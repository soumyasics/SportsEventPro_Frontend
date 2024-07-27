
import './ViewerPayment.css'
import img2 from "../../Assets/Back Button.svg"
import React, { useEffect, useState } from 'react';

import { Link, useNavigate, useParams,useLocation} from 'react-router-dom';
import img3 from '../../Assets/Rectangle 4618(1).png';
import img4 from '../../Assets/button-minus.svg';
import img5 from '../../Assets/button-plus.svg';
import axiosInstance from '../Constant/BaseURL';

function ViewerPayment() {

    const location = useLocation();
    const { num, ticketPrice, sing } = location.state || { num: 0, ticketPrice: 0, sing: "Tickets" };
const {id}=useParams()
    console.log(num, "Num")
    console.log(ticketPrice, " ticketprice")
    console.log(sing, "sing or plural")
    const [ticket, setTicket] = useState({
      
        ticketCount: 0,
        amount: 0,
        eventId: {
            name:'',
            category: '',
            venue: '',
            date: '',
        },
        viewerId: ''
    });
    useEffect(() => {
        axiosInstance.post(`/viewTicketBookingById/${id}`)
            .then(res => {
                setTicket(res.data.data);
                console.log(res.data.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, [id]);

    const [cardNumber, setCardNumber] = useState('');
    const [cvv, setCvv] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [errors, setErrors] = useState({});
  
    const validateCardNumber = (number) => {
      const regex = /^[0-9]{13,19}$/; // Validates card number with 13 to 19 digits
      return regex.test(number);
    };
  
    const validateCvv = (cvv) => {
      const regex = /^[0-9]{3,4}$/; // Validates CVV with 3 or 4 digits
      return regex.test(cvv);
    };
  
    const validateExpiryDate = (date) => {
      const [month, year] = date.split('/');
      const expiryMonth = parseInt(month, 10);
      const expiryYear = parseInt(year, 10);
      const now = new Date();
      const currentYear = now.getFullYear();
      const currentMonth = now.getMonth() + 1; // Months are 0-indexed
  
      if (
        expiryYear < currentYear ||
        (expiryYear === currentYear && expiryMonth < currentMonth)
      ) {
        return false;
      }
  
      return expiryMonth >= 1 && expiryMonth <= 12;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newErrors = {};
  
      if (!validateCardNumber(cardNumber)) {
        newErrors.cardNumber = 'Invalid card number. It should be 13-19 digits.';
      }
      if (!validateCvv(cvv)) {
        newErrors.cvv = 'Invalid CVV. It should be 3 or 4 digits.';
      }
      if (!validateExpiryDate(expiryDate)) {
        newErrors.expiryDate = 'Invalid expiry date. It should be in the future and valid month.';
      }
  
      if (Object.keys(newErrors).length === 0) {
        // Proceed with payment submission
        console.log('Payment details are valid. Proceeding with payment...');
        axiosInstance.post(`/updatePayment/${id}`)
        .then(res => {
            // setTicket(res.data.data);
            console.log(res.data.data);
            if(res.data.status==200)
                alert('Payment Successful')
        })
        .catch(err => {
            console.error(err);
        });
      } else {
        setErrors(newErrors);
      }
    };
  
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

                            <h1 className='ViewerPayment-body-h1'>{ticket.eventId.name}</h1>{/* team names */}

                            <div style={{ display: "flex", flexDirection: 'row', gap: '8px' }}>

                                {/* <h1 className='ViewerPayment-body-h1-1'>TVM Junior Sports</h1>event name */}
                                <h1 className='ViewerBookNow-body-h1-2'>{ticket.eventId.category}</h1>{/* event category */}

                            </div>

                        </div>

                        <div style={{ display: "flex", flexDirection: 'row' ,width :'100%' }}>

                            <h3 className='ViewerPayment-body-h3'>{ticket.ticketCount} {sing}</h3>
                            <h4 className='ViewerPayment-body-h4'>₹ {ticket.amount}</h4>

                        </div>

                        <div className='ViewerPayment-body-2-2'>

                            <h5 className='ViewerPayment-body-hz5'>{ticket.eventId.venue}</h5>{/* event venue */}
                            <h2 className='ViewerPayment-body-h2'>{ticket.eventId.date.slice(0,10)}</h2> {/* event date and time */}

                        </div>

                    </div>

                    <div className='ViewerPayment-body-right-bottom'>

                        <div>

                            <label>Cardholder Name</label>
                            <input
            type="text"
            required
          />
        </div>
        <div>
        <label>Cardholder Number</label>

                            <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
          {errors.cardNumber && <p className="error">{errors.cardNumber}</p>}
        </div>

        <div className="form-group">
          <label>CVV:</label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
          {errors.cvv && <p className="error">{errors.cvv}</p>}
        </div>

        <div className="form-group">
          <label>Expiry Date (MM/YY):</label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
          />
          {errors.expiryDate && <p className="error">{errors.expiryDate}</p>}
        </div>

        <button type="submit" onClick={handleSubmit}>Submit Payment</button>

                        
                    </div>

                </div>

            </div>


        </div>

    )

}

export default ViewerPayment
