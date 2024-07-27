import React, { useEffect, useState } from 'react';
import './ViewerUpcomingDetails.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import img2 from "../../Assets/Back Button.svg";
import img3 from '../../Assets/Rectangle 4618(1).png';
import img4 from '../../Assets/button-minus.svg';
import img5 from '../../Assets/button-plus.svg';
import axiosInstance from '../Constant/BaseURL';

function ViewerUpcomingDetails() {
    const { id } = useParams();
    const url = axiosInstance.defaults.url;
    const navigate=useNavigate()
    const [ticket, setTicket] = useState({
        ticketId: '',
        ticketCount: 0,
        amount: 0,
        eventId: '',
        viewerId: ''
    });
    const [userData, setUserData] = useState({
        amount: 0,
        eventId: {
            category: '',
            venue: '',
            date: '',
            name: '',
            _id: ''
        }
    });
    const [teams, setTeams] = useState([]);
    const [num, setNum] = useState(1);
    const [ticketPrice, setTicketPrice] = useState(0);
    const [sing, setSing] = useState('Ticket');

    useEffect(() => {
        axiosInstance.post(`/viewTicketById/${id}`)
            .then(res => {
                setUserData(res.data.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, [id]);

    useEffect(() => {
        if (userData.eventId._id) {
            axiosInstance.post(`/viewApprovedEnrollmentsByEventId/${userData.eventId._id}`)
                .then(res => {
                    setTeams(res.data.data);
                })
                .catch(err => {
                    console.error(err);
                });
        }
    }, [userData.eventId._id]);

    useEffect(() => {
        setTicketPrice(num * userData.amount);
        setSing(num === 1 ? 'Ticket' : 'Tickets');
    }, [num, userData.amount]);

    useEffect(() => {
        setTicket(prevTicket => ({
            ...prevTicket,
            ticketId: id,
            ticketCount: num,
            amount: num*userData.amount,
            eventId: userData.eventId._id,
            viewerId: localStorage.getItem('viewerId') // replace with actual viewer ID
        }));
        console.log("tic",ticket);
    }, [id, num, ticketPrice, userData.eventId._id]);

    const addButtonOnClick = () => setNum(prevNum => prevNum + 1);

    const subButtonOnClick = () => setNum(prevNum => (prevNum > 1 ? prevNum - 1 : 1));


    const booknow=()=>{
        axiosInstance.post(`/createTicket`,ticket)
        .then(res => {
           console.log("res",res);
           if(res.data.status==200){
            alert('Booking Confirmed')
            navigate(`/ViewerPayment/${res.data.data._id}`)
           }
           else{
            alert(res.data.msg)

           }
        })
        .catch(err => {
            console.error(err);
        });
    }
    return (
        <div className='ViewerBookNow'>
            <div className='ViewerBookNow-container'>
                <div className="ViewerBookNow-header">
                    <Link to='/ViewerUpcoming'>
                        <button className='ViewerBookNow-headercontainer-BackButton'>
                            <img src={img2} alt='Back' />
                        </button>
                    </Link>
                    <h1 className='ViewerBookNow-headercontainer-h1'>Event Details</h1>
                </div>
                <div className='ViewerBookNow-body'>
                    <div className='ViewerBookNow-body-left'>
                        <div className='ViewerBookNow-content-contain-overlay'>
                            <h1 className='ViewerBookNow-content-contain-h1-1'></h1>
                            <h1 className='ViewerBookNow-content-contain-h1-2'></h1>
                        </div>
                        <img src={`${url}/${userData?.eventId?.banner?.filename}`} alt='Blog Image' className='ViewerBookNow-img' />
                    </div>
                    <div className='ViewerBookNow-body-right'>
                        <div className="ViewerBookNow-body-right-top">
                            <div className='ViewerBookNow-body-2'>
                                <h1 className='ViewerBookNow-body-h1'>{userData.eventId.name}</h1>
                            </div>
                            <div style={{ display: "flex", gap: '8px' }}>
                                <h1 className='ViewerBookNow-body-h1-2'>{userData.eventId.category}</h1>
                            </div>
                            <div style={{ display: "flex", flexDirection: 'row' }}>
                                <h3 className='ViewerBookNow-body-h3' style={{ marginTop: '3px' }}>Ticket -</h3>
                                <h4 className='ViewerBookNow-body-h4' style={{ marginLeft: '4px' }}>₹ {userData.amount}/-</h4>


                            </div>
                            <div className='ViewerBookNow-body-2 row'>
                                <div className='col-5'>
                                <h6  className='ViewerBookNow-body-h5 '>Available Seats : {userData.availableSeats}</h6>

                                    <h5 className='ViewerBookNow-body-h5 '>Venue: {userData.eventId.venue}</h5>
                                </div>
                                <div className='col-5'>
                                    <h2 className='ViewerBookNow-body-h2 '>{userData.eventId.date.slice(0, 10)}</h2>
                                </div>
                            </div>
                            <div>
                                <h6>Playing Teams:</h6>
                            </div>
                            <div>
                                {teams.map(x => (
                                    <div key={x._id}>
                                        {x.coachId.teamName}
                                        <br />
                                    </div>
                                ))}
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
                                <Link style={{ textDecoration: 'none' }}  state={{ num, ticketPrice, sing }}>
                                  {
                                    userData.availableSeats>0?(
                                    <button className='BookNowButt' onClick={booknow}>Book Now</button>)
                                    : <button className='BookNowButt'>Booking Closed</button>
                                    }
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewerUpcomingDetails;
