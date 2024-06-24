import React, { useState } from 'react'
import "./TeamcoachReg.css"
import axiosInstance from '../Constant/BaseURL'
import axiosMultipartInstance from '../Constant/multiPart'

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
console.log(plus);
    const [data, setData] = useState({



        name: '',
        category: '',
        totalmembers: plus,
        pincode: '',
        states: '',
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
        pincode: '',
        states: '',
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
        console.log("ty",event.target.type);
        const { name, value, files } = event.target;
    if (files) {
      setData(prevData => ({
        ...prevData,
        [name]: files[0]
      }));
    } 
    else if (event.target.type=="radio") {
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }
    
    else {
      setData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
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
        errors.pincode = validateField('Pincode', data.pincode);
        errors.states =validateField('States', data.states)
        errors.password = validateField('Password', data.password);
        errors.teamname = validateField('Teamname', data.teamname);
        errors.address = validateField('Address', data.address);
        errors.city = validateField('City', data.city);
        errors.country = validateField('Country', data.country);
        errors.experience = validateField('Experience', data.experience);
        errors.confirmpassword = validateField('Confirm Password', data.confirmpassword);




        BackendData();

        setErrors(errors);

        if (formIsValid) {
            console.log("data", data);
          
           
        }
    }








    const BackendData = () => {
        console.log("fun called", data);
 let formData = new FormData();

            formData.append('name',data.name);
            formData.append('category', data.category);
            formData.append('totalteammembers', data.totalmembers);
            formData.append('pincode', data.pincode);
            formData.append('state', data.states);
            formData.append('contact', data.contactnumber);
            formData.append('password', data.password);
            formData.append('files', data.image);
            formData.append('files', data.license);
            formData.append('teamName', data.teamname);
            formData.append('address', data.address);
            formData.append('city', data.city);
            formData.append('country', data.country);
            formData.append('email', data.email);
            formData.append('experience', data.experience);
        
            
    console.log(formData);
        axiosMultipartInstance.post('registerTeamCoach', data)
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
            <div className='TeamcoachregMaindiv'>
                <div className='registration'>
                    <div className='head'>
                        <h1 className='teamCoachReghead1'>Team Coach Registration</h1>
                        <h2 className='teamCoachReghead2'>Fill in the details</h2>
                    </div>

                    <div className='TeamcoachregMainDiv-2'>
                        <div class="container text-center">
                            <div class="row">
                                <div class="col">

                                    <div className='teamcoachn1'>
                                        <div className='teamCoachRegDiv-Text'>
                                            <label>Name</label>
                                        </div>
                                        <input className='TeamCoachField-1' type='text' placeholder='Enter Name' name="name"
                                            value={data.name}
                                            onChange={handleChange} />
                                        <div class='teamCoachRegvalidationname'>
                                            {errors.name && <div className="text-danger ">{errors.name}</div>}
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div className='teamcoachn1'>
                                        <div className='teamCoachRegDiv-Text'>
                                            <label>Image</label></div>
                                        <div className='teamCoachregDiv-uploads'>
                                            <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"
                                               name="image" required
                                                onChange={handleChange} /></div>
                                        <div class='teamCoachRegvalidationname'>
                                            {errors.image && <div className="text-danger ">{errors.image}</div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div class="container text-center">
                            <div class="row">
                                <div class="col">
                                    <div className='teamcoachn1'>
                                        <div className='teamCoachRegDiv-Text'>
                                            <label>Select Category</label>
                                        </div>

                                        <div className='TeamCoachRegCategory'>
                                            <input type="radio" class="btn-check" name="category" id="category1"  autocomplete="off" onChange={handleChange} value={"cricket"}/>
                                            <label class="btn btn-secondary category-1-5" for="category1"style={{backgroundColor:'rgba(0, 0, 0, 0.05)',color:"black",fontSize:"14px",fontWeight:"600",marginLeft:"10px",marginRight:"10px"}} >Cricket</label>
                                            <input type="radio" class="btn-check" name="category" id="category2" autocomplete="off" onChange={handleChange} value={"football"}/>
                                            <label class="btn btn-secondary category-1-5" for="category2"style={{backgroundColor:'rgba(0, 0, 0, 0.05)',color:"black",fontSize:"14px",fontWeight:"600",marginLeft:"10px",marginRight:"10px"}} >Football</label>
                                            <input type="radio" class="btn-check" name="category" id="category3" autocomplete="off" onChange={handleChange} value={"tennis"}/>
                                            <label class="btn btn-secondary category-1-5" for="category3" style={{backgroundColor:'rgba(0, 0, 0, 0.05)',color:"black",fontSize:"14px",fontWeight:"600",marginLeft:"10px",marginRight:"10px"}}>Tennis</label>
                                            <input type="radio" class="btn-check" name="category" id="category4" autocomplete="off" onChange={handleChange} value={"badminton"}/>
                                            <label class="btn btn-secondary category-1-5" for="category4"style={{backgroundColor:'rgba(0, 0, 0, 0.05)',color:"black",fontSize:"14px",fontWeight:"600",marginLeft:"10px",marginRight:"10px"}} >Badminton</label>
                                            <input type="radio" class="btn-check" name="category" id="category5" autocomplete="off" onChange={handleChange} value={"hockey"}/>
                                            <label class="btn btn-secondary category-1-5" for="category5"style={{backgroundColor:'rgba(0, 0, 0, 0.05)',color:"black",fontSize:"14px",fontWeight:"600",marginLeft:"10px",marginRight:"10px"}} >Hockey</label>
                                        </div>
                                        <div class='categoryvalidation'>
                            {errors.category && <div className="text-danger ">{errors.category}</div>}
                        </div>

                                    </div>
                                </div>
                                <div class="col">
                                    <div className='teamcoachn1'>
                                        <div className='teamCoachRegDiv-Text'>
                                            <label>Team Name</label></div>
                                        <input className='TeamCoachField-7' type='text' placeholder='Enter Team Name' name="teamname"
                                            value={data.teamname}
                                            onChange={handleChange} />
                                        <div class='teamCoachRegvalidationname'>
                                            {errors.teamname && <div className="text-danger ">{errors.teamname}</div>}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>



                        <div class="container text-center">
                            <div class="row">
                                <div class="col">
                                    <div className='teamcoachn1'>
                                        <div className='teamCoachRegDiv-Text'>
                                            <label>Total Team Members</label></div>

                                            <div className='teamCoachregtotalmembers'>

                                        <div class="container text-center">
                                            <div class="row">
                                                <div class="col">
                                                <button className='teamCoachregbutton-1' onClick={sub}>-</button>
                                                </div>
                                                <div class="col"style={{backgroundColor:'rgba(0, 0, 0, 0.05)',marginLeft:"-22px",marginRight:"-22px"}} >
                                                {plus}
                                                </div>
                                                <div class="col">
                                                <button className=' teamCoachregbutton-2' onClick={add} >+</button>
                                                </div>
                                            </div>
                                        </div>
</div>














                                            
                                            


                                            
                                        
                                    </div>
                                </div>
                                <div class="col">
                                    <div className='teamcoachn1'>
                                        <div className='teamCoachRegDiv-Text'>
                                            <label>Address</label>
                                        </div>
                                        <input className='TeamCoachField-8' type='text' placeholder='Enter Address' name="address"
                                            value={data.address}
                                            onChange={handleChange} />
                                        <div class='teamCoachRegvalidationname'>
                                            {errors.address && <div className="text-danger ">{errors.address}</div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div class="container text-center">
                            <div class="row">
                                <div class="col">
                                    <div className='teamcoachn1'>
                                        <div className='teamCoachRegDiv-Text'>
                                            <label>Pincode</label></div>
                                        <input className='TeamCoachField-3' type='number' placeholder='Enter 6-Digit Pincode' name="pincode"
                                            value={data.pincode}
                                            onChange={handleChange} />
                                        <div class='teamCoachRegvalidationname'>
                                            {errors.pincode && <div className="text-danger ">{errors.pincode}</div>}
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div className='teamcoachn1'>
                                        <div className='teamCoachRegDiv-Text'>
                                            <label>City</label></div>
                                        <input className='TeamCoachField-9' type='text' placeholder='Enter City' name="city"
                                            value={data.city}
                                            onChange={handleChange} />
                                        <div class='teamCoachRegvalidationname'>
                                            {errors.city && <div className="text-danger ">{errors.city}</div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>






                        <div class="container text-center">
                            <div class="row">
                                <div class="col">
                                    <div className='teamcoachn1'>
                                        <div class="dropdown dropdowninput">
                                            <div className='teamCoachRegDiv-Text'>
                                                <label>State</label>
                                            </div>
                                            <div className='TeamCoachField-4'>
                                                <select class="form-select" aria-label="Default select example" name="states" onChange={handleChange} >
                                                    <option selected value="kerala" >Kerala</option>
                                                    <option value="Jammu & Kashmir" >Jammu & Kashmir</option>
                                                    <option value="Tamilnadu" >Tamilnadu</option>
                                                    <option value="Karnataka" >Karnataka</option>
                                                    <option value="Haryana" >Haryana</option>
                                                    <option value="Andrapradesh" >Andrapradesh</option>

                                                </select>
                                             

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div className='teamcoachn1'>
                                        <div class="dropdown dropdowninput">
                                            <div className='teamCoachRegDiv-Text'>
                                                <label>Country</label>
                                            </div>
                                            <div className='TeamCoachField-10'>
                                                <select class="form-select" aria-label="Default select example" name="country" onChange={handleChange}>
                                                    <option selected value="India">India</option>
                                                    <option value="Canada">Canada</option>
                                                    <option value="Japan">Japan</option>
                                                    <option value="Germany">Germany</option>
                                                </select>
                                            </div>
                                            {/* <div class='Countryvalidationoption'>
                            {errors.country && <div className="text-danger ">{errors.country}</div>}
                        </div> */}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>






                        <div class="container text-center">
                            <div class="row">
                                <div class="col">
                                    <div className='teamcoachn1'>
                                        <div className='teamCoachRegDiv-Text'>
                                            <label>Contact Number</label>
                                        </div>
                                        <input className='TeamCoachField-5' type='number' placeholder='Enter your contact number' name="contactnumber"
                                            value={data.contactnumber}
                                            onChange={handleChange} />
                                        <div class='teamCoachRegvalidationname'>
                                            {errors.contactnumber && <div className="text-danger ">{errors.contactnumber}</div>}
                                        </div>

                                    </div>
                                </div>
                                <div class="col">
                                    <div className='teamcoachn1'>
                                        <div className='teamCoachRegDiv-Text'>
                                            <label>E-mail Id</label></div>
                                        <input className='TeamCoachField-11' type='mail' placeholder='Enter your email' name="email"
                                            value={data.email}
                                            onChange={handleChange} />
                                        <div class='teamCoachRegvalidationname'>
                                            {errors.email && <div className="text-danger ">{errors.email}</div>}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>






                        <div class="container text-center">
                            <div class="row">
                                <div class="col">
                                    <div className='teamcoachn1'>
                                        <div className='teamCoachRegDiv-Text'>
                                            <label>Coach License</label>
                                        </div>
                                        <div className='teamCoachregDiv-uploads'>
                                            <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"
                                               name="license"
                                                onChange={handleChange} required/>
                                        </div>
                                        <div class='teamCoachRegvalidationname'>
                                            {errors.license && <div className="text-danger ">{errors.license}</div>}
                                        </div>

                                    </div>
                                </div>
                                <div class="col">
                                    <div className='teamcoachn1'>
                                        <div className='teamCoachRegDiv-Text'>
                                            <label>Describe Experience</label>
                                        </div>
                                        <input className='TeamCoachField-12' type='text' placeholder='Describe experience' name="experience"
                                            value={data.experience}
                                            onChange={handleChange} />
                                        <div class='teamCoachRegvalidationname'>
                                            {errors.experience && <div className="text-danger ">{errors.experience}</div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>





                        <div class="container text-center">
                            <div class="row">
                                <div class="col">
                                    <div className='teamcoachn1'>
                                        <div className='TeamCoachFieldDiv-pass'>
                                            <div className='teamCoachRegDiv-Text'>
                                                <label>Password</label></div>
                                            <input className='TeamCoachField-6' type='password' placeholder='Password' name="password"
                                                value={data.password}
                                                onChange={handleChange} />
                                        </div>
                                        <div class='teamCoachRegvalidationname'>
                                            {errors.password && <div className="text-danger ">{errors.password}</div>}
                                        </div>
                                    </div>
                                </div>

                                <div class="col">
                                    <div className='teamcoachn1'>

                                        <div className='teamCoachRegDiv-Text'> <label>Confirm Password</label></div>
                                        <input className='TeamCoachField-13' type='password' placeholder='Confirm password' name="confirmpassword"
                                            value={data.confirmpassword}
                                            onChange={handleChange} />

                                        <div class='teamCoachRegvalidationname'>
                                            {errors.confirmpassword && <div className="text-danger ">{errors.confirmpassword}</div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>









































                    <div>
                        <input className='TeamCoachButton' type='submit' placeholder='submit' onClick={handleSubmit}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamcoachReg;