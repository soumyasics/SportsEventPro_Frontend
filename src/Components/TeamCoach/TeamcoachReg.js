import React, { useState } from 'react'
import "./TeamcoachReg.css"
import axiosInstance from '../Constant/BaseURL'
import axiosMultipartInstance from '../Constant/multiPart'
import { useNavigate } from 'react-router-dom'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import toast from 'react-hot-toast'
import { LogarithmicScale } from 'chart.js'

function TeamcoachReg() {

    const navigate = useNavigate()
    const [icon, setIcon] = useState(faEye)
    const [reIcon, setReIcon] = useState(faEye)
    const [teamMembers, setteamMembers] = useState(0)

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

    const [plus, setPlus] = useState(1)
    let count = 0
    const add = (event) => {
        setPlus(plus + 1)
        count = plus + 1
        event.preventDefault()
    }
    const sub = (event) => {
        setPlus(plus - 1)
        count = plus - 1

        event.preventDefault()
    }
    console.log(plus);
    const [data, setData] = useState({
        name: '',
        category: '',
        totalmembers: teamMembers,
        pincode: '',
        state: 'Kerala',
        contactnumber: '',
        certificate: '',
        password: '',
        image: '',
        teamname: '',
        address: '',
        city: '',
        country: 'India',
        email: '',
        experience: '',
        confirmpassword: '',

    })
    const [selectedCategory, setSelectedCategory] = useState('');

    const [errors, setErrors] = useState({

        name: '',
        category: '',
        pincode: '',
        state: '',
        contactnumber: '',
        certificate: '',
        password: '',
        image: '',
        teamname: '',
        address: '',
        city: '',
        country: 'India',
        email: '',
        experience: '',
        confirmpassword: '',
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

            if (name === 'category') {
                setSelectedCategory(value);
                console.log("value= ", value);

            }
        }
        else if (event.target.type == "radio") {
            console.log("value=2 ", value);
            if (value == 'cricket')
                setteamMembers(15)
            else if (value == 'football')
                setteamMembers(18)
            else if (value == 'tennis')
                setteamMembers(4)
            else if (value == 'badminton')
                setteamMembers(4)
            if (value == 'hockey')
                setteamMembers(18)
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
        const numberRegex = /^(?=.*\d)\d+$/;

        if (!value.trim()) {
            formIsValid = false;
            return `${fieldName} is required`;
        } else 
        if (!numberRegex.test(value)) {
            
                 formIsValid = false;
        return "Contact Number must contain numbers Only"
            }else if (value.length !== 10) {
            formIsValid = false;
            return 'Please enter a valid Contact Number';
        }
        return '';
    }

    function validatePincode(fieldName, value) {
        const numberRegex = /^(?=.*\d)\d+$/;

        if (!value.trim()) {
            formIsValid = false;
            return `${fieldName} is required`;
        }else 
            if (!numberRegex.test(value)) {
                
                     formIsValid = false;
            return "Pincode must contain numbers Only"
                }
          else if (value.length !== 6) {
            formIsValid = false;
            return 'Please enter a valid pincode';
        }
        
        return '';
    }


    const validateField = (fieldName, value) => {

        const nameRegex = /^[A-Za-z\s]+$/;
        const nRegex =  /^(?=.*[A-Za-z])[A-Za-z0-9\s]+$/;


        if (!value.trim()) {
            formIsValid = false;
            return `${fieldName} is required`;
        }
         if (fieldName === "Name"){
            if (!nameRegex.test(value)) {
                
                     formIsValid = false;
            return "Name must contain alphabets Only"
                }
         }
         if (fieldName === "City"){
            
            if (!nRegex.test(value)) {
                
                     formIsValid = false;
            return "City must contain alphanumerics Only"
                }
         }
         if (fieldName === "Teamname"){
            if (!nRegex.test(value)) {
                
                     formIsValid = false;
            return "Teamname must contain alphanumerics Only"
                }
         }
      
        
        if (fieldName === "Email" && !value.endsWith("@gmail.com")) {
            formIsValid = false;
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
        errors.category = validateField('Category', data.category);
        errors.pincode = validatePincode('Pincode', data.pincode);
        errors.state = validateField('States', data.state)
        // errors.password = validateField('Password', data.password);
        errors.teamname = validateField('Teamname', data.teamname);
        errors.address = validateField('Address', data.address);
        errors.city = validateField('City', data.city);
        errors.country = validateField('Country', data.country);
        errors.experience = validateField('Experience', data.experience);
        // errors.confirmpassword = validateField('Confirm Password', data.confirmpassword);

        const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,}$/;
        if (!data.password.trim()) {
            formIsValid = false;
            errors.password = "Password is required";
        } else if (!passwordRegex.test(data.password)) { // Pass the password to the test method
            formIsValid = false;
            errors.password =
                "Password must contain at least one number, one special character, and one capital letter";
        }

        if (!data.confirmpassword.trim()) {
            formIsValid = false;
            errors.confirmpassword = "Confirm Password is required";
        } else if (data.confirmpassword !== data.password) {
            formIsValid = false;
            errors.confirmpassword = "Passwords do not match";
        }
        setErrors(errors);
console.log("DATA IN CONT",errors);

        if (formIsValid) {
            console.log("data", data);
            BackendData();


        }
    }

    const BackendData = () => {
        console.log("fun called", data);
        let formData = new FormData();
        console.log(plus);
        formData.append('name', data.name);
        formData.append('category', data.category);
        formData.append('totalteammembers', teamMembers);
        formData.append('pincode', data.pincode);
        formData.append('state', data.state);
        formData.append('contact', data.contactnumber);
        formData.append('password', data.password);
        formData.append('files', data.image);
        formData.append('files', data.certificate);
        formData.append('teamName', data.teamname);
        formData.append('address', data.address);
        formData.append('city', data.city);
        formData.append('country', data.country);
        formData.append('email', data.email);
        formData.append('experience', data.experience);


        console.log(formData);
        axiosMultipartInstance.post('registerTeamCoach', formData)
            .then(response => {
                console.log(response);
                if (response.data.status == 200) {
                    toast.success(response.data.msg)
                    navigate('/TeamCoachLogin')
                } else
                toast.error(response.data.msg)


            })
            .catch(error => {
                console.error(error);


            })

    }

    return (
        <div>
            <div className='TeamcoachregMaindiv'>
                <div className='registration'>
                    <div className='head'>
                        <h1 className='teamCoachReghead1'>Team Coach Registration</h1>
                        <h2 className='teamCoachReghead2'>Fill in the details</h2>
                    </div>

                    <div className='TeamcoachregMainDiv-2'>
                        <div class="container text-center">
                            <div class="row">
                                <div class="col">

                                    <div className='teamcoachn1'>
                                        <div className='teamCoachRegDiv-Text'>
                                            <label>Name</label>
                                        </div>
                                        <input className='TeamCoachField-1' type='text' placeholder='Enter Name' name="name"
                                            value={data.name}
                                            onChange={handleChange} />
                                        <div class='teamCoachRegvalidationname'>
                                            {errors.name && <div className="text-danger ">{errors.name}</div>}
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div className='teamcoachn1'>
                                        <div className='teamCoachRegDiv-Text'>
                                            <label>Image</label></div>
                                        <div className='teamCoachregDiv-uploads'>
                                            <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"
                                                name="image" required
                                                onChange={handleChange} /></div>
                                        <div class='teamCoachRegvalidationname'>
                                            {errors.image && <div className="text-danger ">{errors.image}</div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container text-center">
                            <div class="row">
                                <div class="col">
                                    <div className='teamcoachn1'>
                                        <div className='teamCoachRegDiv-Text'>
                                            <label>Select Category</label>
                                        </div>

                                        {/* <div className='TeamCoachRegCategory'>
                                            <input type="radio" 
                                            class="btn-check" 
                                            name="category" 
                                            id="category1"  
                                            autocomplete="off" onChange={handleChange} value={"cricket"}/>
                                            <label class="btn btn-secondary category-1-5" for="category1"style={{backgroundColor:'rgba(0, 0, 0, 0.05)',color:"black",fontSize:"14px",fontWeight:"600",marginLeft:"10px",marginRight:"10px"}} >Cricket</label>
                                            <input type="radio" class="btn-check" name="category" id="category2" autocomplete="off" onChange={handleChange} value={"football"}/>
                                            <label class="btn btn-secondary category-1-5" for="category2"style={{backgroundColor:'rgba(0, 0, 0, 0.05)',color:"black",fontSize:"14px",fontWeight:"600",marginLeft:"10px",marginRight:"10px"}} >Football</label>
                                            <input type="radio" class="btn-check" name="category" id="category3" autocomplete="off" onChange={handleChange} value={"tennis"}/>
                                            <label class="btn btn-secondary category-1-5" for="category3" style={{backgroundColor:'rgba(0, 0, 0, 0.05)',color:"black",fontSize:"14px",fontWeight:"600",marginLeft:"10px",marginRight:"10px"}}>Tennis</label>
                                            <input type="radio" class="btn-check" name="category" id="category4" autocomplete="off" onChange={handleChange} value={"badminton"}/>
                                            <label class="btn btn-secondary category-1-5" for="category4"style={{backgroundColor:'rgba(0, 0, 0, 0.05)',color:"black",fontSize:"14px",fontWeight:"600",marginLeft:"10px",marginRight:"10px"}} >Badminton</label>
                                            <input type="radio" class="btn-check" name="category" id="category5" autocomplete="off" onChange={handleChange} value={"hockey"}/>
                                            <label class="btn btn-secondary category-1-5" for="category5"style={{backgroundColor:'rggitba(0, 0, 0, 0.05)',color:"black",fontSize:"14px",fontWeight:"600",marginLeft:"10px",marginRight:"10px"}} >Hockey</label>
                                        </div> */}







                                        <div className='TeamCoachRegCategory'>
                                            {['Cricket', 'Football', 'Tennis', 'Badminton', 'Hockey'].map((category, index) => (
                                                <React.Fragment key={index}>
                                                    <input
                                                        type="radio"
                                                        className="btn-check"
                                                        name="category"
                                                        id={`category${index}`}
                                                        autoComplete="off"
                                                        onChange={handleChange}
                                                        value={category.toLowerCase()}
                                                        checked={data.category === category.toLowerCase()} // Ensure the radio button is checked based on state
                                                    />
                                                    <label
                                                        className={`btn btn-secondary category-1-5 ${data.category === category.toLowerCase() ? 'selected-button' : ''}`}
                                                        htmlFor={`category${index}`}
                                                        style={{
                                                            backgroundColor: 'rgba(0, 0, 0, 0.05)',
                                                            color: 'black',
                                                            fontSize: '14px',
                                                            fontWeight: '600',
                                                            marginLeft: '10px',
                                                            marginRight: '10px'
                                                        }}
                                                    >
                                                        {category}
                                                    </label>
                                                </React.Fragment>
                                            ))}
                                        </div>
















                                        <div class='categoryvalidation'>
                                            {errors.category && <div className="text-danger ">{errors.category}</div>}
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div className='teamcoachn1'>
                                        <div className='teamCoachRegDiv-Text'>
                                            <label>Team Name</label></div>
                                        <input className='TeamCoachField-7' type='text' placeholder='Enter Team Name' name="teamname"
                                            value={data.teamname}
                                            onChange={handleChange} />
                                        <div class='teamCoachRegvalidationname'>
                                            {errors.teamname && <div className="text-danger ">{errors.teamname}</div>}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container text-center">
                            <div class="row">
                                <div class="col">
                                    <div className='teamcoachn1'>
                                        <div className='teamCoachRegDiv-Text'>
                                            <label>Total Team Members</label></div>

                                        <div className='teamCoachregtotalmembers'>

                                            <div class="container text-center">
                                                <div class="row">
                                                    {/* <div class="col">
                                                        <button className='teamCoachregbutton-1' onClick={sub}>-</button>
                                                    </div> */}
                                                    {/* <div class="col" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', marginLeft: "-22px", marginRight: "-22px" }} >
                                                        {teamMembers}
                                                    </div> */}
                                                    <input className='TeamCoachField-7' type='text' placeholder='Total Team Name' name="teamMembers"
                                                        value={teamMembers}
                                                        onChange={handleChange} disabled />
                                                    {/* <div class="col">
                                                        <button className=' teamCoachregbutton-2' onClick={add} >+</button>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div className='teamcoachn1'>
                                        <div className='teamCoachRegDiv-Text'>
                                            <label>Address</label>
                                        </div>
                                        <input className='TeamCoachField-8' type='text' placeholder='Enter Address' name="address"
                                            value={data.address}
                                            onChange={handleChange} />
                                        <div class='teamCoachRegvalidationname'>
                                            {errors.address && <div className="text-danger ">{errors.address}</div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container text-center">
                            <div class="row">
                                <div class="col">
                                    <div className='teamcoachn1'>
                                        <div className='teamCoachRegDiv-Text'>
                                            <label>Pincode</label></div>
                                        <input className='TeamCoachField-3' type='text' placeholder='Enter 6-Digit Pincode' name="pincode"
                                            value={data.pincode}
                                            onChange={handleChange} />
                                        <div class='teamCoachRegvalidationname'>
                                            {errors.pincode && <div className="text-danger ">{errors.pincode}</div>}
                                        </div>
                                    </div>
                                </div>

                                <div class="col">
                                    <div className='teamcoachn1'>
                                        <div className='teamCoachRegDiv-Text'>
                                            <label>City</label></div>
                                        <input className='TeamCoachField-9' type='text' placeholder='Enter City' name="city"


                                            value={data.city}
                                            onChange={handleChange} />
                                        <div class='teamCoachRegvalidationname'>
                                            {errors.city && <div className="text-danger ">{errors.city}</div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container text-center">
                            <div class="row">
                                <div class="col">

                                    <div className='teamcoachn1'>
                                        <div className='teamCoachRegDiv-Text'>
                                            <label>State</label></div>

                                        <select class="form-select" aria-label="Default select example" style={{ width: '475px' }} name="state" onChange={handleChange}>
                                            <option selected value="Kerala">Kerala</option>
                                            <option value="Tamil Nadu">Tamil Nadu</option>
                                            <option value="Karnataka">Karnataka</option>
                                            <option value="Maharashtra">Maharashtra</option>
                                        </select>

                                        <div class='teamCoachRegvalidationname'>
                                            {/* {errors.state && <div className="text-danger ">{errors.state}</div>} */}
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div className='teamcoachn1'>
                                        <div class="dropdown dropdowninput">
                                            <div className='teamCoachRegDiv-Text'>
                                                <label>Country</label>
                                            </div>
                                            <div className='TeamCoachField-10'>
                                                <input className='TeamCoachField-9' type='text' value="India" disabled name="country" onChange={handleChange} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container text-center">
                            <div class="row">
                                <div class="col">
                                    <div className='teamcoachn1'>
                                        <div className='teamCoachRegDiv-Text'>
                                            <label>Contact Number</label>
                                        </div>
                                        <input className='TeamCoachField-5' type='text' placeholder='Enter your contact number' name="contactnumber"
                                            value={data.contactnumber}
                                            onChange={handleChange} />
                                        <div class='teamCoachRegvalidationname'>
                                            {errors.contactnumber && <div className="text-danger ">{errors.contactnumber}</div>}
                                        </div>

                                    </div>
                                </div>
                                <div class="col">
                                    <div className='teamcoachn1'>
                                        <div className='teamCoachRegDiv-Text'>
                                            <label>E-mail Id</label></div>
                                        <input className='TeamCoachField-11' type='email' placeholder='Enter your email' name="email"
                                            value={data.email}
                                            onChange={handleChange} />
                                        <div class='teamCoachRegvalidationname'>
                                            {errors.email && <div className="text-danger ">{errors.email}</div>}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="container text-center">
                            <div class="row">
                                <div class="col">
                                    <div className='teamcoachn1'>
                                        <div className='teamCoachRegDiv-Text'>
                                            <label>Coach certificate</label>
                                        </div>
                                        <div className='teamCoachregDiv-uploads'>
                                            <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"
                                                name="certificate"
                                                onChange={handleChange} required />
                                        </div>
                                        <div class='teamCoachRegvalidationname'>
                                            {errors.certificate && <div className="text-danger ">{errors.certificate}</div>}
                                        </div>

                                    </div>
                                </div>
                                <div class="col">
                                    <div className='teamcoachn1'>
                                        <div className='teamCoachRegDiv-Text'>
                                            <label>Describe Experience</label>
                                        </div>
                                        <input className='TeamCoachField-12' type='text' placeholder='Describe experience' name="experience"
                                            value={data.experience}
                                            onChange={handleChange} />
                                        <div class='teamCoachRegvalidationname'>
                                            {errors.experience && <div className="text-danger ">{errors.experience}</div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container text-center">
                            <div class="row">
                                <div class="col">
                                    <div className='teamcoachn1'>
                                        <div className='TeamCoachFieldDiv-pass'>
                                            <div className='teamCoachRegDiv-Text'>
                                                <label>Password</label></div>
                                            <input className='TeamCoachField-6' id='pword' type='password' placeholder='Password' name="password"
                                                value={data.password}
                                                onChange={handleChange}
                                            />
                                            <button className='passbutt' type="button" onClick={PasswordButtonOnClick}><FontAwesomeIcon icon={icon} /></button>

                                        </div>
                                        <div class='teamCoachRegvalidationname'>
                                            {errors.password && <div className="text-danger ">{errors.password}</div>}
                                        </div>
                                    </div>
                                </div>

                                <div class="col">
                                    <div className='teamcoachn1'>

                                        <div className='teamCoachRegDiv-Text'> <label>Confirm Password</label></div>
                                        <input className='TeamCoachField-13' id='rePWord' type='password' placeholder='Confirm password' name="confirmpassword"
                                            value={data.confirmpassword}
                                            onChange={handleChange}
                                        />
                                        <button className='passbutt' type="button" onClick={RePasswordButtonOnClick}><FontAwesomeIcon icon={reIcon} /></button>

                                        <div class='teamCoachRegvalidationname'>
                                            {errors.confirmpassword && <div className="text-danger ">{errors.confirmpassword}</div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <input className='TeamCoachButton' type='submit' placeholder='submit' onClick={handleSubmit} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamcoachReg;