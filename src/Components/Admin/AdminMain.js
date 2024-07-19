import React, { useEffect } from 'react'
import Adminsidebar from './Adminsidebar'
import AdminDashbordTopContent from './AdminDashbordTopContent'
import AdminResetPass from './AdminResetPass'
import AdminLogin from './AdminLogin'
import AdminDashbordTopContent_2 from './AdminDashbordTopContent_2'
import AdminViewCoachRequest from './TeamCoach/AdminViewCoachRequest'
import AdminViewTeamCoach from './TeamCoach/AdminViewTeamCoach'
import AdminViewAprvdCoachIndividual from './TeamCoach/AdminViewAprvdCoachIndividual'
import Teamcoachdetailspopup from '../TeamCoach/Teamcoachdetailspopup'
import { useNavigate } from 'react-router-dom'
import AdminallViewOrganizerRequest from './Organiser/AdminallViewOrganizerRequest'
import AdminViewOrganiserRequest from './Organiser/AdminViewOrganiserRequest'
import AdminViewOrganiser from './Organiser/AdminViewOrganiser'
import AdminViewOrganizerToApprove from './Organiser/AdminViewOrganizerToApprove'
import ViewAllViewer from '../Viewer/ViewAllViewer'
import EventRequests from './EventRequests'
import ViewAllEvents from './ViewAllEvents'
import AdminEnquiriesViewpage from './AdminEnquiriesViewpage'
import AdminViewReviewAndRatings from './AdminViewReviewAndRatings'
import AdminTicketRevenue from './AdminTicketRevenue'
import AdminTicketRevenue2 from './AdminTicketRevenue2'
import AdminTeamWiseReport from './AdminTeamWiseReport'
import AdminEventWiseReport from './AdminEventWiseReport'

function AdminMain({ data }) {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(localStorage.getItem("admin"));
    if (localStorage.getItem("admin") == 0) {
      navigate("/AdminLogin");
    }
  }, [navigate]);
  return (
    <div>
      <div>
        <div className='row'>
          <div className='col-3'>
            <Adminsidebar />
          </div>
          <div className='col-9'>
            {data === 'admindashboard' ? (
              <AdminDashbordTopContent />
            ) : data === 'resetpswd' ? (
              <AdminResetPass />
            ) : data === 'ViewCoachRequest' ? (
              <AdminViewCoachRequest />
            ) : data === 'AdminEnquiriesViewpage' ? (
              <AdminEnquiriesViewpage />
            ) : data === 'AdminViewTeamCoach' ? (
              <AdminViewTeamCoach />
            ) : data === 'Teamcoachdetailspopup' ? (
              <Teamcoachdetailspopup />
            ) : data === 'AdminViewAprvdCoachIndividual' ? (
              <AdminViewAprvdCoachIndividual />
            ) : data === 'adminvieworganiserrequest' ? (
              <AdminViewOrganiserRequest />
            ) : data === 'adminvieworganizerreq' ? (
              <AdminViewOrganiser />
            ) : data === 'adminViewOrganizerToApprove' ? (
              <AdminViewOrganizerToApprove />
            ) : data === 'AdminallViewOrganizerRequest' ? (
              <AdminallViewOrganizerRequest />
            ) : data === 'admin-viewAllViewer' ? (
              <ViewAllViewer />
            ) : data === 'EventRequests' ? (
              <EventRequests />
            ) : data === 'ViewAllEvents' ? (
              <ViewAllEvents />
            ) : data === 'AdminViewReviewAndRatings' ? (
              <AdminViewReviewAndRatings />
            ) : data === 'AdminTicketRevenue' ? (
              <AdminTicketRevenue />
            ) : data === 'AdminTicketRevenue2' ? (
              <AdminTicketRevenue2 />
            ) : data === 'AdminTeamWiseReport' ? (
              <AdminTeamWiseReport />
            ) : data === 'AdminEventWiseReport' ? (
              <AdminEventWiseReport />
            ) :


              (
                <AdminDashbordTopContent />
              )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminMain
