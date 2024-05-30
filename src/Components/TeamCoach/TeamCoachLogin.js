import React, { useEffect, useState } from 'react'
import './TeamCoachLogin.css'
import img6 from "../../Assets/image.png"
import axios from 'axios'



 


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
    axios.post('http://localhost:4038/sports_event_pro_api/loginTeamCoach',data)
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
                        <form onSubmit={handleSubmit}>
                        <div class="teamlogin">
                        <div>
                            <p className="teamLoginp1"></p>
                            <input
                                className="teamLogininput1"
                                type="email"
                                placeholder="email"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                            ></input>
                                                 <div class='AdminValidationemail'>
                      {errors.email && <div className="text-danger ">{errors.email}</div>}
                      </div>
                        </div>

                        <div>
                            <p className="teamLoginp2"></p>
                            <input
                                className="teamLogininput2"
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
                        <button className="teamLoginButton" type="submit">
                            Login
                        </button>
                        </div>
                    </form>
                    <div>
                        <a className="teamLoginReset" href="forgetpassword">
                            Forget password
                        </a>
                    </div>
                    <div>
                        <a className="teamLoginSignin" href="signup">
                            Sign up
                        </a>
                    </div>

                    
        </div>

    )
}

export default TeamCoachLogin
