import React, { useEffect, useState } from 'react'
import "./AdminDashbordTopContent.css"
import topcontent1 from '../../Assets/AdminDashbordTopContent1.png'
import topcontent2 from '../../Assets/AdminDashbordTopContent2.png'
import topcontent3 from '../../Assets/AdminDashbordTopContent3.png'
import AdminDashbordTopContent_2 from './AdminDashbordTopContent_2'
import axiosInstance from '../Constant/BaseURL'

function AdminDashbordTopContent() {

    const [coaches, setCoaches] = useState([]);
    const [organizers, setOrganizers] = useState([]);
    const[viewers,setViewers]=useState([])


    useEffect(() => {
        axiosInstance
          .post("/viewTeamCoachs")
          .then((res) => {
            if (res.data.status === 200) {
              console.log(res);
              setCoaches(res.data.data || []);
            } else {
                setCoaches([]);
            }
          })
          .catch((error) => {
            console.error("Error!", error);
          });
      }, []);
      useEffect(() => {
        axiosInstance
          .post("/viewOrganizers")
          .then((res) => {
            if (res.data.status === 200) {
              console.log(res);
              setOrganizers(res.data.data || []);
            } else {
                setOrganizers([]);
            }
          })
          .catch((error) => {
            console.error("Error!", error);
          });
      }, []);
      useEffect(() => {
        axiosInstance
          .post("/viewviewerss")
          .then((res) => {
            if (res.data.status === 200) {
              console.log(res);
              setViewers(res.data.data || []);
            } else {
                setViewers([]);
            }
          })
          .catch((error) => {
            console.error("Error!", error);
          });
      }, []);
    return (
        <div>
            <div className='container mt-5'> 
                <h1 className='Admin-Dashbord-TopContent-Head '>Total Statistics</h1>
                <div class="container text-center mt-5">
                    <div class="row  container">
                        <div class="col Admin-Dashboard-Content-Style container">
                            <div className='row'>
                                <div className='col mt-4'>
                                    <img src={topcontent1} className='Admin-Dashboard-Content-topcontent1img'/>
                                </div>
                                <div className='col'>
                                    <div className='AdminDashbordTopContentDiv-1 mt-2'>
                                        <h4 className='h4nametext'>Total Viewers</h4>
                                        <span className='Admin-Dashboard-Content-span mt-1 text-center'>{viewers.length}</span>
                                    </div>
                                   
                                    
                                </div>
                            </div>
                            
                        </div>
                        <div class="col Admin-Dashboard-Content-Style container ms-4">
                            <div className='row'>
                                <div className='col mt-4'>
                                    <img src={topcontent2} className='Admin-Dashboard-Content-topcontent1img'/>
                                </div>
                                <div className='col-8'>
                                    <div className='AdminDashbordTopContentDiv-1 mt-2'>
                                        <h4 className='h4nametext'>Total Organizers</h4>
                                        <span className='Admin-Dashboard-Content-span mt-4 text-center'>{organizers.length}</span>

                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                        <div class="col Admin-Dashboard-Content-Style container ms-4">
                            <div className='row'>
                                <div className='col-5 mt-4'>
                                    <img src={topcontent3} className='Admin-Dashboard-Content-topcontent1img'/>
                                </div>
                                <div className='col-7'>
                                    <div className='AdminDashbordTopContentDiv-1 mt-2'>
                                        <h4 className='h4nametext'>Total TeamCoaches</h4>
                                        <span className='Admin-Dashboard-Content-span mt-4 text-center'> {coaches.length}</span>
                                    </div>
                                   
                                    
                                </div>
                            </div>
                            
                        </div>
                        {/* <div class="col AdminDashboardContentStyle">
                            <div className='AdminDashbordTopContentDiv-2'></div>
                                <div className='AdminDashbordTopContentSubDiv-2'> 
                                    <h2 style={{fontSize:"23px"}}>Total Organizers</h2>
                                    <h1 style={{marginBottom:"70px"}}>0</h1>
                                    </div>
                            </div>
                        <div class="col AdminDashboardContentStyle">
                        <div className='AdminDashbordTopContentDiv-3'></div>
                        <div className='AdminDashbordTopContentSubDiv-3'>
                            <h2 style={{fontSize:"23px"}}>Total Team Coaches</h2>
                            <h1>0</h1>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <AdminDashbordTopContent_2/>
        </div>
    )
}

export default AdminDashbordTopContent
