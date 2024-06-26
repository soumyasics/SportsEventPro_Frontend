import React, {  useState } from 'react'
import img6 from "../../Assets/OrganiserLogin.gif"
import axiosInstance from '../Constant/BaseURL'
import { Link, useNavigate } from 'react-router-dom'
import './OrganiserLogin.css'

function OrganiserLogin() {

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
        axiosInstance.post('loginOrganiser', data)

        .then(response => {

            console.log(response);

            if (response.data.status == 200) {

                alert("Login Successful")
                localStorage.setItem('admin', 1)
                navigate('/Organiserhomepage')

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

                    <div class="Organiserloginmaindiv col-5 ">

                        <div>

                            <div class="Organiserloginh1">

                                <h1>Team Coach Login</h1>

                            </div>

                        </div>

                        <form onSubmit={handleSubmit}>

                            <div class="Organiserlogin">

                                <div>
                                    
                                    <label className='Organiserloginuser'>Username</label>
                                    
                                    <input
                                        className="Organiserloginput1"
                                        type="email"
                                        placeholder="Enter Your Username"
                                        name="email"
                                        value={data.email}
                                        onChange={handleChange}
                                    />
                                    
                                    <div class='OrganiserValidationUsername'>
                                       
                                        {errors.email && <div className="text-danger OrganiserLoginValidation-1">{errors.email}</div>}
                                    
                                    </div>
                                
                                </div>

                                <div>
                                    
                                    <label className='Organiserloginuser'>Password</label>

                                    <input
                                        className="Organiserloginput2"
                                        type="password"
                                        placeholder="Enter Your Password"
                                        name="password"
                                        value={data.password}
                                        onChange={handleChange}

                                    />

                                </div>

                                <div>

                                    <Link to="/OrganiserForgetPass" class="OrganiserloginReset">Forget Password?</Link>
                                
                                </div>
                                <div>

                                    {errors.password && (
                                        <div className="text-danger OrganiserLoginValidation-2">{errors.password}</div>
                                    )}

                                </div>


                            </div>

                        </form>

                    </div>

                    <div class="Organiserloginbackgroundimg col-5">
                        
                        <img class="Organiserloginimg" src={img6} alt=" not found"></img>
                    
                    </div>

                </div>

                <div>
                    
                    <button className="OrganiserloginButton" type="submit" onClick={handleSubmit}>
                        Login
                    </button>

                </div>

                <div>

                    <p className='OrganiserloginSignin-p1'>Don't have an account ? <Link to="/OrganiserReg" class="OrganiserloginSignin">Sign Up</Link></p>
                
                </div>

            </div>

        </div>

    )

}

export default OrganiserLogin
