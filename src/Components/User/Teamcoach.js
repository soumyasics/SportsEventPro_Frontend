import React, { useState } from 'react'
import "./Teamcoach.css"
import img from './Assets/image 6.png'
function Teamcoach() {


    const [data, setData] = useState({

        name: '',
        district: '',
        email: '',
        contactnumber: '',
        teamname: '',
        experienceinyears: '',
        experience:[]

    })
    const [errors, setErrors] = useState({

        name: '',
        district: '',
        email: '',
        contactnumber: '',
        teamname: '',
        experienceinyears: '',
        experience:[]

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
        errors.district = validateField('name', data.district);
        errors.contactnumber = validateField('contactnumber', data.contactnumber);
        errors.name = validateField('name', data.name);
        errors.experienceinyears = validateField('expireanceinyears', data.experienceinyears);
        errors.teamname = validateField('teamname', data.teamname);
        // errors.expireance = validateField('experience', data.experience);





        setErrors(errors);

        if (formIsValid) {
            console.log("data", data);
            alert('missing any field')
        }

    }




    return (
        <div>
            <div className='container'>
                <div className='maindiv1'></div>
                <div className='maindiv2'>
                    <form>
                        <hi class="text">Teamcoach Registration Page</hi>
                        <div class="div" >
                            <img className='img1' src={img} />
                        </div>
                        <div class="mainform" >
                            <div >



                                <input className='input1' type='text' placeholder='Name' name="name"
                                    value={data.name}
                                    onChange={handleChange} />
                            </div>
                            <div class='validationname'>
                                {errors.name && <div className="text-danger ">{errors.name}</div>}
                            </div>
                            <div>
                                <input className='input2' type='text' placeholder='District' name="district"
                                    value={data.district}
                                    onChange={handleChange} />

                            </div>
                            <div class='validationdistrict'>
                                {errors.district && <div className="text-danger ">{errors.district}</div>}
                            </div>
                            <div>
                                <input className='input3' type='email' placeholder='Email' name="email"
                                    value={data.email}
                                    onChange={handleChange} />

                            </div>
                            <div class='validationemail'>
                                {errors.email && <div className="text-danger ">{errors.email}</div>}
                            </div>
                            <div>
                                <input className='input4' type='number' placeholder='Contact number' name="contactnumber"
                                    value={data.contactnumber}
                                    onChange={handleChange} />
                            </div>
                            <div class='validationcontactnumber'>
                                {errors.contactnumber && <div className="text-danger ">{errors.contactnumber}</div>}
                            </div>
                            <div>
                                <input className='input5' type='text' placeholder='Team name' name="teamname"
                                    value={data.teamname}
                                    onChange={handleChange} />

                            </div>
                            <div class='validationteamname'>
                                {errors.teamname && <div className="text-danger ">{errors.teamname}</div>}
                            </div>


                            <div class="dropdown dropdowninput">
                                <button class="btn btn-secondary dropdown-toggle dropdowninput" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Teamsport
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Football</a></li>
                                    <li><a class="dropdown-item" href="#">Cricket</a></li>
                                    <li><a class="dropdown-item" href="#">Hockey</a></li>
                                </ul>
                            </div>
                            <div>
                                <input className='input6' type='text' placeholder='Experience in years' name="experienceinyears"
                                    value={data.experienceinyears}
                                    onChange={handleChange} />

                            </div>
                            <div class='validationexperienceinyears'>
                                {errors.experienceinyears && <div className="text-danger ">{errors.experienceinyears}</div>}
                            </div>

                            <div>
                                <input className='input6' type='file' placeholder='Experience' name="experience"
                                    value={data.experience}
                                    onChange={handleChange} />

                            </div>
                            <div>
                                <input className='input6' type='submit' placeholder='submit' onClick={handleSubmit}
                                     />

                            </div>
                            


                        </div>







                    </form>


                </div>
            </div>

        </div>
    )
}

export default Teamcoach