import React, { useEffect, useState } from 'react'
import './OrganiserDashboardNavBar.css'
import img from "../../Assets/Frame 18.jpg"
import img1 from '../../Assets/Search Button.svg'
import img2 from '../../Assets/frame2.png'
import axiosInstance from '../Constant/BaseURL'
import { Link, useNavigate, useParams } from 'react-router-dom'

function OrganiserDashboardNavBar() {
    const navigate = useNavigate()


    const id = localStorage.getItem('organizerId')
    const [userData, setUserData] = useState({
        name: '', email: ''
    });


    useEffect(() => {

        let res;


        axiosInstance.post(`viewOrganizerById/${id}`).then(res => {

            console.log(res);


            setUserData(res.data.data);
            console.log(userData);

        }).catch(err => {
            console.log(err);
        })



    }, [id]);
    console.log(userData);


    return (

        <div>

            <nav className='OrganiserTopbarMainDiv'>

                <div class=" OrganiserTopbar">

                    {/* main img and icon */}
                    <a class="navbar-brand " href=" ">

                        <div className='OrganiserTopbarDiv-1'>

                            <img className='OrganiserTopbarimg' src={img} alt=''></img>

                            <h1 className='OrganiserTopbarHead'>Sports Event Pro</h1>

                        </div>

                    </a>

                    {/* searchbar and profile*/}
                    <div className='Organiser-searchprofilecontain'>

                        {/* <div className='Organiser-search-container'>

                            <input type='search' placeholder='Search Here' className='Organiser-search'></input>
                            <button className='Organiser-search-button'> <img src={img1} alt=' ' /> </button>

                        </div> */}

                        <div className='OrganiserProfContainDiv'>

                            <img src={img2} alt=' ' />{/* put organiser image here pls */}

                            <div className='Organiserh1ContainDiv'>
                                <Link to='/OrganiserEditProfile' style={{textDecoration:'none'}}>
                                    <h1 className=' Organiser-h1 '>{userData.name}</h1>{/*organiser name */}
                                    <h1 className='Organiser-h1' >{userData.email}</h1>{/*organiser email */}
                                </Link>
                            </div>

                        </div>

                    </div>

                </div>

            </nav>

        </div>

    )

}

export default OrganiserDashboardNavBar
