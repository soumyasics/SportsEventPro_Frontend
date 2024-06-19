import React from 'react'
import "../../Components/Admin/AdminDashbordTopContent.css"

function AdminDashbordTopContent() {
    return (
        <div>
            <div>
                <h1 className='AdminDashbordTopContentHead'>Total Statistics</h1>
                <div class="container text-center">
                    <div class="row AdminDashboardContentStylerow" style={{borderWidth:"4.525px"}}>
                        <div class="col AdminDashboardContentStyle">
                            
                            <div className='AdminDashbordTopContentDiv-1'></div>
                            <div className='AdminDashbordTopContentSubDiv-1'>    
                            <h2 style={{fontSize:"23px"}}>Total Viewers</h2>
                            <h1>0</h1>
                            
                            </div>
                        </div>
                        <div class="col AdminDashboardContentStyle">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashbordTopContent
