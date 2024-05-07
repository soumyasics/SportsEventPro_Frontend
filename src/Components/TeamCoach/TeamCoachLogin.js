import React, { useState } from 'react'
import './TeamCoachLogin.css'
import img6 from "../../Assets/image.png"



 


function TeamCoachLogin() {
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
          formIsValid=true;
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
    
    
    
    
        setErrors(errors);
    
    }

    return (
        <div>
            <div class="background">
                
                        <div>
                        <div class="UserLoginh1">
                            <h1 class="UserLoginh1">Team Coach Login</h1>
                        </div>
                        <div class="backgroundimg">
                    <img class="userloginimg"src={img6} alt="image not found"></img>
                    
                        </div>
                        <div class="login">
                        <div>
                            <p className="UserLoginp1"></p>
                            <input
                                className="UserLogininput1"
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                            ></input>
                                                 <div class='AdminValidationEmail'>
                      {errors.email && <div className="text-danger ">{errors.email}</div>}
                      </div>
                        </div>

                        <div>
                            <p className="UserLoginp2"></p>
                            <input
                                className="UserLogininput2"
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={data.password}
                                onChange={handleChange}

                            ></input>
                                        <div class="AdminValidationPass">
                      {errors.password && (
            <div className="text-danger">{errors.password}</div>
          )}
          </div>
                        </div>

                    </div>
                    <div>
                        <a className="UserLoginReset" href="">
                            Reset Password
                        </a>
                    </div>
                    <div>
                        <a className="UserLoginSignin" href="">
                            Sign up
                        </a>
                    </div>

                    <div>
                        <button className="UserLoginButton" type="submit" onClick={handleSubmit}>
                            Login
                        </button>
                        </div>
                    </div>
                
            </div>
        </div>

    )
}

export default TeamCoachLogin
