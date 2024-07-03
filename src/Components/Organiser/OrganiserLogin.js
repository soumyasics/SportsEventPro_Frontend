import React, {  useState } from 'react'
import img6 from "../../Assets/OrganiserLogin.gif"
import axiosInstance from '../Constant/BaseURL'
import { Link, useNavigate } from 'react-router-dom'
import './OrganiserLogin.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'

function OrganizerLogin() {

    const [icon,setIcon] = useState(faEye)

    function PasswordButtonOnClick () {

        var pWordState = document.getElementById("pword")     

        if (pWordState.type === "password" ) {

            pWordState.type = "text"
            setIcon(faEyeSlash)

        }

        else {

            pWordState.type = "password"
            setIcon(faEye)

        }

    }


    const navigate = useNavigate()
    const [data, setData] = useState({

        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({

        email: '',
        password: ''
    })

    let formIsValid;

    const handleChange = (event) => {

        const { name, value } = event.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));

        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: ''
        }));

    };

    const validateField = (fieldName, value) => {

        if (!value.trim()) {

            formIsValid = false;
            return `${fieldName} is required`;

        }

        return '';

    };



    const handleSubmit = (event) => {

        event.preventDefault();
        console.log(data);

        let errors = {};
        formIsValid = true;

        errors.email = validateField('Username', data.email);
        errors.password = validateField('Password', data.password);

        if (formIsValid) {
            BackendData()
        }

        setErrors(errors);

    }

    const BackendData = () => {

        console.log("function called", data);
        axiosInstance.post('loginOrganizer', data)

        .then(response => {

            console.log(response);

            if (response.data.status == 200) {

                alert("Login Successful")
                localStorage.setItem('organizerId',response.data.data._id )
                navigate('/OrganizerDashboard')

            } 
            
            else {

                alert(response.data.msg)

            }


        })

        .catch(error => {

            console.error(error);

        })

    }




    return (

        <div>

            <div class="container text-center">
                
                <div className='row'>

                    <div class="Organizerloginmaindiv col-5 ">

                        <div>

                            <div class="Organizerloginh1">

                                <h1>Organizer Login</h1>

                            </div>

                        </div>

                        <form onSubmit={handleSubmit}>

                            <div class="Organizerlogin">

                                <div>
                                    
                                    <label className='Organizerloginuser'>Email Id</label>
                                    
                                    <input
                                        className="Organizerloginput1"
                                        type="text"
                                        placeholder="Enter Your email-id"
                                        name="email"
                                        value={data.email}
                                        onChange={handleChange}
                                    />
                                    
                                    <div class='OrganizerValidationUsername'>
                                       
                                        {errors.email && <div className="text-danger OrganizerLoginValidation-1">{errors.email}</div>}
                                    
                                    </div>
                                
                                </div>

                                <div>
                                    
                                    <label className='Organizerloginuser'>Password</label>

                                    <div>
                                        
                                        <div className = 'OrganizerPassword'>

                                            <input
                                                className="Organizerloginput2"
                                                type="password"
                                                placeholder="Enter Your Password"
                                                name="password"
                                                id='pword'
                                                value={data.password}
                                                onChange={handleChange}
                                            />
                                            <button className = 'OrganizerLogin-Password-Change-Button' onClick = {PasswordButtonOnClick}><FontAwesomeIcon icon = {icon}/></button>
                                    
                                        </div>
                                    </div>

                                </div>

                                <div>

                                    <Link to="/OrganizerForgetPass" class="OrganizerloginReset">Forget Password?</Link>
                                
                                </div>
                                <div>

                                    {errors.password && (
                                        <div className="text-danger OrganizerLoginValidation-2">{errors.password}</div>
                                    )}

                                </div>


                            </div>

                        </form>

                    </div>

                    <div class="Organizerloginbackgroundimg col-5">
                        
                        <img class="Organizerloginimg" src={img6} alt=" not found"></img>
                    
                    </div>

                </div>

                <div>
                    
                    <button className="OrganizerloginButton" type="submit" onClick={handleSubmit}>
                        Login
                    </button>

                </div>

                <div>

                    <p className='OrganizerloginSignin-p1'>Don't have an account ? <Link to="/OrganizerRegistration" class="OrganizerloginSignin">Sign Up</Link></p>
                
                </div>

            </div>

        </div>

    )

}

export default OrganizerLogin
