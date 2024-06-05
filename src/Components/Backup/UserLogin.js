import React, { useState } from "react";
import "./UserLogin.css";
import logo from "../../Assets/Frame 18.png";
import drop from "../../Assets/Ellipse 1.png";
import lock from '../../Assets/image 5.png';

function UserLogin() {


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
      console.log(data);
  
      let errors = {};
       formIsValid = true;
  
      errors.email = validateField('email', data.email);
      errors.password = validateField('Password', data.password);
  
  
  
  
      setErrors(errors);
  
      if (formIsValid) {
          console.log("data", data);
      }
  
  }
  
  
  return (
    <div>
      <div className="UserLoginBackground1">
        <div>
          <img className="UserLoginImg1" src={logo} />
        </div>
        <div>
          <img className="UserLoginImg2" src={drop} alt="image not found"></img>
        </div>
        <div className="UserLoginDrop">
          <div class="dropdown UserLoginDrop">
            <button
              class="btn btn-secondary dropdown-toggle "
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
                            <div class=" UserLoginBG ">
                             
        <div>
          <div class="UserLoginh1">
            <h1 class="UserLoginh1"> Sign In</h1>
          </div>
          <div>
            <p className="UserLoginp1">Email</p>
            <input
              className="UserLogininput1"
              type="email"
              placeholder="Email"
              name="email"
              value={data.email}
              onChange={handleChange}
              
  
            ></input>
                     <div class='validationEmail'>
                      {errors.email && <div className="text-danger ">{errors.email}</div>}
                      </div>
          </div>
          <div>
            <p className="UserLoginp2">Password</p>
            <input
              className="UserLogininput2"
              type="password"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={handleChange}
  
            ></input>
            <div class="validationPass">
                      {errors.password && (
            <div className="text-danger">{errors.password}</div>
          )}
          </div>

          </div>
          <div>
            <a className="UserLoginReset" href="">
              Reset Password
            </a>
          </div>
                                     <div className="UserLoginImg4">
                               <img className="UserLoginImg4" src={lock} alt="image not found"/>

                                       </div>
          <div>
            <a className="UserLoginSignin" href="">
              Sign up
            </a>
          </div>

          <div>
            <button className="UserLoginButton" type="submit" onClick={handleSubmit}>
              Sign In
            </button>
          </div>
        </div>
                                                                                <div className="UserLoginBdiv">

                                                                              </div>
      </div>
    </div>
  );
}

export default UserLogin;
