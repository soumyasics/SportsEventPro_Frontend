import React, { useState } from 'react'
import './ViewerRegistration.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import axiosInstance from '../Constant/BaseURL'
import { useNavigate } from 'react-router-dom'

function ViewerRegistration() {


    const [icon, setIcon] = useState(faEye)
    const [reIcon, setReIcon] = useState(faEye)
    const navigate = useNavigate()

    function PasswordButtonOnClick() {

        var pWordState = document.getElementById("pword")


        if (pWordState.type === "password") {

            pWordState.type = "text"
            setIcon(faEyeSlash)

        }

        else {

            pWordState.type = "password"
            setIcon(faEye)

        }

    }

    function RePasswordButtonOnClick() {

        var rePWordState = document.getElementById("rePWord")

        if (rePWordState.type === "password") {

            rePWordState.type = "text"
            setReIcon(faEyeSlash)

        }

        else {

            rePWordState.type = "password"
            setReIcon(faEye)

        }

    }


    const [data, setData] = useState({
        name:'',
        gender:'', 
        address:"", 
        pincode:'', 
        city:'', 
        state:'Kerala', 
        country:'India', 
        contact:'', 
        email:'', 
        password:'',
        confirmpassword:''

    })

    const [errors, setErrors] = useState({

        name:'',
        gender:'', 
        address:"", 
        pincode:'', 
        city:'', 
        state:'', 
        country:'', 
        contact:'', 
        email:'', 
        password:'',
        confirmpassword:''
    })

    let formIsValid;
    
    const handleChange = (event) => {
        console.log("ty", event.target.type);
        const { name, value, files } = event.target;
        if (files) {
            setData(prevData => ({
                ...prevData,
                [name]: files[0]
            }));


        }
        else if (event.target.type == "radio") {
            setData(prevData => ({
                ...prevData,
                [name]: value
            }));
        }

        else {
            setData(prevData => ({
                ...prevData,
                [name]: value
            }));
        }
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: ''
        }));
    };

    function validateContact(fieldName, value) {
        if (!value.trim()) {
            return `${fieldName} is required`;
        } else if (value.length !== 10) {
            return 'Please enter a valid Contact Number';
        }
        return '';
    }

    function validatePincode(fieldName, value) {
        if (!value.trim()) {
            return `${fieldName} is required`;
        } else if (value.length !== 6) {
            return 'Please enter a valid Contact Number';
        }
        return '';
    }


    const validateField = (fieldName, value) => {
        if (!value || !value.trim()) {
            formIsValid = true;
            return `${fieldName} is required`;
        }
        if (fieldName === "Email" && !value.endsWith("@gmail.com")) {
            return "Email must be a valid Email address"
        }
        return '';
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(data);

        let errors = {};
        formIsValid = true;

        errors.email = validateField('Email', data.email);
        errors.name = validateField('Name', data.name);
        errors.contact = validateContact('Contact number', data.contact)
        errors.pincode = validatePincode('Pincode', data.pincode);
        errors.state = validateField('States', data.state)
        errors.address = validateField('Address', data.address);
        errors.city = validateField('City', data.city);
        errors.country = validateField('Country', data.country);


        const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,}$/;
        if (!data.password.trim()) {
            formIsValid = false;
            errors.password = "Password is required";
        } else if (!passwordRegex.test(data.password)) { // Pass the password to the test method
            errors.password =
                "Password must contain at least one number, one special character, and one capital letter";
        }

        if (!data.confirmpassword || !data.confirmpassword.trim()) {
            formIsValid = false;
            errors.confirmpassword = "Confirm Password is required";
        } else if (data.confirmpassword !== data.password) {
            formIsValid = false;
            errors.confirmpassword = "Passwords do not match";
        }

        setErrors(errors);

        if (formIsValid) {
            console.log("data", data);
            BackendData();

        }
    }

    const BackendData = () => {
        console.log("fun called", data);
       

        axiosInstance.post('Viewerreg', data)
            .then(response => {
                console.log(response);
                if (response.data.status == 200) {
                    alert(response.data.msg)
                    navigate('/ViewerLogin')
                } else
                    alert(response.data.msg)


            })
            .catch(error => {
                console.error(error);


            })

    }

    return (

        <div>

            <div className='ViewerRegistration-Div-1'>

                <div className='ViewerRegistration-Heading-Contain container'>

                    <h1 className='ViewerRegistration-Heading-h1-1'>Viewer Registration</h1>
                    <h1 className='ViewerRegistration-Heading-h1-2'>Fill In The Details</h1>

                </div>
                <form onSubmit={handleSubmit}>
                    <div className='ViewerRegistration-Content-Contain'>

                        <div className='ViewerRegistration-Content-Left-Column'>

                            {/* input field: name */}
                            <div className='ViewerRegistration-Content-Input-Start'>

                                <h1 className='ViewerRegistration-Content-h1'>Name</h1>
                                <input type='text' placeholder='Enter Your Name' className='ViewerRegistration-Content-input-1' name="name"
                                    value={data.name}
                                    onChange={handleChange} />

                            </div>
                            {errors.name && <div className="text-danger ">{errors.name}</div>}

                            {/* input field: Gender */}
                            <div className='ViewerRegistration-Content-Input'>

                                <h1 className='ViewerRegistration-Content-h1'>Gender</h1>

                                <div className='ViewerRegistration-Content-Input-2'>



                                    <div className='ms-4'>
                                        <input type='radio' name='gender' id='male' value="Male"  onChange={handleChange} checked={data.gender === 'Male'}/>
                                        <label className='ms-1' />Male
                                    </div>

                                    <div className='ms-3'>
                                        <input type='radio' name='gender' id='female' value='Female' onChange={handleChange} checked={data.gender === 'Female'}/>
                                        <label className='ms-1' />Female
                                    </div>

                                    <div className='ms-3'>
                                        <input type='radio' name='gender' id='other' value='other' onChange={handleChange} checked={data.gender === 'Other'}/>
                                        <label className='ms-1' />Other
                                    </div>

                                </div>

                            </div>

                            {/* input field: Contact Number */}
                            <div className='ViewerRegistration-Content-Input'>

                                <h1 className='ViewerRegistration-Content-h1'>Contact Number</h1>
                                <input type='text' placeholder='Enter Your Contact Number' className='ViewerRegistration-Content-input-1' name="contact"
                                    value={data.contact}
                                    onChange={handleChange} />
                                {errors.contact && <div className="text-danger ">{errors.contact}</div>}

                            </div>



                            {/* input field: Email ID */}
                            <div className='ViewerRegistration-Content-Input'>

                                <h1 className='ViewerRegistration-Content-h1'>Email ID</h1>
                                <input type='text' placeholder='Enter Email ID' className='ViewerRegistration-Content-input-1' name="email"
                                    value={data.email}
                                    onChange={handleChange} />
                                {errors.email && <div className="text-danger ">{errors.email}</div>}

                            </div>

                            {/* input field: City */}
                            <div className='ViewerRegistration-Content-Input'>

                                <h1 className='ViewerRegistration-Content-h1'>City</h1>
                                <input type='text' placeholder='Enter City' value={data.city} className='ViewerRegistration-Content-input-1' name="city" onChange={handleChange} />
                                {errors.city && <div className="text-danger ">{errors.city}</div>}

                            </div>

                            {/* input field: State */}
                            <div className='ViewerRegistration-Content-Input-End'>

                                <h1 className='ViewerRegistration-Content-h1'>State</h1>
                                <select className="ViewerRegistration-Content-Input-Country" aria-label="Default select example" name="state" value={data.state}
                                 onChange={handleChange}>


                                    <option className='ViewerRegistration-Content-Input-Select-Option' selected 
                                       >Kerala</option>

                                    <option value="Goa">Goa</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Maharashtra">Maharashtra</option>

                                </select>

                            </div>




                        </div>

                        <div className='ViewerRegistration-Content-Left-Column'>

                            {/* input field: Country */}
                            <div className='ViewerRegistration-Content-Input-Start'>

                                <h1 className='ViewerRegistration-Content-h1'>Country</h1>
                                <input type='text'  className='ViewerRegistration-Content-input-1' value="India"  />



                            </div>

                            {/* input field: Address */}
                            <div className='ViewerRegistration-Content-Input'>

                                <h1 className='ViewerRegistration-Content-h1'>Address</h1>
                                <input type='text' placeholder='Enter Address' className='ViewerRegistration-Content-input-description' name="address"
                                    value={data.address}
                                    onChange={handleChange} />
                                {errors.address && <div className="text-danger ">{errors.address}</div>}

                            </div>

                            {/* input field: Pincode */}
                            <div className='ViewerRegistration-Content-Input-3'>

                                <h1 className='ViewerRegistration-Content-h1'>Pincode</h1>
                                <input type='text' placeholder='Enter Pincode' className='ViewerRegistration-Content-input-1' name="pincode"
                                    value={data.pincode}
                                    onChange={handleChange} />
                                {errors.pincode && <div className="text-danger ">{errors.pincode}</div>}

                            </div>

                            {/* input field: Password */}
                            <div className='ViewerRegistration-Content-Input'>

                                <h1 className='ViewerRegistration-Content-h1'>Password</h1>

                                <div className='ViewerRegistrationPassword-Container-Div'>

                                    <input type='password' placeholder='Enter Password' id='pword' className='ViewerRegistration-Content-input-password' name="password"
                                        value={data.password}
                                        onChange={handleChange} />
                                    <button className='Password-Change-Button' type="button" onClick={PasswordButtonOnClick}><FontAwesomeIcon icon={icon} /></button>
                                    {errors.password && <div className="text-danger ">{errors.password}</div>}


                                </div>

                            </div>

                            {/* input field: ConfirmPassword */}
                            <div className='ViewerRegistration-Content-Input-Right-End'>

                                <h1 className='ViewerRegistration-Content-h1'>Confirm Password</h1>

                                <div className='ViewerRegistrationPassword-Container-Div'>

                                    <input type='password' placeholder='Re-Enter password' name="confirmpassword"
                                        value={data.confirmpassword}
                                        onChange={handleChange} id='rePWord' className='ViewerRegistration-Content-input-password' />
                                    <button  type="button" className='Password-Change-Button' onClick={RePasswordButtonOnClick}><FontAwesomeIcon icon={reIcon} /></button>
                                    {errors.confirmpassword && <div className="text-danger ">{errors.confirmpassword}</div>}

                                </div>
                            </div>

                        </div>

                    </div>

                    <div>

                        <button className=' ViewerRegistration-button' type='submit'>Register</button>

                    </div>
                </form>
            </div>

        </div>

    )

}

export default ViewerRegistration
