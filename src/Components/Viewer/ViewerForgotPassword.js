import React, { useState } from 'react'
import './ViewerForgotPassword.css'
import axiosInstance from '../Constant/BaseURL';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { useNavigate } from 'react-router-dom';

function ViewerForgotPassword() {

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

    const navigate = useNavigate()

    const [data, setData] = useState({

        email: '',
        password: '',
        confirm_password: ''

    })

    const [errors, setErrors] = useState({

        email: '',
        password: '',
        confirm_password: ''

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

        errors.email = validateField('E-mail', data.email);
        errors.password = validateField('Password', data.password);
        errors.confirm_password = validateField('Confirm Password', data.confirm_password);

        if (formIsValid) {

            BackendData()

        }

        setErrors(errors);

    }

    const BackendData = () => {

        console.log("fun called", data);

        axiosInstance.post('forgotPasswordViewer', data)

            .then(response => {

                console.log(response);

                if (response.data.status == 200) {

                    alert("Password Reset Successful")
                    navigate('/ViewerLogin')

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

            <div class="container text-center ViewerForgetPass">

                <div class="row">

                    <div class="col">

                        <div className='ViewerForgetPass-img'></div>

                    </div>

                    <div class="col">

                        <div className='ViewerForgetPass-maindiv'>

                            <div className='ViewerForgetPass-Head'>

                                <h1 className='ViewerForgetPass-Head1'>Forget Password</h1>

                            </div>

                            <div className='ViewerForgetPassDiv-1'>

                                <div>

                                    <label className='ViewerForgetPass-label'>E-mail</label>

                                </div>

                                <input className="ViewerForgetPass-field" type="email" placeholder="Enter your E-mail" name="email" value={data.email} onChange={handleChange} />

                                <div class='ViewerForgetPass-valid'>

                                    {errors.email && <div className="text-danger ">{errors.email}</div>}

                                </div>

                                <div className='ViewerForgetPassDiv-1'>

                                    <div>

                                        <label className='ViewerForgetPass-label'>Enter a new password</label>

                                    </div>

                                    <input className="ViewerForgetPass-field" type="password" placeholder="Enter a new password" name="password" value={data.password} id='pword' onChange={handleChange} />
                                    <button className='Viewer-Password-Change-Button' onClick={PasswordButtonOnClick}><FontAwesomeIcon icon={icon} /></button>

                                    <div class='ViewerForgetPass-valid'>

                                        {errors.password && <div className="text-danger ">{errors.password}</div>}

                                    </div>

                                </div>

                                <div className='ViewerForgetPassDiv-1'>

                                    <div>

                                        <label className='ViewerForgetPass-label'>Confirm password</label>

                                    </div>

                                    <input className="ViewerForgetPass-field" type="password" placeholder="Confirm password" name="confirm_password" id='rePWord' onChange={handleChange} />
                                    <button className='Viewer-Password-Change-Button' onClick={RePasswordButtonOnClick}><FontAwesomeIcon icon={reIcon} /></button>

                                    <div class='ViewerForgetPass-valid'>

                                        {errors.confirm_password && <div className="text-danger ">{errors.confirm_password}</div>}

                                    </div>

                                </div>

                                <div>

                                    <button className=' ViewerForgetPass-button' onClick={handleSubmit}>Submit</button>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default ViewerForgotPassword
