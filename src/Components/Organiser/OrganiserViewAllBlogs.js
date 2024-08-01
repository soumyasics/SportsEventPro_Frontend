import React, { useEffect, useState } from 'react';
import './OrganiserViewAllBlogs.css';
import { Link } from 'react-router-dom';
import img from "../../Assets/Back Button.svg";
import axiosInstance from '../Constant/BaseURL';

function OrganiserViewAllBlogs() {
    const url = axiosInstance.defaults.url;
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axiosInstance.post('/viewOrganizerBlogs')
            .then(res => {
                console.log(res);
                setUserData(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div className='OrganiserViewAllBlogs-maindiv-1 container'>
            <div>
                <button className='OrganiserViewAllBlogs-BackButton'>
                    <Link to='/OrganizerDashboard'>
                        <img src={img} alt='Back' />
                    </Link>
                </button>
                <h1 className='OrganiserViewAllBlogs-Heading'>Blogs</h1>
            </div>

            <div className='OrganiserViewAllBlogs-content row-100%'>
                {userData.map((e, index) => (
                    <div key={index} className='col-4'>
                        <div className="card OrganiserViewAllBlogs-content-contain">
                            <img className='OrganiserViewAllBlogs-img' src={`${url}/${e?.image?.filename}`} alt='Blog Image' />
                            <div className="card-body" style={{ width: "100%" }}>
                                <div className="card-title">
                                    <h5 className='OrganiserViewAllBlogsHeadTxtH5'>{e.title}</h5>
                                </div>
                                <div className="card-text">
                                    <h2 className='OrganiserViewAllBlogsTextH2'>{e.description}</h2>
                                </div>
                            </div>
                            <div className="container text-center OrganiserViewAllBlogs-div-end">
                                <div className="row">
                                    <div className="col-6">
                                        <Link to='/edit'><button className='OrganiserViewAllBlogs-button-1'>Edit</button></Link>
                                    </div>
                                    <div className="col-6">
                                        <Link to='/remove'><button className='OrganiserViewAllBlogs-button-2'>Remove</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OrganiserViewAllBlogs;
