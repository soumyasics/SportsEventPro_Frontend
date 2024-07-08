import React, { useEffect, useState } from 'react'
import "../../Components/TeamCoach/TeamCoachEditProfile.css"
import img1 from '../../Assets/solar_phone-bold-duotone.jpg'
import img2 from '../../Assets/ri_open-arm-fill.jpg'
import img3 from '../../Assets/mdi_city.jpg'
import img4 from '../../Assets/material-symbols_mail-outline.jpg'
import img5 from '../../Assets/majesticons_pin-line.jpg'
import img6 from '../../Assets/gg_list.jpg'
import img7 from '../../Assets/frame.jpg'
import img8 from '../../Assets/ep_place.jpg'
import img9 from '../../Assets/arcticons_asr-licence.jpg'
import img10 from '../../Assets/subway_world-1.jpg'
import img11 from '../../Assets/carbon_location-filled.jpg'
import img12 from '../../Assets/arcticons_team-fight-tactics.jpg'
import img13 from "../../Assets/circum_edit.jpg"
import img14 from "../../Assets/ri_open-arm-fill.jpg"
import axiosInstance from '../Constant/BaseURL'
import { useParams } from 'react-router-dom'
const url = axiosInstance.defaults.url;

console.log("url,", url);


function TeamCoachEditProfile() {
    const { id } = useParams()
    const [userData, setUserData] = useState();
    useEffect(() => {
        let res;
        axiosInstance.post(`viewTeamCoachById/${id}`).then(res => {
            console.log(res);
            setUserData(res.data.data);
        }).catch(err => {
            console.log(err);
        })
    }, [id]);
    console.log(userData);

    const update = (id) => {
        axiosInstance
          .post(`/editTeamCoachById/${id}`)
          .then((res) => {
                console.log(res);

            if (res.data.status === 200) {
              alert('Team Coach Updated')
                console.log(res);
                
            }
          })
          .catch((error) => {
            console.error("Error!", error);
          });
      };






    return (
        <div>
            <div className='TeamCoachEditProfilemain-1-20'>
                <div class="container text-center">
                    <div className='row '>
                        <div className='col TeamCoachEditProfilediv-1'>
                            <h1 className='TeamCoachEditProfiletext-1'>Coach Details</h1>
                        </div>
                        <div className='col-4 TeamCoachEditProfilediv-2'>
                            <label className='TeamCoachEditProfileimg-1-backend'><img
                                src={`${url}/${userData?.profilePic?.filename}`}
                                className="AdminCoachRequest-img"
                            />
                                <button className='TeamCoachEditProfileimgButton'><img className='TeamCoachEditProfilebuttonimage' src={img13}></img></button>
                            </label><br></br>
                        </div>
                    </div>
                    <div className='row TeamCoachEditProfilediv-3 TeamCoachEditProfileimpdiv-style'>



                    <div className='col-4 '>
                            <div className='row TeamCoachEditProfilemainrow-1'>
                                <div className='col-2'>
                                    <img className='TeamCoachEditProfilecommon-style-1' src={img14}></img>
                                </div>
                                <div className='col-5'>
                                    <label className='TeamCoachEditProfilelabel ' >Name</label>
                                </div>
                                <div className='col-5'>
                                    <input className='TeamCoachEditProfilelabel-2 TeamCoachEditProfileimg-2-backend' type='text' placeholder={userData ? userData.name : ""}></input>
                                </div>
                            </div>
                        </div>











                        <div className='col-4 TeamCoachEditProfilemainrow-right-1'>
                            <div className='row TeamCoachEditProfilemainrow-1'>
                                <div className='col-2'>
                                    <img className='TeamCoachEditProfilecommon-style-1' src={img6}></img>
                                </div>
                                <div className='col-5'>
                                    <label className='TeamCoachEditProfilelabel'>Select Category</label>
                                </div>
                                <div className='col-5'>
                                    <div class="col">
                                        <div class="dropdown dropdowninput">
                                            <div className='TeamCoachEditProfilelabel-2'>
                                                <select class="form-select" aria-label="Default select example" name="category" placeholder={userData ? userData.category : ""}>
                                                    <option value="2">Football</option>
                                                    <option value="3">Cricket</option>
                                                    <option value="4">Hockey</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row TeamCoachEditProfilediv-4 TeamCoachEditProfileimpdiv-style'>
                    <div className='col-4 '>
                            <div className='row TeamCoachEditProfilemainrow-1'>
                                <div className='col-2'>
                                    <img className='TeamCoachEditProfilecommon-style-1' src={img1}></img>
                                </div>
                                <div className='col-5'>
                                    <label className='TeamCoachEditProfilelabel ' >Contact Number</label>
                                </div>
                                <div className='col-5'>
                                    <input className='TeamCoachEditProfilelabel-2 TeamCoachEditProfileimg-2-backend' type='text' placeholder={userData ? userData.contact : ""}></input>
                                </div>
                            </div>
                        </div>



                        <div className='col-4 TeamCoachEditProfilemainrow-right-1'>
                            <div className='row TeamCoachEditProfilemainrow-1'>
                                <div className='col-2'>
                                    <img className='TeamCoachEditProfilecommon-style-1' src={img12}></img>
                                </div>
                                <div className='col-5'>
                                    <label className='TeamCoachEditProfilelabel'>Team Name</label>
                                </div>
                                <div className='col-5'>
                                    <input className='TeamCoachEditProfilelabel-2 TeamCoachEditProfileimg-2-backend' type='text' placeholder={userData ? userData.teamName : ""}></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row TeamCoachEditProfilediv-5 TeamCoachEditProfileimpdiv-style'>

                    <div className='col-4'>
                            <div className='row TeamCoachEditProfilemainrow-1'>
                                <div className='col-2'>
                                    <img className='TeamCoachEditProfilecommon-style-1' src={img4}></img>
                                </div>
                                <div className='col-5'>
                                    <label className='TeamCoachEditProfilelabel'>Email id</label>
                                </div>
                                <div className='col-5'>
                                    <input className='TeamCoachEditProfilelabel-2 TeamCoachEditProfileimg-2-backend' type='text' placeholder={userData ? userData.mail : ""}></input>
                                </div>
                            </div>
                        </div>



                        <div className='col-4 TeamCoachEditProfilemainrow-right-1'>
                            <div className='row TeamCoachEditProfilemainrow-1'>
                                <div className='col-2'>
                                    <img className='TeamCoachEditProfilecommon-style-1' src={img11}></img>
                                </div>
                                <div className='col-5'>
                                    <label className='TeamCoachEditProfilelabel'>Address</label>
                                </div>
                                <div className='col-5'>
                                    <input className='TeamCoachEditProfilelabel-2 TeamCoachEditProfileimg-2-backend' type='text' placeholder={userData ? userData.address : ""}></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row TeamCoachEditProfilediv-6 TeamCoachEditProfileimpdiv-style'>

                    <div className='col-4'>
                            <div className='row TeamCoachEditProfilemainrow-1'>
                                <div className='col-2'>
                                    <img className='TeamCoachEditProfilecommon-style-2' src={img7}></img>
                                </div>
                                <div className='col-5'>
                                    <label className='TeamCoachEditProfilelabel'>Total team members</label>
                                </div>
                                <div className='col-5'>
                                    <input className='TeamCoachEditProfilelabel-2 TeamCoachEditProfileimg-2-backend' type='text' placeholder={userData ? userData.totalteammembers : ""}></input>
                                </div>
                            </div>
                        </div>



                        <div className='col-4 TeamCoachEditProfilemainrow-right-1'>
                            <div className='row TeamCoachEditProfilemainrow-1'>
                                <div className='col-2'>
                                    <img className='TeamCoachEditProfilecommon-style-1' src={img3}></img>
                                </div>
                                <div className='col-5'>
                                    <label className='TeamCoachEditProfilelabel'>City</label>
                                </div>
                                <div className='col-5'>
                                    <input className='TeamCoachEditProfilelabel-2 TeamCoachEditProfileimg-2-backend' type='text' placeholder={userData ? userData.city : ""}></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row TeamCoachEditProfilediv-7 TeamCoachEditProfileimpdiv-style'>


                    <div className='col-4'>
                            <div className='row TeamCoachEditProfilemainrow-1'>
                                <div className='col-2'>
                                    <img className='TeamCoachEditProfilecommon-style-1' src={img5}></img>
                                </div>
                                <div className='col-5'>
                                    <label className='TeamCoachEditProfilelabel'>Pincode</label>
                                </div>
                                <div className='col-5'>
                                    <input className='TeamCoachEditProfilelabel-2 TeamCoachEditProfileimg-2-backend' type='text' placeholder={userData ? userData.pincode : ""}></input>
                                </div>
                            </div>
                        </div>




 
                        <div className='col-4 TeamCoachEditProfilemainrow-right-1'>
                            <div className='row TeamCoachEditProfilemainrow-1'>
                                <div className='col-2'>
                                    <img className='TeamCoachEditProfilecommon-style-1' src={img9}></img>
                                </div>
                                <div className='col-5'>
                                    <label className='TeamCoachEditProfilelabel'>Coach License</label>
                                </div>
                                <div className='col-5'>
                                    <input className='TeamCoachEditProfilelabel-3' type='file'></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row TeamCoachEditProfilediv-8 TeamCoachEditProfileimpdiv-style'>

                    <div className='col-4'>
                            <div className='row TeamCoachEditProfilemainrow-1'>
                                <div className='col-2'>
                                    <img className='TeamCoachEditProfilecommon-style-1' src={img8}></img>
                                </div>
                                <div className='col-5'>
                                    <label className='TeamCoachEditProfilelabel'>State</label>
                                </div>
                                <div className='col-5'>
                                    <div className=''>
                                        <div class="dropdown dropdowninput">
                                            <div className='TeamCoachEditProfilelabel-2 '>
                                                <select class="form-select abc" aria-label="Default select example" name="states" >
                                                    <option value="default">{userData ? userData.state : ""}</option>
                                                    <option value="Jammu & Kashmir" >Jammu & Kashmir</option>
                                                    <option value="Tamilnadu" >Tamilnadu</option>
                                                    <option value="Karnataka" >Karnataka</option>
                                                    <option value="Haryana" >Haryana</option>
                                                    <option value="Andrapradesh" >Andrapradesh</option>
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
                                    <img className='TeamCoachEditProfilecommon-style-1' src={img2}></img>
                                </div>
                                <div className='col-5'>
                                    <label className='TeamCoachEditProfilelabel'>Experience</label>
                                </div>
                                <div className='col-5'>
                                    <input className='TeamCoachEditProfilelabel-2' type='text' placeholder={userData ? userData.xperience : ""}></input>
                                </div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='row TeamCoachEditProfilemainrow-1'>
                                <div className='col-2'>
                                    <img className='TeamCoachEditProfilecommon-style-1' src={img10}></img>
                                </div>
                                <div className='col-5'>
                                    <label className='TeamCoachEditProfilelabel'>Country</label>
                                </div>
                                <div className='col-5'>
                                    <div class="col">
                                        <div class="dropdown dropdowninput">
                                            <div className='TeamCoachEditProfilelabel-2'>
                                                <select class="form-select" aria-label="Default select example" name="country">
                                                    <option selected value="1">{userData ? userData.country : ""}</option>
                                                    <option value="Canada">Canada</option>
                                                    <option value="Japan">Japan</option>
                                                    <option value="Germany">Germany</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='TeamCoachEditProfile-1-5'>
                        <button className='TeamCoachEditProfilediv-11-button' onClick={()=>{update(userData._id)}}>Update</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamCoachEditProfile
