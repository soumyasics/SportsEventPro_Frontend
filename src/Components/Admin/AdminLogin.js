import React, { useState } from 'react'
import './AdminLogin.css'
import ImgL from '../../Assets/image 5.png'

function AdminLogin() {
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
      <form>
                                  <div class="AdminLoginh1">
            <h1 class="AdminLoginh1"> Admin Login</h1>
          </div>
          <div>
            <p className="AdminLoginp1">Email</p>
            <input
              className="AdminLogininput1"
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
            <p className="AdminLoginp2">Password</p>
            <input
              className="AdminLogininput2"
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
          
                                     <div className="AdminLoginImg4">
                               <img className="AdminLoginImg4" src={ImgL} alt="image not found"/>

                                       </div>
          
          <div>
        
            <button className="AdminLoginButton" type="submit" onClick={handleSubmit}>
              Sign In
            </button>
          </div>
         
          <div className="AdminLoginBdiv">
</div>




                           
</form>          
      </div>
  )
}

export default AdminLogin
