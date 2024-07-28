import './OrganiserViewReport.css'
import React, { useEffect, useState } from 'react'
import './OrganiserViewScore.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import img from "../../Assets/Back Button.svg"
import axiosInstance from '../Constant/BaseURL';
import img2 from "../../Assets/Back Button.svg"

function OrganiserViewReport() {
    const navigate = useNavigate()
    const id=localStorage.getItem('organizerId')
    const [inputValue, setInputValue] = useState({});

    const [userData, setUserData] = useState([]);
    const url = axiosInstance.defaults.url;
    console.log("url,", id);
    const getData = () => {
        axiosInstance.post(`/viewTicketsByOrganizerId/${id}`).then(res => {

            console.log(res);

            if ((res.data.data).length > 0)
                setUserData(res.data.data);
            else
                setUserData(null)
            console.log(res.data.data);
        }).catch(err => {
            console.log(err);
        })
    }
    // const getData2 = () => {
    //     axiosInstance.post(`/viewEventById/${id}`).then(res => {

    //         console.log(res);

    //         if ((res.data.data))
    //             setInputValue(res.data.data);
    //         else
    //         setInputValue(null)
    //         console.log(res.data.data);
    //     }).catch(err => {
    //         console.log(err);
    //     })
    // }
    useEffect(() => {

        let res;

        getData()



    }, []);
    const gotoDetails=(id)=>{
navigate(`/OrganizerViewDetiledReport/${id}`)
    }
    return (

        <div>

            <div className='OrganiserViewReport-MainDiv'>
                {/* seperated div for backbutton and text */}
                <div className='col  OrganiserViewReport-headercontainer-container-1'>

                    <div style={{ display: 'flex', flexDirection: 'row', width: 'max-content' }}>

                        <Link to='/OrganizerDashboard'><button className='OrganiserViewReport-headercontainer-BackButton'><img src={img2} alt=' ' /></button></Link>
                        <h1 className='OrganiserViewReport-headercontainer-h1'>View Report</h1>

                    </div>

                </div>

                <div style={{display:'flex',flexDirection:'row', flexWrap:'wrap', gap:'30px'}}>

                    {/* card start */}
                    
                    {

(userData && userData.length > 0) ? (userData.map((x, index) => {

    return (
                    <div className='OrganiserViewReport-content'>

                        <div className="OrganiserViewReport-body-top">

                            <div className='OrganiserViewReport-body-2'>

                                <h1 className='OrganiserViewReport-body-h1'>{x.eventId.name}</h1>{/* team names */}

                                <div style={{ display: "flex", flexDirection: 'row', gap: '8px' }}>

                                    <h1 className='OrganiserViewReport-body-h1-2'>{x.eventId.category}</h1>{/* event category */}

                                </div>

                            </div>

                            <div style={{ display: "flex", flexDirection: 'row' }}>

                                <h4 className='OrganiserViewReport-body-h4' style={{ marginLeft: '4px' }}>{x.amount}</h4> {/* replace 499 with the array var (ticket price) */}

                            </div>

                            <div className='OrganiserViewReport-body-3'>

                                <h5 className='OrganiserViewReport-body-h5'>{x.eventId.venue}</h5>{/* event venue */}
                                <h2 className='OrganiserViewReport-body-h2'>{x.eventId.date.slice(0,10)}</h2> {/* event date and time */}
                          <button className='btn btn-secondary' onClick={()=>{gotoDetails(x._id)}}>View Details</button>
                            </div>

                        </div>

                       

                    </div>
                )
            })) : (
                <h1 className="AdminCoachRequestH5">No Events Found</h1>
            )

        }

                </div>

            </div>

        </div>

    )

}

export default OrganiserViewReport
