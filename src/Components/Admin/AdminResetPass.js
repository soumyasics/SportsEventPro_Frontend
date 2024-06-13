import React, { useState } from 'react'
import './AdminResetPass.css'
import resetimg from "../../Assets/giflap.gif"
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
        const abc = () => {
            if (formIsValid && data.email == "admin@gmail.com") {
                BackendData()
            }
            else {
                alert("user not found")
            }
        }
        if (data.password == data.confirmpassword) {
            abc()
        } else {
            alert("password does not match")
        }

    }

    const BackendData = () => {
        alert("Reset successfull", data);
        axiosInstance.post('adminpassword', data)
            .then(response => {
                console.log(response);
                if (response.data.status == 200) {
                    alert(response.data.msg)
                } else
                    alert(response.data.msg)


            })
            .catch(error => {
                console.error(error);


            })
    }



    return (
        <div>



            <div className='row'>


                <div className='col-6'>
                    <img class='AdminResetPassimg' src={resetimg} />
                </div>



                <div className='AdminResetPassmaindiv-1 col-6'>
                    <div className='adminresetpasstext'>
                        <h1 className='adminresetpasstext-1'>Reset Password</h1>
                        <p className='adminresetpasstext-2'>Reset your password to secure your account.</p>
                    </div>
                    <form>
                        <div>
                            <label className='adminresetlabel'>E-mail Id</label></div>
                        <input className='AdminResetPassMail' type='mail' placeholder='Enter your email' name="email"
                            value={data.email}
                            onChange={handleChange} />
                        <div >
                            {errors.email && <div className="text-danger ">{errors.email}</div>}
                        </div>
                        <div>
                            <label className='adminresetlabel'>Password</label></div>
                        <input className='AdminResetPassword' type='password' placeholder='password' name="password"
                            value={data.password}
                            onChange={handleChange} />
                        <div class="AdminValidationPass">
                            {errors.password && <div className="text-danger ">{errors.password}</div>}
                        </div>
                        <div> <label className='adminresetlabel'>Confirm Password</label></div>
                        <input className='AdminResetConfirmPass' type='password' placeholder='confirm password' name="confirmpassword"
                            value={data.confirmpassword}
                            onChange={handleChange} />
                        <div >
                            {errors.confirmpassword && <div className="text-danger ">{errors.confirmpassword}</div>}
                        </div>

                    </form>

                    <div>
                        <input className='AdminResetPassButton' type='submit' placeholder='submit' onClick={handleSubmit}
                        />
                    </div>
                </div>




            </div>

            
        </div>
    )
}

export default AdminResetPass
