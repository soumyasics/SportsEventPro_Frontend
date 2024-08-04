import React, { useState } from 'react'
import '../Admin/AdminResetPass.css'
import resetimg from "../../Assets/giflap.gif"
import axios from 'axios'
import axiosInstance from '../Constant/BaseURL'
import toast from 'react-hot-toast'


function ViewerResetPassword() {
    const [data, setData] = useState({


        oldpassword:'',
        password: '',
        email: '',
        confirmpassword: '',
    })
    const [errors, setErrors] = useState({

        password: '',
        email: '',
        confirmpassword: '',
        oldpassword:''

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
        errors.oldpassword = validateField('oldpassword', data.oldpassword);

        errors.password = validateField('Password', data.password);
        errors.confirmpassword = validateField('Confirm Password', data.confirmpassword);

        const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,}$/;
        if (!data.password.trim()) {
            formIsValid = false;
            errors.password = "Password is required";
        } else if (!passwordRegex.test(data.password)) { // Pass the password to the test method
            errors.password =
                "Password must contain at least one number, one special character, and one capital letter";
        }

        if (!data.confirmpassword || !data.confirmpassword.trim()) {
            formIsValid = false;
            errors.confirmpassword = "Confirm Password is required";
        } else if (data.confirmpassword !== data.password) {
            formIsValid = false;
            errors.confirmpassword = "Passwords do not match";
        }
        setErrors(errors);
        const abc = () => {
            if (formIsValid ) {
                if(data.password&&data.confirmpassword)
                if(data.password===data.confirmpassword)
                BackendData()
            else{
                toast.error('Password does not matches')
            }
            }
            else {
                toast.error("Please fill all the fields")
            }
        }
        if (data.password == data.confirmpassword) {
            abc()
        } else {
            toast.error("password does not match")
        }

    }

    const BackendData = () => {
        axiosInstance.post(`resetPassword/${localStorage.getItem('viewerId')}`, data)
            .then(response => {
                console.log(response);
                if (response.data.status == 200) {
                    toast.success(response.data.msg)
                } else
                toast.error(response.data.msg)


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
                            <label className='adminresetlabel'>Old Password</label></div>
                        <input className='AdminResetPassword' type='password' placeholder='Your Old Password' name="oldpassword"
                            value={data.oldpassword}                            onChange={handleChange} />
                       
                        <div>
                            <label className='adminresetlabel'>New Password</label></div>
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

export default ViewerResetPassword