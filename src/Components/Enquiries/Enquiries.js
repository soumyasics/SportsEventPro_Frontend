import React, { useState } from 'react'
import './Enquiries.css'


function Enquiries() {
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
        errors.contactnumber = validateField('contact number', data.contactnumber);
        errors.description = validateField('message', data.description);
        errors.name = validateField('name', data.name);





        setErrors(errors);

        if (formIsValid) {
            console.log("data", data);

        }
    }

    return (
        <div>
        
            <div className='Enquiriesmaindiv1'>
            <form>

<div className='row Enquiriesmaindiv-2'>

            <div class="Enquiriestext-1" >
                <h1 >ENQUIRIES</h1>
                    </div>
</div>
<div className='row Enquiriesmaindiv-3'>

                    <div >
                        <h6 class="Enquiriestext-2">Fill in the details</h6>
                    </div>


</div>
                    

<div className='row'>

<div className='col-6'>
<div><label>Name</label>

                            <input className='Enquiriesinput1' type='text' placeholder='Enter Name' name="name"
                                value={data.name}
                                onChange={handleChange} />
                        </div>
                        <div class='validationemail '>
                            {errors.name && <div className="text-danger ">{errors.name}</div>}
                        </div>
</div>
<div className='col-6'>

<label>Email</label>

                        <div>
                            <input className='Enquiriesinput2' type='email' placeholder='Enter Email' name="email"
                                value={data.email}
                                onChange={handleChange} />
                        </div>

                        <div class='validationemail'>
                            {errors.email && <div className="text-danger ">{errors.email}</div>}
                        </div>
</div>
 </div>

<div className='row'>

<div className='col-6'>
<label>Enquiriy Type</label>
<div className='Enquiriesdiv-1-3'>
<input type="radio" class="btn-check " name="options" id="option1" autocomplete="off" checked/>
<label class="btn btn-secondary Enquiriesteaxt-1-3" for="option1">General</label>
<input type="radio" class="btn-check Enquiriesteaxt-1-3" name="options" id="option1" autocomplete="off" checked/>
<label class="btn btn-secondary Enquiriesteaxt-1-3" for="option1">Registration</label>
<input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked/>
<label class="btn btn-secondary Enquiriesteaxt-1-3" for="option1">Schedule</label>
<input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked/>
<label class="btn btn-secondary Enquiriesteaxt-1-3" for="option1">Others</label>
</div>
</div>



<div className='col-6'>
<label>Contact Number</label>

<div >
                            <input className='Enquiriesinput3' type='number' placeholder='Contact Number' name="contactnumber"
                                value={data.contactnumber}
                                onChange={handleChange} />
                        </div>
                        <div class='validationemail'>
                            {errors.contactnumber && <div className="text-danger ">{errors.contactnumber}</div>}
                        </div>
</div>


</div>
<div className='row'>

<div className='col-6'>
<div>
                            <input className='Enquiriesinput4' type='text' placeholder='Message' name="description"
                                value={data.description}
                                onChange={handleChange} />
                        </div>
                        <div class='validationemail'>
                            {errors.description && <div className="text-danger ">{errors.description}</div>}
                        </div>
</div>
</div>





                        <div  className='Enquiriesdiv-7'>
                                <input className='Enquiriesinput6' type='submit' placeholder='submit' onClick={handleSubmit}
                                     />
                            </div>
                </form>
        
        </div>

    </div>

    )
}

export default Enquiries
