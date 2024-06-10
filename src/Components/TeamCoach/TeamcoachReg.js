import React, { useState } from 'react'
import "./TeamcoachReg.css"
function TeamcoachReg() {



    const [plus, setPlus] = useState(
        1
    )



    const add = (event) => {
        setPlus(plus + 1)
        event.preventDefault()
    }
    const sub = (event) => {
        setPlus(plus - 1)
        event.preventDefault()
    }


    const [data, setData] = useState({



        name: '',
        category: '',
        totalmembers: '',
        pincode: '',
        state: '',
        contactnumber: '',
        license: '',
        password: '',
        image: '',
        teamname: '',
        address: '',
        city: '',
        country: '',
        email: '',
        experience: '',
        confirmpassword: '',

    })
    const [errors, setErrors] = useState({

        name: '',
        category: '',
        totalmembers: '',
        pincode: '',
        state: '',
        contactnumber: '',
        license: '',
        password: '',
        image: '',
        teamname: '',
        address: '',
        city: '',
        country: '',
        email: '',
        experience: '',
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
        errors.name = validateField('Name', data.name);
        errors.contactnumber = validateField('Contact number', data.contactnumber)
        errors.category = validateField('Category', data.category);
        errors.totalmembers = validateField('Totalmembers', data.totalmembers);
        errors.pincode = validateField('Pincode', data.pincode);
        errors.state = validateField('State', data.state);
        errors.license = validateField('License', data.license);
        errors.password = validateField('Password', data.password);
        errors.image = validateField('Image', data.image);
        errors.teamname = validateField('Teamname', data.teamname);
        errors.address = validateField('Address', data.address);
        errors.city = validateField('City', data.city);
        errors.country = validateField('Country', data.country);
        errors.experience = validateField('Experience', data.experience);
        errors.confirmpassword = validateField('Confirm Password', data.confirmpassword);






        setErrors(errors);

        if (formIsValid) {
            console.log("data", data);

        }
    }
    return (
        <div>
            <div className='TeamcoachregMaindiv'>
                <div className='registration'>
                    <div className='head'>
                        <h1 className='teamCoachReghead1'>Team Coach Registration</h1>
                        <h2 className='teamCoachReghead2'>Fill in the details</h2>
                    </div>
                    <div className='teamcoachform'>
                        <form>
                            <div className='container'>

                                <div className='teamcoachn1'>
                                    <div className='teamCoachRegDiv-Text'>
                                        <label>Name</label>
                                    </div>
                                    <input className='TeamCoachField-1' type='text' placeholder='Enter Name' name="name"
                                        value={data.name}
                                        onChange={handleChange} />
                                    <div class='validationname'>
                                        {errors.name && <div className="text-danger ">{errors.name}</div>}
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='teamcoachn1'>
                                        <div className='teamCoachRegDiv-Text'>
                                            <label>Select Category</label>
                                        </div>

                                        <div className='a'>
                                        <input type="radio" class="btn-check" name="category" id="category1" autocomplete="off" checked />
                                        <label class="btn btn-secondary" for="category1">Cricket</label>
                                        <input type="radio" class="btn-check" name="category" id="category2" autocomplete="off" />
                                        <label class="btn btn-secondary" for="category2">Football</label>
                                        <input type="radio" class="btn-check" name="category" id="category3" autocomplete="off" />
                                        <label class="btn btn-secondary" for="category3">Tennis</label>
                                        <input type="radio" class="btn-check" name="category" id="category4" autocomplete="off" />
                                        <label class="btn btn-secondary" for="category4">Badminton</label>
                                        <input type="radio" class="btn-check" name="category" id="category5" autocomplete="off" />
                                        <label class="btn btn-secondary" for="category5">Hockey</label>
                                        </div>


                                    </div>


                                    <div className='teamcoachn1'>
                                        <div className='teamCoachRegDiv-Text'>
                                            <label>Total Team Members</label></div>



                                        <button className='teamCoachregbutton-1' onClick={sub}>-</button>
                                        {plus}
                                        <div className='teamCoachregtotalmembers'>

                                            <button className=' teamCoachregbutton-2' onClick={add} >+</button>
                                        </div>
                                    </div>



                                    <div className='teamcoachn1'>
                                        <div className='teamCoachRegDiv-Text'>
                                            <label>Pincode</label></div>
                                        <input className='TeamCoachField-3' type='number' placeholder='Enter 6-Digit Pincode' name="pincode"
                                            value={data.pincode}
                                            onChange={handleChange} />
                                        <div class='validationname'>
                                            {errors.pincode && <div className="text-danger ">{errors.pincode}</div>}
                                        </div>
                                    </div>
                                    <div className='teamcoachn1'>
                                        <div class="dropdown dropdowninput">
                                            <div className='teamCoachRegDiv-Text'>
                                                <label>State</label>
                                            </div>
                                            <div className='TeamCoachField-4'>
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected>Kerala</option>
                                                    <option value="1">Jammu & Kashmir</option>
                                                    <option value="2">Tamilnadu</option>
                                                    <option value="3">Karnataka</option>
                                                    <option value="4">Haryana</option>
                                                    <option value="5">Andrapradesh</option>

                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='teamcoachn1'>
                                        <div className='teamCoachRegDiv-Text'>
                                            <label>Contact Number</label>
                                        </div>
                                        <input className='TeamCoachField-5' type='number' placeholder='Enter your contact number' name="contactnumber"
                                            value={data.contactnumber}
                                            onChange={handleChange} />
                                        <div class='validationname'>
                                            {errors.contactnumber && <div className="text-danger ">{errors.contactnumber}</div>}
                                        </div>

                                    </div>
                                    <div className='teamcoachn1'>
                                        <div className='teamCoachRegDiv-Text'>
                                            <label>Coach License</label>
                                        </div>
                                        <div className='teamCoachregDiv-uploads'>
                                            <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"
                                                value={data.license}
                                                onChange={handleChange} />
                                        </div>
                                        <div class='validationname'>
                                            {errors.license && <div className="text-danger ">{errors.license}</div>}
                                        </div>

                                    </div>

                                    <div className='teamcoachn1'>
                                        <div className='TeamCoachFieldDiv-pass'>
                                            <div className='teamCoachRegDiv-Text'>
                                                <label>Password</label></div>
                                            <input className='TeamCoachField-6' type='password' placeholder='Password' name="password"
                                                value={data.password}
                                                onChange={handleChange} />
                                        </div>
                                        <div class='validationname'>
                                            {errors.password && <div className="text-danger ">{errors.password}</div>}
                                        </div>
                                    </div>


                                </div>
                                <div className='teamcoachn1'>
                                    <div className='teamCoachRegDiv-Text'>
                                        <label>Image</label></div>
                                    <div className='teamCoachregDiv-uploads'>
                                        <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"
                                            value={data.image}
                                            onChange={handleChange} /></div>
                                    <div class='validationname'>
                                        {errors.image && <div className="text-danger ">{errors.image}</div>}
                                    </div>
                                </div>



                                <div className='teamcoachn1'>
                                    <div className='teamCoachRegDiv-Text'>
                                        <label>Team Name</label></div>
                                    <input className='TeamCoachField-7' type='text' placeholder='Enter Team Name' name="teamname"
                                        value={data.teamname}
                                        onChange={handleChange} />
                                    <div class='validationname'>
                                        {errors.teamname && <div className="text-danger ">{errors.teamname}</div>}
                                    </div>

                                </div>
                                <div className='teamcoachn1'>
                                    <div className='teamCoachRegDiv-Text'>
                                        <label>Address</label>
                                    </div>
                                    <input className='TeamCoachField-8' type='text' placeholder='Enter Address' name="address"
                                        value={data.address}
                                        onChange={handleChange} />
                                    <div class='validationname'>
                                        {errors.address && <div className="text-danger ">{errors.address}</div>}
                                    </div>
                                </div>

                                <div className='teamcoachn1'>
                                    <div className='teamCoachRegDiv-Text'>
                                        <label>City</label></div>
                                    <input className='TeamCoachField-9' type='text' placeholder='Enter City' name="city"
                                        value={data.city}
                                        onChange={handleChange} />
                                    <div class='validationname'>
                                        {errors.city && <div className="text-danger ">{errors.city}</div>}
                                    </div>
                                </div>


                                <div className='teamcoachn1'>
                                    <div class="dropdown dropdowninput">
                                        <div className='teamCoachRegDiv-Text'>
                                            <label>Country</label>
                                        </div>
                                        <div className='TeamCoachField-10'>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>India</option>
                                                <option value="1">Canada</option>
                                                <option value="2">Japan</option>
                                                <option value="3">Germany</option>
                                            </select>
                                        </div>


                                    </div>
                                </div>

                                <div className='teamcoachn1'>
                                    <div className='teamCoachRegDiv-Text'>
                                        <label>E-mail Id</label></div>
                                    <input className='TeamCoachField-11' type='mail' placeholder='Enter your email' name="email"
                                        value={data.email}
                                        onChange={handleChange} />
                                    <div class='validationname'>
                                        {errors.email && <div className="text-danger ">{errors.email}</div>}
                                    </div>
                                </div>

                                <div className='teamcoachn1'>
                                    <div className='teamCoachRegDiv-Text'>
                                        <label>Describe Experience</label>
                                    </div>
                                    <input className='TeamCoachField-12' type='text' placeholder='Describe experience' name="experience"
                                        value={data.experience}
                                        onChange={handleChange} />
                                    <div class='validationname'>
                                        {errors.experience && <div className="text-danger ">{errors.experience}</div>}
                                    </div>
                                </div>

                                <div className='teamcoachn1'>

                                    <div className='teamCoachRegDiv-Text'> <label>Confirm Password</label></div>
                                    <input className='TeamCoachField-13' type='password' placeholder='Confirm password' name="confirmpassword"
                                        value={data.confirmpassword}
                                        onChange={handleChange} />
                                    <div class='validationname'>
                                        {errors.confirmpassword && <div className="text-danger ">{errors.confirmpassword}</div>}
                                    </div>
                                </div>


                            </div>
                        </form>
                    </div>
                    <div>
                        <input className='TeamCoachButton' type='submit' placeholder='submit' onClick={handleSubmit}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamcoachReg;