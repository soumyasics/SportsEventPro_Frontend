import React, { useEffect, useState } from 'react';
import './TeamCoachEditTeamMembers.css';
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
import { useParams, Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../Constant/BaseURL';
import toast from 'react-hot-toast';

function TeamCoachEditTeamMembers() {
    const { id } = useParams();
    const url = axiosInstance.defaults.url;
    const navigate = useNavigate();

    const [data, setData] = useState({
        name: '',
        pincode: '',
        state: 'Kerala',
        contact: '',
        address: '',
        city: '',
        email: '',
        category: '',
        photo: { filename: '' }
    });

    const [errors, setErrors] = useState({
        name: '',
        pincode: '',
        state: '',
        contact: '',
        address: '',
        city: '',
        email: '',
        photo: ''
    });

    const [imagePreview, setImagePreview] = useState(tempimg);

    useEffect(() => {
        axiosInstance.post(`viewTeamMemberById/${id}`).then(res => {
            setData(res.data.data);
            setImagePreview(res.data.data.photo ? `${url}/${res.data.data.photo.filename}` : tempimg);
        }).catch(err => {
            console.error(err);
        });
    }, [id]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData(prevData => ({
                ...prevData,
                photo: file
            }));
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const validateField = (fieldName, value) => {
        if (!value || !value.trim()) {
            return `${fieldName} is required`;
        }
        if (fieldName === 'email' && !value.endsWith("@gmail.com")) {
            return "Email must be a valid Email address";
        }
        return '';
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: ''
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        let errors = {};
        let formIsValid = true;

        errors.email = validateField('email', data.email);
        errors.name = validateField('name', data.name);
        errors.contact = validateField('contact', data.contact);
        errors.pincode = validateField('pincode', data.pincode);
        errors.state = validateField('state', data.state);
        errors.address = validateField('address', data.address);
        errors.city = validateField('city', data.city);

        setErrors(errors);
        formIsValid = Object.keys(errors).every(key => !errors[key]);

        if (formIsValid) {
            try {
                const res = await axiosInstance.post(`editTeamMemberById/${id}`, data);
                if (res.data.status === 200) {
                    toast.success(res.data.msg);
                    navigate('/editTeamMembersById');
                } else {
                    toast.error(res.data.msg);
                }
            } catch (error) {
                console.error(error);
            }
        }
    };

    const handleDeletion = async () => {
        try {
            const res = await axiosInstance.post(`deleteTeamMemberById/${id}`);
            if (res.data.status === 200) {
                toast.success("Profile removed Successfully");
                navigate('/TeamCoachHomePage');
            } else {
                toast.error(res.data.msg);
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <div className='container TeamCoachEditTeamMembers-container'>
                <div className='row TeamCoachEditTeamMembers-headercontainer'>
                    <div className='col TeamCoachEditTeamMembers-headercontainer-container-1'>
                        <Link to='/TeamCoachHomePage'>
                            <button className='TeamCoachEditTeamMembers-headercontainer-BackButton'>
                                <img src={img} alt=' ' />
                            </button>
                        </Link>
                        <h1 className='TeamCoachEditTeamMembers-headercontainer-h1'>Edit Team Members</h1>
                    </div>
                    <div className='col TeamCoachEditTeamMembers-headercontainer-container-2'>
                        <img
                            src={imagePreview}
                            alt=''
                            className='TeamCoachEditTeamMembers-headercontainer-container-2-profilepicture'
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = tempimg;
                            }}
                        />
                        {imagePreview && (
                            <input type='file' onChange={handleImageChange} className='TeamCoachEditTeamMembers-headercontainer-container-2-editimgbutton' />
                        )}
                        <img src={img2} alt='' className='TeamCoachEditTeamMembers-headercontainer-container-2-editimg-icon' />
                    </div>
                </div>
                <div className='row TeamCoachEditTeamMembers-body'>
                    <div className='col-lg-6 row TeamCoachEditTeamMembers-body-left'>
                        <div className='col row TeamCoachEditTeamMembers-body-common'>
                            <div className='col TeamCoachEditTeamMembers-body-common-img-contain'>
                                <img src={img3} alt=' ' className='TeamCoachEditTeamMembers-body-common-img' />
                                <label className='TeamCoachEditTeamMembers-body-common-label'>Name</label>
                            </div>
                            <input type='text' className='col TeamCoachEditTeamMembers-body-input' name="name" value={data.name} onChange={handleChange} />
                        </div>
                        <div className='col row TeamCoachEditTeamMembers-body-common'>
                            <div className='col TeamCoachEditTeamMembers-body-common-img-contain'>
                                <img src={img4} alt=' ' className='TeamCoachEditTeamMembers-body-common-img' />
                                <label className='TeamCoachEditTeamMembers-body-common-label'>Contact Number</label>
                            </div>
                            <input type='text' className='col TeamCoachEditTeamMembers-body-input' name="contact" value={data.contact} onChange={handleChange} />
                        </div>
                        <div className='col row TeamCoachEditTeamMembers-body-common'>
                            <div className='col TeamCoachEditTeamMembers-body-common-img-contain'>
                                <img src={img5} alt=' ' className='TeamCoachEditTeamMembers-body-common-img' />
                                <label className='TeamCoachEditTeamMembers-body-common-label'>Email ID</label>
                            </div>
                            <input type='text' className='col TeamCoachEditTeamMembers-body-input' name="email" value={data.email} onChange={handleChange} />
                        </div>
                        <div className='col row TeamCoachEditTeamMembers-body-common'>
                            <div className='col TeamCoachEditTeamMembers-body-common-img-contain'>
                                <img src={img6} alt=' ' className='TeamCoachEditTeamMembers-body-common-img' />
                                <label className='TeamCoachEditTeamMembers-body-common-label'>Pincode</label>
                            </div>
                            <input type='text' className='col TeamCoachEditTeamMembers-body-input' name="pincode" value={data.pincode} onChange={handleChange} />
                        </div>
                    </div>
                    <div className='col-lg-6 row TeamCoachEditTeamMembers-body-right'>
                        <div className='col row TeamCoachEditTeamMembers-body-common'>
                            <div className='col TeamCoachEditTeamMembers-body-common-img-contain'>
                                <img src={img12} alt=' ' className='TeamCoachEditTeamMembers-body-common-img' />
                                <label className='TeamCoachEditTeamMembers-body-common-label'>Category</label>
                            </div>
                            <input type='text' className='col TeamCoachEditTeamMembers-body-input' value={data.category} disabled />
                        </div>
                        <div className='col row TeamCoachEditTeamMembers-body-common'>
                            <div className='col TeamCoachEditTeamMembers-body-common-img-contain'>
                                <img src={img9} alt=' ' className='TeamCoachEditTeamMembers-body-common-img' />
                                <label className='TeamCoachEditTeamMembers-body-common-label'>Address</label>
                            </div>
                            <input type='text' className='col TeamCoachEditTeamMembers-body-input' name="address" value={data.address} onChange={handleChange} />
                        </div>
                        <div className='col row TeamCoachEditTeamMembers-body-common'>
                            <div className='col TeamCoachEditTeamMembers-body-common-img-contain'>
                                <img src={img10} alt=' ' className='TeamCoachEditTeamMembers-body-common-img' />
                                <label className='TeamCoachEditTeamMembers-body-common-label'>City</label>
                            </div>
                            <input type='text' className='col TeamCoachEditTeamMembers-body-input' name="city" value={data.city} onChange={handleChange} />
                        </div>
                        <div className='col row TeamCoachEditTeamMembers-body-common'>
                            <div className='col TeamCoachEditTeamMembers-body-common-img-contain'>
                                <img src={img7} alt=' ' className='TeamCoachEditTeamMembers-body-common-img' />
                                <label className='TeamCoachEditTeamMembers-body-common-label'>State</label>
                            </div>
                            <select className='col TeamCoachEditTeamMembers-body-input-state' name="state" value={data.state} onChange={handleChange}>
                                <option value="Kerala">Kerala</option>
                                <option value="Goa">Goa</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Haryana">Haryana</option>
                                <option value="J&K">J&K</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <button className='btn btn-primary TeamCoachEditTeamMembers-body-button' onClick={handleSubmit}>Update</button>
                        </div>
                        <div className='col'>
                            <button className='btn btn-danger TeamCoachEditTeamMembers-body-button2' onClick={handleDeletion}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamCoachEditTeamMembers;
