import React from 'react'
import './OrganiserEdiProfile.css'
import img from "../../Assets/Back Button.svg"
import tempimg from '../../Assets/tmpimage.png'
import img2 from '../../Assets/circum_edit.svg'

function OrganiserEditProfile() {
    
    return (

        <div>
            
            {/* div for the header containing back button, "Edit Profile" text and profile image */}
            <div className='container OrganiserEditProfile-headercontainer'>

                {/* seperated div for backbutton and text */}
                <div className='OrganiserEditProfile-headercontainer-container-1'>

                    <button className='OrganiserEditProfile-headercontainer-BackButton'><img src={img} alt=' '/></button>
                    <h1 className='OrganiserEditProfile-headercontainer-h1'>Edit Profile</h1>
                
                </div>

                {/* seperated div for the profile picture image */}
                <div className='OrganiserEditProfile-headercontainer-container-2'>

                    <img src={tempimg}  alt='' className='OrganiserEditProfile-headercontainer-container-2-profilepicture'/>{/* <---- put organiser profile pic in src */}

                    
                    <button className='OrganiserEditProfile-headercontainer-container-2-editimgbutton'>
                        <img src={img2} alt='' className='OrganiserEditProfile-headercontainer-container-2-editimg-icon'/>
                    </button>{/* this is edit profile pic button. */}

                    

                </div>

            </div>

            <div className='OrganiserEditProfile-body'>

                <div className='OrganiserEditProfile-body-left'>

                    <div>

                        

                    </div>

                </div>

            </div>


        </div>

    )

}

export default OrganiserEditProfile
