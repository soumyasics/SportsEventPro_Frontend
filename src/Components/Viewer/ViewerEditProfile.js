import React, { useEffect, useState } from 'react'
import './ViewerProfile.css'
import img13 from '../../Assets/Vector.svg'
import img1 from '../../Assets/solar_phone-bold-duotone.jpg'
import img2 from '../../Assets/ri_open-arm-fill.jpg'
import img3 from '../../Assets/mdi_city.jpg'
import img4 from '../../Assets/material-symbols_mail-outline.jpg'
import img5 from '../../Assets/majesticons_pin-line.jpg'
import img6 from '../../Assets/gg_list.jpg'
import img7 from '../../Assets/frame(2).png'
import img8 from '../../Assets/ep_place.jpg'
import img9 from '../../Assets/arcticons_asr-licence.jpg'
import img10 from '../../Assets/subway_world-1.svg'
import img11 from '../../Assets/carbon_location-filled.jpg'
import img12 from '../../Assets/arcticons_team-fight-tactics.jpg'
import axios from 'axios'
import { useParams } from 'react-router-dom'




import nameIcon from '../../Assets/nameIcon.png'
import './ViewerEditProfile.css'

import axiosInstance from '../Constant/BaseURL'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

function ViewerEditProfile() {
    const url = axiosInstance.defaults.url;
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        name:'',
        gender:'', 
        address:"", 
        pincode:'', 
        city:'', 
        state:'', 
        country:'', 
        contact:'', 
        email:'', });
    const id = localStorage.getItem('viewerId')
    const [errors, setErrors] = useState({

        name:'',
        gender:'', 
        address:"", 
        pincode:'', 
        city:'', 
        state:'', 
        country:'', 
        contact:'', 
        email:'', 
        password:'',
        confirmpassword:''
    })
    useEffect(() => {
        axiosInstance.post(`viewviewersById/${id}`).then(res => {
            setUserData(res.data.data);
        }).catch(err => {
            console.log(err);
        })
    }, [id]);

    let formIsValid = true;

    const handleChange = (event) => {
        console.log("ty", event.target.type);
        const { name, value, files } = event.target;

        if (event.target.type == "radio") {
            setUserData(prevData => ({
                ...prevData,
                [name]: value
            }));
        }

        else {
            setUserData(prevData => ({
                ...prevData,
                [name]: value
            }));
        }

    };
    function validateContact(fieldName, value) {
        const numberRegex = /^(?=.*\d)\d+$/;

       
        if (!numberRegex.test(value)) {
            
                 formIsValid = false;
        return "Contact Number must contain numbers Only"
            } 
        else if (value.length !=10) {
            formIsValid = false;

            return 'Please enter a valid Contact Number';
        }
        return '';
    }

    function validatePincode(fieldName, value) {
        console.log("in validate");
        
        const numberRegex = /^(?=.*\d)\d+$/;

      console.log(value.toString().length);
       
        if (!numberRegex.test(value)) {
            
                 formIsValid = false;
        return "Pincode must contain numbers Only"
            }else if (value.toString().length != 6) {
            formIsValid = false;

            return 'Please enter a valid Pincode';
        }
        return '';
    }


    const validateField = (fieldName, value) => {
   
        const nRegex =  /^(?=.*[A-Za-z])[A-Za-z0-9\s]+$/;
        const nameRegex = /^[A-Za-z\s]+$/;
        const twoDigitRegex = /^\d{0,2}$/;
        if (!value || !value.trim()) {
            formIsValid = false;
            return `${fieldName} is required`;
        }

        if (fieldName === "Name"){
            if (!nameRegex.test(value)) {
                
                     formIsValid = false;
            return "Name must contain alphabets Only"
                }
         }
         if (fieldName === "City"){
            
            if (!nameRegex.test(value)) {
                
                     formIsValid = false;
            return "City must contain alphabets Only"
                }
         }
        if (fieldName === "Email" && !value.endsWith("@gmail.com")) {
            formIsValid = false;

            return "Email must be a valid Email address"
        }
        return '';
    };

    const handleUpdate = () => {

        let errors = {};
         formIsValid = true;

        errors.email = validateField('Email', userData.email);
        errors.name = validateField('Name', userData.name);
        errors.contact = validateContact('Contact number', userData.contact)
        errors.pincode = validatePincode('Pincode', userData.pincode);
        errors.state = validateField('States', userData.state)
        errors.address = validateField('Address', userData.address);
        errors.city = validateField('City', userData.city);
        errors.country = validateField('Country', userData.country);
        setErrors(errors);

if(formIsValid){
        axiosInstance
            .post(`editviewersById/${id}`, userData)
            .then((res) => {
                console.log(res);
                if (res.data.status == 200) {
                    toast.success("Profile Updated Successfully");
                    navigate('/ViewerHomePage')
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
    }
    return (
        <div className='container'>
            <div className='row viewer-dit-prof-text'>
                <div className='col ViewerViewProfile-1'>
                    <h1 className='ViewerViewProfiletext-1'>
                        <Link to="/ViewerHomePage">
                            <img className='ViewerViewProfileimg-13' src={img13} alt='' />
                        </Link>
                        Edit  Profile
                    </h1>
                </div>
            </div>

            <div className='row ViewerViewProfile-3 ViewerViewProfileimpdiv-style'>
                <div className='col'>
                    <div className='row ViewerViewProfilemainrow-1'>
                        <div className='col-2'>
                            <img className='ViewerViewProfilecommon-style-1' src={nameIcon} alt='' />
                        </div>
                        <div className='col-5'>
                            <label className='ViewerViewProfilelabel'>Name</label>
                        </div>
                        <div className='col-5'>
                            <input type="text" className='viewer-dit-prof-text' name="name" value={userData.name || ''} onChange={handleChange} />
                        </div>
                    </div>
                    {errors.name && <div className="text-danger ">{errors.name}</div>}

                </div>

                <div className='col ViewerViewProfilemainrow-right-1'>
                    <div className='row ViewerViewProfilemainrow-1'>
                        <div className='col-2'>
                            <img className='ViewerViewProfilecommon-style-1' src={img11} alt='' />
                        </div>
                        <div className='col-5'>
                            <label className='ViewerViewProfilelabel'>Address</label>
                        </div>
                        <div className='col-5'>
                            <input type="text" className='viewer-dit-prof-text' name="address" value={userData.address || ''} onChange={handleChange} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='row ViewerViewProfile-4 ViewerViewProfileimpdiv-style'>
                <div className='col'>
                    <div className='row ViewerViewProfilemainrow-1'>
                        <div className='col-2'>
                            <img className='ViewerViewProfilecommon-style-1' src={img1} alt='' />
                        </div>
                        <div className='col-5'>
                            <label className='ViewerViewProfilelabel'>Contact Number</label>
                        </div>
                        <div className='col-5'>
                            <input type="text" className='viewer-dit-prof-text' name="contact" value={userData.contact || ''} onChange={handleChange} />
                        </div>
                    </div>
                    {errors.contact && <div className="text-danger ">{errors.contact}</div>}

                </div>

                <div className='col ViewerViewProfilemainrow-right-1'>
                    <div className='row ViewerViewProfilemainrow-1'>
                        <div className='col-2'>
                            <img className='ViewerViewProfilecommon-style-1' src={img5} alt='' />
                        </div>
                        <div className='col-5'>
                            <label className='ViewerViewProfilelabel'>Pincode</label>
                        </div>
                        <div className='col-5'>
                            <input type="text" className='viewer-dit-prof-text' name="pincode" value={userData.pincode} onChange={handleChange} />
                        </div>

                    </div>
                    {errors.pincode && <div className="text-danger ">{errors.pincode}</div>}

                </div>
            </div>

            <div className='row ViewerViewProfile-6 ViewerViewProfileimpdiv-style'>
                <div className='col'>
                    <div className='row ViewerViewProfilemainrow-1'>
                        <div className='col-2'>
                            <img className='ViewerViewProfilecommon-style-1' src={img4} alt='' />
                        </div>
                        <div className='col-5'>
                            <label className='ViewerViewProfilelabel'>Email ID</label>
                        </div>
                        <div className='col-5'>
                            <input type="text" className='viewer-dit-prof-text' name="email" value={userData.email || ''} onChange={handleChange} />
                        </div>
                    </div>
                    {errors.email && <div className="text-danger ">{errors.email}</div>}

                </div>

                <div className='col ViewerViewProfilemainrow-right-1'>
                    <div className='row ViewerViewProfilemainrow-1'>
                        <div className='col-2'>
                            <img className='ViewerViewProfilecommon-style-1' src={img3} alt='' />
                        </div>
                        <div className='col-5'>
                            <label className='ViewerViewProfilelabel'>City</label>
                        </div>
                        <div className='col-5'>
                            <input type="text" className='viewer-dit-prof-text' name="city" value={userData.city || ''} onChange={handleChange} />
                            {errors.city && <div className="text-danger ">{errors.city}</div>}
                        </div>
                    </div>
                </div>
            </div>

            <div className='row ViewerViewProfile-7 ViewerViewProfileimpdiv-style'>
                <div className='col'>
                    <div className='row ViewerViewProfilemainrow-1'>
                        <div className='col-2'>
                            <img className='ViewerViewProfilecommon-style-2' src={img7} alt='' />
                        </div>
                        <div className='col-5'>
                            <label className='ViewerViewProfilelabel'>State</label>
                        </div>

                        <div className='col-5 viewer-dit-prof-text'>

                            <select className="ViewerEditProfile-Content-Input-Country" aria-label="Default select example" onChange={handleChange} name="state" value={userData.state}
                            >
                                <option className='ViewerRegistration-Content-Input-Select-Option' selected
                                >Kerala</option>

                                <option value="Goa">Goa</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Maharashtra">Maharashtra</option>

                            </select>
                        </div>
                    </div>
                </div>

                <div className='col ViewerViewProfilemainrow-right-1'>
                    <div className='row ViewerViewProfilemainrow-1'>
                        <div className='col-2'>
                            <img className='ViewerViewProfilecommon-style-1' src={img8} alt='' />
                        </div>
                        <div className='col-5'>
                            <label className='ViewerViewProfilelabel'>Gender</label>
                        </div>
                        <div className='col-5'>
                            <div className='ViewerRegistration-Content-Input-2'>
                                <div className='ms-4'>
                                    <input type='radio' name='gender' id='male' onChange={handleChange} value="Male" checked={userData.gender === 'Male'} />
                                    <label className='ms-1' />Male
                                </div>
                                <div className='ms-3'>
                                    <input type='radio' name='gender' id='female' onChange={handleChange} value='Female' checked={userData.gender === 'Female'} />
                                    <label className='ms-1' />Female
                                </div>
                                <div className='ms-3'>
                                        <input type='radio' name='gender' id='other' value='Other' onChange={handleChange} checked={userData.gender ==='Other'}/>
                                        <label className='ms-1' />Other
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row ViewerViewProfile-11'>
                <button className='ViewerViewProfile-11-button' onClick={handleUpdate}>Update</button>
            </div>
        </div>
    )
}

export default ViewerEditProfile
