import './AdminEnquiriesViewpage.css';
import img from '../../Assets/Search Button.svg';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../Constant/BaseURL';


function AdminEnquiriesViewpage() {

    const { id } = useParams();

    const navigate=useNavigate()

    const [userData, setUserData] = useState([]);
    const url = axiosInstance.defaults.url;
    console.log("url,", url);
    const getData=()=>{
        axiosInstance.post(`/viewEnquiries`).then(res => {

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
    useEffect(() => {

        let res;

getData()
      



    }, []);
    useEffect(() => {
        console.log("users", userData);
    })
    const deleteEnquiry=(id)=> {
      
            axiosInstance.post(`/deleteEnquiryById/${id}`).then(res => {
                console.log(res);
                if(res.data.status==200){
                    alert('Removed Succesfully')
                getData()
                }
                else
                alert(res.data.msg)
            })
                .catch(err => {
                    console.log(err);
                })
        
            
}







    
  return (
    <div className = 'AdminEnquiriesViewpageMainDivBG'>

    <h1 className = 'AdminEnquiriesViewpage-h1'>Enquiries List new</h1>
    

    <table className = 'AdminEnquiriesViewpage-Table container ' >

        <thead >

            <tr className = ' AdminEnquiriesViewpage-tableHeadRow'>

                <td className = 'col-2 AdminEnquiriesViewpage-tableHeadData'>Sl </td>
                <td className = 'col-2 AdminEnquiriesViewpage-tableHeadData'> Name</td>
                <td className = 'col-2 AdminEnquiriesViewpage-tableHeadData'>Email id</td>
                <td className = 'col-2 AdminEnquiriesViewpage-tableHeadData'>Enquiries Type</td>
                <td className = 'col-2 AdminEnquiriesViewpage-tableHeadData'>Contact Number</td>
                <td className = 'col-2 AdminEnquiriesViewpage-tableHeadData'>Message</td>
                <td className = 'col-2 AdminEnquiriesViewpage-tableHeadData'>Deletion</td>


            </tr>
        </thead>

        <tbody>
        {

(userData&&userData.length>=1)?(userData.map((x,index) => {


return(
            <tr className = 'AdminEnquiriesViewpage-tableBodyRow' >

                <td className = 'col-2 AdminEnquiriesViewpage-tableBodyData'>{index}</td>
                <td className = 'col-2 AdminEnquiriesViewpage-tableBodyData'>{x.name}</td>
                <td className = 'col-2 AdminEnquiriesViewpage-tableBodyData'>{x.email}</td>
                <td className = 'col-2 AdminEnquiriesViewpage-tableBodyData'>{x.enquiriestype} {/* Email id */}</td>
                <td className = 'col-2 AdminEnquiriesViewpage-tableBodyData'>{x.contactnumber} {/* State */}</td>
                <td className = 'col-2 AdminEnquiriesViewpage-tableBodyData'>{x.message} {/* State */}</td>
                <td className = 'col-2 AdminEnquiriesViewpage-tableBodyData'><button className='btn btn-secondary' onClick={()=>{deleteEnquiry(x._id)}}>Delete</button></td>


            </tr>
)})):<h1></h1>


}
        </tbody>

    </table>


</div>

)
}

export default AdminEnquiriesViewpage