import React, { useEffect, useState } from 'react';
import './TeamCoachAddTeamMembers.css';
import img from "../../Assets/Back Button.svg";
import tempimg from '../../Assets/image 42.png';
import img2 from '../../Assets/circum_edit.svg';
import img3 from '../../Assets/ri_open-arm-fill.svg';
import img4 from '../../Assets/solar_phone-bold-duotone.svg';
import img5 from '../../Assets/material-symbols_mail-outline.jpg';
import img6 from '../../Assets/majesticons_pin-line.jpg';
import img7 from '../../Assets/ep_place.jpg';
import img9 from '../../Assets/carbon_location-filled.jpg';
import img10 from '../../Assets/mdi_city.jpg';
import img12 from '../../Assets/gg_list.jpg';
import img15 from '../../Assets/subway_world-1.jpg';
import { Link, useNavigate } from 'react-router-dom';
import axiosMultipartInstance from '../Constant/multiPart';
import axiosInstance from '../Constant/BaseURL';
import toast from 'react-hot-toast';

const TeamCoachAddTeamMembers = () => {
    const id = localStorage.getItem('tcId');
    const [category, setCategory] = useState('');
    const [data, setData] = useState({
        name: '',
        pincode: '',
        state: 'Kerala',
        contact: '',
        address: '',
        city: '',
        email: '',
        category: '',
        photo:null
    });
    const [errors, setErrors] = useState({
        name: '',
        pincode: '',
        state: '',
        contact: '',
        address: '',
        city: '',
        email: '',
        photo:''
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
            const res = await axiosInstance.post(`viewTeamCoachById/${id}`);
            const fetchedCategory = res.data.data.category;
            setCategory(fetchedCategory);
            setData(prevData => ({ ...prevData, category: fetchedCategory }));
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getData();
    }, [id]);

    const handleChange = (event) => {
        const { name, value, files, type } = event.target;
         {
            setData(prevData => ({ ...prevData, [name]: value }));
        }
        setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    };

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
                
                const res = await axiosMultipartInstance.post(`registerTeamMember/${id}`, data);
                console.log(res);
                if (res.data.status === 200) {
                    toast.success("Member added Successfully");
                    navigate('/TeamCoachHomePage');
                }
                    else{
                        toast.error(res.data.msg)
                    }
                
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='container TeamCoachAddTeamMembers-container'>

                    <div className='row TeamCoachAddTeamMembers-headercontainer'>
                        <div className='col TeamCoachAddTeamMembers-headercontainer-container-1'>
                            <Link to='/TeamCoachHomePage'><button className='TeamCoachAddTeamMembers-headercontainer-BackButton'><img src={img} alt=' ' /></button></Link>
                            <h1 className='TeamCoachAddTeamMembers-headercontainer-h1'>Add Team Members</h1>
                        </div>
                        <div className='col TeamCoachAddTeamMembers-headercontainer-container-2'>
                        <img src={imagePreview} alt=''  name="photo"
                        className='OrganiserEditProfile-headercontainer-container-2-profilepicture'
                        style={{  height: '100%',width:'100%', objectFit: 'cover' }}

                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = tempimg;
                           
                        }} />                            <input type='file' className='TeamCoachAddTeamMembers-headercontainer-container-2-editimgbutton'  onChange={handleImageChange}/>
                            <img src={img2} alt='' className='TeamCoachAddTeamMembers-headercontainer-container-2-editimg-icon' />
                        </div>
                    </div>

                    <div className='row TeamCoachAddTeamMembers-body'>
                        <div className='col-lg-6 row TeamCoachAddTeamMembers-body-left'>
                            <div className='col row TeamCoachAddTeamMembers-body-common'>
                                <div className='col TeamCoachAddTeamMembers-body-common-img-contain'>
                                    <img src={img3} alt=' ' className='TeamCoachAddTeamMembers-body-common-img' />
                                    <label className='TeamCoachAddTeamMembers-body-common-label'>Name</label>
                                </div>
                                <input type='text' className='col TeamCoachAddTeamMembers-body-input' placeholder='Enter Name' name="name"
                                    value={data.name}
                                    onChange={handleChange} />
                                {errors.name && <div className="text-danger TeamCoachAddTeamMembers-validation">{errors.name}</div>}
                            </div>

                            <div className='col row TeamCoachAddTeamMembers-body-common'>
                                <div className='col TeamCoachAddTeamMembers-body-common-img-contain'>
                                    <img src={img4} alt=' ' className='TeamCoachAddTeamMembers-body-common-img' />
                                    <label className='TeamCoachAddTeamMembers-body-common-label'>Contact Number</label>
                                </div>
                                <input type='text' className='col TeamCoachAddTeamMembers-body-input' placeholder='Enter Contact Number' name="contact"
                                    value={data.contact}
                                    onChange={handleChange} />
                                {errors.contact && <div className="text-danger TeamCoachAddTeamMembers-validation">{errors.contact}</div>}
                            </div>

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

                            <div className='col row TeamCoachAddTeamMembers-body-common'>
                                <div className='col TeamCoachAddTeamMembers-body-common-img-contain'>
                                    <img src={img6} alt=' ' className='TeamCoachAddTeamMembers-body-common-img' />
                                    <label className='TeamCoachAddTeamMembers-body-common-label'>Pincode</label>
                                </div>
                                <input type='text' className='col TeamCoachAddTeamMembers-body-input' placeholder='Enter Pincode' name="pincode"
                                    value={data.pincode}
                                    onChange={handleChange} />
                                {errors.pincode && <div className="text-danger TeamCoachAddTeamMembers-validation">{errors.pincode}</div>}
                            </div>
                        </div>

                        <div className='col-lg-6 row TeamCoachAddTeamMembers-body-right'>
                            <div className='col row TeamCoachAddTeamMembers-body-common'>
                                <div className='col TeamCoachAddTeamMembers-body-common-img-contain'>
                                    <img src={img12} alt=' ' className='TeamCoachAddTeamMembers-body-common-img' />
                                    <label className='TeamCoachAddTeamMembers-body-common-label'>Category</label>
                                </div>
                                <input type='text' className='col TeamCoachAddTeamMembers-body-input' disabled name="category"
                                    value={category}
                                    onChange={handleChange} />
                            </div>

                            <div className='col row TeamCoachAddTeamMembers-body-common'>
                                <div className='col TeamCoachAddTeamMembers-body-common-img-contain'>
                                    <img src={img7} alt=' ' className='TeamCoachAddTeamMembers-body-common-img' />
                                    <label className='TeamCoachAddTeamMembers-body-common-label'>Address</label>
                                </div>
                                <input type='text' className='col TeamCoachAddTeamMembers-body-input' placeholder='Enter Address' name="address"
                                    value={data.address}
                                    onChange={handleChange} />
                                {errors.address && <div className="text-danger TeamCoachAddTeamMembers-validation">{errors.address}</div>}
                            </div>

                            <div className='col row TeamCoachAddTeamMembers-body-common'>
                                <div className='col TeamCoachAddTeamMembers-body-common-img-contain'>
                                    <img src={img9} alt=' ' className='TeamCoachAddTeamMembers-body-common-img' />
                                    <label className='TeamCoachAddTeamMembers-body-common-label'>City</label>
                                </div>
                                <input type='text' className='col TeamCoachAddTeamMembers-body-input' placeholder='Enter City' name="city"
                                    value={data.city}
                                    onChange={handleChange} />
                                {errors.city && <div className="text-danger TeamCoachAddTeamMembers-validation">{errors.city}</div>}
                            </div>

                            <div className='col row TeamCoachAddTeamMembers-body-common'>
                                <div className='col TeamCoachAddTeamMembers-body-common-img-contain'>
                                    <img src={img10} alt=' ' className='TeamCoachAddTeamMembers-body-common-img' />
                                    <label className='TeamCoachAddTeamMembers-body-common-label'>State</label>
                                </div>
                                <input type='text' className='col TeamCoachAddTeamMembers-body-input' name="state"
                                    value={data.state}
                                    onChange={handleChange} />
                                {errors.state && <div className="text-danger TeamCoachAddTeamMembers-validation">{errors.state}</div>}
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col TeamCoachAddTeamMembers-submit-container'>
                            <button type='submit' className='TeamCoachAddTeamMembers-submit-button btn btn-secondary' onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default TeamCoachAddTeamMembers;
