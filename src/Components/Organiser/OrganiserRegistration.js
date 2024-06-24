import React from 'react'
import './OrgnaiserRegistration.css'

function OrganiserRegistration() {

    return (

        <div>

            <div className = 'OrganiserRegistration-Div-1'>

                <div className = 'OrganiserRegistration-Heading-Contain'>

                    <h1 className = 'OrganiserRegistration-Heading-h1-1'>Organizer Registration</h1>
                    <h1 className = 'OrganiserRegistration-Heading-h1-2'>Fill In The Details</h1>

                </div>

                <div className = 'OrganiserRegistration-Content-Contain'>

                    <div className = 'OrganiserRegistration-Content-Left-Column'>

                        {/* input field: name */}
                        <div className = 'OrganiserRegistration-Content-Input-Start'>

                            <h1 className = 'OrganiserRegistration-Content-h1'>Name</h1>
                            <input type = 'text' placeholder = 'Enter Your Name' className = 'OrganiserRegistration-Content-input-1'/>
                        
                        </div>

                        {/* input field: City */}
                        <div className = 'OrganiserRegistration-Content-Input'>

                            <h1 className = 'OrganiserRegistration-Content-h1'>City</h1>
                            <input type = 'text' placeholder = 'Enter City' className = 'OrganiserRegistration-Content-input-1'/>
                        
                        </div>
                        
                        {/* input field: Country */}
                        <div className = 'OrganiserRegistration-Content-Input'>
                            
                            <h1 className = 'OrganiserRegistration-Content-h1'>Country</h1>

                            <select className = "OrganiserRegistration-Content-Input-Country" aria-label="Default select example">                                
                                
                                <option className = 'OrganiserRegistration-Content-Input-Select-Option' selected>Select Your Country</option>
                        
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>

                            </select>

                        </div>

                        {/* input field: Email ID */}
                        <div className = 'OrganiserRegistration-Content-Input'>

                            <h1 className = 'OrganiserRegistration-Content-h1'>Email ID</h1>
                            <input type = 'text' placeholder = 'Enter Email ID' className = 'OrganiserRegistration-Content-input-1'/>
                        
                        </div>

                        {/* input field: Address */}
                        <div className = 'OrganiserRegistration-Content-Input'>

                            <h1 className = 'OrganiserRegistration-Content-h1'>Address</h1>
                            <input type = 'text' placeholder = 'Enter Address' className = 'OrganiserRegistration-Content-input-1'/>
                        
                        </div>

                        {/* input field: Password */}
                        <div className = 'OrganiserRegistration-Content-Input'>

                            <h1 className = 'OrganiserRegistration-Content-h1'>Password</h1>
                            <input type = 'password' placeholder = 'Enter Password' className = 'OrganiserRegistration-Content-input-password'/>
                        
                        </div>

                        {/* input field: ConfirmPassword */}
                        <div className = 'OrganiserRegistration-Content-Input-End'>

                            <h1 className = 'OrganiserRegistration-Content-h1'>Confirm Password</h1>
                            <input type = 'password' placeholder = 'Re-enter Your Password' className = 'OrganiserRegistration-Content-input-password'/>
                        
                        </div>

                    </div>

                    <div>

                        {/* input field: Photo */}
                        <div className = 'OrganiserRegistration-Content-Input-Start'>

                            <h1 className = 'OrganiserRegistration-Content-h1'>Photo</h1>
                            <input type = 'file' placeholder = 'Upload Photo' className = 'OrganiserRegistration-Content-input-photo'/>
                        
                        </div>

                        {/* input field: Pincode */}
                        <div className = 'OrganiserRegistration-Content-Input'>

                            <h1 className = 'OrganiserRegistration-Content-h1'>Pincode</h1>
                            <input type = 'text' placeholder = 'Enter Pincode' className = 'OrganiserRegistration-Content-input-1'/>
                        
                        </div>

                        {/* input field: State */}
                        <div className = 'OrganiserRegistration-Content-Input'>

                            <h1 className = 'OrganiserRegistration-Content-h1'>State</h1>
                            <select className = "OrganiserRegistration-Content-Input-Country" aria-label="Default select example">
                                
                                
                                <option className = 'OrganiserRegistration-Content-Input-Select-Option' selected>Select Your Country</option>
                        
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>

                            </select>
                        
                        </div>

                        {/* input field: Contact Number */}
                        <div className = 'OrganiserRegistration-Content-Input'>

                            <h1 className = 'OrganiserRegistration-Content-h1'>Contact Number</h1>
                            <input type = 'text' placeholder = 'Enter Your Contact Number' className = 'OrganiserRegistration-Content-input-1'/>
                        
                        </div>

                        {/* input field: Organiser License*/}
                        <div className = 'OrganiserRegistration-Content-Input'>

                            <h1 className = 'OrganiserRegistration-Content-h1'>Organiser License</h1>
                            <input type = 'file' placeholder = 'Upload Document' className = 'OrganiserRegistration-Content-input-photo'/>
                        
                        </div>

                        {/* input field: Description */}
                        <div className = 'OrganiserRegistration-Content-Input'>

                            <h1 className = 'OrganiserRegistration-Content-h1'>Description</h1>
                            <input type = 'text' placeholder = 'Description' className = 'OrganiserRegistration-Content-input-description'/>
                        
                        </div>

                    </div>

                </div>

                <div>

                    <button className = 'btn btn-dark OrganiserRegistration-button'>Register</button>

                </div>

            </div>

        </div>

    )

}

export default OrganiserRegistration
