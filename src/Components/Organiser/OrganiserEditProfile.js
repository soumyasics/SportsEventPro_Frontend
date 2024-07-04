import React from 'react'
import './OrganiserEditProfile.css'
import img from "../../Assets/Back Button.svg"
import tempimg from '../../Assets/tmpimage.png'
import img2 from '../../Assets/circum_edit.svg'
import img3 from '../../Assets/ri_open-arm-fill.svg'
import img4 from '../../Assets/solar_phone-bold-duotone.svg'
import img5 from '../../Assets/material-symbols_mail-outline.jpg'
import img6 from '../../Assets/majesticons_pin-line.jpg'
import img7 from '../../Assets/ep_place.jpg'
import img8 from '../../Assets/subway_world-1.svg'
import img9 from '../../Assets/carbon_location-filled.jpg'
import img10 from '../../Assets/mdi_city.jpg'
import img11 from '../../Assets/arcticons_asr-licence.jpg'
import img12 from '../../Assets/gg_list.jpg'


function OrganiserEditProfile() {

    return (

        <div>

            {/* div for the header containing back button, "Edit Profile" text and profile image */}
            <div className='container OrganiserEditProfile-headercontainer'>

                {/* seperated div for backbutton and text */}
                <div className='OrganiserEditProfile-headercontainer-container-1'>

                    <button className='OrganiserEditProfile-headercontainer-BackButton'><img src={img} alt=' ' /></button>
                    <h1 className='OrganiserEditProfile-headercontainer-h1'>Edit Profile</h1>

                </div>

                {/* seperated div for the profile picture image */}
                <div className='OrganiserEditProfile-headercontainer-container-2'>

                    <img src={tempimg} alt='' className='OrganiserEditProfile-headercontainer-container-2-profilepicture' />
                    {/* ^ put organiser profile pic in src */}


                    <button className='OrganiserEditProfile-headercontainer-container-2-editimgbutton'>
                        <img src={img2} alt='' className='OrganiserEditProfile-headercontainer-container-2-editimg-icon' />
                    </button>{/* this is edit profile pic button. */}



                </div>

            </div>

            <div className='container OrganiserEditProfile-body'>

                <div className='OrganiserEditProfile-body-left'>

                    {/* Name */}
                    <div className='OrganiserEditProfile-body-common'>

                        <div className='OrganiserEditProfile-body-common-img-contain'>
                            <img src={img3} alt=' ' className='OrganiserEditProfile-body-common-img' />
                            <label className='OrganiserEditProfile-body-common-label'>Name</label>
                        </div>
                        
                        <input type='text' className='OrganiserEditProfile-body-input' />

                    </div>

                    {/* Contact number */}
                    <div className='OrganiserEditProfile-body-common'>

                        <div className='OrganiserEditProfile-body-common-img-contain'>
                            <img src={img4} alt=' ' className='OrganiserEditProfile-body-common-img' />
                            <label className='OrganiserEditProfile-body-common-label'>Contact Number</label>
                        </div>

                        <input type='text' className='OrganiserEditProfile-body-input' />

                    </div>

                    {/* Email Id */}
                    <div className='OrganiserEditProfile-body-common'>

                        <div className='OrganiserEditProfile-body-common-img-contain'>
                            <img src={img5} alt=' ' className='OrganiserEditProfile-body-common-img' />
                            <label className='OrganiserEditProfile-body-common-label'>Email ID</label>
                        </div>

                        <input type='text' className='OrganiserEditProfile-body-input' />

                    </div>

                    {/* Pincode */}
                    <div className='OrganiserEditProfile-body-common'>

                        <div className='OrganiserEditProfile-body-common-img-contain'>
                            <img src={img6} alt=' ' className='OrganiserEditProfile-body-common-img' />
                            <label className='OrganiserEditProfile-body-common-label'>Pincode</label>
                        </div>

                        <input type='text' className='OrganiserEditProfile-body-input' />

                    </div>

                    {/* State */}
                    <div className='OrganiserEditProfile-body-common'>

                        <div className='OrganiserEditProfile-body-common-img-contain'>
                            <img src={img7} alt=' ' className='OrganiserEditProfile-body-common-img' />
                            <label className='OrganiserEditProfile-body-common-label'>State</label>
                        </div>

                        <input type='text' className='OrganiserEditProfile-body-input' />

                    </div>

                </div>

                <div className='OrganiserEditProfile-body-right'>

                    {/* Country */}
                    <div className='OrganiserEditProfile-body-common'>

                        <div className='OrganiserEditProfile-body-common-img-contain'>
                            <img src={img8} alt=' ' className='OrganiserEditProfile-body-common-img' />
                            <label className='OrganiserEditProfile-body-common-label'>Country</label>
                        </div>
                        
                        <input type='text' className='OrganiserEditProfile-body-input' />

                    </div>

                    {/* Address */}
                    <div className='OrganiserEditProfile-body-common'>

                        <div className='OrganiserEditProfile-body-common-img-contain'>
                            <img src={img9} alt=' ' className='OrganiserEditProfile-body-common-img' />
                            <label className='OrganiserEditProfile-body-common-label'>Address</label>
                        </div>

                        <input type='text' className='OrganiserEditProfile-body-input' />

                    </div>

                    {/* City */}
                    <div className='OrganiserEditProfile-body-common'>

                        <div className='OrganiserEditProfile-body-common-img-contain'>
                            <img src={img10} alt=' ' className='OrganiserEditProfile-body-common-img' />
                            <label className='OrganiserEditProfile-body-common-label'>City</label>
                        </div>

                        <input type='text' className='OrganiserEditProfile-body-input' />

                    </div>

                    {/* Organiser License */}
                    <div className='OrganiserEditProfile-body-common'>

                        <div className='OrganiserEditProfile-body-common-img-contain'>
                            <img src={img11} alt=' ' className='OrganiserEditProfile-body-common-img' />
                            <label className='OrganiserEditProfile-body-common-label'>Organizer License</label>
                        </div>

                        <input type='text' className='OrganiserEditProfile-body-input' />

                    </div>

                    {/* Describe Experience */}
                    <div className='OrganiserEditProfile-body-common'>

                        <div className='OrganiserEditProfile-body-common-img-contain'>
                            <img src={img12} alt=' ' className='OrganiserEditProfile-body-common-img' />
                            <label className='OrganiserEditProfile-body-common-label'>Describe Experience</label>
                        </div>

                        <input type='text' className='OrganiserEditProfile-body-input' />

                    </div>

                </div>

            </div>

            <button className='btn btn-primary OrganiserEditProfile-body-button'>Update</button>


        </div>

    )

}

export default OrganiserEditProfile
