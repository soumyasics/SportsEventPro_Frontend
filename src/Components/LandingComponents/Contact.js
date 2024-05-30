import React, { useState } from 'react'
import './Contact.css'
import img from '../../Assets/contact.jpg'


function Contact() {
    const [data, setData] = useState({

        name: '',
        email: '',
        contactnumber: '',
        description:''


    })
    const [errors, setErrors] = useState({

        name: '',
        email: '',
        contactnumber: '',
        description:''

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

        errors.email = validateField('email', data.email);
        errors.contactnumber = validateField('contactnumber', data.contactnumber);
        errors.description = validateField('description', data.description);
        errors.name = validateField('name', data.name);





        setErrors(errors);

        if (formIsValid) {
            console.log("data", data);

        }
    }

    return (
        <div>
        
            <div className='contactmaindiv1'>
            <div class="div" >
                        <img className='contactimg' src={img} />
                    </div>
            </div>
            <div className='contactmaindiv2'>
                <form>
                    <hi class="contacthead">CONTACT US</hi>
                    
                    <div class="contactmainform" >
                        <div >
                            <input className='contactinput1' type='text' placeholder='Name' name="name"
                                value={data.name}
                                onChange={handleChange} />
                        </div>
                        <div class='validationemail'>
                            {errors.name && <div className="text-danger ">{errors.name}</div>}
                        </div>
                        <div>
                            <input className='contactinput3' type='email' placeholder='Email' name="email"
                                value={data.email}
                                onChange={handleChange} />
                        </div>
                        <div class='validationemail'>
                            {errors.email && <div className="text-danger ">{errors.email}</div>}
                        </div>
                        <div>
                            <input className='contactinput3' type='number' placeholder='Contact number' name="contactnumber"
                                value={data.contactnumber}
                                onChange={handleChange} />
                        </div>
                        <div class='validationemail'>
                            {errors.contactnumber && <div className="text-danger ">{errors.contactnumber}</div>}
                        </div>
                        <div>
                            <input className='contactinput4' type='text' placeholder='Description' name="description"
                                value={data.description}
                                onChange={handleChange} />
                        </div>
                        <div class='validationemail'>
                            {errors.description && <div className="text-danger ">{errors.description}</div>}
                        </div>
                        <div>
                                <input className='input6' type='submit' placeholder='submit' onClick={handleSubmit}
                                     />
                            </div>
                    </div>
                </form>
        </div>
        

    </div>

    )
}

export default Contact
