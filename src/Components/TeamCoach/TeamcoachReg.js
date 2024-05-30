import React, { useState } from 'react'
import "./TeamcoachReg.css"
import img from '../../Assets/image 6.png'
function TeamcoachReg() {


    const [data, setData] = useState({

        name: '',
        category:'',
        totalmembers:'',
        pincode:'',
        state:'',
        number:'',
        license:'',
        password:'',
        image:'',
        teamname:'',
        district: '',
        email: '',
        address:'',
        city:'',
        country:'',
        experience:'',
        confirmpassword:'',
        
        contactnumber: '',
        teamname: '',
  
        profile:'',

    })
    const [errors, setErrors] = useState({

        name: '',
        category:'',
        totalmembers:'',
        pincode:'',
        state:'',
        number:'',
        license:'',
        password:'',
        image:'',
        teamname:'',
        district: '',
        email: '',
        address:'',
        city:'',
        country:'',
        experience:'',
        confirmpassword:'',

        contactnumber: '',
        teamname: '',
        

        profile:'',

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

        errors.category = validateField('Category', data.category);
        errors.totalmembers = validateField('Totalmembers', data.totalmembers);
        errors.pincode = validateField('Pincode', data.pincode);
        errors.state = validateField('State', data.state);
        errors.number = validateField('Number', data.number);
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
            <div className='continer'>
                {/* <div className='row'>
                    <div className='col-4'> */}
                
            <div className='registration'>
            <div className='head'>
                <h1 className='teamhead1'>Team Coach Registration</h1>
                <h2 className='teamhead2'>Fill in the details</h2>
            </div>
            <div className='teamcoachform'>
                <form>
                    <div className='container'>
                    
                <div className='teamcoachn1'>
                    <div>
                    <label>Name</label>
                    </div>
                <input className='name' type='text' placeholder='Enter Name' name="name"
                    value={data.name}
                    onChange={handleChange} />
                    <div class='validationname'>
                {errors.name && <div className="text-danger ">{errors.name}</div>}
            </div>
            </div>
            <div className=''>
            <div className='teamcoachn1'>
                <div>
            <label>Select Category</label>
            </div>
            <input type="checkbox" class="btn-check" id="btn-check-4" autocomplete="off"value={data.category}
                    onChange={handleChange}/>

            <label class="btn" for="btn-check-4">CRICKET</label>
            <label class="btn" for="btn-check-4">FOOTBALL</label>
            <label class="btn" for="btn-check-4">TENNIS</label>
            <label class="btn" for="btn-check-4">BADMINTON</label>
            <label class="btn" for="btn-check-4">HOCKEY</label>
            <div class='validationname'>
                {errors.category && <div className="text-danger ">{errors.category}</div>}
            </div>
            </div>
            <div className=''>
            <div className='teamcoachn1'>
                <div>
                <label>Total Team Members</label></div>
                <input className='teammembers' type='number' placeholder='Address' name="address"
                    value={data.totalmembers}
                    onChange={handleChange} />
                    <div class='validationname'>
                {errors.totalmembers && <div className="text-danger ">{errors.totalmembers}</div>}
            </div>
            </div>
            <div className='teamcoachn1'>
                <div>
                <label>Pincode</label></div>
                <input className='pincode' type='number' placeholder='Enter 6-Digit Pincode' name="pincode"
                    value={data.pincode}
                    onChange={handleChange} />
                    <div class='validationname'>
                {errors.pincode && <div className="text-danger ">{errors.pincode}</div>}
            </div>
            </div>
            <div className='teamcoachn1'>
            <div class="dropdown dropdowninput">
                <div>
                <label>State</label></div>
            
                <button class="btn btn-secondary dropdown-toggle dropdowninput" className='state' type="button" data-bs-toggle="dropdown" aria-expanded="false"value={data.state}
                    onChange={handleChange} >
                    Enter Your State
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Football</a></li>
                    <li><a class="dropdown-item" href="#">Cricket</a></li>
                    <li><a class="dropdown-item" href="#">Hockey</a></li>
                </ul>
                <div class='validationname'>
                {errors.state && <div className="text-danger ">{errors.state}</div>}
            </div>
            </div>
            </div>
            <div className='teamcoachn1'>
                <div>
                <label>Contact Number</label>
                </div>
                <input className='number' type='number' placeholder='Enter your contact number' name="contactnumber"
                    value={data.number}
                    onChange={handleChange} />
                                    <div class='validationname'>
                {errors.number && <div className="text-danger ">{errors.number}</div>}
            </div>

            </div>
            <div className='teamcoachn1'>
                <div>
                <label>Coach License</label>
                </div>
                <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"
                    value={data.license}
                    onChange={handleChange} />
                                    <div class='validationname'>
                {errors.license && <div className="text-danger ">{errors.license}</div>}
            </div>

            </div>

            <div className='teamcoachn1'>
                <div>
                <label>Password</label></div>
                <input className='password' type='password' placeholder='password' name="password"
                    value={data.password}
                    onChange={handleChange} />
                                                        <div class='validationname'>
                {errors.password && <div className="text-danger ">{errors.password}</div>}
            </div>
            </div>

            </div>
            </div>
            <div className='teamcoachn1'>
                <div>
                <label>Image</label></div>
                <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"
                    value={data.image}
                    onChange={handleChange} />
                    <div class='validationname'>
                {errors.image && <div className="text-danger ">{errors.image}</div>}
            </div>
            </div>
            
           
            
            <div className='teamcoachn1'>
                <div>
                <label>Team Name</label></div>
                <input className='teamname' type='text' placeholder='Enter Team Name' name="teamname"
                    value={data.teamname}
                    onChange={handleChange} />
                                        <div class='validationname'>
                {errors.teamname && <div className="text-danger ">{errors.teamname}</div>}
            </div>

            </div>
            <div className='teamcoachn1'>
                <div>
                <label>Address</label>
                </div>
                <input className='address' type='text' placeholder='Enter Address' name="address"
                    value={data.address}
                    onChange={handleChange} />
            <div class='validationname'>
                {errors.address && <div className="text-danger ">{errors.address}</div>}
            </div>
            </div>

            <div className='teamcoachn1'>
                <div>
                <label>City</label></div>
                <input className='city' type='text' placeholder='Enter City' name="city"
                    value={data.city}
                    onChange={handleChange} />
                                                            <div class='validationname'>
                {errors.city && <div className="text-danger ">{errors.city}</div>}
            </div>
            </div>
            
            
            <div className='teamcoachn1'>
            <div class="dropdown dropdowninput">
                <div>
                <label>Country</label>
                </div>
                <button class="btn btn-secondary dropdown-toggle dropdowninput" className='country' type="button" data-bs-toggle="dropdown" aria-expanded="false"value={data.country}
                    onChange={handleChange}>
                    Enter Your Country
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Football</a></li>
                    <li><a class="dropdown-item" href="#">Cricket</a></li>
                    <li><a class="dropdown-item" href="#">Hockey</a></li>
                </ul>
                <div class='validationname'>
                {errors.country && <div className="text-danger ">{errors.country}</div>}
            </div>

            </div>
            </div>
            
            <div className='teamcoachn1'>
                <div>
                <label>E-mail Id</label></div>
                <input className='mail' type='mail' placeholder='Enter your email' name="email"
                    value={data.email}
                    onChange={handleChange} />
                                                            <div class='validationname'>
                {errors.email && <div className="text-danger ">{errors.email}</div>}
            </div>
            </div>
            
            <div className='teamcoachn1'>
                <div>
                <label>Describe Experience</label>
                </div>
                <input className='experience' type='text' placeholder='Describe experience' name="experience"
                    value={data.experience}
                    onChange={handleChange} />
                                                            <div class='validationname'>
                {errors.experience && <div className="text-danger ">{errors.experience}</div>}
            </div>
            </div>

            <div className='teamcoachn1'>

               <div> <label>Confirm Password</label></div>
                <input className='cpassword' type='password' placeholder='confirm password' name="password"
                    value={data.confirmpassword}
                    onChange={handleChange} />
                                                            <div class='validationname'>
                {errors.confirmpassword && <div className="text-danger ">{errors.confirmpassword}</div>}
            </div>
            </div>
            
            
            </div>
                </form>
                <div>
                <input className='button' type='submit' placeholder='submit' onClick={handleSubmit}
                     />
            </div>
            </div>
            {/* </div>
            </div> */}
            </div>
            </div>
        </div>
    )
}

export default TeamcoachReg;