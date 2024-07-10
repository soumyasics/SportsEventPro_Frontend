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

function OrganiserEditProfile() {
    const url = axiosInstance.defaults.url;

    const navigate = useNavigate()


    const id=localStorage.getItem('organizerId')
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
        contactnumber: '',
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
        else if (event.target.type == "radio") {
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
        if (!value.trim()) {
            return `${fieldName} is required`;
        } else if (value.length !== 10) {
            return 'Please enter a valid Contact Number';
        }
        return '';
    }

    function validatePincode(fieldName, value) {
        if (!value.trim()) {
            return `${fieldName} is required`;
        } else if (value.length !== 6) {
            return 'Please enter a valid Contact Number';
        }
        return '';
    }


    const validateField = (fieldName, value) => {
        if (!value || !value.trim()) {
            formIsValid = true;
            return `${fieldName} is required`;
        }
        if (fieldName === "Email" && !value.endsWith("@gmail.com")) {
            return "Email must be a valid Email address"
        }
        return '';
    };
    const [imagePreview, setImagePreview] = useState(tempimg);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
         userData.photo=file
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

        // errors.email = validateField('Email', userData.email);
        // errors.name = validateField('Name', userData.name);
        // errors.contactnumber = validateContact('Contact number', userData.contact)
        // errors.pincode = validatePincode('Pincode', userData.pincode);
        // errors.state = validateField('States', userData.state)
        // errors.address = validateField('Address', userData.address);
        // errors.city = validateField('City', userData.city);
        // errors.experience = validateField('experience', userData.experience);



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
                if (response.data.status == 200) {
                    alert(response.data.msg)
                    navigate('/OrganizerDashboard')
                } else
                    alert(response.data.msg)


            })
            .catch(error => {
                console.error(error);


            })

    }

    return (

        <div>

            <div className='container OrganiserEditProfile-container'>

                <div className='row OrganiserEditProfile-headercontainer'>

                    {/* seperated div for backbutton and text */}
                    <div className='col  OrganiserEditProfile-headercontainer-container-1'>

                        <button className='OrganiserEditProfile-headercontainer-BackButton'><img src={img} alt=' ' /></button>
                        <h1 className='OrganiserEditProfile-headercontainer-h1'>Edit Profile</h1>

                    </div>

                    {/* seperated div for the profile picture image */}
                    <div className='col OrganiserEditProfile-headercontainer-container-2'>

                        <img src={imagePreview} alt=''  name="photo"
                        className='OrganiserEditProfile-headercontainer-container-2-profilepicture'
                        style={{  height: '100%',width:'100%', objectFit: 'cover' }}

                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = tempimg;
                           
                        }} />
                        {/* ^ put organiser profile pic in src */}


                        <input type='file' onChange={handleImageChange}  name="photo" className='OrganiserEditProfile-headercontainer-container-2-editimgbutton'/>
                            <img src={img2} alt='' className='OrganiserEditProfile-headercontainer-container-2-editimg-icon' />
                        {/* this is edit profile pic button. */}



                    </div>

                </div>

                <div className='row OrganiserEditProfile-body'>

                    <div className='col-lg-6 row OrganiserEditProfile-body-left'>

                        {/* Name */}
                        <div className='col row OrganiserEditProfile-body-common'>

                            <div className='col OrganiserEditProfile-body-common-img-contain'>
                                <img src={img3} alt=' ' className='OrganiserEditProfile-body-common-img' />
                                <label className='OrganiserEditProfile-body-common-label'>Name</label>
                            </div>

                            <input type='text'  onChange={handleChange} className='col OrganiserEditProfile-body-input' name="name" value={userData.name} />

                        </div>

                        {/* Contact number */}
                        <div className='col row OrganiserEditProfile-body-common'>

                            <div className='col OrganiserEditProfile-body-common-img-contain'>
                                <img src={img4} alt=' ' className='OrganiserEditProfile-body-common-img' />
                                <label className='OrganiserEditProfile-body-common-label'>Contact Number</label>
                            </div>

                            <input type='text'  onChange={handleChange} className='col OrganiserEditProfile-body-input'  name="contact" value={userData.contact}/>

                        </div>

                        {/* Email Id */}
                        <div className='col row OrganiserEditProfile-body-common'>

                            <div className='col OrganiserEditProfile-body-common-img-contain'>
                                <img src={img5} alt=' ' className='OrganiserEditProfile-body-common-img' />
                                <label className='OrganiserEditProfile-body-common-label'>Email ID</label>
                            </div>

                            <input type='text'  onChange={handleChange} className='col OrganiserEditProfile-body-input' name="email" value={userData.email} />

                        </div>

                        {/* Pincode */}
                        <div className='col row OrganiserEditProfile-body-common'>

                            <div className=' col OrganiserEditProfile-body-common-img-contain'>
                                <img src={img6} alt=' ' className='OrganiserEditProfile-body-common-img' />
                                <label className='OrganiserEditProfile-body-common-label'>Pincode</label>
                            </div>

                            <input type='text' className=' col OrganiserEditProfile-body-input' name="pincode"  onChange={handleChange} value={userData.pincode} />

                        </div>

                    </div>

                    <div className=' col-lg-6 row OrganiserEditProfile-body-right'>

                        {/* State */}
                        <div className='col row OrganiserEditProfile-body-common'>

                            <div className='col OrganiserEditProfile-body-common-img-contain'>
                                <img src={img7} alt=' ' className='OrganiserEditProfile-body-common-img' />
                                <label className='OrganiserEditProfile-body-common-label' >State</label>
                            </div>

                            <select className='col OrganiserEditProfile-body-input-state' aria-label="Default select example"  name="state" onChange={handleChange}>

                                <option className='OrganiserRegistration-Content-Input-Select-Option' selected name="state" value="Kerala">Kerala</option>
                                <option value="Goa">Goa</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Maharashtra">Maharashtra</option>

                            </select>

                        </div>

                        {/* Address */}
                        <div className='col row OrganiserEditProfile-body-common'>

                            <div className='col OrganiserEditProfile-body-common-img-contain'>
                                <img src={img9} alt=' ' className='OrganiserEditProfile-body-common-img' />
                                <label className='OrganiserEditProfile-body-common-label'>Address</label>
                            </div>

                            <input type='text' className='col OrganiserEditProfile-body-input' name="address"  onChange={handleChange} value={userData.address}/>

                        </div>

                        {/* City */}
                        <div className='col row OrganiserEditProfile-body-common'>

                            <div className='col OrganiserEditProfile-body-common-img-contain'>
                                <img src={img10} alt=' ' className='OrganiserEditProfile-body-common-img' />
                                <label className='OrganiserEditProfile-body-common-label'>City</label>
                            </div>

                            <input type='text' className='col OrganiserEditProfile-body-input' name="city"  onChange={handleChange} value={userData.city}/>

                        </div>

                        {/* Describe Experience */}
                        <div className='col row OrganiserEditProfile-body-common'>

                            <div className='col OrganiserEditProfile-body-common-img-contain'>
                                <img src={img12} alt=' ' className='OrganiserEditProfile-body-common-img' />
                                <label className='OrganiserEditProfile-body-common-label'>Describe Experience</label>
                            </div>

                            <input type='text' className='col OrganiserEditProfile-body-input' name="experience" onChange={handleChange} value={userData.experience}/>

                        </div>

                    </div>

                </div>

                <button className='btn btn-primary OrganiserEditProfile-body-button' type='button' onClick={handleSubmit}>Update</button>

            </div>

        </div>

    )

}

export default OrganiserEditProfile
