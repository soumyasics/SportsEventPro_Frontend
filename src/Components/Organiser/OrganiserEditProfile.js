import React, { useEffect, useState } from 'react'
import './OrganiserEditProfile.css'
import img from "../../Assets/Back Button.svg"
import tempimg from '../../Assets/tmpimage.png'
import img2 from '../../Assets/circum_edit.svg'
import img3 from '../../Assets/ri_open-arm-fill.svg'
import img4 from '../../Assets/solar_phone-bold-duotone.svg'
import img5 from '../../Assets/material-symbols_mail-outline.jpg'
import img6 from '../../Assets/majesticons_pin-line.jpg'
import img7 from '../../Assets/ep_place.jpg'
import img9 from '../../Assets/carbon_location-filled.jpg'
import img10 from '../../Assets/mdi_city.jpg'
import img12 from '../../Assets/gg_list.jpg'

import axiosInstance from '../Constant/BaseURL'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axiosMultipartInstance from '../Constant/multiPart'
import toast from 'react-hot-toast'

function OrganiserEditProfile() {
    const url = axiosInstance.defaults.url;
    const [isEditable, setIsEditable] = useState(false);

    const navigate = useNavigate()

    const handleEditClick = () => {
        setIsEditable(true);
    };
    
    const handleCancelClick = () => {
        setIsEditable(false);
    };

    const id = localStorage.getItem('organizerId')
    const [userData, setUserData] = useState({
        name: '',
        pincode: '',
        state: 'Kerala',
        contact: '',
        license: {filename:''},
        password: '',
        image: {filename:''},
        address: '',
        city: '',
        country: 'India',
        email: '',
        description: '',
        confirmpassword: '',
        experience: 0
    })

    useEffect(() => {
        let res;

        axiosInstance.post(`viewOrganizerById/${id}`).then(res => {
            console.log(res);

            setUserData(res.data.data);
            setImagePreview(res.data.data.photo ? `${url}/${res.data.data.photo.filename}` : tempimg);

            console.log(userData);

        }).catch(err => {
            console.log(err);
        })

    }, [id]);
    console.log(userData);

    const [errors, setErrors] = useState({
        name: '',
        pincode: '',
        contact: '',
        license: '',
        password: '',
        image: '',
        address: '',
        city: '',
        email: '',
        description: '',
        confirmpassword: '',
        experience: ''
    })

    let formIsValid;
    const handleChange = (event) => {
        console.log("ty", event.target.type);
        const { name, value, files } = event.target;
        if (files) {
            setUserData(prevData => ({
                ...prevData,
                [name]: files[0]
            }));
        }
        else if (event.target.type === "radio") {
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
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: ''
        }));
    };

    function validateContact(fieldName, value) {
        console.log(value,"vl");
        
        // if (!value.trim()) {
        //     return `${fieldName} is required`;
        //     formIsValid=false
        // } else
        console.log("p",userData.contact.toString().length);

         if (userData.contact.toString().length!= 10) {
            formIsValid=false
            return 'Please enter a valid Contact Number';
           

        }
        return '';
    }

    function validatePincode(fieldName, value) {
        console.log("p",userData.pincode.toString().length!= 6 );
        
     if (userData.pincode.toString().length!= 6 ) {
        formIsValid=false

            return 'Please enter a valid Pincode';

        }
        return '';
    }

    const validateField = (fieldName, value) => {
        if (!value || !value.trim()) {
            formIsValid = false;
            return `${fieldName} is required`;
        }
        if (fieldName === "Email" && !value.endsWith("@gmail.com")) {
            formIsValid=false

            return "Email must be a valid Email address"
        }
        return '';
    };
    const [imagePreview, setImagePreview] = useState(tempimg);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
         userData.photo = file
         console.log(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userData);

        let errors = {};
        formIsValid = true;
        errors.email = validateField('Email', userData.email);
        errors.name = validateField('Name', userData.name);
        errors.contact = validateContact('Contact number', userData.contact)
        errors.pincode = validatePincode('Pincode', userData.pincode);
        errors.state = validateField('States', userData.state)
        errors.address = validateField('Address', userData.address);
        errors.city = validateField('City', userData.city);

        setErrors(errors);

        if (formIsValid) {
            console.log("userData", userData);
            BackendData();
        }
    }

    const BackendData = () => {
        console.log("fun called", userData);
       
        axiosMultipartInstance.post(`editOrganizerById/${id}`, userData)
            .then(response => {
                console.log(response);
                if (response.data.status === 200) {
                    toast.success(response.data.msg)
                    navigate('/OrganiserEditProfile')
                } else
                toast.error(response.data.msg)

            })
            .catch(error => {
                console.error(error);
            })
        setIsEditable(false);
    }

    return (
        <div>
            <div className='container OrganiserEditProfile-container'>
                <div className='row OrganiserEditProfile-headercontainer'>
                    <div className='col  OrganiserEditProfile-headercontainer-container-1'>
                        <button className='OrganiserEditProfile-headercontainer-BackButton' ><Link to='/OrganizerDashboard'><img src={img} alt=' ' /></Link></button>
                        <h1 className='OrganiserEditProfile-headercontainer-h1'>{isEditable ? 'Edit Profile': 'View Profile'}</h1>

                    </div>''
                    <div className='col OrganiserEditProfile-headercontainer-container-2'>
                        <img src={imagePreview} alt=''  name="photo"
                            className='OrganiserEditProfile-headercontainer-container-2-profilepicture'
                            style={{  height: '100%', width:'100%', objectFit: 'cover' }}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = tempimg;
                            }} 
                        />
                        {isEditable && (
                            <input type='file' onChange={handleImageChange} name="photo" className='OrganiserEditProfile-headercontainer-container-2-editimgbutton'/>
                        )}
                        <img src={img2} alt='' className='OrganiserEditProfile-headercontainer-container-2-editimg-icon' />
                    </div>
                </div>

                <div className='row OrganiserEditProfile-body'>
                    <div className='col-lg-6 row OrganiserEditProfile-body-left'>
                        <div className='col row OrganiserEditProfile-body-common'>
                            <div className='col OrganiserEditProfile-body-common-img-contain'>
                                <img src={img3} alt=' ' className='OrganiserEditProfile-body-common-img' />
                                <label className='OrganiserEditProfile-body-common-label'>Name</label>
                            </div>
                            {isEditable ? (
                                <input type='text' onChange={handleChange} className='col OrganiserEditProfile-body-input' name="name" value={userData.name} />
                            ) : (
                                <span className='col OrganiserEditProfile-body-input'>{userData.name}</span>
                            )}
                        </div>
                        <div className='col row OrganiserEditProfile-body-common'>
                            <div className='col OrganiserEditProfile-body-common-img-contain'>
                                <img src={img4} alt=' ' className='OrganiserEditProfile-body-common-img' />
                                <label className='OrganiserEditProfile-body-common-label'>Contact Number</label>
                            </div>
                            {isEditable ? (
                              <>  <input type='text' onChange={handleChange} className='col OrganiserEditProfile-body-input' name="contact" value={userData.contact} />
                                {errors.contact && <div className="text-danger ">{errors.contact}</div>}
                                </>
                            ) : (
                                <span className='col OrganiserEditProfile-body-input'>{userData.contact}</span>
                            )}
                        </div>
                        <div className='col row OrganiserEditProfile-body-common'>
                            <div className='col OrganiserEditProfile-body-common-img-contain'>
                                <img src={img5} alt=' ' className='OrganiserEditProfile-body-common-img' />
                                <label className='OrganiserEditProfile-body-common-label'>Email ID</label>
                            </div>
                            {isEditable ? (
                                <input type='text' onChange={handleChange} className='col OrganiserEditProfile-body-input' name="email" value={userData.email} />
                            ) : (
                                <span className='col OrganiserEditProfile-body-input'>{userData.email}</span>
                            )}
                        </div>
                        <div className='col row OrganiserEditProfile-body-common'>
                            <div className='col OrganiserEditProfile-body-common-img-contain'>
                                <img src={img6} alt=' ' className='OrganiserEditProfile-body-common-img' />
                                <label className='OrganiserEditProfile-body-common-label'>Pincode</label>
                            </div>
                            {isEditable ? (
                               <><input type='text' className='col OrganiserEditProfile-body-input' name="pincode" onChange={handleChange} value={userData.pincode} />
                                {errors.pincode && <div className="text-danger ">{errors.pincode}</div>}

</> 
                            ) : (
                                <span className='col OrganiserEditProfile-body-input'>{userData.pincode}</span>
                            )}
                        </div>
                    </div>

                    <div className='col-lg-6 row OrganiserEditProfile-body-right'>
                        <div className='col row OrganiserEditProfile-body-common'>
                            <div className='col OrganiserEditProfile-body-common-img-contain'>
                                <img src={img7} alt=' ' className='OrganiserEditProfile-body-common-img' />
                                <label className='OrganiserEditProfile-body-common-label'>State</label>
                            </div>
                            {isEditable ? (
                                <select className='col OrganiserEditProfile-body-input-state' aria-label="Default select example" name="state" onChange={handleChange} value={userData.state}>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                </select>
                            ) : (
                                <span className='col OrganiserEditProfile-body-input'>{userData.state}</span>
                            )}
                        </div>
                        <div className='col row OrganiserEditProfile-body-common'>
                            <div className='col OrganiserEditProfile-body-common-img-contain'>
                                <img src={img9} alt=' ' className='OrganiserEditProfile-body-common-img' />
                                <label className='OrganiserEditProfile-body-common-label'>Address</label>
                            </div>
                            {isEditable ? (
                                <input type='text' className='col OrganiserEditProfile-body-input' name="address" onChange={handleChange} value={userData.address} />
                            ) : (
                                <span className='col OrganiserEditProfile-body-input'>{userData.address}</span>
                            )}
                        </div>
                        <div className='col row OrganiserEditProfile-body-common'>
                            <div className='col OrganiserEditProfile-body-common-img-contain'>
                                <img src={img10} alt=' ' className='OrganiserEditProfile-body-common-img' />
                                <label className='OrganiserEditProfile-body-common-label'>City</label>
                            </div>
                            {isEditable ? (
                                <input type='text' className='col OrganiserEditProfile-body-input' name="city" onChange={handleChange} value={userData.city} />
                            ) : (
                                <span className='col OrganiserEditProfile-body-input'>{userData.city}</span>
                            )}
                        </div>
                        <div className='col row OrganiserEditProfile-body-common'>
                            <div className='col OrganiserEditProfile-body-common-img-contain'>
                                <img src={img12} alt=' ' className='OrganiserEditProfile-body-common-img' />
                                <label className='OrganiserEditProfile-body-common-label'>Describe Experience</label>
                            </div>
                            {isEditable ? (
                                <input type='text' className='col OrganiserEditProfile-body-input' name="experience" onChange={handleChange} value={userData.experience} />
                            ) : (
                                <span className='col OrganiserEditProfile-body-input'>{userData.experience}</span>
                            )}
                        </div>
                    </div>
                </div>

                {isEditable ? (
    <div className='OrganiserEditProfile-button-row'>
        <button className='btn btn-primary' type='button' onClick={handleSubmit}>Update</button>
        <button className='btn btn-secondary' type='button' onClick={handleCancelClick}>Cancel</button>
    </div>
) : (
    <div className='OrganiserEditProfile-button-row'>

    <button className='btn btn-primary ' type='button' onClick={handleEditClick}>Edit</button>
    </div>
)}
            </div>
        </div>
    )
}

export default OrganiserEditProfile
