import React, { useState } from 'react'
import './OrganiserRegistration.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import axiosInstance from '../Constant/BaseURL'
import axiosMultipartInstance from '../Constant/multiPart'
import { useNavigate } from 'react-router-dom'

function OrganiserRegistration() {

    const navigate = useNavigate()
    const [icon, setIcon] = useState(faEye)
    const [reIcon, setReIcon] = useState(faEye)


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
        name: '',
        pincode: '',
        state: 'Kerala',
        contactnumber: '',
        license: '',
        password: '',
        image: '',
        address: '',
        city: '',
        country: 'India',
        email: '',
        description: '',
        confirmpassword: '',
        experience: 0

    })
    const [selectedCategory, setSelectedCategory] = useState('');

    const [errors, setErrors] = useState({

        name: '',
        pincode: '',
        contactnumber: '',
        license: '',
        password: '',
        image: '',
        address: '',
        city: '',
        email: '',
        description: '',
        confirmpassword: '',
        experience: ''
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
        errors.contactnumber = validateContact('Contact number', data.contactnumber)
        errors.pincode = validatePincode('Pincode', data.pincode);
        errors.state = validateField('States', data.state)
        errors.address = validateField('Address', data.address);
        errors.city = validateField('City', data.city);
        errors.country = validateField('Country', data.country);
        errors.country = validateField('experience', data.experience);

        errors.description = validateField('description', data.description);

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
        let formData = new FormData();

        formData.append('name', data.name);

        formData.append('pincode', data.pincode);
        formData.append('state', data.state);
        formData.append('contact', data.contactnumber);
        formData.append('password', data.password);
        formData.append('files', data.image);
        formData.append('files', data.license);
        formData.append('address', data.address);
        formData.append('city', data.city);
        formData.append('country', data.country);
        formData.append('email', data.email);
        formData.append('experience', data.experience);
        formData.append('description', data.description);


        console.log(formData);
        axiosMultipartInstance.post('registerOrganizer', formData)
            .then(response => {
                console.log(response);
                if (response.data.status == 200) {
                    alert(response.data.msg)
                    navigate('/OrganizerLogin')
                } else
                    alert(response.data.msg)


            })
            .catch(error => {
                console.error(error);


            })

    }

    return (

        <div>

            <div className='OrganiserRegistration-Div-1'>

                <div className='OrganiserRegistration-Heading-Contain container'>

                    <h1 className='OrganiserRegistration-Heading-h1-1'>Organizer Registration</h1>
                    <h1 className='OrganiserRegistration-Heading-h1-2'>Fill In The Details</h1>

                </div>
                <form onSubmit={handleSubmit}>
                    <div className='OrganiserRegistration-Content-Contain'>

                        <div className='OrganiserRegistration-Content-Left-Column'>

                            {/* input field: name */}
                            <div className='OrganiserRegistration-Content-Input-Start'>

                                <h1 className='OrganiserRegistration-Content-h1'>Name</h1>
                                <input type='text' placeholder='Enter Your Name' className='OrganiserRegistration-Content-input-1' name="name"
                                    value={data.name}
                                    onChange={handleChange} />

                            </div>
                            {errors.name && <div className="text-danger ">{errors.name}</div>}
                            {/* input field: City */}
                            <div className='OrganiserRegistration-Content-Input'>

                                <h1 className='OrganiserRegistration-Content-h1'>City</h1>
                                <input type='text' placeholder='Enter City' className='OrganiserRegistration-Content-input-1' name="city"
                                    value={data.city}
                                    onChange={handleChange} />
                                {errors.city && <div className="text-danger ">{errors.city}</div>}
                            </div>

                            {/* input field: Country */}
                            <div className='OrganiserRegistration-Content-Input'>

                                <h1 className='OrganiserRegistration-Content-h1'>Country</h1>
                                <input type='text' value="India" className='OrganiserRegistration-Content-input-1' />

                            </div>

                            {/* input field: Email ID */}
                            <div className='OrganiserRegistration-Content-Input'>

                                <h1 className='OrganiserRegistration-Content-h1'>Email ID</h1>
                                <input type='text' placeholder='Enter Email ID' className='OrganiserRegistration-Content-input-1' name="email"
                                    value={data.email}
                                    onChange={handleChange} />
                                {errors.email && <div className="text-danger ">{errors.email}</div>}

                            </div>

                            {/* input field: Address */}
                            <div className='OrganiserRegistration-Content-Input'>

                                <h1 className='OrganiserRegistration-Content-h1'>Address</h1>
                                <input type='text' placeholder='Enter Address' className='OrganiserRegistration-Content-input-1' name="address"
                                    value={data.address}
                                    onChange={handleChange} />
                                {errors.address && <div className="text-danger ">{errors.address}</div>}

                            </div>

                            {/* input field: Password */}
                            <div className='OrganiserRegistration-Content-Input'>

                                <h1 className='OrganiserRegistration-Content-h1'>Password</h1>

                                <div className='OrganiserRegistrationPassword-Container-Div'>

                                    <input type='password' placeholder='Enter Password' id='pword' className='OrganiserRegistration-Content-input-password' name="password"
                                        value={data.password}
                                        onChange={handleChange} />
                                    <button className='Password-Change-Button' type="button" onClick={PasswordButtonOnClick}><FontAwesomeIcon icon={icon} /></button>
                                    {errors.password && <div className="text-danger ">{errors.password}</div>}

                                </div>

                            </div>

                            {/* input field: ConfirmPassword */}
                            <div className='OrganiserRegistration-Content-Input-End'>

                                <h1 className='OrganiserRegistration-Content-h1'>Confirm Password</h1>

                                <div className='OrganiserRegistrationPassword-Container-Div'>

                                    <input type='password' placeholder='Confirm password' name="confirmpassword"
                                        value={data.confirmpassword}
                                        onChange={handleChange} id='rePWord' className='OrganiserRegistration-Content-input-password' />
                                    <button className='Password-Change-Button' type="button" onClick={RePasswordButtonOnClick}><FontAwesomeIcon icon={reIcon} /></button>
                                    {errors.confirmpassword && <div className="text-danger ">{errors.confirmpassword}</div>}

                                </div>
                                
                            </div>

                        </div>

                        <div>

                            {/* input field: Photo */}
                            <div className='OrganiserRegistration-Content-Input-Start'>

                                <h1 className='OrganiserRegistration-Content-h1'>Photo</h1>
                                <input type='file' placeholder='Upload Photo' className='OrganiserRegistration-Content-input-photo' name="image"

                                    onChange={handleChange} required />

                            </div>

                            {/* input field: Pincode */}
                            <div className='OrganiserRegistration-Content-Input'>

                                <h1 className='OrganiserRegistration-Content-h1'>Pincode</h1>
                                <input type='text' placeholder='Enter Pincode' className='OrganiserRegistration-Content-input-1' name="pincode"
                                    value={data.pincode}
                                    onChange={handleChange} />
                                {errors.pincode && <div className="text-danger ">{errors.pincode}</div>}

                            </div>

                            {/* input field: State */}
                            <div className='OrganiserRegistration-Content-Input'>

                                <h1 className='OrganiserRegistration-Content-h1'>State</h1>
                                <select className="OrganiserRegistration-Content-Input-Country" aria-label="Default select example">


                                    <option className='OrganiserRegistration-Content-Input-Select-Option' selected name="state" value={data.state}
                                        onChange={handleChange}>Kerala</option>

                                    <option value="Kerala">Goa</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Maharashtra">Maharashtra</option>

                                </select>

                            </div>

                            {/* input field: Contact Number */}
                            <div className='OrganiserRegistration-Content-Input'>

                                <h1 className='OrganiserRegistration-Content-h1'>Contact Number</h1>
                                <input type='text' placeholder='Enter Your Contact Number' className='OrganiserRegistration-Content-input-1' name="contactnumber"
                                    value={data.contactnumber}
                                    onChange={handleChange} />
                                {errors.contactnumber && <div className="text-danger ">{errors.contactnumber}</div>}

                            </div>

                            {/* input field: Organiser License*/}
                            <div className='OrganiserRegistration-Content-Input'>

                                <h1 className='OrganiserRegistration-Content-h1'>Organiser License</h1>
                                <input type='file' placeholder='Upload Document' className='OrganiserRegistration-Content-input-photo' name="license"
                                    onChange={handleChange} required />

                            </div>

                            {/* input field: Description */}
                            <div className='OrganiserRegistration-Content-Input'>

                                <h1 className='OrganiserRegistration-Content-h1'>Description</h1>
                                <input type='text' placeholder='Description' className='OrganiserRegistration-Content-input-description' name="description"
                                    value={data.description}
                                    onChange={handleChange} />
                                {errors.description && <div className="text-danger ">{errors.description}</div>}

                            </div>
                            {/* input field: Email ID */}
                            <div className='OrganiserRegistration-Content-Input-2   '>

                                <h1 className='OrganiserRegistration-Content-h1'>Experience</h1>
                                <input type='text' placeholder='Enter Your Experience' className='OrganiserRegistration-Content-input-1' name="experience"
                                    value={data.experience}
                                    onChange={handleChange} />
                                {errors.experience && <div className="text-danger ">{errors.experience}</div>}


                            </div>

                        </div>

                    </div>

                    <div>

                        <button className='btn btn-dark OrganiserRegistration-button' type='submit'>Register</button>

                    </div>
                </form>
            </div>

        </div>

    )

}

export default OrganiserRegistration
