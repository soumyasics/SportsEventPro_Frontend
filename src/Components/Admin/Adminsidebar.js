import React from 'react'
import './Adminsidebar.css'





function Adminsidebar() {
    return (
        <div>



            <div className='adminsidebarmaindiv1'>



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














            </div>












        </div>
    )
}

export default Adminsidebar