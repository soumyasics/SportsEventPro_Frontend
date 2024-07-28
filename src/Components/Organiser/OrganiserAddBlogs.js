import React, { useState } from 'react'
import "../../Components/Organiser/OrganiserAddBlogs.css"
import { Link, useNavigate } from 'react-router-dom'
import img from "../../Assets/Back Button.svg"
import axiosMultipartInstance from '../Constant/multiPart';
import toast from 'react-hot-toast';


function OrganiserAddBlogs() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        organizerId: localStorage.getItem('organizerId'),
        title: '',
        image: null,
        description: '',
    });

    const [errors, setErrors] = useState({
        title: '',
        image: '',
        description: '',
    });

    const handleChange = (event) => {
        const { name, value, files } = event.target;
        if (files) {
            setData(prevData => ({
                ...prevData,
                [name]: files[0]
            }));
        } else {
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
        if (!value || !value.trim()) {
            return `${fieldName} is required`;
        }
        return '';
    };

    const validateImageField = (fieldName, file) => {
        if (!file) {
            return `${fieldName} is required`;
        }
    }

    const handleSubmit = (event) => {
        console.log(data);
        event.preventDefault();
        let errors = {};
        let formIsValid = true;

        errors.title = validateField('Title', data.title);
        errors.description = validateField('Description', data.description);
        errors.image = validateImageField('Image', data.image);

        setErrors(errors);
        // formIsValid = !Object.values(errors).some(error => error !== '');
        console.log("form",formIsValid,"err",errors);

        if (formIsValid) {
            submitData();
        }
    };

    const submitData = () => {
        console.log("in",data);
        let formData = new FormData();
        formData.append('title', data.title);
        formData.append('image', data.image);
        formData.append('description', data.description);

        axiosMultipartInstance.post('registerOrganizerBlog', data)
            .then(response => {
                if (response.data.status === 200) {
                    toast.success(response.data.msg);
                    navigate('/OrganizerDashboard');
                } else {
                    toast.error(response.data.msg);
                }
            })
            .catch(error => {
                console.error(error);
            });
    };

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div>
        <div className='OrganiserAddBlogs-MainDiv'>
            {/* <button className='OrganiserAddBlogs-BackButton' ><Link to='/OrganizerScoreboard'><img src={img} alt=' ' /></Link></button> */}
            <h1 className='OrganiserAddBlogs-Heading'>Add Blogs</h1>
        </div>
        <div>
            <div><p className='OrganiserAddBlogs-text'>Title</p></div>
            <input className="OrganiserAddBlogs-input1" type="text" placeholder="Title"onChange={handleChange} value={data.title}name="title"></input>
            {errors.title && <div className="text-danger OrganiserAddBlogsvalidation">{errors.title}</div>}

        </div>
        <div>
            <div><p className='OrganiserAddBlogs-text'>Content</p></div>
            <input type='file' required placeholder='Upload Document' className='Organiseraddblogs-Content-input-banner' onChange={handleChange} name="image"/>                            
                     
            <div>
            <div><p className='OrganiserAddBlogs-text'>Description</p></div>
            <input className="OrganiserAddBlogs-input3" type="text" placeholder="Description"onChange={handleChange} value={data.description} name="description"></input>
            {errors.description && <div className="text-danger OrganiserAddBlogsvalidation">{errors.description}</div>}

        </div>
        </div> 
        <button className="OrganiserAddBlogs-button" onClick={handleSubmit}>Post</button>
        </div>
        </form>
    </div>
  )
}

export default OrganiserAddBlogs
