import React from 'react'
import Adminsidebar from './Adminsidebar'
import AdminDashbordTopContent from './AdminDashbordTopContent'
import AdminResetPass from './AdminResetPass'
import AdminLogin from './AdminLogin'
import AdminDashbordTopContent_2 from './AdminDashbordTopContent_2'

function AdminMain({data}) {
  return (
    <div>
      <div>
        <div className='row'>
            <div className='col-3'>
                <Adminsidebar/>
            </div>
            <div className='col-9'>
                {data === 'admindashboard'?(
                    <AdminDashbordTopContent/>
                    // <AdminDashbordTopContent_2/>
                ):data === 'resetpswd'?(
                    <AdminResetPass/>
                ):(
                    <AdminDashbordTopContent/>
                )}
            </div>
        </div>
      </div>
    </div>
  )
}

export default AdminMain
