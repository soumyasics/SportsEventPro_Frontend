import React, { useEffect, useState } from 'react'
import './TeamCoachviewprofilepopup.css'
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
import axiosInstance from '../Constant/BaseURL'
import { Link, useNavigate, useParams } from 'react-router-dom'
const url = axiosInstance.defaults.url;


function Teamcoachviewprofilepopup() {

        const id = localStorage.getItem('tcId')
        const [userData, setUserData] = useState({});

        const navigate = useNavigate();



        useEffect(() => {
                axiosInstance
                        .post(`viewTeamCoachById/${id}`)
                        .then((res) => {
                                console.log(res);
                                setUserData(res.data.data);
                        })
                        .catch((err) => {
                                console.log(err);
                        });
        }, [id]);




        return (
                <div>
                        <div>
                                <div className='Teamcoachviewprofilepopupmain-1-20'>
                                        <div class=" text-center">
                                                <div className='row '>
                                                        <div className='col Teamcoachviewprofilepopupdiv-1'>
                                                                <h1 className='Teamcoachviewprofilepopuptext-1'>Coach Details</h1>
                                                        </div>
                                                        {/* <div class="form-check form-switch Teamcoachviewprofilepopup-button">
                                                                  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                                        </div> */}
                                                        <div className='col-4 Teamcoachviewprofilepopupdiv-2'>

                                                                {/* <label className='Teamcoachviewprofilepopupimg-1-backend'></label><br></br> */}
                                                                <img src={`${url}/${userData?.profilePic?.filename}`} className='Teamcoachviewprofilepopupimg-1-backend' />

                                                        </div>


                                                </div>



                                                <div className='row Teamcoachviewprofilepopupdiv-3 Teamcoachviewprofilepopupimpdiv-style'>


                                                        <div className='col-4 '>

                                                                <div className='row Teamcoachviewprofilepopupmainrow-1'>

                                                                        <div className='col-2'>
                                                                                <img className='Teamcoachviewprofilepopupcommon-style-1' src={img1}></img>
                                                                        </div>

                                                                        <div className='col-5'>
                                                                                <label className='Teamcoachviewprofilepopuplabel' >Contact Number</label>

                                                                        </div>

                                                                        <div className='col-5'>
                                                                                <label className='Teamcoachviewprofilepopuplabel-2'>{userData.contact}</label>

                                                                        </div>



                                                                </div>

                                                        </div>

                                                        <div className='col-4 Teamcoachviewprofilepopupmainrow-right-1'>


                                                                <div className='row Teamcoachviewprofilepopupmainrow-1'>

                                                                        <div className='col-2'>
                                                                                <img className='Teamcoachviewprofilepopupcommon-style-1' src={img6}></img>
                                                                        </div>

                                                                        <div className='col-5'>
                                                                                <label className='Teamcoachviewprofilepopuplabel'> Catogory</label>

                                                                        </div>

                                                                        <div className='col-5'>
                                                                                <label className='Teamcoachviewprofilepopuplabel-2'>{userData.category}</label>

                                                                        </div>



                                                                </div>


                                                        </div>


                                                </div>



                                                <div className='row Teamcoachviewprofilepopupdiv-4 Teamcoachviewprofilepopupimpdiv-style'>
                                                        <div className='col-4'>

                                                                <div className='row Teamcoachviewprofilepopupmainrow-1'>

                                                                        <div className='col-2'>
                                                                                <img className='Teamcoachviewprofilepopupcommon-style-1' src={img4}></img>
                                                                        </div>

                                                                        <div className='col-5'>
                                                                                <label className='Teamcoachviewprofilepopuplabel'>Email id</label>

                                                                        </div>

                                                                        <div className='col-5'>
                                                                                <label className='Teamcoachviewprofilepopuplabel-2'>{userData.email}</label>

                                                                        </div>



                                                                </div>

                                                        </div>

                                                        <div className='col-4 Teamcoachviewprofilepopupmainrow-right-1'>


                                                                <div className='row Teamcoachviewprofilepopupmainrow-1'>

                                                                        <div className='col-2'>
                                                                                <img className='Teamcoachviewprofilepopupcommon-style-1' src={img12}></img>
                                                                        </div>

                                                                        <div className='col-5'>
                                                                                <label className='Teamcoachviewprofilepopuplabel'>Team Name</label>

                                                                        </div>

                                                                        <div className='col-5'>
                                                                                <label className='Teamcoachviewprofilepopuplabel-2'>{userData.teamName}</label>

                                                                        </div>



                                                                </div>

                                                        </div>

                                                </div>

                                                <div className='row Teamcoachviewprofilepopupdiv-5 Teamcoachviewprofilepopupimpdiv-style'>

                                                        <div className='col-4'>

                                                                <div className='row Teamcoachviewprofilepopupmainrow-1'>

                                                                        <div className='col-2'>
                                                                                <img className='Teamcoachviewprofilepopupcommon-style-1' src={img7}></img>
                                                                        </div>

                                                                        <div className='col-5'>
                                                                                <label className='Teamcoachviewprofilepopuplabel'>Total team members</label>

                                                                        </div>

                                                                        <div className='col-5'>
                                                                                <label className='Teamcoachviewprofilepopuplabel-2'>{userData.totalteammembers}</label>

                                                                        </div>



                                                                </div>


                                                        </div>
                                                        <div className='col-4 Teamcoachviewprofilepopupmainrow-right-1'>


                                                                <div className='row Teamcoachviewprofilepopupmainrow-1'>

                                                                        <div className='col-2'>
                                                                                <img className='Teamcoachviewprofilepopupcommon-style-1' src={img11}></img>
                                                                        </div>

                                                                        <div className='col-5'>
                                                                                <label className='Teamcoachviewprofilepopuplabel'>Address</label>

                                                                        </div>

                                                                        <div className='col-5'>
                                                                                <label className='Teamcoachviewprofilepopuplabel-2'>{userData.address}</label>

                                                                        </div>



                                                                </div>







                                                        </div>









                                                </div>










                                                <div className='row Teamcoachviewprofilepopupdiv-6 Teamcoachviewprofilepopupimpdiv-style'>
                                                        <div className='col-4'>

                                                                <div className='row Teamcoachviewprofilepopupmainrow-1'>

                                                                        <div className='col-2'>
                                                                                <img className='Teamcoachviewprofilepopupcommon-style-1' src={img5}></img>
                                                                        </div>

                                                                        <div className='col-5'>
                                                                                <label className='Teamcoachviewprofilepopuplabel'>Pincode</label>

                                                                        </div>

                                                                        <div className='col-5'>
                                                                                <label className='Teamcoachviewprofilepopuplabel-2'>{userData.pincode}</label>

                                                                        </div>



                                                                </div>


                                                        </div>
                                                        <div className='col-4 Teamcoachviewprofilepopupmainrow-right-1'>


                                                                <div className='row Teamcoachviewprofilepopupmainrow-1'>

                                                                        <div className='col-2'>
                                                                                <img className='Teamcoachviewprofilepopupcommon-style-1' src={img3}></img>
                                                                        </div>

                                                                        <div className='col-5'>
                                                                                <label className='Teamcoachviewprofilepopuplabel'>City</label>

                                                                        </div>

                                                                        <div className='col-5'>
                                                                                <label className='Teamcoachviewprofilepopuplabel-2'>{userData.city}</label>

                                                                        </div>



                                                                </div>







                                                        </div>



                                                </div>



                                                <div className='row Teamcoachviewprofilepopupdiv-7 Teamcoachviewprofilepopupimpdiv-style'>

                                                        <div className='col-4'>

                                                                <div className='row Teamcoachviewprofilepopupmainrow-1'>

                                                                        <div className='col-2'>
                                                                                <img className='Teamcoachviewprofilepopupcommon-style-1' src={img8}></img>
                                                                        </div>

                                                                        <div className='col-5'>
                                                                                <label className='Teamcoachviewprofilepopuplabel'>State</label>

                                                                        </div>

                                                                        <div className='col-5'>
                                                                                <label className='Teamcoachviewprofilepopuplabel-2'>{userData.state}</label>

                                                                        </div>



                                                                </div>

                                                        </div>
                                                        <div className='col-4 Teamcoachviewprofilepopupmainrow-right-1'>


                                                                <div className='row Teamcoachviewprofilepopupmainrow-1'>

                                                                        <div className='col-2'>
                                                                                <img className='Teamcoachviewprofilepopupcommon-style-1' src={img9}></img>
                                                                        </div>

                                                                        <div className='col-5'>
                                                                                <label className='Teamcoachviewprofilepopuplabel'>Experience</label>

                                                                        </div>

                                                                        <div className='col-5'>
                                                                                <label className='Teamcoachviewprofilepopuplabel-2'>{userData.experience}</label>

                                                                        </div>



                                                                </div>







                                                        </div>

                                                </div>



                                                <div className='row Teamcoachviewprofilepopupdiv-8 Teamcoachviewprofilepopupimpdiv-style'>

                                                       
                                                        

                                                </div>







                                        </div>















                                        <div className='TeamCoachEditProfile-1-5'>

                                                <button className='TeamCoachEditProfilediv-11-button'><Link to='/TeamCoachEditProfile' className='TeamCoachViewProfilediv-11-button'>Edit</Link></button>

                                        </div>




                                </div>



                        </div>



                </div>
        )
}

export default Teamcoachviewprofilepopup