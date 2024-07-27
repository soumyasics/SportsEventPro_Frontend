import React, { useState } from 'react'
import './AdminLogin.css'
import ImgL from '../../Assets/admin.gif'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../Constant/BaseURL'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'

function AdminLogin() {

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

    const [data, setData] = useState({

        email: '',
        password: ''
    })
    const navigate = useNavigate()
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
            formIsValid = true;
            return `${fieldName} is required`;
        }
        return '';
    };



    const handleSubmit = (event) => {
        event.preventDefault();

        let errors = {};
        formIsValid = true;

        errors.email = validateField('email', data.email);
        errors.password = validateField('Password', data.password);


if(data.email=="admin@gmail.com" && data.password=="admin@1234"){
  alert("Login Successfully")
  localStorage.setItem('admin',1)
  navigate('/adminmain')
}


        setErrors(errors);
        BackendData()


    }


    const BackendData = () => {

        console.log("function called", data);
        axiosInstance.post('adminLogin', data)

            .then(response => {

                console.log(response);

                if (response.data.status == 200) {

                    alert("Login Successful")
                    localStorage.setItem('admin', 1)
                    navigate('/admindashboard')

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
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <form >
                            <div className='adminlogin-div1'>

                                <div >
                                    <div class="AdminLoginh1">
                                        <h1 class="AdminLoginh1"> Admin Login</h1>
                                    </div>
                                    <div className='adminLogindiv1'>
                                        <p className="AdminLoginp1">Username</p>
                                        <input
                                            className="AdminLogininput1"
                                            id='pword'
                                            type="email"
                                            placeholder="Enter your username"
                                            name="email"
                                            value={data.email}
                                            onChange={handleChange}


                                        ></input>
                                        <div class='AdminValidationEmail'>
                                            {errors.email && <div className="text-danger ">{errors.email}</div>}
                                        </div>
                                    </div>
                                </div>
                                <div className='adminLogindiv2'>
                                    <p className="AdminLoginp2">Password</p>
                                    
                                    <div style={{display:'flex',flexDirection:'row'}}>

                                        <input
                                            className="AdminLogininput2"
                                            type="password"
                                            placeholder="Enter your Password"
                                            name="password"
                                            value={data.password}
                                            onChange={handleChange}

                                        ></input>
                                        <button className='OrganizerLogin-Password-Change-Button' type="button" onClick={PasswordButtonOnClick}><FontAwesomeIcon icon={icon} /></button>

                                    </div>
                                    <div class="AdminValidationPass">
                                        {errors.password && (
                                            <div className="text-danger">{errors.password}</div>
                                        )}
                                    </div>

                                </div>

                                <div>

                                    <button className="AdminLoginButton" type="submit" onClick={handleSubmit}>
                                        Login
                                    </button>
                                </div>

                            </div>


                        </form>
                    </div>

                    <div className='col-5'>
                        <img className="AdminLoginImg4" src={ImgL} alt="image not found" />

                    </div>


                </div>



            </div>
        </div>
    )
}

export default AdminLogin
