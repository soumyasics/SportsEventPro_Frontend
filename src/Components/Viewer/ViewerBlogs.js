import './ViewerBlogs.css'
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from "../Constant/BaseURL";
import './ViewerBlogs.css'
import img from '../../Assets/Rectangle 4622.png'
import img2 from "../../Assets/Back Button.svg"
import img3 from '../../Assets/image 67.png'
import img4 from '../../Assets/mdi_play.svg'

function ViewerBlogs() {
    const [isApproved, setIsApproved] = useState(false)

    const navigate = useNavigate()
    const id = localStorage.getItem('organizerId')
    const [userData, setUserData] = useState([]);
    const url = axiosInstance.defaults.url;
    console.log("url,", url);
    useEffect(() => {

        let res;


        axiosInstance.post(`viewAllBlogs`).then(res => {

            console.log(res);

            if ((res.data.data).length > 0)
                setUserData(res.data.data);
            else
                setUserData(null)
            console.log(res.data.data);
        }).catch(err => {
            console.log(err);
        })

    }, []);
    useEffect(() => {
        console.log("users", userData);
    })
    return (

        <div>

            <div className='ViewerBlogs-MainDiv'>

                {/* separated div for backbutton and text */}
                <div className='col  ViewerBlogs-headercontainer-container-1'>

                    <div style={{ display: 'flex', flexDirection: 'row', width: 'max-content' }}>

                        <Link to='/ViewerHomePage'><button className='ViewerBlogs-headercontainer-BackButton'><img src={img2} alt=' ' /></button></Link>
                        <h1 className='ViewerBlogs-headercontainer-h1'>Blogs</h1>

                    </div>

                </div>

                <div className='ViewerBlogsimgDiv'>
                    {/* array map here */}

                    {

                        (userData && userData.length > 0) ? (userData.map((x, index) => {

                            return (
                                <div className='OViewerBlogsimgDiv-contain'>

                                    <div className='OViewerBlogsimgDiv-img'>

                                        <img src={`${url}/${x?.image?.filename}`} alt=' ' className='OViewerBlogsImg' />

                                    </div>

                                    <div className='OViewerBlogsimgDiv-content'>

                                        <div className='OViewerBlogsimgDiv-content-1'>

                                            <h1 className='OViewerBlogsimgDiv-content-1-h1'>{x.title}</h1>
                                            {/* <h1 className='OViewerBlogsimgDiv-content-1-h1-2'>{x.date.slice(0,10)}</h1> */}
                                            <h1 className='OViewerBlogsimgDiv-content-1-h1-3'>{x.description}</h1>

                                        </div>

                                       

                                    </div>

                                </div>
                            )
                        })) : (
                            <h1 className="AdminCoachRequestH5">No Blogs Found</h1>
                        )

                    }
                    {/* a single card end */}
                </div>

            </div>

        </div>

    )

}

export default ViewerBlogs
