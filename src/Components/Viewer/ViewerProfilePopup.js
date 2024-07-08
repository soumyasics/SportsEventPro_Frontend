import React, { useEffect, useState } from 'react'
import './ViewerProfilePopup.css'
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
import img14 from '../../Assets/cross.svg'
import img15 from '../../Assets/tick.svg'
import axios from 'axios'
import { useParams } from 'react-router-dom'


import nameIcon from '../../Assets/nameIcon.png'

import axiosInstance from '../Constant/BaseURL'
import { Link, useNavigate } from 'react-router-dom'

function ViewerProfilePopup() {

    const url = axiosInstance.defaults.url;
    const navigate = useNavigate()
    const [userData, setUserData] = useState({});
    const {id} = useParams()

    const [isActive, setIsActive] = useState(false);

    const toggleButton = () => {
        setIsActive(!isActive);
        console.log("worked");
    };
const fetchdata=(id)=>{
    axiosInstance.post(`viewviewersById/${id}`).then(res => {
        console.log(";id",res.data.data);
        setUserData(res.data.data);
    }).catch(err => {
        console.log(err);
    })
}

    useEffect(() => {
        fetchdata(id)
    }, [id]);

    const handleActive = (id) => {
        console.log(id);
        axiosInstance.post(`/activateviewersById/${id}`)
        .then((res)=>{
          if(res.data.status === 200){
            
    userData.isActive=true   
    fetchdata(id)
    }
        })
        .catch((err) => {
          console.log("Error",err);
        })
      }
    
      const handleDeactive = (id) => {
        axiosInstance.post(`/deActivateviewersById/${id}`)
        .then((res) => {
          if(res.data.status === 200){
            userData.isActive=false   
            fetchdata(id)
    
          }
        })
        .catch((err) => {
          console.log("Error",err);
        })
      }
    const toggleUserActiveState = (users) => {
        console.log(users.isActive);
        if(users.isActive){
          handleDeactive(users._id)
        }
        else{
          handleActive(users._id)
        }
      }




    // const handleUpdate = () => {
    //     axiosInstance
    //         .post(`editviewersById/${id}`, userData)
    //         .then((res) => {
    //             console.log(res);
    //             if (res.data.status == 200) {
    //                 alert("Profile Updated Successfully");
    //                 navigate('/ViewerHomePage')
    //             }
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }

    return (
        <div className='container'>
            <div className='row viewer-dit-prof-text'>
                <div className='col ViewerViewProfile-1'>
                    <h1 className='ViewerViewProfiletext-1'>
                        <Link to="/admindashboard">
                            <img className='ViewerViewProfileimg-13' src={img13} alt='' />
                        </Link>
                        Viewers Details
                    </h1>
                </div>
                <div className={`toggle-button ${userData.isActive ? 'active' : 'inactive'}`} onClick={()=>{toggleUserActiveState(userData)}}>
                    <span className="status-text">{userData.isActive ? 'Active' : 'Inactive'}</span>
                    <span className="icon" style={{ left: userData.isActive ? '110px' : '6px' }}>{userData.isActive ? <img src={img15} alt="test"/> : <img src={img14} alt="test"/>}</span>
                </div>
            </div>

            <div className='row ViewerViewProfile-3 ViewerViewProfileimpdiv-style'>
                <div className='col'>
                    <div className='row ViewerViewProfilemainrow-1'>
                        <div className='col-2'>
                            <img className='ViewerViewProfilecommon-style-1' src={img8} alt='' />
                        </div>
                        <div className='col-5'>
                            <label className='ViewerViewProfilelabel'>Gender</label>
                        </div>
                        <div className='col-5'>
                            <div className='ViewerRegistration-Content-Input-2'>
                                <label className='ViewerRegistration-Content-Input-2-label'>{userData.gender}</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col ViewerViewProfilemainrow-right-1'>
                    <div className='row ViewerViewProfilemainrow-1'>
                        <div className='col-2'>
                            <img className='ViewerViewProfilecommon-style-1' src={img11} alt='' />
                        </div>
                        <div className='col-5'>
                            <label className='ViewerViewProfilelabel'>Address</label>
                        </div>
                        <div className='col-5'>
                            <label className='ViewerRegistration-Content-Input-2-label'>{userData.address}</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row ViewerViewProfile-4 ViewerViewProfileimpdiv-style'>
                <div className='col'>
                    <div className='row ViewerViewProfilemainrow-1'>
                        <div className='col-2'>
                            <img className='ViewerViewProfilecommon-style-1' src={img1} alt='' />
                        </div>
                        <div className='col-5'>
                            <label className='ViewerViewProfilelabel'>Contact Number</label>
                        </div>
                        <div className='col-5'>
                            <label className='ViewerRegistration-Content-Input-2-label'>{userData.contact}</label>
                        </div>
                    </div>
                </div>

                <div className='col ViewerViewProfilemainrow-right-1'>
                    <div className='row ViewerViewProfilemainrow-1'>
                        <div className='col-2'>
                            <img className='ViewerViewProfilecommon-style-1' src={img5} alt='' />
                        </div>
                        <div className='col-5'>
                            <label className='ViewerViewProfilelabel'>Pincode</label>
                        </div>
                        <div className='col-5'>
                            <label className='ViewerRegistration-Content-Input-2-label'>{userData.pincode}</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row ViewerViewProfile-6 ViewerViewProfileimpdiv-style'>
                <div className='col'>
                    <div className='row ViewerViewProfilemainrow-1'>
                        <div className='col-2'>
                            <img className='ViewerViewProfilecommon-style-1' src={img4} alt='' />
                        </div>
                        <div className='col-5'>
                            <label className='ViewerViewProfilelabel'>Email ID</label>
                        </div>
                        <div className='col-5'>
                            <label className='ViewerRegistration-Content-Input-2-label'>{userData.email}</label>
                        </div>
                    </div>
                </div>

                <div className='col ViewerViewProfilemainrow-right-1'>
                    <div className='row ViewerViewProfilemainrow-1'>
                        <div className='col-2'>
                            <img className='ViewerViewProfilecommon-style-1' src={img3} alt='' />
                        </div>
                        <div className='col-5'>
                            <label className='ViewerViewProfilelabel'>City</label>
                        </div>
                        <div className='col-5'>
                            <label className='ViewerRegistration-Content-Input-2-label'>{userData.city}</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row ViewerViewProfile-7 ViewerViewProfileimpdiv-style'>
                <div className='col'>
                    <div className='row ViewerViewProfilemainrow-1'>
                        <div className='col-2'>
                            <img className='ViewerViewProfilecommon-style-2' src={img7} alt='' />
                        </div>
                        <div className='col-5'>
                            <label className='ViewerViewProfilelabel'>State</label>
                        </div>

                        <div className='col-5 viewer-dit-prof-text'>

                            <label className='ViewerRegistration-Content-Input-2-label'>{userData.state}</label>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )

}

export default ViewerProfilePopup
