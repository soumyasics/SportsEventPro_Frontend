

import React, { useEffect, useState } from "react";
import "../../TeamCoach/TeamCoachdetailspopup.css";
import img1 from "../../../Assets/solar_phone-bold-duotone.svg";
import img2 from "../../../Assets/ri_open-arm-fill.jpg";
import img3 from "../../../Assets/mdi_city.jpg";
import img4 from "../../../Assets/material-symbols_mail-outline.jpg";
import img5 from "../../../Assets/majesticons_pin-line.jpg";
import img6 from "../../../Assets/gg_list.jpg";
import img7 from "../../../Assets/frame.jpg";
import img8 from "../../../Assets/ep_place.jpg";
import img9 from "../../../Assets/arcticons_asr-licence.jpg";
import img10 from "../../../Assets/emojione_flag-for-india.jpg";
import img11 from "../../../Assets/carbon_location-filled.jpg";
import img12 from "../../../Assets/arcticons_team-fight-tactics.jpg";
import { useNavigate, useParams } from "react-router-dom";
import '../TeamCoach/AdminViewAprvdCoachIndividual.css'

import axiosInstance from "../../Constant/BaseURL";
const url = axiosInstance.defaults.url;

console.log("url,", url);

function AdminViewOrganizerToApprove() {
    const { id } = useParams();
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const loadData=()=>{
    axiosInstance
    .post(`viewOrganizerById/${id}`)
    .then((res) => {
      console.log(res.data.data);
      setUserData(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }
  useEffect(() => {
   loadData()
  }, [id]);

 


  const handleActive = (id) => {
    console.log(id);
    axiosInstance.post(`/activateTeamCoachById/${id}`)
    .then((res)=>{
      if(res.data.status === 200){
        
userData.isActive=true   
loadData()
}
    })
    .catch((err) => {
      console.log("Error",err);
    })
  }

  const handleDeactive = (id) => {
    axiosInstance.post(`/deActivateTeamCoachById/${id}`)
    .then((res) => {
      if(res.data.status === 200){
        userData.isActive=false   
        loadData()

      }
    })
    .catch((err) => {
      console.log("Error",err);
    })
  }
  const toggleUserActiveState = (users) => {
    if(users.isActive){
      handleDeactive(users._id)
    }
    else{
      handleActive(users._id)
    }
  }

  const approve = (id) => {
    axiosInstance
      .post(`/approveOrganizerById/${id}`)
      .then((res) => {
        if (res.data.status === 200) {
          alert("Team Coach Approved");
          navigate("/AdminViewOrganiser");
        }
      })
      .catch((error) => {
        console.error("Error!", error);
      });
  };

  const reject = (id) => {
    axiosInstance
      .post(`/deleteOrganizerById/${id}`)
      .then((res) => {
        if (res.data.status === 200) {
          alert("Team Coach Request Rejected");
          navigate("/AdminViewTeamCoach");
        }
      })
      .catch((error) => {
        console.error("Error!", error);
      });
  };
  return (
    <div className="Teamcoachdetailspopupdiv-1-1">
      <div className=".AdminViewActiveCoaches-div1 w-75 bg-light container">
        <div className="row">
          <div className="col Teamcoachdetailspopupdiv-1">
            <h1 className="Teamcoachdetailspopuptext-1">Organizer Details</h1>
          </div>
          <div className="col-4 Teamcoachdetailspopupdiv-2">
            <div className="Teamcoachdetailspopupimgdiv-1-1">
              <label className="Teamcoachdetailspopupimg-1-backend">
                <img
                  src={`${url}/${userData?.photo?.filename}`}
                  className="AdminCoachRequest-img"
                  alt="Profile"
                />
              </label>
              <br />
              <label className="Teamcoachdetailspopupimg-2-backend">
                {userData ? userData.name : ""}
              </label>
              <br />
            </div>
          </div>
        </div>
        <div className="row Teamcoachdetailspopupdiv-3 Teamcoachdetailspopupimpdiv-style">
          <div className="col">
            <div className="row Teamcoachdetailspopupmainrow-1">
              <div className="col">
                <img
                  className="Teamcoachdetailspopupcommon-style-1"
                  src={img1}
                  alt="Contact"
                />
              </div>
              <div className="col">
                <label className="Teamcoachdetailspopuplabel" style={{marginLeft:'-83%'}}>
                  Contact Number
                </label>
              </div>
              <div className="col">
                <label className="Teamcoachdetailspopuplabel-2">
                  {userData.contact}
                </label>
              </div>
            </div>
          </div>
          <div className="col Teamcoachdetailspopupmainrow-right-1">
            <div className="row Teamcoachdetailspopupmainrow-1">
              <div className="col-2">
                <img
                  className="Teamcoachdetailspopupcommon-style-1"
                  src={img6}
                  alt="Category"
                />
              </div>
              <div className="col-5">
                <label className="Teamcoachdetailspopuplabel">Experience</label>
              </div>
              <div className="col-5">
                <label className="Teamcoachdetailspopuplabel-2">
                  {userData.experience}
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="row Teamcoachdetailspopupdiv-4 Teamcoachdetailspopupimpdiv-style">
          <div className="col">
            <div className="row Teamcoachdetailspopupmainrow-1">
              <div className="col-2">
                <img
                  className="Teamcoachdetailspopupcommon-style-1"
                  src={img4}
                  alt="Email"
                />
              </div>
              <div className="col-5">
                <label className="Teamcoachdetailspopuplabel">Email id</label>
              </div>
              <div className="col-5">
                <label className="Teamcoachdetailspopuplabel-2">
                  {userData.email}
                </label>
              </div>
            </div>
          </div>
          <div className="col Teamcoachdetailspopupmainrow-right-1">
            <div className="row Teamcoachdetailspopupmainrow-1">
              <div className="col-2">
                <img
                  className="Teamcoachdetailspopupcommon-style-1"
                  src={img12}
                  alt="Team"
                />
              </div>
              <div className="col-5">
                <label className="Teamcoachdetailspopuplabel">Address</label>
              </div>
              <div className="col-5">
                <label className="Teamcoachdetailspopuplabel-2">
                  {userData.address}
                </label>
              </div>
            </div>
          </div>
        </div>
         {/* <div className="row Teamcoachdetailspopupdiv-5 Teamcoachdetailspopupimpdiv-style">
          <div className="col">
            <div className="row Teamcoachdetailspopupmainrow-1">
              <div className="col-2">
                <img
                  className="Teamcoachdetailspopupcommon-style-1"
                  src={img7}
                  alt="Members"
                />
              </div>
              <div className="col-5">
                <label className="Teamcoachdetailspopuplabel">
                  Total team members
                </label>
              </div>
              <div className="col-5">
                <label className="Teamcoachdetailspopuplabel-2">
                  {userData.totalteammembers}
                </label>
              </div>
            </div>
          </div> 
          <div className="col Teamcoachdetailspopupmainrow-right-1">
            <div className="row Teamcoachdetailspopupmainrow-1">
              <div className="col-2">
                <img
                  className="Teamcoachdetailspopupcommon-style-1"
                  src={img11}
                  alt="Address"
                />
              </div>
              <div className="col-5">
                <label className="Teamcoachdetailspopuplabel">Address</label>
              </div>
              <div className="col-5">
                <label className="Teamcoachdetailspopuplabel-2">
                  {userData.address}
                </label>
              </div>
            </div>
          </div>
        </div> */}
        <div className="row Teamcoachdetailspopupdiv-6 Teamcoachdetailspopupimpdiv-style">
          <div className="col">
            <div className="row Teamcoachdetailspopupmainrow-1">
              <div className="col-2">
                <img
                  className="Teamcoachdetailspopupcommon-style-1"
                  src={img5}
                  alt="Pincode"
                />
              </div>
              <div className="col-5">
                <label className="Teamcoachdetailspopuplabel">Pincode</label>
              </div>
              <div className="col-5">
                <label className="Teamcoachdetailspopuplabel-2">
                  {userData.pincode}
                </label>
              </div>
            </div>
          </div>
          <div className="col Teamcoachdetailspopupmainrow-right-1">
            <div className="row Teamcoachdetailspopupmainrow-1">
              <div className="col-2">
                <img
                  className="Teamcoachdetailspopupcommon-style-1"
                  src={img3}
                  alt="City"
                />
              </div>
              <div className="col-5">
                <label className="Teamcoachdetailspopuplabel">City</label>
              </div>
              <div className="col-5">
                <label className="Teamcoachdetailspopuplabel-2">
                  {userData.city}
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="row Teamcoachdetailspopupdiv-7 Teamcoachdetailspopupimpdiv-style">
          <div className="col">
            <div className="row Teamcoachdetailspopupmainrow-1">
              <div className="col-2">
                <img
                  className="Teamcoachdetailspopupcommon-style-1"
                  src={img9}
                  alt="Document"
                />
              </div>
              <div className="col-5">
                <label className="Teamcoachdetailspopuplabel">License</label>
              </div>
              <div className="col-5">
                <button
                  className="btn btn-link"
                  onClick={() => setShowModal(true)}
                >
                  View Document
                </button>
              </div>
            </div>
          </div>
          <div className="col Teamcoachdetailspopupmainrow-right-1">
            <div className="row Teamcoachdetailspopupmainrow-1">
              <div className="col-2">
                <img
                  className="Teamcoachdetailspopupcommon-style-1"
                  src={img10}
                  alt="Country"
                />
              </div>
              <div className="col-5">
                <label className="Teamcoachdetailspopuplabel">State</label>
              </div>
              <div className="col-5">
                <label className="Teamcoachdetailspopuplabel-2">
                  {userData.state}
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="row Teamcoachdetailspopupbtn-main">
         
          <div className="col Teamcoachdetailspopupbtn-style">
            
          <div className="row mt-5">
        <div className="col teamcoach-details-approvebtndiv">
          <button
            className="teamcoach-details-approvebtn "
            onClick={() => approve(userData._id)}
          >
            Approve
          </button>
        </div>
        <div className="col teamcoach-details-approvebtndiv2">
          <button
            className="teamcoach-details-approvebtn"
            onClick={() => reject(userData._id)}
          >
            Reject
          </button>
        </div>
      </div>
          </div>
        </div>
      </div>
       {/* Modal */}
       <div
        className={`modal fade ${showModal ? "show d-block" : "d-none"}`}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="documentModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="documentModalLabel">
                Document
              </h5>
              <button
                type="button"
                className="close"
                aria-label="Close"
                onClick={() => setShowModal(false)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="">
              <div className="img-container">
                <img
                  src={`${url}/${userData?.certificate?.filename}`}
                  alt="Document"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




export default AdminViewOrganizerToApprove