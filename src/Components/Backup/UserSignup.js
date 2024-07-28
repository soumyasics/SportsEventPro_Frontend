import React, { useState } from 'react'
import './UserSignup.css'
import img1 from '../../Assets/Frame 18.png'
import img2 from '../../Assets/Ellipse 1.png'
import img3 from '../../Assets/image 6.png'
import toast from 'react-hot-toast'

function UserSignup() {
  const [data, setData] = useState({

    email: '',
    password: '',
    username:'',
    dateofbirth:''

  })
  const [errors, setErrors] = useState({

    email: '',
    password: '',
    username:'',
    dateofbirth:'',
    
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

    let errors = {};
    formIsValid = true;

    errors.email = validateField('email', data.email);
    errors.password = validateField('Password', data.password);
    errors.username = validateField('username',data.username);
    errors.dateofbirth = validateField('Date of Birth',data.dateofbirth);





    setErrors(errors);

    if (formIsValid) {
      console.log("data", data);
      toast.error('email or Password is inncorrect')
    }

  }

  return (
    <div>
      <div>
        <div className='UserSignupBackground1'>
          <div>
            <img className='UserSignupImg1' src={img1} />
          </div>
          <div>

            <img className='UserSignupImg2' src={img2} alt='image not found'></img>
          </div>
          <div className='UserSignupDrop'>
            <div class="dropdown UserSignupDrop">
              <button class="btn btn-secondary dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">

              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>

      </div>
      <div class='UserSignupBg'>

        <div class='UserSignuph1' >
          <h1 class='UserSignuph1'> Sign Up</h1>
        </div>
        <div>
          <input className='UserSignupInput1' type='text' placeholder='Username'             name="username"
            value={data.username}
            onChange={handleChange} />

        </div>
        <div class='validationusername'>
                      {errors.username && <div className="text-danger ">{errors.username}</div>}
                      </div>

        <div>
          <input className='UserSignupInput2' type='email' placeholder='Email'
            name="email"
            value={data.email}
            onChange={handleChange} />
        </div>
        <div class='validationEmail'>
                      {errors.email && <div className="text-danger ">{errors.email}</div>}
                      </div>

        <div>
          <input className='UserSignupInput3' type='text' placeholder='Date of birth'             name="dateofbirth"
            value={data.dateofbirth}
            onChange={handleChange} />

        </div>
        <div class='validationdateofbirth'>
                      {errors.dateofbirth && <div className="text-danger ">{errors.dateofbirth}</div>}
                      </div>

        <div>
          <input className='UserSignupInput4' type='text' placeholder='Password'               name="password"
              value={data.password}
              onChange={handleChange}
/>
        </div>
        <div class='validationpassword'>
                      {errors.password && <div className="text-danger ">{errors.password}</div>}
                      </div>

        <div >
          <img className='UserSignupImgL' src={img3} alt='image not found' />
        </div>

        <div className='UserSignUpBottom'>

        </div>
        <div>
          <p className='UserSignupP1'>Already have an account <a href="UserLogin">login</a></p>
        </div>
        <div>
          <button className='UserSignupButton1' type='submit' onClick={handleSubmit}>Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default UserSignup
