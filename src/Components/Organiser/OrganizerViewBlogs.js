import React, { useEffect, useState } from 'react';
import './OrganiserViewEvents.css'
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from "../Constant/BaseURL";
import './OrganizerViewBlogs.css'
import img from '../../Assets/Rectangle 4622.png'
import img2 from "../../Assets/Back Button.svg"
import img3 from '../../Assets/image 67.png'
import img4 from '../../Assets/mdi_play.svg'
import toast from 'react-hot-toast';
function OrganizerViewBlogs() {

    const [isApproved, setIsApproved] = useState(false)

    const navigate = useNavigate()
    const id = localStorage.getItem('organizerId')
    const [userData, setUserData] = useState([]);
    const url = axiosInstance.defaults.url;
    console.log("url,", url);
    const getData=()=>{
        console.log("in get");
        
        axiosInstance.post(`viewOrganizerBlogs/${localStorage.getItem('organizerId')}`).then(res => {

            console.log("datas",res);

            if ((res.data.data).length > 0)
                setUserData(res.data.data);
            else
                setUserData(null)
            console.log(res.data.data);
        }).catch(err => {
            console.log(err);
        })
    }
    useEffect(() => {

        let res;

getData()
        

    }, []);
    useEffect(() => {
        console.log("users", userData);
    })

const removeBlog=(id)=>{


    axiosInstance.post(`deleteOrganizerBlogById/${id}`).then(res => {

        console.log(res);
toast.success("Blog Remeved")
getData()
      
    }).catch(err => {
        console.log(err);
    })
}

    return (

        <div>

            <div className='OViewerBlogs-MainDiv'>

                {/* separated div for backbutton and text */}
                <div className='col  OViewerBlogs-headercontainer-container-1'>

                    <div style={{ display: 'flex', flexDirection: 'row', width: 'max-content' }}>

                        <Link to='/OrganizerDashboard'><button className='OViewerBlogs-headercontainer-BackButton'><img src={img2} alt=' ' /></button></Link>
                        <h1 className='OViewerBlogs-headercontainer-h1'>Blogs</h1>

                    </div>

                </div>

                <div className='OViewerBlogsimgDiv'>
                    {/* array map here */}

                    {/* a single card start */}
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
                                            <h1 className='OViewerBlogsimgDiv-content-1-h1-2'>{x.date.slice(0,10)}</h1>
                                            <h1 className='OViewerBlogsimgDiv-content-1-h1-3'>{x.description}</h1>

                                        </div>

                                        <div className='OViewerBlogsimgDiv-content-2'>

                                           <Link to={`/OrganiserEditBlog/${x._id}`} style={{textDecoration:'none'}}><button className='OrgEditButton'>Edit</button></Link> 
                                            <button className='OrgRemoveButton' onClick={()=>{removeBlog(x._id)}}>Remove</button>

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

export default OrganizerViewBlogs
