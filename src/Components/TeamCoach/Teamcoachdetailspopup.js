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
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import axiosInstance from "../Constant/BaseURL";
import toast from "react-hot-toast";
const url = axiosInstance.defaults.url;

console.log("url,", url);

function Teamcoachdetailspopup() {
  const { id } = useParams();
  const [userData, setUserData] = useState({});
  const [showModal, setShowModal] = useState(false);

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
          toast.success("Team Coach Approved");
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
          toast.success("Team Coach Request Rejected");
          navigate("/AdminViewTeamCoach");
        }
      })
      .catch((error) => {
        console.error("Error!", error);
      });
  };

  return (
    <div className="mb-5">
      <div className="mt-5 ms-5 container">
        <Link to="/ViewCoachRequest" className="teamcoach-details-arrowlink">
          <IoMdArrowRoundBack className="teamcoach-details-arrow" />
        </Link>
        <span className="ms-3 teamcoach-details-span">Coach Details</span>
        <div className="teamcoach-details-imgdiv">
          <img
            src={`${url}/${userData?.profilePic?.filename}`}
            className="teamcoach-details-img"
          ></img>
        </div>
      </div>
      <div className="row container">
        <div className="col-5 container">
          <div className="row Teamcoachdetailspopupmainrow-1 container ms-5 ps-5 container ">
            <div className="col-2 ">
              <img className="Teamcoachdetailspopupcommon-style-1" src={img1}></img>
            </div>
            <div className="col-5">
              <label className="Teamcoachdetailspopuplabel">Contact Number</label>
            </div>
            <div className="col-5">
              <label className="Teamcoachdetailspopuplabel-2">{userData.contact}</label>
            </div>
            <hr className="mt-2"></hr>
          </div>
          <div className="row Teamcoachdetailspopupmainrow-1 container ms-5 ps-5">
            <div className="col-2">
              <img className="Teamcoachdetailspopupcommon-style-1" src={img4}></img>
            </div>
            <div className="col-5">
              <label className="Teamcoachdetailspopuplabel">Email id</label>
            </div>
            <div className="col-5">
              <label className="Teamcoachdetailspopuplabel-2">{userData.email}</label>
            </div>
            <hr className="mt-2"></hr>
          </div>
          <div className="row Teamcoachdetailspopupmainrow-1 container ms-5 ps-5">
            <div className="col-2">
              <img className="Teamcoachdetailspopupcommon-style-1" src={img7}></img>
            </div>
            <div className="col-5">
              <label className="Teamcoachdetailspopuplabel">Total team members</label>
            </div>
            <div className="col-5">
              <label className="Teamcoachdetailspopuplabel-2">{userData.totalteammembers}</label>
            </div>
            <hr className="mt-2"></hr>
          </div>
          <div className="row Teamcoachdetailspopupmainrow-1 ms-5 ps-5">
            <div className="col-2">
              <img className="Teamcoachdetailspopupcommon-style-1" src={img5}></img>
            </div>
            <div className="col-5">
              <label className="Teamcoachdetailspopuplabel">Pincode</label>
            </div>
            <div className="col-5">
              <label className="Teamcoachdetailspopuplabel-2">{userData.pincode}</label>
            </div>
            <hr className="mt-2"></hr>
          </div>
           {/* <div className="row Teamcoachdetailspopupmainrow-1 ms-5 ps-5">
            <div className="col-2">
              <img className="Teamcoachdetailspopupcommon-style-1" src={img8}></img>
            </div>
           <div className="col-5">
              <label className="Teamcoachdetailspopuplabel">Address</label>
            </div>
            <div className="col-5">
              <label className="Teamcoachdetailspopuplabel-2">{userData.address}</label>
            </div> 
            <hr className="mt-2"></hr>
          </div>*/}
          <div className="row Teamcoachdetailspopupmainrow-1 ms-5 ps-5 ">
            <div className="col-2">
              <img className="Teamcoachdetailspopupcommon-style-1" src={img10}></img>
            </div>
            <div className="col-5">
              <label className="Teamcoachdetailspopuplabel">State</label>
            </div>
            <div className="col-5">
              <label className="Teamcoachdetailspopuplabel-2">{userData.state}</label>
            </div>
            <hr className="mt-2"></hr>
          </div>
        </div>
        <div className="col-2"></div>
        <div className="col-5 container">
          <div className="col Teamcoachdetailspopupmainrow-right-1 container">
            <div className="row Teamcoachdetailspopupmainrow-1">
              <div className="col-2">
                <img className="Teamcoachdetailspopupcommon-style-1" src={img6}></img>
              </div>
              <div className="col-5">
                <label className="Teamcoachdetailspopuplabel">Category</label>
              </div>
              <div className="col-5">
                <label className="Teamcoachdetailspopuplabel-2">{userData.category}</label>
              </div>
              <hr className="mt-2"></hr>
            </div>
            <div className="row Teamcoachdetailspopupmainrow-1">
              <div className="col-2">
                <img className="Teamcoachdetailspopupcommon-style-1" src={img12}></img>
              </div>
              <div className="col-5">
                <label className="Teamcoachdetailspopuplabel">Team Name</label>
              </div>
              <div className="col-5">
                <label className="Teamcoachdetailspopuplabel-2">{userData.teamName}</label>
              </div>
              <hr className="mt-2"></hr>
            </div>
            <div className="row Teamcoachdetailspopupmainrow-1">
              <div className="col-2">
                <img className="Teamcoachdetailspopupcommon-style-1" src={img11}></img>
              </div>
              <div className="col-5">
                <label className="Teamcoachdetailspopuplabel">Address</label>
              </div>
              <div className="col-5">
                <label className="Teamcoachdetailspopuplabel-2">{userData.address}</label>
              </div>
              <hr className="mt-2"></hr>
            </div>
            <div className="row Teamcoachdetailspopupmainrow-1">
              <div className="col-2">
                <img className="Teamcoachdetailspopupcommon-style-1" src={img3}></img>
              </div>
              <div className="col-5">
                <label className="Teamcoachdetailspopuplabel">City</label>
              </div>
              <div className="col-5">
                <label className="Teamcoachdetailspopuplabel-2">{userData.city}</label>
              </div>
              <hr className="mt-2"></hr>
            </div>
            <div className="row Teamcoachdetailspopupmainrow-1">
              <div className="col-2">
                <img className="Teamcoachdetailspopupcommon-style-1" src={img9}></img>
              </div>
              <div className="col-5">
                <label className="Teamcoachdetailspopuplabel">Coach License</label>
              </div>
              <div className="col-5">
                <label className="Teamcoachdetailspopuplabel-2">{userData.document}</label>
                <button
                  className="btn btn-link"
                  onClick={() => setShowModal(true)}
                >
                  View Document
                </button>
              </div>
              <hr className="mt-2"></hr>
            </div>
            <div className="row Teamcoachdetailspopupmainrow-1">
              <div className="col-2">
                <img className="Teamcoachdetailspopupcommon-style-1" src={img2}></img>
              </div>
              <div className="col-5">
                <label className="Teamcoachdetailspopuplabel">Experience</label>
              </div>
              <div className="col-5">
                <label className="Teamcoachdetailspopuplabel-2">{userData.experience}</label>
              </div>
              <hr className="mt-2"></hr>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col teamcoach-details-approvebtndiv">
          <button
            className="teamcoach-details-approvebtn "
            onClick={() => approve(userData._id)}
          >
            Approve
          </button>
        </div>
        <div className="col teamcoach-details-rejectbtndiv2">
          <button
            className="teamcoach-details-rejectbtn"
            onClick={() => reject(userData._id)}
          >
            Reject
          </button>
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
export default Teamcoachdetailspopup;
