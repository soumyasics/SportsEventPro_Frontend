import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosMultipartInstance from '../Constant/multiPart';
import toast from 'react-hot-toast';
import "../../Components/Organiser/OrganiserAddBlogs.css";

function OrganiserEditBlog() {
    const { id } = useParams(); // Get the blog ID from URL parameters
    const navigate = useNavigate();
    const [data, setData] = useState({
        title: '',
        image: null,
        description: '',
    });
    const [errors, setErrors] = useState({
        title: '',
        image: '',
        description: '',
    });

    useEffect(() => {
        // Fetch the existing blog data when the component mounts
        axiosMultipartInstance.post(`viewOrganizerBlogById/${id}`)
            .then(response => {
                if (response.data.status === 200) {
                    setData({
                        title: response.data.data.title,
                        image: null, // Do not pre-fill the image
                        description: response.data.data.description,
                    });
                } else {
                    toast.error(response.data.msg);
                }
            })
            .catch(error => {
                console.error(error);
                toast.error('Error fetching blog data');
            });
    }, [id]);

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
        if (!file && data.image === null) {
            return `${fieldName} is required`;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let errors = {};
       
            submitData();
        
    };

    const submitData = () => {
        let formData = new FormData();
        formData.append('title', data.title);
        if (data.image) formData.append('image', data.image); // Append image only if selected
        formData.append('description', data.description);
console.log("data",data);
        axiosMultipartInstance.post(`updateOrganizerBlogById/${id}`, data)
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
                toast.error('Error updating blog');
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='OrganiserAddBlogs-MainDiv'>
                    <h1 className='OrganiserAddBlogs-Heading'>Edit Blog</h1>
                </div>
                <div>
                    <div><p className='OrganiserAddBlogs-text'>Title</p></div>
                    <input className="OrganiserAddBlogs-input1" type="text" placeholder="Title" onChange={handleChange} value={data.title} name="title" />
                    {errors.title && <div className="text-danger OrganiserAddBlogsvalidation">{errors.title}</div>}
                </div>
                <div>
                    <div><p className='OrganiserAddBlogs-text'>Image</p></div>
                    <input type='file' placeholder='Upload Document' className='Organiseraddblogs-Content-input-banner' onChange={handleChange} name="image" />
                    {errors.image && <div className="text-danger OrganiserAddBlogsvalidation">{errors.image}</div>}
                </div>
                <div>
                    <div><p className='OrganiserAddBlogs-text'>Description</p></div>
                    <input className="OrganiserAddBlogs-input3" type="text" placeholder="Description" onChange={handleChange} value={data.description} name="description" />
                    {errors.description && <div className="text-danger OrganiserAddBlogsvalidation">{errors.description}</div>}
                </div>
                <button className="OrganiserAddBlogs-button" type="submit">Update</button>
            </form>
        </div>
    );
}

export default OrganiserEditBlog;
