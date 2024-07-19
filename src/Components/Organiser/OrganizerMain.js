import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import OrganiserDashboard from './OrganiserDashboard';
import OrganizerScheduleEvents from './OrganizerScheduleEvents';
import OrganiserSideBar from './OrganiserSideBar';
import OrganiserViewEvents from './OrganiserViewEvents';
import OrganiserEnroll from './OrganiserEnroll';
import OrganiserScoreboard from './OrganiserScoreboard';
import OrganiserEditProfile from './OrganiserEditProfile';
import OrganiserViewScore from './OrganiserViewScore';
import OrganiserViewDetails from './OrganiserViewDetails';
import OrganiserEditScore from './OrganiserEditScore';
import OrganiserTicketGen from './OrganiserTicketGen';
import OrganiserTicketGen2 from './OrganiserTicketGen2';
import OrganiserViewReport from './OrganiserViewReport';
import OrganiserViewAllBlogs from './OrganiserViewAllBlogs';

function OrganizerMain({ data }) {




  const navigate = useNavigate();

  useEffect(() => {
    console.log(localStorage.getItem("organizerId"));
    if (localStorage.getItem("organizerId") == '') {
      navigate("/OrganizerLogin");
    }
  }, [navigate]);
  return (
    <div>
      <div>
        <div className='row'>
          <div className='col-3'>
            <OrganiserSideBar />
          </div>
          <div className='col-9'>
            {data === 'OrganizerDashboard' ? (
              <OrganiserDashboard />
            ) : data === 'OrganizerScheduleEvents' ? (
              <OrganizerScheduleEvents />
            ) : data === 'OrganizerViewEvents' ? (
              <OrganiserViewEvents />
            ) : data === 'OrganizerEnroll' ? (
              <OrganiserEnroll />
            ) : data === 'OrganizerScoreBoard' ? (
              <OrganiserScoreboard />
            ) : data === 'OrganiserEditProfile' ? (
              <OrganiserEditProfile />
            ) : data === 'OrganizerViewScore' ? (
              <OrganiserViewScore />
            ) : data === 'OrganizerEditScore' ? (
              <OrganiserEditScore />
            ) : data === 'OrganizerViewDetails' ? (
              <OrganiserViewDetails />
            ) : data === 'OrganizerTicketGen' ? (
              <OrganiserTicketGen />
            ) : data === 'OrganizerTicketGen2' ? (
              <OrganiserTicketGen2 />
            ) : data === 'OrganizerViewReport' ? (
              <OrganiserViewReport />
            ): data === 'OrganiserViewAllBlogs' ? (
              <OrganiserViewAllBlogs />
            )

            

              : (
                <OrganiserDashboard />
              )}
          </div>
        </div>
      </div>
    </div>
  )
}



export default OrganizerMain