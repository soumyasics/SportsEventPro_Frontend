import React, { useEffect, useState } from 'react'
import './TeamCoachLogin.css'
import img6 from "../../Assets/Teamcoachlogin.gif"
import axios from 'axios'
import axiosInstance from '../Constant/BaseURL'
import { Link } from 'react-router-dom'



 


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
          formIsValid=false;
            return `${fieldName} is required`;
        }
        return '';
    };
    
    
    
    const handleSubmit = (event) => {

        event.preventDefault();
        console.log(data);
    
        let errors = {};
         formIsValid = true;
    
        errors.email = validateField('email', data.email);
        errors.password = validateField('password', data.password);
    
    if(formIsValid){
        BackendData()
    }
    
    
        setErrors(errors);
        
    }

const BackendData = () => {
console.log("fun called",data);
    axiosInstance.post('loginTeamCoach',data)
      .then(response => {
        console.log(response);
        if(response.data.status==200){
            alert("Login Successful")
        }else
alert(response.data.msg)       
        
    
      })
      .catch(error => {
        console.error(error);
     
    
})
}



    return (
        <div>
<div className='row'>
            <div class="teamcoachloginmaindiv col-5 ">
                
                        <div>
                        <div class="teamcoachloginh1">
                            <h1 class="teamcoachloginh1">Team Coach Login</h1>
                        </div>
                    </div>
                        <form onSubmit={handleSubmit}>
                        <div class="teamcoachlogin">
                        <div>
                          <label className='teamcoachloginuser'>Username</label>
                            <input
                                className="teamcoachloginput1"
                                type="email"
                                placeholder="email"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                            ></input>
                                                 <div class='AdminValidationemail'>
                      {errors.email && <div className="text-danger">{errors.email}</div>}
                      </div>
                        </div>

                        <div>
                            <label className='teamcoachloginuser'>Password</label>

                            <input
                                className="teamcoachloginput2"
                                type="password"
                                placeholder="password"
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
                        <button className="teamcoachloginButton" type="submit">
                            Login
                        </button>
                        </div>
                    </form>
                    <div>
                        <Link className="teamcoachloginReset" to='TeamCoachForgetPass'>
                            Forget password
                        </Link>
                    </div>
                    <div>
                        <Link to="/TeamCoachreg" className="teamcoachloginSignin" >
                            Sign up here
                        </Link>
                    </div>
                    </div>

                    <div class="teamcoachloginbackgroundimg col-5">
                    <img class="teamcoachloginimg"src={img6} alt="image not found"></img>
                    </div>
                    </div>
        </div>

    )
}

export default TeamCoachLogin
