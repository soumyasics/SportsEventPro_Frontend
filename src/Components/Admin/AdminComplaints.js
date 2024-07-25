import React, { useEffect, useState } from 'react'
import './AdminComplaints.css'
import { Link } from 'react-router-dom'
import img from '../../Assets/Group 90(1).svg'
import img2 from "../../Assets/Back Button.svg"
import axiosInstance from '../Constant/BaseURL'

function AdminComplaints() {
    const url = axiosInstance.defaults.url;
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axiosInstance.post('/viewAllComplaints')
            .then(res => {
                console.log(res);
                setUserData(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);







    return (





<div class="container text-center">
  <div class="row">
    <div class="col">

    <div className='AdminComplaints-MainDiv'>

{/* seperated div for backbutton and text */}
<div className='col  AdminComplaints-headercontainer-container-1'>

    <Link to='/admindashboard'><button className='AdminComplaintsMainDiv-headercontainer-BackButton'><img src={img2} alt=' ' /></button></Link>
    <h1 className='AdminComplaintsMainDiv-headercontainer-h1'>Complaints</h1>

</div>
{userData.map((e, index) => (


<div className='AdminComplaints-Body'>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>

        <h1 className='AdminComplaints-Body-h2'>{e.complaint}</h1>

    </div>

    <div className='AdminComplaints-content-content'>

        <img src={img} alt='' />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
            <p className='AdminComplaints-content-p'>{e.name}{/* TeamCoach name*/}</p>
            <p className='AdminComplaints-content-p-2'>{e.userRole}</p>
        </div>
        <ul>
        <li>
            <p className='AdminComplaints-content-p'>{e.date}{/* review date here */}</p>
        </li>
        </ul>

    </div>

</div>
 ))}


</div>

    </div>
   
  </div>
</div>







            
           


    )

}

export default AdminComplaints
