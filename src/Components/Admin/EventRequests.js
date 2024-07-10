import React, { useEffect, useState } from 'react';
import './EventRequests.css'
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from "../Constant/BaseURL";
import img from '../../Assets/Search Button.svg'
import img2 from '../../Assets/Group 201.svg'
import img3 from '../../Assets/Group 202.svg'

function EventRequests() {

   
    const [isApproved, setIsApproved] = useState(false)

    const navigate = useNavigate()
const id=localStorage.getItem('organizerId')
    const [userData, setUserData] = useState([]);
    const url = axiosInstance.defaults.url;
    console.log("url,", url);
    useEffect(() => {

        let res;


        axiosInstance.post(`viewEvents`).then(res => {

            console.log(res);

            if ((res.data.data).length > 0)
                setUserData(res.data.data);
            else
                setUserData(null)
            console.log(res.data.data);
        }).catch(err => {
            console.log(err);
        })

    }, []);
    useEffect(() => {
        console.log("users", userData);
    })

    const approve = (id) => {
        axiosInstance
          .post(`/approveEventById/${id}`)
          .then((res) => {
            if (res.data.status === 200) {
              alert("Event Approved");
              navigate("/admindashboard");
            }
          })
          .catch((error) => {
            console.error("Error!", error);
          });
      };
    
      const reject = (id) => {
        axiosInstance
          .post(`/rejectEventById/${id}`)
          .then((res) => {
            if (res.data.status === 200) {
              alert(" Request Rejected");
              navigate("/admindashboard");
            }
          })
          .catch((error) => {
            console.error("Error!", error);
          });
      };
    return (

        <div className='container EventRequestsMainDivBG'>

            <h1 className='EventRequests-h1'>Events List</h1>

            <div className='EventRequests-search-container'>

                <input type='search' placeholder='Search Here' className='EventRequests-search'></input>
                <button className='EventRequests-search-button'> <img src={img} alt=' ' /> </button>

            </div>

            <table className='EventRequests-Table container ' >

                <thead >

                    <tr className=' EventRequests-tableHeadRow container'>

                        <td className='col-2 EventRequests-tableHeadData'>Sl</td>
                        <td className='col-2 EventRequests-tableHeadData'>Event Name</td>
                        <td className='col-2 EventRequests-tableHeadData'>Date and Time</td>
                        <td className='col-2 EventRequests-tableHeadData'>Category</td>
                        <td className='col-2 EventRequests-tableHeadData'>Venue</td>
                        <td className='col-2 EventRequests-tableHeadDataEnd'>Approve/Reject</td>

                    </tr>

                </thead>

                <tbody>

                    {

                        (userData && userData.length > 0) ? (userData.map((x, index) => {

                            return (
                                <tr className='EventRequests-tableBodyRow container' >

<td className='col-2 ViewAllEvents-tableBodyData'>{index}</td>
                                    <td className='col-2 ViewAllEvents-tableBodyData'>{x.name}</td>
                                    <td className='col-2 ViewAllEvents-tableBodyData'>{x.date.split('T')[0]} {x.time}</td>
                                    <td className='col-2 ViewAllEvents-tableBodyData'> {x.category}</td>
                                    <td className='col-2 ViewAllEvents-tableBodyData-end'> {x.venue}</td>
                                    <td className='col-2 EventRequests-tableBodyData-end'>
                                        <button type="button" onClick={()=>{approve(x._id)}}><img src={img2} alt='Approve' style={{marginLeft:"20px"}}/>
                                    </button>
                                    <button type="button" onClick={()=>{approve(x._id)}}>   <img src={img3} alt='Reject' style={{marginLeft:"20px"}}/>
                                      </button></td>

                                </tr>
                            )
                        })) : (
                            <h1 className="AdminCoachRequestH5">No Events Found</h1>
                        )

                    }

                </tbody>

            </table>

            <div className="btn-group EventRequests-Pagination" role="group" >
                <button type="button" className="btn btn-outline-secondary text-outline-light ">Previous</button>
                <button type="button" className="btn btn-outline-secondary text-outline-light ps-4 pe-4 ">Next</button>
            </div>

        </div>

    )

}

export default EventRequests
