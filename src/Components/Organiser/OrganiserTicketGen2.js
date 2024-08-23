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
        const [eveData, setEveData] = useState({
            date:'',
            _id:''
        });

        const [formData, setFormData] = useState({
            startDate: '',
            endDate: '',
            seatingCapacity: '',
            eventId: '',
            organizerId: id,
            amount: ''
        });
        const [errors, setErrors] = useState({
            startDate: '',
            endDate: '',
            seatingCapacity: '',
            eventId: '',
          amount:''
        })
        let formIsValid;
        const url = axiosInstance.defaults.url;
        console.log("url,", url);

        const [formattedDate, setFormattedDate] = useState('');


        const getEventdata=(id1)=>{
            let res;
    
    
            axiosInstance.post(`viewEventById/${id1}`).then(res => {
    
                console.log(res);
    
                if ((res.data.data)){
                    setEveData(res.data.data);
                    console.log("eve data",res.data.data.date );
                    const date = res.data.data.date ? new Date(res.data.data.date).toISOString().split('T')[0] : '';
                    setFormattedDate(date);
                }
                else
                    setEveData(null)
                console.log(res.data.data);
            }).catch(err => {
                console.log(err);
            })
    
        }
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
        if(name=="eventId"){
            getEventdata(value)
        }
    };

    const validateField = (fieldName, value) => {
    

        if (!value || !value.trim()) {
            formIsValid = false;
            return `${fieldName} is required`;
        }
        if (fieldName === "Amount"){
            if (value<=0) {
                
                     formIsValid = false;
            return "Amount must be a Non-Zero Digit"
                }
         }
       
        return '';
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        let errors = {};
        formIsValid = true;

        errors.seatingCapacity = validateField('Seating Capacity', formData.seatingCapacity);
        errors.amount = validateField('Amount', formData.amount);
        errors.startDate = validateField('Start Date', formData.startDate)
        errors.endDate = validateField('End Date', formData.endDate)
        errors.eventId = validateField('Event', formData.eventId)

        setErrors(errors);

        if (formIsValid) {
          
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
    }
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
                                {errors.eventId && <div className="text-danger ">{errors.eventId}</div>}

                            </div>

                            <div>
                                <label className='OrganiserTicketGen2-label-h1'>Ticket Opening Date</label>
                                <input
                                    className='OrganiserTicketGen2-input-date'
                                    type='date'
                                    name='startDate'
                                    min={new Date().toISOString().split('T')[0] } // Ensure end date is after start date
                                    max={formattedDate} 
                                    value={formData.startDate}
                                    onChange={handleChange}
                                />
                                
                            </div>
                            {errors.startDate && <div className="text-danger ">{errors.startDate}</div>}

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
                            {errors.seatingCapacity && <div className="text-danger ">{errors.seatingCapacity}</div>}

                            <div>
                                <label className='OrganiserTicketGen2-label-h1'>Ticket Closing Date</label>
                                <input
                                    className='OrganiserTicketGen2-input-date'
                                    type='date'
                                    name='endDate'
                                    value={formData.endDate}
                                    min={new Date().toISOString().split('T')[0] } 
                                    max={formattedDate} 
                                    onChange={handleChange}
                                />
                            </div>
                            {errors.endDate && <div className="text-danger ">{errors.endDate}</div>}

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
                    {errors.amount && <div className="text-danger ">{errors.amount}</div>}


                    <div>
                        <button type='submit' className='OrganiserTicketGen2-button'>Generate</button>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default OrganiserTicketGen2
