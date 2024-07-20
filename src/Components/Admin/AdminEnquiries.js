import React from 'react'
import './AdminEnquiries.css'
import { Link } from 'react-router-dom'
import img2 from "../../Assets/Back Button.svg"


function AdminEnquiries() {

    return (

        <div>

            <div className='AdminEnquiries-MainDiv'>

                {/* seperated div for backbutton and text */}
                <div className='col  AdminEnquiries-headercontainer-container-1'>

                    <Link to='/admindashboard'><button className='AdminEnquiriesMainDiv-headercontainer-BackButton'><img src={img2} alt=' ' /></button></Link>
                    <h1 className='AdminEnquiriesMainDiv-headercontainer-h1'>Enquiries</h1>

                </div>

                <div style={{display:'flex',flexDirection:'row',gap:'30px',alignItems:'center',flexWrap:'wrap'}}>

                    {/* array map from here */}

                    {/* single card start */}
                    <div className='AdminEnquiries-Body'>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>

                            <h1 className='AdminEnquiries-Body-h1'>Enquiry Type : Registration</h1>
                            <h2 className='AdminEnquiries-Body-h2'>Registration Failed. Unable to register !</h2>

                        </div>

                        <div>

                            <ul style={{ display: 'flex', flexDirection: 'row', gap: '30px' }}>

                                <li className='AdminEnquiries-Body-h1'>Priya</li>
                                <li className='AdminEnquiries-Body-h1'>1234512345</li>
                                <li className='AdminEnquiries-Body-h1'>priya12@gmail.com</li>
                                <li className='AdminEnquiries-Body-h1'>Feb, 2024</li>

                            </ul>

                        </div>

                    </div>
                    {/* single card end */}

                </div>

            </div>

        </div>

    )

}

export default AdminEnquiries
