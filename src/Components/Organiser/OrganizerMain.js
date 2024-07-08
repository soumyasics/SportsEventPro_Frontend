import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import OrganiserDashboard from './OrganiserDashboard';
import OrganizerScheduleEvents from './OrganizerScheduleEvents';
import OrganiserSideBar from './OrganiserSideBar';

function OrganizerMain({data}) {
   
  
   

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
                  <OrganiserDashboard/>
                ) : data === 'OrganizerScheduleEvents' ? (
                  <OrganizerScheduleEvents />
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