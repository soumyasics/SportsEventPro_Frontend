import React, { useEffect, useState } from "react";
import "./TeamCoachdetailspopup.css";
import img1 from "../../Assets/solar_phone-bold-duotone.svg";
import img2 from "../../Assets/ri_open-arm-fill.jpg";
import img3 from "../../Assets/mdi_city.jpg";
import img4 from "../../Assets/material-symbols_mail-outline.jpg";
import img5 from "../../Assets/majesticons_pin-line.jpg";
import img6 from "../../Assets/gg_list.jpg";
import img7 from "../../Assets/frame.jpg";
import img8 from "../../Assets/ep_place.jpg";
import img9 from "../../Assets/arcticons_asr-licence.jpg";
import img10 from "../../Assets/emojione_flag-for-india.jpg";
import img11 from "../../Assets/carbon_location-filled.jpg";
import img12 from "../../Assets/arcticons_team-fight-tactics.jpg";
import { useNavigate, useParams } from "react-router-dom";

import axiosInstance from "../Constant/BaseURL";
const url = axiosInstance.defaults.url;

console.log("url,", url);

function Teamcoachdetailspopup() {
  const { id } = useParams();
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance
      .post(`viewTeamCoachById/${id}`)
      .then((res) => {
        setUserData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const approve = (id) => {
    axiosInstance
      .post(`/approveTeamCoachById/${id}`)
      .then((res) => {
        if (res.data.status === 200) {
          alert("Team Coach Approved");
          navigate("/AdminViewTeamCoach");
        }
      })
      .catch((error) => {
        console.error("Error!", error);
      });
  };

  const reject = (id) => {
    axiosInstance
      .post(`/rejectTeamCoachById/${id}`)
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
    <div className=" Teamcoachdetailspopupdiv-1-1">
      <div className="TeamCoachDetailscontaindiv">
        <div className="row">
          <div className="col Teamcoachdetailspopupdiv-1">
            <h1 className="Teamcoachdetailspopuptext-1">Coach Details</h1>
          </div>
          <div className="col-4 Teamcoachdetailspopupdiv-2">
            <div className="Teamcoachdetailspopupimgdiv-1-1">
              <label className="Teamcoachdetailspopupimg-1-backend">
                <img
                  src={`${url}/${userData?.profilePic?.filename}`}
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
                <label className="Teamcoachdetailspopuplabel">Category</label>
              </div>
              <div className="col-5">
                <label className="Teamcoachdetailspopuplabel-2">
                  {userData.category}
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
                  {userData.mail}
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
                <label className="Teamcoachdetailspopuplabel">Team Name</label>
              </div>
              <div className="col-5">
                <label className="Teamcoachdetailspopuplabel-2">
                  {userData.teamName}
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="row Teamcoachdetailspopupdiv-5 Teamcoachdetailspopupimpdiv-style">
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
        </div>
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
                <label className="Teamcoachdetailspopuplabel">Document</label>
              </div>
              <div className="col-5">
                <label className="Teamcoachdetailspopuplabel-2">Document</label>
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
                <label className="Teamcoachdetailspopuplabel">Country</label>
              </div>
              <div className="col-5">
                <label className="Teamcoachdetailspopuplabel-2">
                  {userData.country}
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="row Teamcoachdetailspopupbtn-main">
          <div className="col Teamcoachdetailspopupbtn-style">
            <button
              className="Teamcoachdetailspopupbtn-1"
              onClick={() => approve(userData._id)}
            >
              Approve
            </button>
          </div>
          <div className="col Teamcoachdetailspopupbtn-style">
            <button
              className="Teamcoachdetailspopupbtn-2"
              onClick={() => reject(userData._id)}
            >
              Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teamcoachdetailspopup;
