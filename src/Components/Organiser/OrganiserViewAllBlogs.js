import React, { useEffect, useState } from 'react'
import './OrganiserViewAllBlogs.css'
import { Link, useNavigate } from 'react-router-dom'
import img from "../../Assets/Back Button.svg"
import axiosInstance from '../Constant/BaseURL';


function OrganiserViewAllBlogs() {
    const url = axiosInstance.defaults.url;
    const navigate = useNavigate()
    const [userData, setUserData] = useState({});

    console.log("url,", url);
    


    useEffect(() => {
        axiosInstance.post('/viewOrganizerBlogs').then(res => {
            console.log(res);
            // setUserData(res.data.data);
        }).catch(err => {
            console.log(err);
        })
    }, []);


    




  return (
    <div className='OrganiserViewAllBlogs-maindiv-1 container'>
        <div>
            <button className='OrganiserViewAllBlogs-BackButton' ><Link to='/OrganizerDashboard'><img src={img} alt='abc' /></Link></button>
            <h1 className='OrganiserViewAllBlogs-Heading'>Blogs</h1>
        </div>
                <div >

                    <div className='OrganiserViewAllBlogs-content'> 






                    {
//         userData.map((e)=>{
//             return(
//             <div class="col-4">



// <div className="card OrganiserViewAllBlogs-content-contain" >
//                         <img className='OrganiserViewAllBlogs-img'  src={e.image}/>{/*event image */}


//                             <div className="card-body" style={{width:"100%"}}>

//                                 <div className="card-title">

//                                     <h5 className='OrganiserViewAllBlogsHeadTxtH5'>{e.title}</h5>

//                                 </div>

//                                 <div className="card-text">

//                                     <h2 className='OrganiserViewAllBlogsTextH2'>{e.description}</h2> 









//                                 </div>

//                             </div>
//                             <div class="container text-center OrganiserViewAllBlogs-div-end ">
//   <div class="row">
//     <div class="col-6 ">
//     <Link to='/' ><button className='OrganiserViewAllBlogs-button-1'>Edit</button></Link>
//     </div>
//     <div class="col-6">
//     <Link to='/' ><button className='OrganiserViewAllBlogs-button-2'>Remove</button></Link>
//     </div>
//   </div>
// </div>


//                         </div>






//             </div>

//             )
        
//         })
        }




                        

                    </div>

                </div>
                





    </div>
  )
}

export default OrganiserViewAllBlogs