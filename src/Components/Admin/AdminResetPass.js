import React, { useState } from 'react'
import './AdminResetPass.css'
import resetimg from "../../Assets/Security On 1.png"


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

        if (formIsValid) {
            console.log("data", data);

        }
    }

    return (
        <div>

            <div className='container'>
                <h1>Reset Password</h1>
                <p>Reset your password to secure your account.</p>
                <form>
                    <div>
                        <label>E-mail Id</label></div>
                    <input className='mail' type='mail' placeholder='Enter your email' name="email"
                        value={data.email}
                        onChange={handleChange} />
                    <div class='validationname'>
                        {errors.email && <div className="text-danger ">{errors.email}</div>}
                    </div>
                    <div>
                        <label>Password</label></div>
                    <input className='password' type='password' placeholder='password' name="password"
                        value={data.password}
                        onChange={handleChange} />
                    <div class='validationname'>
                        {errors.password && <div className="text-danger ">{errors.password}</div>}
                    </div>
                    <div> <label>Confirm Password</label></div>
                    <input className='cpassword' type='password' placeholder='confirm password' name="confirmpassword"
                        value={data.confirmpassword}
                        onChange={handleChange} />
                    <div class='validationname'>
                        {errors.confirmpassword && <div className="text-danger ">{errors.confirmpassword}</div>}
                    </div>

                </form>

            </div>
            <div>
                <input className='button' type='submit' placeholder='submit' onClick={handleSubmit}
                />
            </div>
            <img class='resetimg' src={resetimg} />

        </div>
    )
}

export default AdminResetPass
