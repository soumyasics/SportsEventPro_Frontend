import './OrganiserTicketGen2.css'
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from "../Constant/BaseURL";
import img2 from "../../Assets/Back Button.svg"
import toast from 'react-hot-toast';


function OrganiserTicketGen2() {
    const navigate = useNavigate()
    const id=localStorage.getItem('organizerId')
        const [userData, setUserData] = useState([]);
        const [formData, setFormData] = useState({
            startDate: '',
            endDate: '',
            seatingCapacity: '',
            eventId: '',
            organizerId: id,
            amount: ''
        });
        const url = axiosInstance.defaults.url;
        console.log("url,", url);
        useEffect(() => {
    
            let res;
    
    
            axiosInstance.post(`viewApprovedEventsByOrgIdWithoutTickets/${id}`).then(res => {
    
                console.log(res);
    
                if ((res.data.data).length > 0)
                    setUserData(res.data.data);
                else
                    setUserData(null)
                console.log(res.data.data);
            }).catch(err => {
                console.log(err);
            })
    
        }, []);
        useEffect(() => {
            console.log("users", userData);
        })

        
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        axiosInstance.post('registerTicket ', formData)

        .then(response => {

            console.log(response);

            if (response.data.status == 200) {

                toast.success("Ticket Generated Successfully")
                navigate('/OrganizerDashboard')

            } 
            
            else {

                toast.error(response.data.msg)

            }


        })

        .catch(error => {

            console.error(error);

        })
    };

    return (
        <div className='OrganiserTicketGen2'>
            <div className='OrganiserTicketGen2MainDiv'>
                {/* Separated div for back button and text */}
                <div className='col OrganiserTicketGen2-headercontainer-container-1'>
                    <div style={{ display: 'flex', flexDirection: 'row', width: 'max-content' }}>
                        <Link to='/OrganizerDashboard'>
                            <button className='OrganiserTicketGen2-headercontainer-BackButton'>
                                <img src={img2} alt=' ' />
                            </button>
                        </Link>
                        <h1 className='OrganiserTicketGen2-headercontainer-h1'>Ticket Generation</h1>
                    </div>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '25px', alignItems: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '45px', alignItems: 'center', width: '100%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                            <div>
                                <label className='OrganiserTicketGen2-label-h1'>Event Name</label>
                                <select
                                    className="OrganiserTicketGen-Content-Input-Country"
                                    aria-label="Default select example"
                                    name="eventId"
                                    value={formData.eventId}
                                    onChange={handleChange}
                                >
                                    <option className='OrganiserTicketGen-Content-Input-Select-Option'>Select Event</option>
                                    {userData.length ? (
                                        userData.map((a) => (
                                            <option key={a._id} value={a._id}>
                                                {a.name}
                                            </option>
                                        ))
                                    ) : (
                                        <option>No Events available</option>
                                    )}
                                </select>
                            </div>

                            <div>
                                <label className='OrganiserTicketGen2-label-h1'>Ticket Opening Date</label>
                                <input
                                    className='OrganiserTicketGen2-input-date'
                                    type='date'
                                    name='startDate'
                                    value={formData.startDate}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                            <div>
                                <label className='OrganiserTicketGen2-label-h1'>Seating Capacity</label>
                                <input
                                    className='OrganiserTicketGen2-input'
                                    type='text'
                                    placeholder='Enter Total Seating Capacity'
                                    name='seatingCapacity'
                                    value={formData.seatingCapacity}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label className='OrganiserTicketGen2-label-h1'>Ticket Closing Date</label>
                                <input
                                    className='OrganiserTicketGen2-input-date'
                                    type='date'
                                    name='endDate'
                                    value={formData.endDate}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className='OrganiserTicketGen2-label-h1'>Ticket Price</label>
                        <input
                            className='OrganiserTicketGen2-input'
                            type='text'
                            placeholder='Enter Ticket Price'
                            name='amount'
                            value={formData.amount}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <button type='submit' className='OrganiserTicketGen2-button'>Generate</button>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default OrganiserTicketGen2
