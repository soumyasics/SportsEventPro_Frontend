import './OrganiserTicketGen2.css'
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from "../Constant/BaseURL";
import img2 from "../../Assets/Back Button.svg"


function OrganiserTicketGen2() {
    const navigate = useNavigate()
    const id=localStorage.getItem('organizerId')
        const [userData, setUserData] = useState([]);
        const url = axiosInstance.defaults.url;
        console.log("url,", url);
        useEffect(() => {
    
            let res;
    
    
            axiosInstance.post(`viewEventByOrganizerId/${id}`).then(res => {
    
                console.log(res);
    
                if ((res.data.data).length > 0)
                    setUserData(res.data.data);
                else
                    setUserData(null)
                console.log(res.data.data);
            }).catch(err => {
                console.log(err);
            })
    
        }, []);
        useEffect(() => {
            console.log("users", userData);
        })
    return (

        <div className='OrganiserTicketGen2'>

            <div className='OrganiserTicketGen2MainDiv'>

                {/* seperated div for backbutton and text */}
                <div className='col  OrganiserTicketGen2-headercontainer-container-1'>

                    <div style={{ display: 'flex', flexDirection: 'row', width: 'max-content' }}>

                        <Link to='/OrganizerDashboard'><button className='OrganiserTicketGen2-headercontainer-BackButton'><img src={img2} alt=' ' /></button></Link>
                        <h1 className='OrganiserTicketGen2-headercontainer-h1'>Ticket Generation</h1>

                    </div>

                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', alignItems: 'center' }}>

               

                    <div style={{ display: 'flex', flexDirection: 'row', gap: '45px', alignItems: 'center', width: '100%' }}>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>

                            <div>

                                <label className='OrganiserTicketGen2-label-h1'>Event Name</label>
                                {/* <input className='OrganiserTicketGen2-input' type='text' placeholder='Enter The Ticket Price' /> */}
                                <select className="OrganiserTicketGen-Content-Input-Country" aria-label="Default select example">

<option className='OrganiserTicketGen-Content-Input-Select-Option'>Select Event</option>

{/* <option value="Kerala">Goa</option>
<option value="Tamil Nadu">Tamil Nadu</option>
<option value="Karnataka">Karnataka</option>
<option value="Maharashtra">Maharashtra</option> */}
{userData.length ? (
    userData.map((a) => {
      return (
        <option key={a._id} value={a?._id}>
          {a?.name}
        </option>
      );
    })
  ) : (
    <option>No Events available</option>
  )}

</select>
                            </div>

                            <div>

                                <label className='OrganiserTicketGen2-label-h1'>Ticket Opening Date</label>
                                <input className='OrganiserTicketGen2-input-date' type='date' />

                            </div>

                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>

                            <div>

                                <label className='OrganiserTicketGen2-label-h1'>Seating Capacity</label>
                                <input className='OrganiserTicketGen2-input' type='text' placeholder='Enter Total Seating Capacity' />

                            </div>

                            <div>

                                <label className='OrganiserTicketGen2-label-h1'>Ticket Closing Date</label>
                                <input className='OrganiserTicketGen2-input-date' type='date' />

                            </div>

                        </div>

                    </div>

                    <div>

                        <Link to='OrganiserTicketGen2' style={{ textDecoration: 'none' }}><button className='OrganiserTicketGen2-button'>Generate</button></Link>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default OrganiserTicketGen2
