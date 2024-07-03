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
import axiosInstance from '../Constant/BaseURL'
import { useParams } from 'react-router-dom'
import { Link, Navigate, useNavigate } from 'react-router-dom'



const url = axiosInstance.defaults.url;
console.log("url,", url);



function ViewerProfile() {

    const navigate = useNavigate()
    const { id } = useParams()
    const [userData, setUserData] = useState();


    useEffect(() => {

        let res;


        axiosInstance.post(`viewTeamCoachById`).then(res => {

            console.log(res);


            setUserData(res.data.data);

        }).catch(err => {
            console.log(err);
        })



    }, [id]);
    console.log(userData);


    return (

        <div>

            <div className='container'>

                <div className='row '>

                    <div className='col ViewerViewProfile-1'>

                        <h1 className='ViewerViewProfiletext-1'><Link to="/ViewerHomePage"><img className='ViewerViewProfileimg-13' src={img13} alt='' /></Link>
                            Profile
                        </h1>

                    </div>

                    <div className='col-4 ViewerViewProfile-2'>

                        <div className='ViewerViewProfileimgdiv-1-1'>

                            <label className='ViewerViewProfileimg-1-backend'><img src={`${url}/${userData?.profilePic?.filename}`} alt=' ' />
                            </label><br></br>
                            <label className='ViewerViewProfileimg-2-backend'>{userData ? userData.name : ''}</label><br></br>

                        </div>

                    </div>

                </div>

                <div className='row ViewerViewProfile-3 ViewerViewProfileimpdiv-style'>


                    <div className='col '>

                        <div className='row ViewerViewProfilemainrow-1'>

                            {/* Gender */}
                            <div className='col-2'>
                                <img className='ViewerViewProfilecommon-style-1' src={img8} alt=' '></img>
                            </div>

                            <div className='col-5'>
                                <label className='ViewerViewProfilelabel'>Gender</label>
                            </div>

                            <div className='col-5'>
                                <label className='ViewerViewProfilelabel-2'>{userData ? userData.Gender : ''}</label>
                            </div>

                        </div>

                    </div>

                    <div className='col ViewerViewProfilemainrow-right-1'>


                        <div className='row ViewerViewProfilemainrow-1'>

                            {/* Address */}
                            <div className='col-2'>
                                <img className='ViewerViewProfilecommon-style-1' src={img11} alt=''></img>
                            </div>

                            <div className='col-5'>
                                <label className='ViewerViewProfilelabel'>Address</label>
                            </div>

                            <div className='col-5'>
                                <label className='ViewerViewProfilelabel-2'></label>
                            </div>

                        </div>

                    </div>

                </div>

                <div className='row ViewerViewProfile-4 ViewerViewProfileimpdiv-style'>

                    <div className='col'>

                        <div className='row ViewerViewProfilemainrow-1'>

                            {/* contact number */}
                            <div className='col-2'>
                                <img className='ViewerViewProfilecommon-style-1' src={img1} alt=''></img>
                            </div>

                            <div className='col-5'>
                                <label className='ViewerViewProfilelabel' >Contact Number</label>
                            </div>

                            <div className='col-5'>
                                <label className='ViewerViewProfilelabel-2'>{userData ? userData.contact : ''}</label>
                            </div>

                        </div>

                    </div>

                    <div className='col ViewerViewProfilemainrow-right-1'>

                        <div className='row ViewerViewProfilemainrow-1'>

                            {/* Pincode */}
                            <div className='col-2'>
                                <img className='ViewerViewProfilecommon-style-1' src={img5} alt=''></img>
                            </div>

                            <div className='col-5'>
                                <label className='ViewerViewProfilelabel'>Pincode</label>
                            </div>

                            <div className='col-5'>
                                <label className='ViewerViewProfilelabel-2'>{userData ? userData.pincode : ''}</label>
                            </div>

                        </div>

                    </div>

                </div>

                <div className='row ViewerViewProfile-6 ViewerViewProfileimpdiv-style'>

                    <div className='col'>

                        <div className='row ViewerViewProfilemainrow-1'>

                            {/* Email ID */}
                            <div className='col-2'>
                                <img className='ViewerViewProfilecommon-style-1' src={img4} alt=''></img>
                            </div>

                            <div className='col-5'>
                                <label className='ViewerViewProfilelabel'>Email id</label>
                            </div>

                            <div className='col-5'>
                                <label className='ViewerViewProfilelabel-2'>{userData ? userData.email : ''}</label>
                            </div>

                        </div>

                    </div>

                    <div className='col ViewerViewProfilemainrow-right-1'>

                        <div className='row ViewerViewProfilemainrow-1'>

                            {/* City */}
                            <div className='col-2'>
                                <img className='ViewerViewProfilecommon-style-1' src={img3} alt=''></img>
                            </div>

                            <div className='col-5'>
                                <label className='ViewerViewProfilelabel'>City</label>

                            </div>

                            <div className='col-5'>
                                <label className='ViewerViewProfilelabel-2'>{userData ? userData.city : ''}</label>

                            </div>

                        </div>

                    </div>

                </div>

                <div className='row ViewerViewProfile-7 ViewerViewProfileimpdiv-style'>

                    <div className='col'>

                        <div className='row ViewerViewProfilemainrow-1'>

                            {/* State */}
                            <div className='col-2'>
                                <img className='ViewerViewProfilecommon-style-2' src={img7} alt=' '></img>
                            </div>

                            <div className='col-5'>
                                <label className='ViewerViewProfilelabel'>State</label>

                            </div>

                            <div className='col-5'>
                                <label className='ViewerViewProfilelabel-2'>{userData ? userData.State : ''}</label>

                            </div>

                        </div>

                    </div>
                    <div className='col ViewerViewProfilemainrow-right-1'>

                        <div className='row ViewerViewProfilemainrow-1'>

                            {/* Country */}
                            <div className='col-2'>
                                <img className='ViewerViewProfilecommon-style-1' src={img10} alt=''></img>
                            </div>

                            <div className='col-5'>
                                <label className='ViewerViewProfilelabel'>Country</label>

                            </div>

                            <div className='col-5'>
                                <label className='ViewerViewProfilelabel-2'>{userData ? userData.country : ''}</label>

                            </div>

                        </div>

                    </div>

                </div>

                <div className='row ViewerViewProfile-11'>

                    <button className='ViewerViewProfile-11-button'>Edit</button>

                </div>



            </div>

        </div>

    )

}

export default ViewerProfile
