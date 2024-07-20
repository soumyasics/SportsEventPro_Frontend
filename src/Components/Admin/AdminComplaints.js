import React from 'react'
import './AdminComplaints.css'
import { Link } from 'react-router-dom'
import img from '../../Assets/Group 90(1).svg'
import img2 from "../../Assets/Back Button.svg"

function AdminComplaints() {

    return (

        <div>

            <div className='AdminComplaints-MainDiv'>

                {/* seperated div for backbutton and text */}
                <div className='col  AdminComplaints-headercontainer-container-1'>

                    <Link to='/admindashboard'><button className='AdminComplaintsMainDiv-headercontainer-BackButton'><img src={img2} alt=' ' /></button></Link>
                    <h1 className='AdminComplaintsMainDiv-headercontainer-h1'>Enquiries</h1>

                </div>

                <div className='AdminComplaints-Body'>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>

                        <h1 className='AdminComplaints-Body-h2'>Bad Experience</h1>

                    </div>

                    <div className='AdminComplaints-content-content'>

                        <img src={img} alt='' />
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
                            <p className='AdminComplaints-content-p'>Priya{/* TeamCoach name*/}</p>
                            <p className='AdminComplaints-content-p-2'>TeamCoach</p>
                        </div>
                        <li>
                            <p className='AdminComplaints-content-p'>Feb, 2024{/* review date here */}</p>
                        </li>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default AdminComplaints
