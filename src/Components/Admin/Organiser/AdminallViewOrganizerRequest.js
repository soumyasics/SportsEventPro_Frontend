import React, { useEffect, useState } from 'react'
import '../../Admin/Organiser/Organizer.css'
import { FaArrowLeft } from "react-icons/fa";
import image47 from '../../../Assets/image 47.jpg'
import img1 from '../../../Assets/solar_phone-bold-duotone.jpg'
import img2 from '../../../Assets/ri_open-arm-fill.jpg'
import img3 from '../../../Assets/mdi_city.jpg'
import img4 from '../../../Assets/material-symbols_mail-outline.jpg'
import img5 from '../../../Assets/majesticons_pin-line.jpg'
import img6 from '../../../Assets/gg_list.jpg'
import img7 from '../../../Assets/frame.jpg'
import img8 from '../../../Assets/ep_place.jpg'
import img9 from '../../../Assets/arcticons_asr-licence.jpg'
import img10 from '../../../Assets/emojione_flag-for-india.jpg'
import img11 from '../../../Assets/carbon_location-filled.jpg'
import img12 from '../../../Assets/arcticons_team-fight-tactics.jpg'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../../Constant/BaseURL';
const url =axiosInstance.defaults.url;
console.log("url", url);
function AdminallViewOrganizerRequest() {
    const {id} =useParams();
    const[data,setData]=useState({});
    const [showModal, setShowModal] = useState(false);
     
    const navigate =useNavigate();


    const loadData=()=>{
        axiosInstance.post(`viewOrganizerById/${id}`)
        .then((res) => {
            setData(res.data.data)
        })
        .catch((err) =>{
            console.log(err);
        })
    }
    useEffect (() => {
       
    },[id])

    const handleActive = (id) => {
        console.log(id);
        axiosInstance.post(`/activateOrganizerById/${id}`)
        .then((res)=>{
          if(res.data.status === 200){
            
    data.isActive=true   
    loadData()
    }
        })
        .catch((err) => {
          console.log("Error",err);
        })
      }
    
      const handleDeactive = (id) => {
        axiosInstance.post(`/deActivateOrganizerById/${id}`)
        .then((res) => {
          if(res.data.status === 200){
            data.isActive=false   
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
  return (
    <div>
        <div className='ms-5 mt-5'>
            <Link to='' className='text-dark'><FaArrowLeft className='adminview-organizer-request'/></Link>
            <span className='ms-5 pt-2 adminview-organizer-request-span'>Organizer Details</span>
        </div>
        <div className='adminview-organizer-request-imgdiv container ms-5 '>
            <img src={`${url}/${data?.photo?.filename}`} className='adminview-organizer-request-img'></img>
        </div>
        <div className='row container'>
            <div className='col-5'>
                <div className='row container ms-5 mt-5 '>
                    <div className='col-1 ms-3 container'>
                        <img src= {image47}
                        className='adminview-organizer-request-img1'></img>
                    </div>
                    <div className='col-4'>
                        <label>Contact No</label>
                    </div>
                    <div className='col-6'>
                        <label>{data.contact}</label>
                    </div>
                </div>
                <div className='container'>
                    <hr></hr>
                </div>
    
                <div className='row container ms-5 mt-5'>
                    <div className='col-1 ms-3'>
                        <img src={img4} className='adminview-organizer-request-img1'></img>
                    </div>
                    <div className='col-4'>
                        <label>Email ID</label>
                    </div>
                    <div className='col-6'>
                        <label>{data.email}</label>
                    </div>
                </div><div className='container'>
                    <hr></hr>
                </div>

                <div className='row container ms-5 mt-5'>
                    <div className='col-1 ms-3'>
                        <img src={img5} className='adminview-organizer-request-img1'></img>
                    </div>
                    <div className='col-4'>
                        <label>Pincode</label>
                    </div>
                    <div className='col-6'>
                        <label>{data.pincode}</label>
                    </div>
                </div><div className='container'>
                    <hr></hr>
                </div>

                <div className='row container ms-5 mt-5'>
                    <div className='col-1 ms-3'>
                        <img src={img8} className='adminview-organizer-request-img1'></img>
                    </div>
                    <div className='col-4'>
                        <label>State</label>
                    </div>
                    <div className='col-6'>
                        <label>{data.state}</label>
                    </div>
                </div><div className='container'>
                    <hr></hr>
                </div>

                <div className='row container ms-5 mt-5'>
                    <div className='col-1 ms-3'>
                        <img src={img10} className='adminview-organizer-request-img1'></img>
                    </div>
                    <div className='col-4'>
                        <label>{data.country}</label>
                    </div>
                    <div className='col-6'>
                        <label>Country</label>
                    </div>
                </div><div className='container'>
                    <hr></hr>
                </div>
            </div>
            <div className='col-1'>
            
            </div>
            <div className='col-6'>
                <div className='row container ms-5 mt-5'>
                    <div className='col-1 ms-3'>
                        <img src={img11} className='adminview-organizer-request-img1'></img>
                    </div>
                    <div className='col-4'>
                        <label>Address</label>
                    </div>
                    <div className='col-6'>
                        <label>{data.address}</label>
                    </div>
                </div><div className='container'>
                    <hr></hr>
                </div>

                <div className='row container ms-5 mt-5'>
                    <div className='col-1 ms-3'>
                        <img src={img3} className='adminview-organizer-request-img1'></img>
                    </div>
                    <div className='col-4'>
                        <label>City</label>
                    </div>
                    <div className='col-6'>
                        <label>{data.city}</label>
                    </div>
                </div><div className='container'>
                    <hr></hr>
                </div>

                <div className='row container ms-5 mt-5'>
                    <div className='col-1 ms-3'>
                        <img src={img10} className='adminview-organizer-request-img1'></img>
                    </div>
                    <div className='col-4'>
                        <label>License</label>
                    </div>
                    <div className='col-6'>
                    <button
                  className="btn btn-link"
                  onClick={() => setShowModal(true)}
                >
                  View Document
                </button>
                    </div>
                </div><div className='container'>
                    <hr></hr>
                </div>

                <div className='row container ms-5 mt-5'>
                    <div className='col-1 ms-3'>
                        <img src={img2} className='adminview-organizer-request-img1'></img>
                    </div>
                    <div className='col-4'>
                        <label>Experience</label>
                    </div>
                    <div className='col-6'>
                        <label>{data.experience}</label>
                    </div>
                </div><div className='container'>
                    <hr></hr>
                </div>
            </div>

            <div className='row container ms-5 mt-5'>
            <div className='col-1 ms-3'>
            <button
                     className={`toggle-button ${data.isActive ? 'active' : 'inactive'}`} 
                    onClick={()=>{toggleUserActiveState(data)}}
                    >
                      {data.isActive ? 'Active' : 'Inactive'}
                    </button>

</div></div>
        </div>

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
                  src={`${url}/${data?.organizerlicense?.filename}`}
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
  )
}

export default AdminallViewOrganizerRequest
