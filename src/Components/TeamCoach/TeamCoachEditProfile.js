import React, { useEffect, useState, useRef } from 'react';
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
import img10 from '../../Assets/subway_world-1.jpg';
import img11 from '../../Assets/carbon_location-filled.jpg';
import img12 from '../../Assets/arcticons_team-fight-tactics.jpg';
import img13 from "../../Assets/circum_edit.jpg";
import img14 from "../../Assets/ri_open-arm-fill.jpg"
import axiosInstance from '../Constant/BaseURL';
import { useNavigate } from 'react-router-dom';
import axiosMultipartInstance from '../Constant/multiPart';
import toast from 'react-hot-toast';
import { ToastContainer } from 'react-bootstrap';

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
        profilePic:null
    });

    const navigate = useNavigate();
    const fileInputRef = useRef(null);

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

    const handlePenClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData((prevData) => ({
                ...prevData,
                profilePic:file
            }));
        }
    };

    const handleUpdate = async() => {
      let  formIsValid=true
        console.log("ty");
        
        const nameRegex = /^[A-Za-z\s]+$/;
        const nRegex =  /^(?=.*[A-Za-z])[A-Za-z0-9\s]+$/;
        if (data.name){
            if (!nameRegex.test(data.name)) {
                
                     formIsValid = false;
            toast.error("Name must contain alphabets Only")
                }
         }
         if (data.city){
            
            if (!nRegex.test(data.city)) {
                
                     formIsValid = false;
                     toast.error ("City must contain alphanumerics Only")
                }
         }
         if (data.teamName){
            if (!nRegex.test(data.teamName)) {
                
                     formIsValid = false;
                     toast.error ("Teamname must contain alphanumerics Only")
                }
         }
         const numberRegex = /^(?=.*\d)\d+$/;

         if (!data.contact) {
             formIsValid = false;
             toast.error(`Contact Number is required`);
         } else 
         if (!numberRegex.test(data.contact)) {
             
                  formIsValid = false;
                  toast.error( "Contact Number must contain numbers Only")
             }else if (data.contact.length!== 10) {
             formIsValid = false;
             toast.error( 'Please enter a valid Contact Number');
         }
         if (!data.pincode) {
            formIsValid = false;
            toast.error(`pincode is required`);
        } else 
        if (!numberRegex.test(data.pincode)) {
            
                 formIsValid = false;
                 toast.error( "pincode must contain numbers Only")
            }else if (data.pincode.length!== 6) {
            formIsValid = false;
            toast.error( 'Please enter a valid pincode');
        }
         console.log("fo",formIsValid);
         
            
        if (!data.email.endsWith("@gmail.com")) {
            formIsValid = false;
            toast.error( "Email must be a valid Email address")
        }
      if(formIsValid){
        console.log("data",data);
       await axiosMultipartInstance
            .post(`editTeamCoachById/${id}`, data)
            .then((res) => {
                console.log(res);
                if (res.data.status == 200) {
                    toast.success("Profile Updated Successfully");
                    navigate('/TeamCoachHomePage');
                }
            })
            .catch((err) => {
                console.log(err);
            });}
           
    };

    return (
        <div>
            <div className='TeamCoachEditProfilemain-1-20'>
                <ToastContainer></ToastContainer>
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
                                    alt="Profile"
                                />
                                <button className='TeamCoachEditProfileimgButton' onClick={handlePenClick}>
                                    <img className='TeamCoachEditProfilebuttonimage' src={img13} alt="Edit" />
                                </button>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    name="profilePic"
                                    style={{ display: 'none' }}
                                    onChange={handleFileChange}
                                />
                            </label><br></br>
                            <label className='TeamCoachEditProfileimg-2-backend'></label><br></br>
                        </div>
                    </div>

                    <div className='row TeamCoachEditProfilediv-3 TeamCoachEditProfileimpdiv-style'>
                    <div className='col-4'>
                            <div className='row TeamCoachEditProfilemainrow-1'>
                                <div className='col-2'>
                                    <img className='TeamCoachEditProfilecommon-style-1' src={img8} alt=''></img>
                                </div>
                                <div className='col-5'>
                                    <label className='TeamCoachEditProfilelabel'>Name</label>
                                </div>
                                <div className='col-5'>
                                    <div className="col">
                                    <input
                                        className='TeamCoachEditProfilelabel-2 TeamCoachEditProfileimg-2-backend'
                                        type='text'
                                        name='name'
                                        value={data.name}
                                        onChange={handleChange}
                                    />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-4 TeamCoachEditProfilemainrow-right-1'>
                            {/* <div className='row TeamCoachEditProfilemainrow-1'>
                                <div className='col-2'>
                                    <img className='TeamCoachEditProfilecommon-style-1' src={img6} alt=''></img>
                                </div>
                                <div className='col-5'>
                                    <label className='TeamCoachEditProfilelabel'>Select Category</label>
                                </div>
                                <div className='col-5'>
                                    <div className="col">
                                        <div className="dropdown dropdowninput">
                                            <div className='TeamCoachEditProfilelabel-2'>
                                                <select className="form-select" aria-label="Default select example" name="category" value={data.category} onChange={handleChange} placeholder={data ? data.category : ""}>
                                                    <option value="Football">Football</option>
                                                    <option value="Cricket">Cricket</option>
                                                    <option value="">Hockey</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>

                    <div className='row TeamCoachEditProfilediv-4 TeamCoachEditProfileimpdiv-style'>
                        <div className='col-4'>
                            <div className='row TeamCoachEditProfilemainrow-1'>
                                <div className='col-2'>
                                    <img className='TeamCoachEditProfilecommon-style-1' src={img4} alt=''></img>
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
                                    <img className='TeamCoachEditProfilecommon-style-1' src={img12} alt=''></img>
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
                            {/* <div className='row TeamCoachEditProfilemainrow-1'>
                                <div className='col-2'>
                                    <img className='TeamCoachEditProfilecommon-style-1' src={img7} alt=''></img>
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
                            </div> */}
                                <div className='col-4'>
                            <div className='row TeamCoachEditProfilemainrow-1'>
                                <div className='col-2'>
                                    <img className='TeamCoachEditProfilecommon-style-1' src={img1} alt=''></img>
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
                        </div>
                        <div className='col-4 TeamCoachEditProfilemainrow-right-1'>
                            <div className='row TeamCoachEditProfilemainrow-1'>
                                <div className='col-2'>
                                    <img className='TeamCoachEditProfilecommon-style-1' src={img11} alt=''></img>
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
                                    <img className='TeamCoachEditProfilecommon-style-1' src={img3} alt=''></img>
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
                        <div className='col-4 TeamCoachEditProfilemainrow-right-1'>
                            <div className='row TeamCoachEditProfilemainrow-1'>
                                <div className='col-2'>
                                <img className='TeamCoachEditProfilecommon-style-1' src={img9} alt=''></img>
                                </div>
                                <div className='col-5'>
                                    <label className='TeamCoachEditProfilelabel'>Experience</label>
                                </div>
                                <div className='col-5'>
                                    <input
                                        className='TeamCoachEditProfilelabel-2 TeamCoachEditProfileimg-2-backend'
                                        type='text'
                                        name='experience'
                                        value={data.experience}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        
                    {/* <div className='row TeamCoachEditProfilediv-8 TeamCoachEditProfileimpdiv-style'>
                        <div className='col-4'>
                            <div className='row TeamCoachEditProfilemainrow-1'>
                                <div className='col-2'>
                                    <img className='TeamCoachEditProfilecommon-style-1' src={img9}></img>
                                </div>
                                <div className='col-5'>
                                    <label className='TeamCoachEditProfilelabel'>Experience</label>
                                </div>
                                <div className='col-5'>
                                   
                                </div>
                            </div>
                        </div>

                      
                    </div> */}
                    </div>

                    <div className='row TeamCoachEditProfilediv-7 TeamCoachEditProfileimpdiv-style'>
                        <div className='col-4'>
                            <div className='row TeamCoachEditProfilemainrow-1'>
                                <div className='col-2'>
                                    <img className='TeamCoachEditProfilecommon-style-1' src={img8} alt=''></img>
                                </div>
                                <div className='col-5'>
                                    <label className='TeamCoachEditProfilelabel'>State</label>
                                </div>
                                <div className='col-5'>
                                    <div className="col">
                                        <div className="dropdown dropdowninput">
                                            <div className='TeamCoachEditProfilelabel-2'>
                                                <select className="form-select" aria-label="Default select example" name="state" value={data.state} onChange={handleChange}>
                                                    <option selected value="1">Select your state</option>
                                                    <option value="Kerala">Kerala</option>
                                                    <option value="Karnataka">Karnataka</option>
                                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-4 TeamCoachEditProfilemainrow-right-1'>
                            <div className='row TeamCoachEditProfilemainrow-1'>
                                <div className='col-2'>
                                    <img className='TeamCoachEditProfilecommon-style-1' src={img5} alt=''></img>
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
                    </div>


                  

                    <div className='row TeamCoachEditProfilediv-10'>
                        <div className='col'>
                            <button className='TeamCoachEditProfilebutton-1 btn btn-primary' onClick={handleUpdate}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamCoachEditProfile;
