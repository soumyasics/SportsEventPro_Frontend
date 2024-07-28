import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import axiosInstance from '../Constant/BaseURL'
import axiosMultipartInstance from '../Constant/multiPart'
import { useNavigate } from 'react-router-dom'
import './OrganizerScheduleEvents.css'
import toast from 'react-hot-toast'

function OrganizerScheduleEvents() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        organizerId: localStorage.getItem('organizerId'),
        name: '',
        venue: '',
        date: '',
        time: '',
        category: '',
        banner: null,
    });

    const [errors, setErrors] = useState({
        name: '',
        venue: '',
        date: '',
        time: '',
        category: '',
        file: '',
    });

    const handleChange = (event) => {
        const { name, value, files } = event.target;
        if (files) {
            setData(prevData => ({
                ...prevData,
                [name]: files[0]
            }));
        } else {
            setData(prevData => ({
                ...prevData,
                [name]: value
            }));
        }
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: ''
        }));
    };

    const validateField = (fieldName, value) => {
        if (!value || !value.trim()) {
            return `${fieldName} is required`;
        }
        return '';
    };

    const validateImageField = (fieldName, file) => {
        if (!file) {
            return `${fieldName} is required`;
        }
    }

    const handleSubmit = (event) => {
        console.log("in fun");
        event.preventDefault();
        let errors = {};
        let formIsValid = true;

        errors.name = validateField('name', data.name);
        errors.venue = validateField('Venue', data.venue);
        errors.date = validateField('Date', data.date);
        errors.time = validateField('Time', data.time);
        errors.category = validateField('Category', data.category);
        errors.file = validateImageField('Banner', data.banner);

        setErrors(errors);
        // formIsValid = !Object.values(errors).some(error => error !== '');
        console.log("form",formIsValid,"err",errors);

        if (formIsValid) {
            submitData();
        }
    };

    const submitData = () => {
        console.log("in",data);
        let formData = new FormData();
        formData.append('organizerId', data.organizerId);
        formData.append('name', data.name);
        formData.append('venue', data.venue);
        formData.append('date', data.date);
        formData.append('time', data.time);
        formData.append('category', data.category);
        formData.append('banner', data.banner);

        axiosMultipartInstance.post('addEvent', data)
            .then(response => {
                if (response.data.status === 200) {
                    toast.success(response.data.msg);
                    navigate('/OrganizerViewEvents');
                } else {
                    toast.error(response.data.msg);
                }
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (

        <div className='OrganizerScheduleEvents'>

            <div className='OrganizerScheduleEvents-div-1'>

                <div className='OrganizerScheduleEvents-div-1-header'>

                    <h1 className='OrganizerScheduleEvents-div-1-h1'>Schedule Events </h1>
                    <p>Fill In The Details</p>

                </div>

                <div className='OrganizerScheduleEvents-div-1-body'>

                    <div className='OrganizerScheduleEvents-div-1-body-inpcontain'>

                        {/* left side input fields */}
                        <div className='OrganizerScheduleEvents-div-1-body-inpcontain-left'>

                            {/* event name */}
                            <div className='OrganizerScheduleEvents-div-1-body-inpcontain-left-inpcontain'>
                                
                                <label className='OrganiserScheduleEvents-div-1-body-inpcontain-label'>Event Name</label>
                                <input type='text' className='OrganizerScheduleEvents-div-1-body-inpcontain-left-inp' name="name" placeholder='Enter The Event Name' onChange={handleChange}></input>
                                {errors.name && <div className="text-danger ">{errors.name}</div>}

                            </div>

                            {/* event category */}
                            <div className='OrganizerScheduleEvents-div-1-body-inpcontain-left-inpcontain-select'>
                                
                                <label className='OrganiserScheduleEvents-div-1-body-inpcontain-label'>Category</label>
                                <select className="OrganizerScheduleEvents-Content-Input-Country" aria-label="Default select example" onChange={handleChange} name="category">

                                    <option className='OrganizerScheduleEvents-Content-Input-Select-Option' selected name="state">Select Category</option>
                                    <option value="Cricket">Cricket</option>
                                    <option value="Football">Football</option>
                                    <option value="Tennis">Tennis</option>
                                    <option value="Table Tennis">Table Tennis</option>

                                </select>
                                {errors.category && <div className="text-danger ">{errors.category}</div>}

                            </div>

                            {/* event venue */}
                            <div className='OrganizerScheduleEvents-div-1-body-inpcontain-left-inpcontain'>
                                
                                <label className='OrganiserScheduleEvents-div-1-body-inpcontain-label'>Venue</label>
                                <input type='text' className='OrganizerScheduleEvents-div-1-body-inpcontain-left-inp' name="venue" onChange={handleChange} placeholder='Venue'></input>
                                {errors.venue && <div className="text-danger ">{errors.venue}</div>}

                            </div>

                        </div>
                        
                        {/* right side input fields */}
                        <div className='OrganizerScheduleEvents-div-1-body-inpcontain-right'>
                            
                            {/* event date */}
                            <div className='OrganizerScheduleEvents-div-1-body-inpcontain-right-inpcontain'>
                                
                                <label className='OrganiserScheduleEvents-div-1-body-inpcontain-label' >Date</label>
                                <input type='Date'
                                 className='OrganizerScheduleEvents-div-1-body-inpcontain-right-inp' 
                                 name="date"  onChange={handleChange}
                                 min={new Date().toISOString().split("T")[0]}
                                 ></input>
                                {errors.date && <div className="text-danger ">{errors.date}</div>}

                            </div>

                            {/* event time */}
                            <div className='OrganizerScheduleEvents-div-1-body-inpcontain-right-inpcontain'>
                                
                                <label className='OrganiserScheduleEvents-div-1-body-inpcontain-label'>Time</label>
                                <input type='time' className='OrganizerScheduleEvents-div-1-body-inpcontain-right-inp' placeholder='Match Time' onChange={handleChange} name="time"></input>
                                {errors.time && <div className="text-danger ">{errors.time}</div>}

                            </div>

                            {/* event banner */}
                            <div className='OrganizerScheduleEvents-div-1-body-inpcontain-right-inpcontain'>
                                
                                <label className='OrganiserScheduleEvents-div-1-body-inpcontain-label'>Upload Banner</label>
                                <input type='file' required placeholder='Upload Document' className='OrganiserScheduleEvents-Content-input-banner' onChange={handleChange} name="banner"/>                            
                                {errors.file && <div className="text-danger ">{errors.file}</div>}

                            </div>

                        </div>


                    </div>

                    <button className='AButton' type="button" onClick={handleSubmit}>Send Request</button>

                </div>

            </div>

        </div>

    )

}

export default OrganizerScheduleEvents
