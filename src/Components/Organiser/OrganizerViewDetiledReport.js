import React, { useEffect, useState } from 'react';
import img from '../../Assets/Search Button.svg';
import axiosInstance from '../Constant/BaseURL';
import '../Admin/AdminTicketRevenue2.css';
import { Link, useParams } from 'react-router-dom';
import img2 from "../../Assets/Back Button.svg";

function OrganizerViewDetiledReport() {
    const [userData, setUserData] = useState({
        eventId: { name: '', category: '',date:'',venue:'' },
        amount:0,
        seatingCapacity:0,
        availableSeats:0,
        endDate:''
    });
    const { id } = useParams();
    const [ticketData, setTicketData] = useState([])

    useEffect(() => {
        axiosInstance.post(`viewTicketById/${id}`).then(res => {
            console.log(res);
            setUserData(res.data.data);
            console.log(res.data.data);
        }).catch(err => {
            console.log(err);
        });
    }, [id]);
    
    useEffect(() => {
        axiosInstance.post(`viewTicketsByTicketId/${id}`).then(res => {
            console.log(res);
            setTicketData(res.data.data);
            console.log(res.data.data);
        }).catch(err => {
            console.log(err);
        });
    }, [id]);

    return (
        <div className='AdminTicketRevenue2-MainDiv'>
            <div className='col AdminTicketRevenue2-headercontainer-container-1'>
                <div style={{ display: 'flex', flexDirection: 'row', width: 'max-content' }}>
                 
                    <h1 className='AdminTicketRevenue2-headercontainer-h1'>Detailed Report</h1>
                </div>
            </div>

            <div className='AdminTicketRevenue2-content'>
                <div className='AdminTicketRevenue2-body-top'>
                    <div className='AdminTicketRevenue2-body-2'>
                        <h1 className='AdminTicketRevenue2-body-h1'>{userData.eventId.name}</h1>
                        <div style={{ display: "flex", flexDirection: 'row', gap: '8px' }}>
                            <h1 className='AdminTicketRevenue2-body-h1-1'>{userData.name}</h1>
                            <h1 className='AdminTicketRevenue2-body-h1-2'>{userData.eventId.category}</h1>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: 'row' }}>
                        <h4 className='AdminTicketRevenue2-body-h4' style={{ marginLeft: '4px' }}>₹ {userData.amount}</h4>
                    </div>
                    <div className='AdminTicketRevenue2-body-3'>
                        <h5 className='AdminTicketRevenue2-body-h5'>{userData.eventId.venue}</h5>
                        <h2 className='AdminTicketRevenue2-body-h2'>{userData.eventId.date.slice(0,10)}</h2>
                    </div>
                </div>

                <div className='AdminTicketRevenue2-body-bottom'>
                    <div className="column">
                        <div>
                            <h1 className='AdminTicketRevenue2-body-h1-1'>Total Tickets Generated : {userData.seatingCapacity}</h1>

                        </div>
                        <div>
                            <h1 className='AdminTicketRevenue2-body-h1-1'>Sold Out Tickets : {userData.seatingCapacity-userData.availableSeats}</h1>
                        </div>
                        <div>
                            <h1 className='AdminTicketRevenue2-body-h1-1'>Pending Tickets : {userData.availableSeats}</h1>
                        </div>
                        <div>
                            <h1 className='AdminTicketRevenue2-body-h1-1'>Total Amount Collected :{(userData.seatingCapacity-userData.availableSeats)*(userData.amount)}</h1>
                        </div>
                        <div>
                            <h1 className='AdminTicketRevenue2-body-h1-1'>Closing Date  :{(userData.endDate.slice(0,10))}</h1>
                        </div>
                    </div>
                   
                </div>
            </div>
            {
                (ticketData && ticketData.length > 0) ?(
            <table className='AdminTicketRevenue-Table ' >

<thead >

    <tr className=' AdminTicketRevenue-tableHeadRow'>

        <td className='col-2 AdminTicketRevenue-tableHeadData'>Sl</td>
        <td className='col-2 AdminTicketRevenue-tableHeadData'>viewer Name</td>
        <td className='col-2 AdminTicketRevenue-tableHeadData'>count</td>
        <td className='col-2 AdminTicketRevenue-tableHeadData'>Amount</td>
        <td className='col-2 AdminTicketRevenue-tableHeadData'>Date</td>

    </tr>
</thead>

<tbody>
{

(ticketData && ticketData.length > 0) ? (ticketData.map((x, index) => {

return (
    <tr className='AdminTicketRevenue-tableBodyRow' >

        <td className='col-2 AdminTicketRevenue-tableBodyData'>{++index}{/* Index */}</td>
        <td className='col-2 AdminTicketRevenue-tableBodyData'>{x.viewerId.name}</td>

        <td className='col-2 AdminTicketRevenue-tableBodyData'>{x.ticketCount}</td>
        <td className='col-2 AdminTicketRevenue-tableBodyData'>{x.amount}</td>
        <td className='col-2 AdminTicketRevenue-tableBodyData'>

            <div className='classDiv'>

                <h1 className='AdminTicketRevenue-tableBodyData-h1'>{x.createdAt.slice(0,10)}</h1>{/* date */}

            </div>

        </td>

    </tr>
)
        })
        ) : (<h1></h1>)

    }

</tbody>

</table>
                ):(
                    <h1>No Tickets Generated</h1>
                )}

        </div>
    );
}

export default OrganizerViewDetiledReport