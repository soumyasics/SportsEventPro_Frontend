import React, { useState } from 'react'
import './TeamCoachAddTeamMembers.css'
import img from "../../Assets/Back Button.svg"
import tempimg from '../../Assets/image 42.png'
import img2 from '../../Assets/circum_edit.svg'
import img3 from '../../Assets/ri_open-arm-fill.svg'
import img4 from '../../Assets/solar_phone-bold-duotone.svg'
import img5 from '../../Assets/material-symbols_mail-outline.jpg'
import img6 from '../../Assets/majesticons_pin-line.jpg'
import img7 from '../../Assets/ep_place.jpg'
import img9 from '../../Assets/carbon_location-filled.jpg'
import img10 from '../../Assets/mdi_city.jpg'
import img12 from '../../Assets/gg_list.jpg'
import img15 from '../../Assets/subway_world-1.jpg'


function TeamCoachAddTeamMembers() {

    const [data, setData] = useState({
        name: '',
        pincode: '',
        state: '',
        contactnumber: '',
        address: '',
        city: '',
        country: '',
        email: '',
        category: '',

    })
    const [selectedCategory, setSelectedCategory] = useState('');

    const [errors, setErrors] = useState({

        name: '',
        pincode: '',
        state: '',
        contactnumber: '',
        address: '',
        city: '',
        country: '',
        email: '',
        category: '',

    })

    let formIsValid;
    const handleChange = (event) => {
        console.log("ty", event.target.type);
        const { name, value, files } = event.target;
        if (files) {
            setData(prevData => ({
                ...prevData,
                [name]: files[0]
            }));


        }
        else if (event.target.type == "radio") {
            setData(prevData => ({
                ...prevData,
                [name]: value
            }));
        }

        else {
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

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(data);

        let errors = {};
        formIsValid = true;

        errors.email = validateField('Email', data.email);
        errors.name = validateField('Name', data.name);
        errors.contactnumber = validateContact('Contact number', data.contactnumber)
        errors.pincode = validatePincode('Pincode', data.pincode);
        errors.state = validateField('States', data.state)
        errors.address = validateField('Address', data.address);
        errors.city = validateField('City', data.city);
        errors.country = validateField('Country', data.country);
        errors.category = validateField('category', data.category);


 setErrors(errors);

        if (formIsValid) {
            console.log("data", data);

        }
    }




  return (
    <div>
<form onSubmit={handleSubmit}>
    <div className='container TeamCoachAddTeamMembers-container'>

        {/* div for the header containing back button, "Edit Profile" text and profile image */}
        <div className='row TeamCoachAddTeamMembers-headercontainer'>

            {/* seperated div for backbutton and text */}
            <div className='col  TeamCoachAddTeamMembers-headercontainer-container-1'>

                <button className='TeamCoachAddTeamMembers-headercontainer-BackButton'><img src={img} alt=' ' /></button>
                <h1 className='TeamCoachAddTeamMembers-headercontainer-h1'>Add Team Members</h1>

            </div>

            {/* seperated div for the profile picture image */}
            <div className='col TeamCoachAddTeamMembers-headercontainer-container-2'>

                <img src={tempimg} alt='' className='TeamCoachAddTeamMembers-headercontainer-container-2-profilepicture' />
                {/* ^ put organiser profile pic in src */}


                <input type='file' className='TeamCoachAddTeamMembers-headercontainer-container-2-editimgbutton'/>
                    <img src={img2} alt='' className='TeamCoachAddTeamMembers-headercontainer-container-2-editimg-icon' />
               {/* this is edit profile pic button. */}



            </div>

        </div>

        <div className='row TeamCoachAddTeamMembers-body'>

            <div className='col-lg-6 row TeamCoachAddTeamMembers-body-left'>

                {/* Name */}
                <div className='col row TeamCoachAddTeamMembers-body-common'>

                    <div className='col TeamCoachAddTeamMembers-body-common-img-contain'>
                        <img src={img3} alt=' ' className='TeamCoachAddTeamMembers-body-common-img' />
                        <label className='TeamCoachAddTeamMembers-body-common-label'>Name</label>
                    </div>

                    <input type='text' className='col TeamCoachAddTeamMembers-body-input'  placeholder='Enter Name' name="name"
                                    value={data.name}
                                    onChange={handleChange}/>


                    {errors.name && <div className="text-danger TeamCoachAddTeamMembers-validation">{errors.name}</div>}

                </div>

                {/* Contact number */}
                <div className='col row TeamCoachAddTeamMembers-body-common'>

                    <div className='col TeamCoachAddTeamMembers-body-common-img-contain'>
                        <img src={img4} alt=' ' className='TeamCoachAddTeamMembers-body-common-img' />
                        <label className='TeamCoachAddTeamMembers-body-common-label'>Contact Number</label>
                    </div>

                    <input type='text' className='col TeamCoachAddTeamMembers-body-input' placeholder='Enter Contact Number' name="contactnumber"
                                    value={data.contactnumber}
                                    onChange={handleChange} />
                                                                    {errors.contactnumber && <div className="text-danger TeamCoachAddTeamMembers-validation">{errors.contactnumber}</div>}


                </div>

                {/* Email Id */}
                <div className='col row TeamCoachAddTeamMembers-body-common'>

                    <div className='col TeamCoachAddTeamMembers-body-common-img-contain'>
                        <img src={img5} alt=' ' className='TeamCoachAddTeamMembers-body-common-img' />
                        <label className='TeamCoachAddTeamMembers-body-common-label'>Email ID</label>
                    </div>

                    <input type='text' className='col TeamCoachAddTeamMembers-body-input' placeholder='Enter E-mail id' name="email"
                                    value={data.email}
                                    onChange={handleChange} />
                                {errors.email && <div className="text-danger TeamCoachAddTeamMembers-validation">{errors.email}</div>}

                </div>
                



                

                {/* Pincode */}
                <div className='col row TeamCoachAddTeamMembers-body-common'>

                    <div className=' col TeamCoachAddTeamMembers-body-common-img-contain'>
                        <img src={img6} alt=' ' className='TeamCoachAddTeamMembers-body-common-img' />
                        <label className='TeamCoachAddTeamMembers-body-common-label'>Pincode</label>
                    </div>

                    <input type='text' className=' col TeamCoachAddTeamMembers-body-input 'placeholder='Enter Pincode' name="pincode"
                                    value={data.pincode}
                                    onChange={handleChange} />
                                {errors.pincode && <div className="text-danger TeamCoachAddTeamMembers-validation">{errors.pincode}</div>}

                </div>

                {/* Country */}
                <div className='col row TeamCoachAddTeamMembers-body-common'>

                    <div className='col TeamCoachAddTeamMembers-body-common-img-contain'>
                        <img src={img15} alt=' ' className='TeamCoachAddTeamMembers-body-common-img' />
                        <label className='TeamCoachAddTeamMembers-body-common-label'>Country</label>
                    </div>

                    <select className='col TeamCoachAddTeamMembers-body-input-state' aria-label="Default select example">

                        <option className='OrganiserRegistration-Content-Input-Select-Option' selected name="country"  value={data.country} onChange={handleChange}>India</option>
                        <option value="Goa" onChange={handleChange}>Uk</option>
                        <option value="Tamil Nadu" onChange={handleChange}>USA</option>
                        <option value="Karnataka" onChange={handleChange}>JAPAN</option>
                        <option value="Maharashtra" onChange={handleChange}>BRAZIL</option>

                    </select>

                </div>






            </div>

            <div className=' col-lg-6 row TeamCoachAddTeamMembers-body-right'>

                {/* Catogory */}
                <div className='col row TeamCoachAddTeamMembers-body-common'>

                    <div className='col TeamCoachAddTeamMembers-body-common-img-contain'>
                        <img src={img12} alt=' ' className='TeamCoachAddTeamMembers-body-common-img' />
                        <label className='TeamCoachAddTeamMembers-body-common-label'> Catogory</label>
                    </div>

                    <select className='col TeamCoachAddTeamMembers-body-input-state' aria-label="Default select example">

                        <option className='OrganiserRegistration-Content-Input-Select-Option' selected name="category"  value={data.category} onChange={handleChange}>Cricket</option>
                        <option value="Goa" >Football</option>
                        <option value="Tamil Nadu" >Basket Ball</option>
                        <option value="Karnataka" >Chess</option>
                        <option value="Maharashtra" >Hockey</option>

                    </select>

                </div>

                {/* Address */}
                <div className='col row TeamCoachAddTeamMembers-body-common'>

                    <div className='col TeamCoachAddTeamMembers-body-common-img-contain'>
                        <img src={img9} alt=' ' className='TeamCoachAddTeamMembers-body-common-img' />
                        <label className='TeamCoachAddTeamMembers-body-common-label'>Address</label>
                    </div>

                    <input type='text' className='col TeamCoachAddTeamMembers-body-input' placeholder='Enter Address'  name="address"
                                    value={data.address}
                                    onChange={handleChange} />
                                {errors.address && <div className="text-danger TeamCoachAddTeamMembers-validation">{errors.address}</div>}

                </div>

                {/* City */}
                <div className='col row TeamCoachAddTeamMembers-body-common'>

                    <div className='col TeamCoachAddTeamMembers-body-common-img-contain'>
                        <img src={img10} alt=' ' className='TeamCoachAddTeamMembers-body-common-img' />
                        <label className='TeamCoachAddTeamMembers-body-common-label'>City</label>
                    </div>

                    <input type='text' className='col TeamCoachAddTeamMembers-body-input' placeholder='Enter Your City'  name="city"
                                    value={data.city}
                                    onChange={handleChange} />
                                {errors.city && <div className="text-danger TeamCoachAddTeamMembers-validation">{errors.city}</div>}

                </div>

                {/* State */}
                <div className='col row TeamCoachAddTeamMembers-body-common'>

                    <div className='col TeamCoachAddTeamMembers-body-common-img-contain'>
                        <img src={img7} alt=' ' className='TeamCoachAddTeamMembers-body-common-img' />
                        <label className='TeamCoachAddTeamMembers-body-common-label'> State</label>
                    </div>

                    <select className='col TeamCoachAddTeamMembers-body-input-state' aria-label="Default select example">

                        <option className='OrganiserRegistration-Content-Input-Select-Option' selected name="state" value={data.state}  onChange={handleChange}>Kerala</option>
                        <option value="Goa"  >Goa</option>
                        <option value="Tamil Nadu" >Tamil Nadu</option>
                        <option value="Karnataka"  >Hariyana</option>
                        <option value="Maharashtra"  >J&K</option>

                    </select>

                </div>
            </div>

        </div>

        <button className='btn btn-primary TeamCoachAddTeamMembers-body-button' type='submit'>Add</button>

    </div>
    </form>
</div>

)

}

export default TeamCoachAddTeamMembers