import React, { useEffect, useState } from 'react'
import "../../Components/TeamCoach/TeamCoachViewDetails.css"
import img1 from "../../Assets/Vector.jpg"
import img2 from "../../Assets/ep_place.jpg"

import img3 from "../../Assets/mdi_city.jpg";
import img4 from "../../Assets/material-symbols_mail-outline.jpg";
import img5 from "../../Assets/majesticons_pin-line.jpg";
import img6 from "../../Assets/gg_list.jpg";
import img10 from "../../Assets/subway_world-1.jpg";
import img11 from "../../Assets/carbon_location-filled.jpg";
import img13 from "../../Assets/solar_phone-bold-duotone.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import axiosInstance from "../Constant/BaseURL";
import toast from 'react-hot-toast';
const url = axiosInstance.defaults.url;


function TeamCoachViewDetails() {
    const { id } = useParams();
    const [userData, setUserData] = useState({});
    const [showModal, setShowModal] = useState(false);
  
    const navigate = useNavigate();
  
    useEffect(() => {
      axiosInstance
        .post(`addTeamMembers/${id}`)
        .then((res) => {
          setUserData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [id]);
  

  
    const reject = (id) => {
      axiosInstance
        .post(`/rejectTeamCoachById/${id}`)
        .then((res) => {
          if (res.data.status === 200) {
            toast.success("Team Coach Request Rejected");
            navigate("/AdminViewTeamCoach");
          }
        })
        .catch((error) => {
          console.error("Error!", error);
        });
    };
    
  
  
    return (
        <div>
            <div class="container text-center">
                <div class="row">
                    <div class="col TeamCoachViewDetailsImg-1">
                        <img class="" src={img1} alt="image not found"></img>
                    </div>
                    <div class="col TeamCoachViewDetailsh1-1">
                        <h1>View Details</h1>
                    </div>
                    <div class="col TeamCoachViewDetailsimg-2">
                        <img src={`${url}/${userData?.profilePic?.filename}`}></img>
                        <div><p>Name</p></div>
                    </div>
                </div>
            </div>
            <div class="container text-center">

                <div className="row container">
                    <div className="col-5 container TeamCoachViewDetailsText">
                        <div className="row TeamCoachViewDetailspopupmainrow-1">
                            <div className="col-2 ">

                                <img className="TeamCoachViewDetailspopupcommon-style-1" src={img13}></img>
                            </div>
                            <div className="col-5 TeamCoachViewDetailsText">
                                <label className="TeamCoachViewDetailspopuplabel">Contact Number</label>
                            </div>
                            <div className="col-5 TeamCoachViewDetailsText">
                                <label className="TeamCoachViewDetailspopuplabel-2">{userData.contact}</label>
                            </div>
                            <hr className="mt-2"></hr>
                        </div>
                        <div className="row TeamCoachViewDetailspopupmainrow-1">
                            <div className="col-2">
                                <img className="TeamCoachViewDetailspopupcommon-style-1" src={img4}></img>
                            </div>
                            <div className="col-5 TeamCoachViewDetailsText">
                                <label className="TeamCoachViewDetailspopuplabel">Email id</label>
                            </div>
                            <div className="col-5 TeamCoachViewDetailsText">
                                <label className="TeamCoachViewDetailspopuplabel-2">{userData.email}</label>
                            </div>
                            <hr className="mt-2"></hr>
                        </div>
                        <div className="row row TeamCoachViewDetailspopupmainrow-1">
                            <div className="col-2">
                                <img className="TeamCoachViewDetailspopupcommon-style-1" src={img5}></img>
                            </div>
                            <div className="col-5 TeamCoachViewDetailsText">
                                <label className="TeamCoachViewDetailspopuplabel">Pincode</label>
                            </div>
                            <div className="col-5 TeamCoachViewDetailsText">
                                <label className="TeamCoachViewDetailspopuplabel-2">{userData.pincode}</label>
                            </div>
                            <hr className="mt-2"></hr>
                        </div>
                        <div className="row row TeamCoachViewDetailspopupmainrow-1 ">
                            <div className="col-2">
                                <img className="TeamCoachViewDetailspopupcommon-style-1" src={img10}></img>
                            </div>
                            <div className="col-5 TeamCoachViewDetailsText">
                                <label className="TeamCoachViewDetailspopuplabel">Country</label>
                            </div>
                            <div className="col-5 TeamCoachViewDetailsText">
                                <label className="TeamCoachViewDetailspopuplabel-2">{userData.country}</label>
                            </div>
                            <hr className="mt-2"></hr>
                        </div>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-5 container TeamCoachViewDetailsText">
                        <div className="col TeamCoachViewDetailspopupmainrow-right-1 container">
                            <div className="row TeamCoachViewDetailspopupmainrow-1">
                                <div className="col-2">
                                    <img className="TeamCoachViewDetailspopupcommon-style-1" src={img6}></img>
                                </div>
                                <div className="col-5 TeamCoachViewDetailsText">
                                    <label className="TeamCoachViewDetailspopuplabel">Category</label>
                                </div>
                                <div className="col-5 TeamCoachViewDetailsText">
                                    <label className="TeamCoachViewDetailspopuplabel-2">{userData.category}</label>
                                </div>
                                <hr className="mt-2"></hr>
                            </div>
                            <div className="row TeamCoachViewDetailspopupmainrow-1">
                                <div className="col-2">
                                    <img className="TeamCoachViewDetailspopupcommon-style-1" src={img11}></img>
                                </div>
                                <div className="col-5 TeamCoachViewDetailsText">
                                    <label className="TeamCoachViewDetailspopuplabel">Address</label>
                                </div>
                                <div className="col-5 TeamCoachViewDetailsText">
                                    <label className="TeamCoachViewDetailspopuplabel-2">{userData.address}</label>
                                </div>
                                <hr className="mt-2"></hr>
                            </div>
                            <div className="row TeamCoachViewDetailspopupmainrow-1">
                                <div className="col-2">
                                    <img className="TeamCoachViewDetailspopupcommon-style-1" src={img3}></img>
                                </div>
                                <div className="col-5 TeamCoachViewDetailsText">
                                    <label className="TeamCoachViewDetailspopuplabel">City</label>
                                </div>
                                <div className="col-5 TeamCoachViewDetailsText">
                                    <label className="TeamCoachViewDetailspopuplabel-2">{userData.city}</label>
                                </div>
                                <hr className="mt-2"></hr>
                            </div>
                            <div className="row row TeamCoachViewDetailspopupmainrow-1 ">
                                <div className="col-2">
                                    <img className="TeamCoachViewDetailspopupcommon-style-1" src={img2}></img>
                                </div>
                                <div className="col-5 TeamCoachViewDetailsText">
                                    <label className="TeamCoachViewDetailspopuplabel">State</label>
                                </div>
                                <div className="col-5 TeamCoachViewDetailsText">
                                    <label className="TeamCoachViewDetailspopuplabel-2">{userData.state}</label>
                                </div>
                                <hr className="mt-2"></hr>
                            </div>
                            <button class="TeamCoachViewDetailsButton-1">Edit</button>
                            <button className='TeamCoachViewDetailsButton-2'>Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamCoachViewDetails
