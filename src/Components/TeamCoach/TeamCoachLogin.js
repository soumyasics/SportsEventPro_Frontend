import React, { useEffect, useState } from 'react'
import './TeamCoachLogin.css'
import img6 from "../../Assets/Teamcoachlogin.gif"
import axios from 'axios'
import axiosInstance from '../Constant/BaseURL'
import { Link } from 'react-router-dom'
import {  Navigate, useNavigate } from 'react-router-dom'

 


function TeamCoachLogin() {
    const navigate=useNavigate()
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
    
        errors.email = validateField('Username', data.email);
        errors.password = validateField('Password', data.password);
    
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
            if(response.data.data.adminApproved){
            alert("Login Successful")
            localStorage.setItem('admin',1)
            navigate('/teamcoachhomepage')
            }
            else{
                alert("Please get Approval from Admin")
                window.location.reload(false)
            }
        }else
alert(response.data.msg)       
        
    
      })
      .catch(error => {
        console.error(error);
})
}




    return (
        <div>
            <div class="container text-center">
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
                                placeholder="Enter Your Username"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                            ></input>
                                                 <div class='TeamcoachValidationUsername'>
                      {errors.email && <div className="text-danger TeamCoachLoginValidation-1">{errors.email}</div>}
                      </div>
                        </div>

                        <div>
                            <label className='teamcoachloginuser'>Password</label>

                            <input
                                className="teamcoachloginput2"
                                type="password"
                                placeholder="Enter Your Password"
                                name="password"
                                value={data.password}
                                onChange={handleChange}

                            ></input>
                            </div>
                                                <div>
                        <Link to="/TeamCoachForgetPass"  class="teamcoachloginReset">Forget Password</Link>
                    </div>
                                        <div>
                      {errors.password && (
            <div className="text-danger TeamCoachLoginValidation-2">{errors.password}</div>
          )}
          
          </div>
          
                    
                    </div>

                    </form>
                    <div>
                      
                    </div>
                    </div>

                    <div class="teamcoachloginbackgroundimg col-5">
                    <img class="teamcoachloginimg"src={img6} alt="image not found"></img>
                    </div>
                    </div>
                    <div>
                        <button className="teamcoachloginButton" type="submit"onClick={handleSubmit}>
                            Login
                        </button>
                        </div>
                        <div>
                            <p className='teamcoachloginSignin-p1'>don't have an account ? <Link to="/TeamcoachReg"  class="teamcoachloginSignin">Sign Up</Link></p>
                        </div>
                    </div>
        </div>

    )
}

export default TeamCoachLogin
