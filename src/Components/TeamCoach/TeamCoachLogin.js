import React, { useState } from 'react'
import './TeamCoachLogin.css'
import img6 from "../../Assets/image.png"



 


function TeamCoachLogin() {
    const [data, setData] = useState({
  
        Email: '',
        Password: ''
    })
    const [errors, setErrors] = useState({
    
        Email: '',
        Password: ''
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
        console.log(data);
    
        let errors = {};
         formIsValid = true;
    
        errors.Email = validateField('Email', data.Email);
        errors.Password = validateField('Password', data.Password);
    
    
    
    
        setErrors(errors);
    }

    return (
        <div>
            <div class="teambackground">
                
                        <div>
                        <div class="teamLoginh1">
                            <h1 class="teamLoginh1">Team Coach Login</h1>
                        </div>
                        <div class="teambackgroundimg">
                    <img class="teamloginimg"src={img6} alt="image not found"></img>
                    </div>
                    </div>
                        </div>
                        <div class="teamlogin">
                        <div>
                            <p className="teamLoginp1"></p>
                            <input
                                className="teamLogininput1"
                                type="Email"
                                placeholder="Email"
                                name="Email"
                                value={data.Email}
                                onChange={handleChange}
                            ></input>
                                                 <div class='AdminValidationEmail'>
                      {errors.Email && <div className="text-danger ">{errors.Email}</div>}
                      </div>
                        </div>

                        <div>
                            <p className="teamLoginp2"></p>
                            <input
                                className="teamLogininput2"
                                type="Password"
                                placeholder="Password"
                                name="Password"
                                value={data.Password}
                                onChange={handleChange}

                            ></input>
                                        <div class="AdminValidationPass">
                      {errors.Password && (
            <div className="text-danger">{errors.Password}</div>
          )}
          </div>
                        </div>

                    </div>
                    <div>
                        <a className="teamLoginReset" href="forgetpassword">
                            Forget Password
                        </a>
                    </div>
                    <div>
                        <a className="teamLoginSignin" href="signup">
                            Sign up
                        </a>
                    </div>

                    <div>
                        <button className="teamLoginButton" type="submit" onClick={handleSubmit}>
                            Login
                        </button>
                        </div>
        </div>

    )
}

export default TeamCoachLogin
