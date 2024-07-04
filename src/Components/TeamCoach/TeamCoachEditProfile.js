import React, { useEffect, useState } from 'react';
import "../../Components/TeamCoach/TeamCoachEditProfile.css";
import img1 from '../../Assets/solar_phone-bold-duotone.jpg';
import img2 from '../../Assets/ri_open-arm-fill.jpg';
import img3 from '../../Assets/mdi_city.jpg';
import img4 from '../../Assets/material-symbols_mail-outline.jpg';
import img5 from '../../Assets/majesticons_pin-line.jpg';
import img6 from '../../Assets/gg_list.jpg';
import img7 from '../../Assets/frame.jpg';
import img8 from '../../Assets/ep_place.jpg';
import img9 from '../../Assets/arcticons_asr-licence.jpg';
import img10 from '../../Assets/emojione_flag-for-india.jpg';
import img11 from '../../Assets/carbon_location-filled.jpg';
import img12 from '../../Assets/arcticons_team-fight-tactics.jpg';
import img13 from "../../Assets/circum_edit.jpg";
import axiosInstance from '../Constant/BaseURL';
import { useNavigate } from 'react-router-dom';

const url = axiosInstance.defaults.url;

function TeamCoachEditProfile() {
    const id = localStorage.getItem('tcId');
    const [data, setData] = useState({
        name: '',
        category: '',
        totalteammembers: 0,
        pincode: '',
        state: 'Kerala',
        contact: '',
        certificate: '',
        password: '',
        image: '',
        teamName: '',
        address: '',
        city: '',
        country: 'India',
        email: '',
        experience: '',
        confirmpassword: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        axiosInstance
            .post(`viewTeamCoachById/${id}`)
            .then((res) => {
                console.log(res);
                setData(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleUpdate = () => {
        axiosInstance
            .post(`editTeamCoachById/${id}`, data)
            .then((res) => {
                console.log(res);
                if(res.data.status==200){
                        alert("Profile Updated Successfully");
                        navigate('/TeamCoachHomePage')
                }
            })
            .catch((err) => {
                console.log(err);
            });
        }
    
    return (
        <div>
            <div className='TeamCoachEditProfilemain-1-20'>
                <div className="container text-center">
                    <div className='row'>
                        <div className='col TeamCoachEditProfilediv-1'>
                            <h1 className='TeamCoachEditProfiletext-1'>Coach Details</h1>
                        </div>
                        <div className='col-4 TeamCoachEditProfilediv-2'>
                            <label className='TeamCoachEditProfileimg-1-backend'>
                                <img
                                    src={`${url}/${data?.profilePic?.filename}`}
                                    className="AdminCoachRequest-img"
                                />
                                <button className='TeamCoachEditProfileimgButton'>
                                    <img className='TeamCoachEditProfilebuttonimage' src={img13}></img>
                                </button>
                            </label><br></br>
                            <label className='TeamCoachEditProfileimg-2-backend'></label><br></br>
                        </div>
                    </div>

                    <div className='row TeamCoachEditProfilediv-3 TeamCoachEditProfileimpdiv-style'>
                        <div className='col-4'>
                            <div className='row TeamCoachEditProfilemainrow-1'>
                                <div className='col-2'>
                                    <img className='TeamCoachEditProfilecommon-style-1' src={img1}></img>
                                </div>
                                <div className='col-5'>
                                    <label className='TeamCoachEditProfilelabel'>Contact Number</label>
                                </div>
                                <div className='col-5'>
                                    <input
                                        className='TeamCoachEditProfilelabel-2 TeamCoachEditProfileimg-2-backend'
                                        type='text'
                                        name='contact'
                                        value={data.contact}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='col-4 TeamCoachEditProfilemainrow-right-1'>
                            <div className='row TeamCoachEditProfilemainrow-1'>
                                <div className='col-2'>
                                    <img className='TeamCoachEditProfilecommon-style-1' src={img6}></img>
                                </div>
                                <div className='col-5'>
                                    <label className='TeamCoachEditProfilelabel'>Select Category</label>
                                </div>
                                <div className='col-5'>
                                    <div className="col">
                                        <div className="dropdown dropdowninput">
                                            <div className='TeamCoachEditProfilelabel-2'>
                                                <select className="form-select" aria-label="Default select example" name="category" value={data.category} onChange={handleChange}>
                                                    <option selected value="1"></option>
                                                    <option value="Football">Football</option>
                                                    <option value="Cricket">Cricket</option>
                                                    <option value="">Hockey</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row TeamCoachEditProfilediv-4 TeamCoachEditProfileimpdiv-style'>
                        <div className='col-4'>
                            <div className='row TeamCoachEditProfilemainrow-1'>
                                <div className='col-2'>
                                    <img className='TeamCoachEditProfilecommon-style-1' src={img4}></img>
                                </div>
                                <div className='col-5'>
                                    <label className='TeamCoachEditProfilelabel'>Email id</label>
                                </div>
                                <div className='col-5'>
                                    <input
                                        className='TeamCoachEditProfilelabel-2 TeamCoachEditProfileimg-2-backend'
                                        type='text'
                                        name='email'
                                        value={data.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='col-4 TeamCoachEditProfilemainrow-right-1'>
                            <div className='row TeamCoachEditProfilemainrow-1'>
                                <div className='col-2'>
                                    <img className='TeamCoachEditProfilecommon-style-1' src={img12}></img>
                                </div>
                                <div className='col-5'>
                                    <label className='TeamCoachEditProfilelabel'>Team Name</label>
                                </div>
                                <div className='col-5'>
                                    <input
                                        className='TeamCoachEditProfilelabel-2 TeamCoachEditProfileimg-2-backend'
                                        type='text'
                                        name='teamName'
                                        value={data.teamName}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row TeamCoachEditProfilediv-5 TeamCoachEditProfileimpdiv-style'>
                        <div className='col-4'>
                            <div className='row TeamCoachEditProfilemainrow-1'>
                                <div className='col-2'>
                                    <img className='TeamCoachEditProfilecommon-style-1' src={img7}></img>
                                </div>
                                <div className='col-5'>
                                    <label className='TeamCoachEditProfilelabel'>Total team members</label>
                                </div>
                                <div className='col-5'>
                                    <input
                                        className='TeamCoachEditProfilelabel-2 TeamCoachEditProfileimg-2-backend'
                                        type='text'
                                        name='totalteammembers'
                                        value={data.totalteammembers}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='col-4 TeamCoachEditProfilemainrow-right-1'>
                            <div className='row TeamCoachEditProfilemainrow-1'>
                                <div className='col-2'>
                                    <img className='TeamCoachEditProfilecommon-style-1' src={img11}></img>
                                </div>
                                <div className='col-5'>
                                    <label className='TeamCoachEditProfilelabel'>Address</label>
                                </div>
                                <div className='col-5'>
                                    <input
                                        className='TeamCoachEditProfilelabel-2 TeamCoachEditProfileimg-2-backend'
                                        type='text'
                                        name='address'
                                        value={data.address}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row TeamCoachEditProfilediv-6 TeamCoachEditProfileimpdiv-style'>
                        <div className='col-4'>
                            <div className='row TeamCoachEditProfilemainrow-1'>
                                <div className='col-2'>
                                    <img className='TeamCoachEditProfilecommon-style-1' src={img5}></img>
                                </div>
                                <div className='col-5'>
                                    <label className='TeamCoachEditProfilelabel'>Pincode</label>
                                </div>
                                <div className='col-5'>
                                    <input
                                        className='TeamCoachEditProfilelabel-2 TeamCoachEditProfileimg-2-backend'
                                        type='text'
                                        name='pincode'
                                        value={data.pincode}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='col-4 TeamCoachEditProfilemainrow-right-1'>
                            <div className='row TeamCoachEditProfilemainrow-1'>
                                <div className='col-2'>
                                    <img className='TeamCoachEditProfilecommon-style-1' src={img3}></img>
                                </div>
                                <div className='col-5'>
                                    <label className='TeamCoachEditProfilelabel'>City</label>
                                </div>
                                <div className='col-5'>
                                    <input
                                        className='TeamCoachEditProfilelabel-2 TeamCoachEditProfileimg-2-backend'
                                        type='text'
                                        name='city'
                                        value={data.city}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row TeamCoachEditProfilediv-7 TeamCoachEditProfileimpdiv-style'>
                        <div className='col-4'>
                            <div className='row TeamCoachEditProfilemainrow-1'>
                                <div className='col-2'>
                                    <img className='TeamCoachEditProfilecommon-style-1' src={img8}></img>
                                </div>
                                <div className='col-5'>
                                    <label className='TeamCoachEditProfilelabel'>State</label>
                                </div>
                                <div className='col-5'>
                                    <div className=''>
                                        <div className="dropdown dropdowninput">
                                            <div className='TeamCoachEditProfilelabel-2'>
                                                <select
                                                    className="form-select"
                                                    aria-label="Default select example"
                                                    name="state"
                                                    value={data.state}
                                                    onChange={handleChange}
                                                >
                                                    <option selected value="1"></option>
                                                    <option value="Jammu & Kashmir">Jammu & Kashmir</option>
                                                    <option value="Tamilnadu">Tamilnadu</option>
                                                    <option value="Karnataka">Karnataka</option>
                                                    <option value="Haryana">Haryana</option>
                                                    <option value="Andrapradesh">Andrapradesh</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className='col-4 TeamCoachEditProfilemainrow-right-1'>
                            <div className='row TeamCoachEditProfilemainrow-1'>
                                <div className='col-2'>
                                    <img className='TeamCoachEditProfilecommon-style-1' src={img9}></img>
                                </div>
                                <div className='col-5'>
                                    <label className='TeamCoachEditProfilelabel'>Coach License</label>
                                </div>
                                <div className='col-5'>
                                    <input className='TeamCoachEditProfilelabel-3' type='file' name='certificate' onChange={handleChange} />
                                </div>
                            </div>
                        </div> */}
                    </div>

                    {/* <div className='row TeamCoachEditProfilediv-8 TeamCoachEditProfileimpdiv-style'>
                        <div className='col-4'>
                            <div className='row TeamCoachEditProfilemainrow-1'>
                                <div className='col-2'>
                                    <img className='TeamCoachEditProfilecommon-style-1' src={img10}></img>
                                </div>
                                <div className='col-5'>
                                    <label className='TeamCoachEditProfilelabel'>Country</label>
                                </div>
                                <div className='col-5'>
                                    <div className="col">
                                        <div className="dropdown dropdowninput">
                                            <div className='TeamCoachEditProfilelabel-2'>
                                            <input
                                        className='TeamCoachEditProfilelabel-2 TeamCoachEditProfileimg-2-backend'
                                        type='text'
                                        name='contact'
                                        disabled
                                        value='India'
                                    />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-4 TeamCoachEditProfilemainrow-right-1'>
                            <div className='row TeamCoachEditProfilemainrow-1'>
                                <div className='col-2'>
                                    <img className='TeamCoachEditProfilecommon-style-1' src={img2}></img>
                                </div>
                                <div className='col-5'>
                                    <label className='TeamCoachEditProfilelabel'>Experience</label>
                                </div>
                                <div className='col-5'>
                                    <input
                                        className='TeamCoachEditProfilelabel-2'
                                        type='text'
                                        name='experience'
                                        value={data.experience}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className='TeamCoachEditProfile-1-5'>
                        <button className='TeamCoachEditProfilediv-11-button' onClick={handleUpdate}>Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamCoachEditProfile;
