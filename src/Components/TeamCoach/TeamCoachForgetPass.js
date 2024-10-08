import React, { useState } from 'react'
import '../../Components/TeamCoach/TeamCoachForgetPass.css'
import axiosInstance from '../Constant/BaseURL';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import imgg from '../../Assets/Forgotpass.gif'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function TeamCoachForgetPass() {

    const [icon, setIcon] = useState(faEyeSlash)
    const [reIcon, setReIcon] = useState(faEyeSlash)
    const navigate = useNavigate()

    function PasswordButtonOnClick() {

        var pWordState = document.getElementById("pword")

        if (pWordState.type === "password") {

            pWordState.type = "text"
            setIcon(faEye)

        }

        else {

            pWordState.type = "password"
            setIcon(faEyeSlash)

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
        axiosInstance.post('forgotPassword', data)
            .then(response => {
                console.log(response);
                if (response.data.status == 200) {
                    toast.success("Password Reset Successful")
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
            <div class="container">
                <div class="row" style={{ marginTop: '50px', marginBottom: '50px' }}>
                    <div class="col">
                        <div className='TeamCoachForgetPass-img'>
                            <img src={imgg}></img>
                        </div>
                    </div>
                    <div class="col">
                        <div className='TeamCoachForgetPass-maindiv'>
                            <div className='TeamCoachForgetPass-Head'>
                                <h1 className='TeamCoachForgetPass-Head1'>Forget Password</h1>
                            </div>
                            <div className='TeamCoachForgetPassDiv-1'>
                                <div style={{ marginLeft: '30px', marginTop: '40px' }}>
                                    <label className='TeamCoachForgetPass-label'>E-mail</label>
                                    <input className="TeamCoachForgetPass-field" type="email" placeholder="Enter your E-mail" name="email" onChange={handleChange} />
                                </div>
                                <div class='TeamCoachForgetPass-valid' style={{marginLeft:'30px'}}>
                                    {errors.email && <div className="text-danger ">{errors.email}</div>}
                                </div>
                                <div className='TeamCoachForgetPassDiv-1'>
                                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
                                        <label className='TeamCoachForgetPass-label'>Enter a new password</label>
                                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                                            <input className="TeamCoachForgetPass-field" id='pword' type="password" placeholder="Enter a new password" name="password" onChange={handleChange} />
                                            <button className='Passwordbutt' onClick={PasswordButtonOnClick}><FontAwesomeIcon icon={icon} /></button>
                                        </div>
                                    </div>
                                    <div class='TeamCoachForgetPass-valid'>
                                        {errors.password && <div className="text-danger ">{errors.password}</div>}
                                    </div>
                                </div>
                                <div className='TeamCoachForgetPassDiv-1'>
                                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
                                        <label className='TeamCoachForgetPass-label'>Confirm password</label>
                                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                                            <input className="TeamCoachForgetPass-field" id='rePWord' type="password" placeholder="Enter confirm password" name="confirm_password" onChange={handleChange} />
                                            <button className='Passwordbutt' onClick={RePasswordButtonOnClick}><FontAwesomeIcon icon={reIcon} /></button>
                                        </div>
                                    </div>
                                    <div class='TeamCoachForgetPass-valid'>
                                        {errors.confirm_password && <div className="text-danger ">{errors.confirm_password}</div>}
                                    </div>
                                </div>
                                <div>
                                    <button className='TeamCoachForgetPass-button' onClick={handleSubmit}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamCoachForgetPass
