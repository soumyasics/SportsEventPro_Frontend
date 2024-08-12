import './ViewerPayment.css';
import img2 from "../../Assets/Back Button.svg";
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import axiosInstance from '../Constant/BaseURL';
import toast, { Toaster } from 'react-hot-toast';

function ViewerPayment() {
  const navigate=useNavigate()
    const location = useLocation();
    const { num, ticketPrice, sing } = location.state || { num: 0, ticketPrice: 0, sing: "Tickets" };
    const { id } = useParams();
    const [ticket, setTicket] = useState({
        ticketCount: 0,
        amount: 0,
        eventId: {
            name: '',
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
            })
            .catch(err => {
                console.error(err);
            });
    }, [id]);
    const [cname, setCName] = useState('');

    const [cardNumber, setCardNumber] = useState('');
    const [cvv, setCvv] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [errors, setErrors] = useState({});

    const validateCardName = (val) => /^[A-Za-z\s]+$/.test(val);

    const validateCardNumber = (number) => /^[0-9]{16}$/.test(number);
    const validateCvv = (cvv) => /^[0-9]{3}$/.test(cvv);
    const validateExpiryDate = (date) => {
        const [month, year] = date.split('/');
        const expiryMonth = parseInt(month, 10);
        const expiryYear = parseInt(year, 10);
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        return (
            expiryYear > currentYear ||
            (expiryYear === currentYear && expiryMonth >= currentMonth)
        ) && expiryMonth >= 1 && expiryMonth <= 12;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!validateCardName(cname)) newErrors.cname = 'Invalid Name. It should be of Alphabets.';

        if (!validateCardNumber(cardNumber)) newErrors.cardNumber = 'Invalid card number. It should be 16 digits.';
        if (!validateCvv(cvv)) newErrors.cvv = 'Invalid CVV. It should be 3  digits.';
        if (!validateExpiryDate(expiryDate)) newErrors.expiryDate = 'Invalid expiry date. It should be in the future and valid month.';
        if (Object.keys(newErrors).length === 0) {
            axiosInstance.post(`/updatePayment/${id}`)
                .then(res => {
                    if (res.data.status === 200) {
                        // alert('Payment Successful');
                        toast.success("This is a success message!");

                        navigate(`/ViewerHomePage`);
                    }
                })
                .catch(err => {
                    console.error(err);
                    toast.error("Something went wrong!");
                });
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className='ViewerPayment-MainDiv'>
            <div className="ViewerPayment-header">
                <Link to='/ViewerUpcoming'>
                    <button className='ViewerPayment-headercontainer-BackButton'>
                        <img src={img2} alt=' ' />
                    </button>
                </Link>
                <h1 className='ViewerPayment-headercontainer-h1'>Payment</h1>
            </div>
            <div className='ViewerPayment-bottom-body'>
                <div className="ViewerPayment-body-right-top">
                    <div className='ViewerPayment-body-2'>
                        <h1 className='ViewerPayment-body-h1'>{ticket.eventId.name}</h1>
                        <div style={{ display: "flex", flexDirection: 'row', gap: '8px' }}>
                            <h1 className='ViewerBookNow-body-h1-2'>{ticket.eventId.category}</h1>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: 'row', width: '100%' }}>
                        <h3 className='ViewerPayment-body-h3'>{ticket.ticketCount} {sing}</h3>
                        <h4 className='ViewerPayment-body-h4'>₹ {ticket.amount}</h4>
                    </div>
                    <div className='ViewerPayment-body-2-2'>
                        <h5 className='ViewerPayment-body-h5'>{ticket.eventId.venue}</h5>
                        <h2 className='ViewerPayment-body-h2'>{ticket.eventId.date.slice(0, 10)}</h2>
                    </div>
                </div>
                <div className='ViewerPayment-body-right-bottom mb-3'>
                    <div>
                        <label>Cardholder Name</label>
                        <input type="text" value={cname}  required onChange={(e) => setCName(e.target.value)}

 />
                         {errors.cname && <p className="error">{errors.cname}</p>}

                    </div>
                    <div className='mb-3'>
                        <label>Cardholder Number</label>
                        <input
                            type="text"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                        />
                        {errors.cardNumber && <p className="error">{errors.cardNumber}</p>}
                    </div>
                    <div>
                        <label>CVV</label>
                        <input
                            type="text"
                            className='form-control-lg'
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                        />
                        {errors.cvv && <p className="error">{errors.cvv}</p>}
                    </div>
                    <div>
                        <label>Expiry Date (MM/YYYY)</label>
                        <input
                            type="text"
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(e.target.value)}
                            placeholder="MM/YYYY"
                        />
                        {errors.expiryDate && <p className="error">{errors.expiryDate}</p>}
                    </div>
                    <button type="submit" onClick={handleSubmit}>Submit Payment</button>
                </div>
                <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: '#333',
            color: '#fff',
          },
        }}
      />
            </div>
        </div>
    );
}

export default ViewerPayment;
