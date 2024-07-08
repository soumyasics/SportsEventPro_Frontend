import React from 'react'
import './TeamCoachEditTeamMembers.css'
import img from "../../Assets/Back Button.svg"
import tempimg from '../../Assets/image 42.png'
import img2 from '../../Assets/circum_edit.svg'
import img3 from '../../Assets/ri_open-arm-fill.svg'
import img4 from '../../Assets/solar_phone-bold-duotone.svg'
import img5 from '../../Assets/material-symbols_mail-outline.jpg'
import img6 from '../../Assets/majesticons_pin-line.jpg'
import img7 from '../../Assets/ep_place.jpg'
import img9 from '../../Assets/carbon_location-filled.jpg'
import img10 from '../../Assets/mdi_city.jpg'
import img12 from '../../Assets/gg_list.jpg'
import img15 from '../../Assets/subway_world-1.jpg'


function TeamCoachEditTeamMembers() {
  return (
    <div>

    <div className='container TeamCoachEditTeamMembers-container'>

        {/* div for the header containing back button, "Edit Profile" text and profile image */}
        <div className='row TeamCoachEditTeamMembers-headercontainer'>

            {/* seperated div for backbutton and text */}
            <div className='col  TeamCoachEditTeamMembers-headercontainer-container-1'>

                <button className='TeamCoachEditTeamMembers-headercontainer-BackButton'><img src={img} alt=' ' /></button>
                <h1 className='TeamCoachEditTeamMembers-headercontainer-h1'>Edit Team Members</h1>

            </div>

            {/* seperated div for the profile picture image */}
            <div className='col TeamCoachEditTeamMembers-headercontainer-container-2'>

                <img src={tempimg} alt='' className='TeamCoachEditTeamMembers-headercontainer-container-2-profilepicture' />
                {/* ^ put organiser profile pic in src */}


                <input type='file' className='TeamCoachEditTeamMembers-headercontainer-container-2-editimgbutton'/>
                    <img src={img2} alt='' className='TeamCoachEditTeamMembers-headercontainer-container-2-editimg-icon' />
                {/* this is edit profile pic button. */}



            </div>

        </div>

        <div className='row TeamCoachEditTeamMembers-body'>

            <div className='col-lg-6 row TeamCoachEditTeamMembers-body-left'>

                {/* Name */}
                <div className='col row TeamCoachEditTeamMembers-body-common'>

                    <div className='col TeamCoachEditTeamMembers-body-common-img-contain'>
                        <img src={img3} alt=' ' className='TeamCoachEditTeamMembers-body-common-img' />
                        <label className='TeamCoachEditTeamMembers-body-common-label'>Name</label>
                    </div>

                    <input type='text' className='col TeamCoachEditTeamMembers-body-input'  />

                </div>

                {/* Contact number */}
                <div className='col row TeamCoachEditTeamMembers-body-common'>

                    <div className='col TeamCoachEditTeamMembers-body-common-img-contain'>
                        <img src={img4} alt=' ' className='TeamCoachEditTeamMembers-body-common-img' />
                        <label className='TeamCoachEditTeamMembers-body-common-label'>Contact Number</label>
                    </div>

                    <input type='text' className='col TeamCoachEditTeamMembers-body-input' />

                </div>

                {/* Email Id */}
                <div className='col row TeamCoachEditTeamMembers-body-common'>

                    <div className='col TeamCoachEditTeamMembers-body-common-img-contain'>
                        <img src={img5} alt=' ' className='TeamCoachEditTeamMembers-body-common-img' />
                        <label className='TeamCoachEditTeamMembers-body-common-label'>Email ID</label>
                    </div>

                    <input type='text' className='col TeamCoachEditTeamMembers-body-input' />

                </div>
                



                

                {/* Pincode */}
                <div className='col row TeamCoachEditTeamMembers-body-common'>

                    <div className=' col TeamCoachEditTeamMembers-body-common-img-contain'>
                        <img src={img6} alt=' ' className='TeamCoachEditTeamMembers-body-common-img' />
                        <label className='TeamCoachEditTeamMembers-body-common-label'>Pincode</label>
                    </div>

                    <input type='text' className=' col TeamCoachEditTeamMembers-body-input ' />

                </div>

                {/* Country */}
                <div className='col row TeamCoachEditTeamMembers-body-common'>

                    <div className='col TeamCoachEditTeamMembers-body-common-img-contain'>
                        <img src={img15} alt=' ' className='TeamCoachEditTeamMembers-body-common-img' />
                        <label className='TeamCoachEditTeamMembers-body-common-label'>Country</label>
                    </div>

                    <select className='col TeamCoachEditTeamMembers-body-input-state' aria-label="Default select example">

                        <option className='OrganiserRegistration-Content-Input-Select-Option' selected name="country" >India</option>
                        <option value="Goa">Uk</option>
                        <option value="Tamil Nadu">USA</option>
                        <option value="Karnataka">JAPAN</option>
                        <option value="Maharashtra">BRAZIL</option>

                    </select>

                </div>






            </div>

            <div className=' col-lg-6 row TeamCoachEditTeamMembers-body-right'>

                {/* Catogory */}
                <div className='col row TeamCoachEditTeamMembers-body-common'>

                    <div className='col TeamCoachEditTeamMembers-body-common-img-contain'>
                        <img src={img12} alt=' ' className='TeamCoachEditTeamMembers-body-common-img' />
                        <label className='TeamCoachEditTeamMembers-body-common-label'> Catogory</label>
                    </div>

                    <select className='col TeamCoachEditTeamMembers-body-input-state' aria-label="Default select example">

                        <option className='OrganiserRegistration-Content-Input-Select-Option' selected name="state" value="Kerala">Cricket</option>
                        <option value="Goa">Football</option>
                        <option value="Tamil Nadu">Basket Ball</option>
                        <option value="Karnataka">Chess</option>
                        <option value="Maharashtra">Hockey</option>

                    </select>

                </div>

                {/* Address */}
                <div className='col row TeamCoachEditTeamMembers-body-common'>

                    <div className='col TeamCoachEditTeamMembers-body-common-img-contain'>
                        <img src={img9} alt=' ' className='TeamCoachEditTeamMembers-body-common-img' />
                        <label className='TeamCoachEditTeamMembers-body-common-label'>Address</label>
                    </div>

                    <input type='text' className='col TeamCoachEditTeamMembers-body-input'  />

                </div>

                {/* City */}
                <div className='col row TeamCoachEditTeamMembers-body-common'>

                    <div className='col TeamCoachEditTeamMembers-body-common-img-contain'>
                        <img src={img10} alt=' ' className='TeamCoachEditTeamMembers-body-common-img' />
                        <label className='TeamCoachEditTeamMembers-body-common-label'>City</label>
                    </div>

                    <input type='text' className='col TeamCoachEditTeamMembers-body-input' />

                </div>

                {/* State */}
                <div className='col row TeamCoachEditTeamMembers-body-common'>

                    <div className='col TeamCoachEditTeamMembers-body-common-img-contain'>
                        <img src={img7} alt=' ' className='TeamCoachEditTeamMembers-body-common-img' />
                        <label className='TeamCoachEditTeamMembers-body-common-label'> State</label>
                    </div>

                    <select className='col TeamCoachEditTeamMembers-body-input-state' aria-label="Default select example">

                        <option className='OrganiserRegistration-Content-Input-Select-Option' selected name="state" value="Kerala">Kerala</option>
                        <option value="Goa">Goa</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Karnataka">Hariyana</option>
                        <option value="Maharashtra">J&K</option>

                    </select>

                </div>
            </div>

        </div>

        <button className='btn btn-primary TeamCoachEditTeamMembers-body-button'>Update</button>

    </div>

</div>

)

}

export default TeamCoachEditTeamMembers