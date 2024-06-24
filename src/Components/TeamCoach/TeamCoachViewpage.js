import React, { useEffect, useState } from 'react'
import './TeamCoachViewpage.css'
import img1 from '../../Assets/solar_phone-bold-duotone.jpg'
import img2 from '../../Assets/ri_open-arm-fill.jpg'
import img3 from '../../Assets/mdi_city.jpg'
import img4 from '../../Assets/material-symbols_mail-outline.jpg'
import img5 from '../../Assets/majesticons_pin-line.jpg'
import img6 from '../../Assets/gg_list.jpg'
import img7 from '../../Assets/frame.jpg'
import img8 from '../../Assets/ep_place.jpg'
import img9 from '../../Assets/arcticons_asr-licence.jpg'
import img10 from '../../Assets/emojione_flag-for-india.jpg'
import img11 from '../../Assets/carbon_location-filled.jpg'
import img12 from '../../Assets/arcticons_team-fight-tactics.jpg'
import axios from 'axios'
import axiosInstance from '../Constant/BaseURL'
import { useParams } from 'react-router-dom'

const url = axiosInstance.defaults.url;

console.log("url,", url);












function TeamCoachViewpage() {





                const {id} = useParams()
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

    
  return (
    <div>
        <div className='container'>
<div className='row '>
    <div className='col TeamCoachViewpagediv-1'>
        <h1 className='TeamCoachViewpagetext-1'>Coach Details</h1>
         </div>
    <div className='col-4 TeamCoachViewpagediv-2'>
        
        <div className='TeamCoachViewpageimgdiv-1-1'>
<label className='TeamCoachViewpageimg-1-backend'>        <img src={`${url}/${userData?.profilePic?.filename}`}/>
</label><br></br>
<label className='TeamCoachViewpageimg-2-backend'>{userData ? userData.name : ''}</label><br></br>
</div>

    </div>


</div>














<div className='row TeamCoachViewpagediv-3 TeamCoachViewpageimpdiv-style'>


<div className='col '>

    <div className='row TeamCoachViewpagemainrow-1'>

<div className='col-2'>
    <img className='TeamCoachViewpagecommon-style-1' src={img1}></img>
</div>

<div className='col-5'>
        <label className='TeamCoachViewpagelabel' >Contact Number</label>

        </div>

        <div className='col-5'>
        <label className='TeamCoachViewpagelabel-2'>{userData ? userData.contact : ''}</label>

        </div>



</div>

</div>

<div className='col TeamCoachViewpagemainrow-right-1'>


<div className='row TeamCoachViewpagemainrow-1'>

<div className='col-2'>
<img className='TeamCoachViewpagecommon-style-1' src={img6}></img>
</div>

<div className='col-5'>
<label className='TeamCoachViewpagelabel'>Select Catogory</label>

        </div>

        <div className='col-5'>
        <label className='TeamCoachViewpagelabel-2'>{userData ? userData.category : ''}</label>

        </div>



</div>







</div>





</div>























<div className='row TeamCoachViewpagediv-4 TeamCoachViewpageimpdiv-style'>
<div className='col'>

    <div className='row TeamCoachViewpagemainrow-1'>

<div className='col-2'>
<img className='TeamCoachViewpagecommon-style-1' src={img4}></img>
</div>

<div className='col-5'>
<label className='TeamCoachViewpagelabel'>Email id</label>

        </div>

        <div className='col-5'>
        <label className='TeamCoachViewpagelabel-2'>{userData ? userData.email : ''}</label>

        </div>



</div>

</div>

<div className='col TeamCoachViewpagemainrow-right-1'>


<div className='row TeamCoachViewpagemainrow-1'>

<div className='col-2'>
<img className='TeamCoachViewpagecommon-style-1' src={img12}></img>
</div>

<div className='col-5'>
<label className='TeamCoachViewpagelabel'>Team Name</label>

        </div>

        <div className='col-5'>
        <label className='TeamCoachViewpagelabel-2'>{userData ? userData.teamName : ''}</label>

        </div>



</div>








</div>













</div>









<div className='row TeamCoachViewpagediv-5 TeamCoachViewpageimpdiv-style'>

<div className='col'>

    <div className='row TeamCoachViewpagemainrow-1'>

<div className='col-2'>
<img className='TeamCoachViewpagecommon-style-1' src={img7}></img>
</div>

<div className='col-5'>
<label className='TeamCoachViewpagelabel'>Total team members</label>

        </div>

        <div className='col-5'>
        <label className='TeamCoachViewpagelabel-2'>{userData ? userData.totalteammembers: ''}</label>

        </div>



</div>


</div>
<div className='col TeamCoachViewpagemainrow-right-1'>


<div className='row TeamCoachViewpagemainrow-1'>

<div className='col-2'>
<img className='TeamCoachViewpagecommon-style-1' src={img11}></img>
</div>

<div className='col-5'>
<label className='TeamCoachViewpagelabel'>Address</label>

        </div>

        <div className='col-5'>
        <label className='TeamCoachViewpagelabel-2'>{userData ? userData.address : ''}</label>

        </div>



</div>







</div>









</div>










<div className='row TeamCoachViewpagediv-6 TeamCoachViewpageimpdiv-style'>
<div className='col'>

    <div className='row TeamCoachViewpagemainrow-1'>

<div className='col-2'>
<img className='TeamCoachViewpagecommon-style-1' src={img5}></img>
</div>

<div className='col-5'>
<label className='TeamCoachViewpagelabel'>Pincode</label>

        </div>

        <div className='col-5'>
        <label className='TeamCoachViewpagelabel-2'>{userData ? userData.pincode : ''}</label>

        </div>



</div>


</div>
<div className='col TeamCoachViewpagemainrow-right-1'>


<div className='row TeamCoachViewpagemainrow-1'>

<div className='col-2'>
<img className='TeamCoachViewpagecommon-style-1' src={img3}></img>
</div>

<div className='col-5'>
<label className='TeamCoachViewpagelabel'>City</label>

        </div>

        <div className='col-5'>
        <label className='TeamCoachViewpagelabel-2'>{userData ? userData.city : ''}</label>

        </div>



</div>







</div>



</div>



<div className='row TeamCoachViewpagediv-7 TeamCoachViewpageimpdiv-style'>

<div className='col'>

    <div className='row TeamCoachViewpagemainrow-1'>

<div className='col-2'>
<img className='TeamCoachViewpagecommon-style-1' src={img8}></img>
</div>

<div className='col-5'>
<label className='TeamCoachViewpagelabel'>State</label>

        </div>

        <div className='col-5'>
        <label className='TeamCoachViewpagelabel-2'>{userData ? userData.state : ''}</label>

        </div>



</div>

</div>
<div className='col TeamCoachViewpagemainrow-right-1'>


<div className='row TeamCoachViewpagemainrow-1'>

<div className='col-2'>
<img className='TeamCoachViewpagecommon-style-1' src={img9}></img>
</div>

<div className='col-5'>
<label className='TeamCoachViewpagelabel'>Coach License</label>

        </div>

        <div className='col-5'>
        <label className='TeamCoachViewpagelabel-2'></label>

        </div>



</div>







</div>

</div>



<div className='row TeamCoachViewpagediv-8 TeamCoachViewpageimpdiv-style'>

<div className='col'>

    <div className='row TeamCoachViewpagemainrow-1'>

<div className='col-2'>
<img className='TeamCoachViewpagecommon-style-1' src={img10}></img>
</div>

<div className='col-5'>
<label className='TeamCoachViewpagelabel'>Country</label>

        </div>

        <div className='col-5'>
        <label className='TeamCoachViewpagelabel-2'>{userData ? userData.country : ''}</label>

        </div>



</div>

</div>
<div className='col TeamCoachViewpagemainrow-right-1'>


<div className='row TeamCoachViewpagemainrow-1'>

<div className='col-2'>
<img className='TeamCoachViewpagecommon-style-1' src={img2}></img>
</div>

<div className='col-5'>
<label className='TeamCoachViewpagelabel'>Experience</label>

        </div>

        <div className='col-5'>
        <label className='TeamCoachViewpagelabel-2'></label>

        </div>



</div>







</div>

</div>







<div className='row TeamCoachViewpagediv-11'>
    <button className='TeamCoachViewpagediv-11-button'>Edit</button>


</div>
















</div>
</div>
  )
}

export default TeamCoachViewpage