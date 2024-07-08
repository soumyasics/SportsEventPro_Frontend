import React, { useState } from 'react'
import img6 from "../../Assets/OrganiserLogin.gif"
import axiosInstance from '../Constant/BaseURL'
import { Link, useNavigate } from 'react-router-dom'
import './ViewerLogin.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'

function ViewerLogin() {

    const [icon, setIcon] = useState(faEye)

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

    // Please correct the backend. Currently set to organizer backend. Please change it to Viewer backennd and remove this comment
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
        axiosInstance.post('viewerLogin', data)

            .then(response => {

                console.log(response);

                if (response.data.status == 200) {

                    alert("Login Successful")
                    localStorage.setItem('viewerId', response.data.data._id)
                    navigate('/ViewerHomePage')

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

                <div className='row' style={{marginBottom:"98px"}}>

                    <div class="Viewerloginmaindiv col-5" style={{marginTop:"98px"}}>

                        <div>

                            <div class="Viewerloginh1">

                                <h1>Viewer Login</h1>

                            </div>

                        </div>

                        <form onSubmit={handleSubmit}>

                            <div class="Viewerlogin">

                                <div>

                                    <label className='Viewerloginuser'>Email Id</label>

                                    <input
                                        className="Viewerloginput1"
                                        type="text"
                                        placeholder="Enter Your email-id"
                                        name="email"
                                        value={data.email}
                                        onChange={handleChange}
                                    />

                                    <div class='ViewerValidationUsername'>

                                        {errors.email && <div className="text-danger ViewerLoginValidation-1">{errors.email}</div>}

                                    </div>

                                </div>

                                <div>

                                    <label className='Viewerloginuser'>Password</label>

                                    <div>

                                        <div className='ViewerPassword'>

                                            <input
                                                className="Viewerloginput2"
                                                type="password"
                                                placeholder="Enter Your Password"
                                                name="password"
                                                id='pword'
                                                value={data.password}
                                                onChange={handleChange}
                                            />
                                            <button  type="button" className='ViewerLogin-Password-Change-Button' onClick={PasswordButtonOnClick}><FontAwesomeIcon icon={icon} /></button>

                                        </div>

                                    </div>

                                </div>

                                <div>

                                    <Link to="/ViewerForgotPassword" class="ViewerloginReset">Forget Password?</Link>

                                </div>

                                <div>

                                    <button className="ViewerloginButton" type="submit" onClick={handleSubmit}>
                                        Login
                                    </button>

                                </div>

                                <div>

                                    <p className='ViewerloginSignin-p1'>Don't have an account ? <Link to="/ViewerRegistration" class="ViewerloginSignin">Sign Up</Link></p>

                                </div>

                                <div>

                                    {errors.password && (
                                        <div className="text-danger ViewerLoginValidation-2">{errors.password}</div>
                                    )}

                                </div>


                            </div>

                        </form>

                    </div>

                    <div class="Viewerloginbackgroundimg col-5">

                        <img class="Viewerloginimg" src={img6} alt=" not found"></img>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default ViewerLogin
