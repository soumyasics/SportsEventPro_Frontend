import React, { useState } from 'react'
import './AdminResetPass.css'
import resetimg from "../../Assets/Security On 1.png"
import axios from 'axios'
import axiosInstance from '../Constant/BaseURL'



function AdminResetPass() {
    const [data, setData] = useState({



        password: '',
        email: '',
        confirmpassword: '',
    })
    const [errors, setErrors] = useState({

        password: '',
        email: '',
        confirmpassword: '',

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
        console.log(data);

        let errors = {};
        formIsValid = true;

        errors.email = validateField('Email', data.email);
        errors.password = validateField('Password', data.password);
        errors.confirmpassword = validateField('Confirm Password', data.confirmpassword);


        setErrors(errors);
const nunnu=()=>{
        if (formIsValid && data.email=="admin@gmail.com") {

            console.log("data", data);
            BackendData()}
            else{
                alert("user not found")
            }
        }
        if (data.password==data.confirmpassword){
            nunnu()
        }
        else{
            alert("password does not match")
        
        }
        
        
            setErrors(errors);
            
        }
    const BackendData = () => {
    console.log("fun called",data);
        axiosInstance.post('adminpassword',data)
          .then(response => {
            console.log(response);
            if(response.data.status==200){
                alert("Password reset Successful")
            }else
    alert(response.data.msg)
            
        
          })
          .catch(error => {
            console.error(error);
         
        
    })
    }
        return (
        <div>

            <div className='adminresetdiv1'>
                <h1>Reset Password</h1>
                <p>Reset your password to secure your account.</p>
                <form>
                    <div>
                        <label>E-mail Id</label></div>
                    <input className='adminmail' type='mail' placeholder='Enter your email' name="email"
                        value={data.email}
                        onChange={handleChange} />
                    <div class='validationname'>
                        {errors.email && <div className="text-danger ">{errors.email}</div>}
                    </div>
                    <div>
                        <label>Password</label></div>
                    <input className='adminpassword' type='password' placeholder='password' name="password"
                        value={data.password}
                        onChange={handleChange} />
                    <div class='validationname'>
                        {errors.password && <div className="text-danger ">{errors.password}</div>}
                    </div>
                    <div> <label>Confirm Password</label></div>
                    <input className='admincpassword' type='password' placeholder='confirm password' name="confirmpassword"
                        value={data.confirmpassword}
                        onChange={handleChange} />
                    <div class='validationname'>
                        {errors.confirmpassword && <div className="text-danger ">{errors.confirmpassword}</div>}
                    </div>

                </form>

            </div>
            <div>
                <input className='adminbutton' type='submit' placeholder='submit' onClick={handleSubmit}
                />
            </div>
            <img class='adminresetimg' src={resetimg} />

        </div>
    )
}

export default AdminResetPass
