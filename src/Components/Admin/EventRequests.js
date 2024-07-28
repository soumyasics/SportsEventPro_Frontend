import React, { useEffect, useState } from 'react';
import './EventRequests.css';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from "../Constant/BaseURL";
import img from '../../Assets/Search Button.svg';
import img2 from '../../Assets/Group 201.svg';
import img3 from '../../Assets/Group 202.svg';
import toast from 'react-hot-toast';

function EventRequests() {
    const [userData, setUserData] = useState([]);
    const navigate = useNavigate();
    const id = localStorage.getItem('organizerId');

    // Function to fetch data
    const getData = async () => {
        try {
            console.log("called");
            const response = await axiosInstance.post(`viewEvents`);
            if (response.data.data&&response.data.data.length > 0) {
                setUserData(response.data.data);
            } else {
                setUserData([]);
            }
        } catch (err) {
            console.error(err);
        }
    };

    
    
    // Function to approve an event
    const approve = async (id) => {
        try {
            const response = await axiosInstance.post(`/approveEventById/${id}`);
            if (response.data.status === 200) {
                getData();
                toast.info("Event Approved");
               // Refresh the data
            }
        } catch (error) {
            console.error("Error approving event!", error);
        }
    };

    // Function to reject an event
    const reject = async (id) => {
        try {
            const response = await axiosInstance.post(`/rejectEventById/${id}`);
            if (response.data.status === 200) {
                toast.success("Request Rejected");
                getData(); // Refresh the data
            }
        } catch (error) {
            console.error("Error rejecting event!", error);
        }
    };
    useEffect(() => {
        getData();
    },[]);


    return (
        <div className='container EventRequestsMainDivBG'>
            <h1 className='EventRequests-h1'>Events List</h1>

            <table className='EventRequests-Table container'>
                <thead>
                    <tr className='EventRequests-tableHeadRow container'>
                        <td className='col-2 EventRequests-tableHeadData'>Sl</td>
                        <td className='col-2 EventRequests-tableHeadData'>Event Name</td>
                        <td className='col-2 EventRequests-tableHeadData'>Date and Time</td>
                        <td className='col-2 EventRequests-tableHeadData'>Category</td>
                        <td className='col-2 EventRequests-tableHeadData'>Venue</td>
                        <td className='col-2 EventRequests-tableHeadDataEnd'>Approve/Reject</td>
                    </tr>
                </thead>
                <tbody>
                    {userData.length > 0 ? (
                        userData.map((x, index) => (
                            <tr key={x._id} className='EventRequests-tableBodyRow container'>
                                <td className='col-2 ViewAllEvents-tableBodyData'>{index + 1}</td>
                                <td className='col-2 ViewAllEvents-tableBodyData'>{x.name}</td>
                                <td className='col-2 ViewAllEvents-tableBodyData'>{x.date.split('T')[0]} {x.time}</td>
                                <td className='col-2 ViewAllEvents-tableBodyData'>{x.category}</td>
                                <td className='col-2 ViewAllEvents-tableBodyData-end'>{x.venue}</td>
                                <td className='col-2 EventRequests-tableBodyData-end'>
                                    <button type="button" className="btn" onClick={() => approve(x._id)}>
                                        <img src={img2} alt='Approve' style={{ marginLeft: "20px" }} />
                                    </button>
                                    <button type="button" className="btn" onClick={() => reject(x._id)}>
                                        <img src={img3} alt='Reject' style={{ marginLeft: "20px" }} />
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="AdminCoachRequestH5">No Events Found</td>
                        </tr>
                    )}
                </tbody>
            </table>

            <div className="btn-group EventRequests-Pagination" role="group">
                <button type="button" className="btn btn-outline-secondary text-outline-light">Previous</button>
                <button type="button" className="btn btn-outline-secondary text-outline-light ps-4 pe-4">Next</button>
            </div>
        </div>
    );
}

export default EventRequests;
