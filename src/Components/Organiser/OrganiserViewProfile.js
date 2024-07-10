import React, { useEffect, useState } from 'react'
import './OrganiserViewProfile.css'
import img13 from '../../Assets/Vector.svg'
import img1 from '../../Assets/solar_phone-bold-duotone.jpg'
import img2 from '../../Assets/ri_open-arm-fill.jpg'
import img3 from '../../Assets/mdi_city.jpg'
import img4 from '../../Assets/material-symbols_mail-outline.jpg'
import img5 from '../../Assets/majesticons_pin-line.jpg'
import img6 from '../../Assets/gg_list.jpg'
import img7 from '../../Assets/frame.jpg'
import img8 from '../../Assets/ep_place.jpg'
import img9 from '../../Assets/arcticons_asr-licence.jpg'
import img10 from '../../Assets/emojione_flag-for-india.jpg'
import img11 from '../../Assets/carbon_location-filled.jpg'
import img12 from '../../Assets/arcticons_team-fight-tactics.jpg'
import axios from 'axios'
import axiosInstance from '../Constant/BaseURL'
import { useParams } from 'react-router-dom'
import { Link, Navigate, useNavigate } from 'react-router-dom'


const url = axiosInstance.defaults.url;

console.log("url,", url);








function OrganiserViewProfile() {
    const navigate = useNavigate()


    const { id } = useParams()
    const [userData, setUserData] = useState();


    useEffect(() => {

        let res;


        axiosInstance.post(`viewOrganizerById`).then(res => {

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
                    <div className='col OrganiserViewProfile-1'>

                        <h1 className='OrganiserViewProfiletext-1'><img className='OrganiserViewProfileimg-13' src={img13} />
                            Profile</h1>
                    </div>
                    <div className='col-4 OrganiserViewProfile-2'>

                        <div className='OrganiserViewProfileimgdiv-1-1'>
                            <label className='OrganiserViewProfileimg-1-backend'>        <img src={`${url}/${userData?.profilePic?.filename}`} />
                            </label><br></br>
                            <label className='OrganiserViewProfileimg-2-backend'>{userData ? userData.name : ''}</label><br></br>
                        </div>

                    </div>


                </div>














                <div className='row OrganiserViewProfile-3 OrganiserViewProfileimpdiv-style'>


                    <div className='col '>

                        <div className='row OrganiserViewProfilemainrow-1'>

                            <div className='col-2'>
                                <img className='OrganiserViewProfilecommon-style-1' src={img1}></img>
                            </div>

                            <div className='col-5'>
                                <label className='OrganiserViewProfilelabel' >Contact Number</label>

                            </div>

                            <div className='col-5'>
                                <label className='OrganiserViewProfilelabel-2'>{userData ? userData.contact : ''}</label>

                            </div>



                        </div>

                    </div>

                    <div className='col OrganiserViewProfilemainrow-right-1'>


                        <div className='row OrganiserViewProfilemainrow-1'>

                            <div className='col-2'>
                                <img className='OrganiserViewProfilecommon-style-1' src={img11}></img>
                            </div>

                            <div className='col-5'>
                                <label className='OrganiserViewProfilelabel'>Address</label>

                            </div>

                            <div className='col-5'>
                                <label className='OrganiserViewProfilelabel-2'></label>

                            </div>



                        </div>







                    </div>





                </div>



                <div className='row OrganiserViewProfile-4 OrganiserViewProfileimpdiv-style'>
                    <div className='col'>

                        <div className='row OrganiserViewProfilemainrow-1'>

                            <div className='col-2'>
                                <img className='OrganiserViewProfilecommon-style-1' src={img4}></img>
                            </div>

                            <div className='col-5'>
                                <label className='OrganiserViewProfilelabel'>Email id</label>

                            </div>

                            <div className='col-5'>
                                <label className='OrganiserViewProfilelabel-2'>{userData ? userData.email : ''}</label>

                            </div>



                        </div>

                    </div>

                    <div className='col OrganiserViewProfilemainrow-right-1'>


                        <div className='row OrganiserViewProfilemainrow-1'>

                            <div className='col-2'>
                                <img className='OrganiserViewProfilecommon-style-1' src={img3}></img>
                            </div>

                            <div className='col-5'>
                                <label className='OrganiserViewProfilelabel'>City</label>

                            </div>

                            <div className='col-5'>
                                <label className='OrganiserViewProfilelabel-2'>{userData ? userData.address : ''}</label>

                            </div>



                        </div>



                    </div>



                </div>



                <div className='row OrganiserViewProfile-6 OrganiserViewProfileimpdiv-style'>
                    <div className='col'>

                        <div className='row OrganiserViewProfilemainrow-1'>

                            <div className='col-2'>
                                <img className='OrganiserViewProfilecommon-style-1' src={img5}></img>
                            </div>

                            <div className='col-5'>
                                <label className='OrganiserViewProfilelabel'>Pincode</label>

                            </div>

                            <div className='col-5'>
                                <label className='OrganiserViewProfilelabel-2'>{userData ? userData.pincode : ''}</label>

                            </div>



                        </div>


                    </div>
                    <div className='col OrganiserViewProfilemainrow-right-1'>


                        <div className='row OrganiserViewProfilemainrow-1'>

                            <div className='col-2'>
                                <img className='OrganiserViewProfilecommon-style-1' src={img9}></img>
                            </div>

                            <div className='col-5'>
                                <label className='OrganiserViewProfilelabel'>Organizer License</label>

                            </div>

                            <div className='col-5'>
                                <label className='OrganiserViewProfilelabel-2'>{userData ? userData.city : ''}</label>

                            </div>



                        </div>



                    </div>



                </div>



                <div className='row OrganiserViewProfile-7 OrganiserViewProfileimpdiv-style'>

                    <div className='col'>

                        <div className='row OrganiserViewProfilemainrow-1'>

                            <div className='col-2'>
                                <img className='OrganiserViewProfilecommon-style-1' src={img8}></img>
                            </div>

                            <div className='col-5'>
                                <label className='OrganiserViewProfilelabel'>State</label>

                            </div>

                            <div className='col-5'>
                                <label className='OrganiserViewProfilelabel-2'>{userData ? userData.state : ''}</label>

                            </div>



                        </div>

                    </div>
                    <div className='col OrganiserViewProfilemainrow-right-1'>


                        <div className='row OrganiserViewProfilemainrow-1'>

                            <div className='col-2'>
                                <img className='OrganiserViewProfilecommon-style-1' src={img2}></img>
                            </div>

                            <div className='col-5'>
                                <label className='OrganiserViewProfilelabel'>Experience</label>

                            </div>

                            <div className='col-5'>
                                <label className='OrganiserViewProfilelabel-2'></label>

                            </div>



                        </div>



                    </div>

                </div>



                <div className='row OrganiserViewProfile-8 OrganiserViewProfileimpdiv-style'>

                    <div className='col'>

                        <div className='row OrganiserViewProfilemainrow-1'>

                            <div className='col-2'>
                                <img className='OrganiserViewProfilecommon-style-1' src={img10}></img>
                            </div>

                            <div className='col-5'>
                                <label className='OrganiserViewProfilelabel'>Country</label>

                            </div>

                            <div className='col-5'>
                                <label className='OrganiserViewProfilelabel-2'>{userData ? userData.country : ''}</label>

                            </div>



                        </div>

                    </div>
                    <div className='col OrganiserViewProfilemainrow-right-1'>



                    </div>

                </div>



                <div className='row OrganiserViewProfile-11'>
                    <button className='OrganiserViewProfile-11-button'>Edit</button>


                </div>



            </div>


        </div>
    )
}

export default OrganiserViewProfile