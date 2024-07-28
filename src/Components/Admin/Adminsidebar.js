import React, { useEffect, useState } from "react";import './Adminsidebar.css'

import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../Constant/BaseURL";



function Adminsidebar() {
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("adminId" == null)) {
          navigate("/");
        }
      },[navigate]);
    const logout = () => {
        localStorage.setItem('admin',0)
        navigate("/AdminLogin");
      };
    return (
        <div>
            <div className='adminsidebarmaindiv1'>
                <div className='adminsidebarmaindiv2'>
                    <Link to='/admindashboard' className='admin-dash-link'><h6 className='adminsidebarbutton-1'>Dashboard</h6></Link>
                    <Link className='admin-dash-link1' to='/EventRequests'><h6 className='adminsidebarbutton-2'>Event Request</h6></Link>
                    <Link className='admin-dash-link1' to='/ViewAllEvents'><h6 className='adminsidebarbutton-2'>View All Events</h6></Link>

                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle adminsidebarbutton-2 " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Reports
                        </button>
                        <ul class="dropdown-menu">
                            <li><Link class="dropdown-item" to="/AdminTicketRevenue">Ticket Revenue</Link></li>
                            <li><Link class="dropdown-item" to="/AdminTeamWiseReport">TeamWise Report</Link></li>
                        </ul>
                    </div>
                    <Link className='admin-dash-link' to='/AdminViewReviewAndRatings'><h6 className='adminsidebarbutton-2'>Reviews & Rating</h6></Link>
                    <Link to='/AdminEnquiriesViewpage' className='admin-dash-link'><h6 className='adminsidebarbutton-2'>Enquries</h6></Link>
                    <Link to='/AdminComplaints' className='admin-dash-link'><h6 className='adminsidebarbutton-2'>Complaints</h6></Link>
                    <Link to='/AdminResetPass' className='admin-dash-link'><h6 className='adminsidebarbutton-2'>Reset Password</h6></Link>
                    <Link to={'/'} onClick={logout} className='admin-dash-link'><h6 className='adminsidebarbutton-2'>Logout</h6></Link>
                </div>
            </div>
            {/* <div className='adminsidebarmaindiv1'>
                <div className='adminsidebarmaindiv2'>
            <div>
                <button className='adminsidebarbutton-1'>Dashboard</button></div>
            <div>
                <button className='adminsidebarbutton-2'>Event Request</button>
                </div>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle adminsidebarbutton-2 " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Reports
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
            <div><button className='adminsidebarbutton-2'>Reviews & Rating</button></div>
            <div><button className='adminsidebarbutton-2'>Enquries</button></div>
            <div><button className='adminsidebarbutton-2'>Complaints</button></div>
            <div><button className='adminsidebarbutton-2'>Reset Password</button></div>
            <div><button className='adminsidebarbutton-2'>Logout</button></div>
            </div>
            </div> */}
        </div>
    )
}

export default Adminsidebar