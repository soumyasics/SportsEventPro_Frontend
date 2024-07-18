import React, { useEffect, useState } from 'react'
import './TeamCoachEditTeamMembers.css'
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
import { useParams } from 'react-router-dom'

import { Link, useNavigate } from 'react-router-dom';
import axiosMultipartInstance from '../Constant/multiPart';
import axiosInstance from '../Constant/BaseURL';

function TeamCoachEditTeamMembers() {
    const {id}=useParams()

    const url = axiosInstance.defaults.url;

    const [data, setData] = useState({
        name: '',
        pincode: '',
        state: 'Kerala',
        contact: '',
        address: '',
        city: '',
        email: '',
        category: '',
        photo:{filename:''}
    });
    const [errors, setErrors] = useState({
        name: '',
        pincode: '',
        state: '',
        contact: '',
        address: '',
        city: '',
        email: '',
      
    });
    const navigate = useNavigate();
    const [imagePreview, setImagePreview] = useState(tempimg);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
         data.photo=file
         console.log(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const getData = async () => {
        try {
            const res = await axiosInstance.post(`viewTeamMemberById/${id}`);
            // const fetchedCategory = res.data.data.category;
            // setCategory(fetchedCategory);
            setData(res.data.data);
            setImagePreview(res.data.data.photo ? `${url}/${res.data.data.photo.filename}` : tempimg);

            console.log(res.data.data);

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getData();
        console.log(data);
    }, [id]);

    const validateContact = (fieldName, value) => {
        if (!value.trim()) {
            return `${fieldName} is required`;
        } else if (value.length !== 10) {
            return 'Please enter a valid Contact Number';
        }
        return '';
    };

    const validatePincode = (fieldName, value) => {
        if (!value.trim()) {
            return `${fieldName} is required`;
        } else if (value.length !== 6) {
            return 'Please enter a valid Pincode';
        }
        return '';
    };

    const validateField = (fieldName, value) => {
        if (!value || !value.trim()) {
            return `${fieldName} is required`;
        }
        if (fieldName === "Email" && !value.endsWith("@gmail.com")) {
            return "Email must be a valid Email address";
        }
        return '';
    };


    const handleChange = (event) => {
        const { name, value, files, type } = event.target;
         {
            setData(prevData => ({ ...prevData, [name]: value }));
        }
        setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        let errors = {};
        let formIsValid = true;

        errors.email = validateField('Email', data.email);
        errors.name = validateField('Name', data.name);
        errors.contact = validateContact('Contact number', data.contact);
        errors.pincode = validatePincode('Pincode', data.pincode);
        errors.state = validateField('State', data.state);
        errors.address = validateField('Address', data.address);
        errors.city = validateField('City', data.city);

        setErrors(errors);

        formIsValid = Object.keys(errors).every(key => !errors[key]);
console.log("err",formIsValid);
        if (formIsValid) {
            try {
                console.log(data);
                const res = await axiosInstance.post(`editTeamMemberById/${id}`, data);
                console.log(res);
                if (res.data.status === 200) {
                    alert("Profile Updated Successfully");
                    navigate('/TeamCoachHomePage');
                }
                    else{
                        alert(res.data.msg)
                    }
                
            } catch (err) {
                console.log(err);
            }
        }
    };
    const handleDeletion = async (event) => {
      
            try {
                console.log(data);
                const res = await axiosInstance.post(`deleteTeamMemberById/${id}`, data);
                console.log(res);
                if (res.data.status === 200) {
                    alert("Profile removed Successfully");
                    navigate('/TeamCoachHomePage');
                }
                    else{
                        alert(res.data.msg)
                    }
                
            } catch (err) {
                console.log(err);
            }
        
    };
  return (
    <div>

    <div className='container TeamCoachEditTeamMembers-container'>

        {/* div for the header containing back button, "Edit Profile" text and profile image */}
        <div className='row TeamCoachEditTeamMembers-headercontainer'>

            {/* seperated div for backbutton and text */}
            <div className='col  TeamCoachEditTeamMembers-headercontainer-container-1'>

            <Link to='/TeamCoachHomePage'> <button className='TeamCoachEditTeamMembers-headercontainer-BackButton'><img src={img} alt=' ' /></button></Link>
                <h1 className='TeamCoachEditTeamMembers-headercontainer-h1'>Edit Team Members</h1>

            </div>

            {/* seperated div for the profile picture image */}
            {/* <div className='col TeamCoachEditTeamMembers-headercontainer-container-2'>

                <img src={data.photo? `${url}/${data.photo.filename}` : tempimg}
                 alt='' className='TeamCoachEditTeamMembers-headercontainer-container-2-profilepicture'
                 style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                 />


                <input type='file' onChange={handleImageChange} className='TeamCoachEditTeamMembers-headercontainer-container-2-editimgbutton'/>
                    <img src={img2} alt='' className='TeamCoachEditTeamMembers-headercontainer-container-2-editimg-icon' />



            </div> */}

        </div>

        <div className='row TeamCoachEditTeamMembers-body'>

            <div className='col-lg-6 row TeamCoachEditTeamMembers-body-left'>

                {/* Name */}
                <div className='col row TeamCoachEditTeamMembers-body-common'>

                    <div className='col TeamCoachEditTeamMembers-body-common-img-contain'>
                        <img src={img3} alt=' ' className='TeamCoachEditTeamMembers-body-common-img' />
                        <label className='TeamCoachEditTeamMembers-body-common-label'>Name</label>
                    </div>

                    <input type='text' className='col TeamCoachEditTeamMembers-body-input' name="name" value={data.name} onChange={handleChange} />

                </div>

                {/* Contact number */}
                <div className='col row TeamCoachEditTeamMembers-body-common'>

                    <div className='col TeamCoachEditTeamMembers-body-common-img-contain'>
                        <img src={img4} alt=' ' className='TeamCoachEditTeamMembers-body-common-img' />
                        <label className='TeamCoachEditTeamMembers-body-common-label'>Contact Number</label>
                    </div>

                    <input type='text' className='col TeamCoachEditTeamMembers-body-input' name="contact" value={data.contact} onChange={handleChange} />

                </div>

                {/* Email Id */}
                <div className='col row TeamCoachEditTeamMembers-body-common'>

                    <div className='col TeamCoachEditTeamMembers-body-common-img-contain'>
                        <img src={img5} alt=' ' className='TeamCoachEditTeamMembers-body-common-img' />
                        <label className='TeamCoachEditTeamMembers-body-common-label'>Email ID</label>
                    </div>

                    <input type='text' className='col TeamCoachEditTeamMembers-body-input' name="email" value={data.email} onChange={handleChange} />

                </div>
                



                

                {/* Pincode */}
                <div className='col row TeamCoachEditTeamMembers-body-common'>

                    <div className=' col TeamCoachEditTeamMembers-body-common-img-contain'>
                        <img src={img6} alt=' ' className='TeamCoachEditTeamMembers-body-common-img' />
                        <label className='TeamCoachEditTeamMembers-body-common-label'>Pincode</label>
                    </div>

                    <input type='text' className=' col TeamCoachEditTeamMembers-body-input ' name="pincode"  value={data.pincode} onChange={handleChange}/>

                </div>

             
                {/* <div className='col row TeamCoachEditTeamMembers-body-common'>

                    <div className='col TeamCoachEditTeamMembers-body-common-img-contain'>
                        <img src={img15} alt=' ' className='TeamCoachEditTeamMembers-body-common-img' />
                        <label className='TeamCoachEditTeamMembers-body-common-label'>Country</label>
                    </div>

                   

                </div> */}






            </div>

            <div className=' col-lg-6 row TeamCoachEditTeamMembers-body-right'>

                {/* Catogory */}
                <div className='col row TeamCoachEditTeamMembers-body-common'>

                    <div className='col TeamCoachEditTeamMembers-body-common-img-contain'>
                        <img src={img12} alt=' ' className='TeamCoachEditTeamMembers-body-common-img' />
                        <label className='TeamCoachEditTeamMembers-body-common-label'> Catogory</label>
                    </div>

                    {/* <select className='col TeamCoachEditTeamMembers-body-input-state' aria-label="Default select example">

                        <option className='OrganiserRegistration-Content-Input-Select-Option' selected name="state" value="Kerala">Cricket</option>
                        <option value="Goa">Football</option>
                        <option value="Tamil Nadu">Basket Ball</option>
                        <option value="Karnataka">Chess</option>
                        <option value="Maharashtra">Hockey</option>

                    </select> */}

<input type='text' className=' col TeamCoachEditTeamMembers-body-input '  value={data.category} />


                </div>

                {/* Address */}
                <div className='col row TeamCoachEditTeamMembers-body-common'>

                    <div className='col TeamCoachEditTeamMembers-body-common-img-contain'>
                        <img src={img9} alt=' ' className='TeamCoachEditTeamMembers-body-common-img' />
                        <label className='TeamCoachEditTeamMembers-body-common-label'>Address</label>
                    </div>

                    <input type='text' className='col TeamCoachEditTeamMembers-body-input'name="address" value={data.address} onChange={handleChange} />

                </div>

                {/* City */}
                <div className='col row TeamCoachEditTeamMembers-body-common'>

                    <div className='col TeamCoachEditTeamMembers-body-common-img-contain'>
                        <img src={img10} alt=' ' className='TeamCoachEditTeamMembers-body-common-img' />
                        <label className='TeamCoachEditTeamMembers-body-common-label'>City</label>
                    </div>

                    <input type='text' className='col TeamCoachEditTeamMembers-body-input' name="city" value={data.city} onChange={handleChange}/>

                </div>

                {/* State */}
                <div className='col row TeamCoachEditTeamMembers-body-common'>

                    <div className='col TeamCoachEditTeamMembers-body-common-img-contain'>
                        <img src={img7} alt=' ' className='TeamCoachEditTeamMembers-body-common-img' />
                        <label className='TeamCoachEditTeamMembers-body-common-label'> State</label>
                    </div>

                    <select className='col TeamCoachEditTeamMembers-body-input-state' aria-label="Default select example">

                        <option className='OrganiserRegistration-Content-Input-Select-Option' selected name="state" value="Kerala">Kerala</option>
                        <option value="Goa">Goa</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Karnataka">Hariyana</option>
                        <option value="Maharashtra">J&K</option>

                    </select>

                </div>
            </div>

        </div></div>
        <div className='container'>
<div class="row">
    <div class="col">
        <button className='btn btn-primary TeamCoachEditTeamMembers-body-button' onClick={handleSubmit}>Update</button>
        </div>  <div class="col"> <button className='btn btn-danger TeamCoachEditTeamMembers-body-button2' onClick={handleDeletion}>Delete</button>
        </div></div></div>
    </div>



)

}

export default TeamCoachEditTeamMembers