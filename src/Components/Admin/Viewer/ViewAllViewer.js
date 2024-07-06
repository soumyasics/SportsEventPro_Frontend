import React, { useEffect, useState } from 'react';
import './ViewAllViewer.css'
import img from '../../../Assets/Search Button.svg'
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from "../../Constant/BaseURL";

function ViewAllViewer() {

    const navigate = useNavigate()

    const [userData, setUserData] = useState([]);
    const url = axiosInstance.defaults.url;
    console.log("url,", url);
    useEffect(() => {

        let res;


        axiosInstance.post(`viewViewers`).then(res => {

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

    const viewDetails = (id) => {
        navigate(`/Viewerdetailspopup/${id}`)
    }
    return (

        <div className='container ViewerMainDivBG Viewer-Stylerow'>


            <h1 className='Viewer-h1'>Viewer List</h1>

            <div className='AdmiViewTeamCoach-search-container'>

                <input type='search' placeholder='Search Here' className='Viewer-search'></input>
                <button className='Viewer-search-button'> <img src={img} alt=' ' /> </button>

            </div>

            <table className='Viewer-Table ' >

                <thead >

                    <tr className=' Viewer-tableHeadRow'>

                        <td className='col-2 Viewer-tableHeadData'>Sl</td>
                        <td className='col-2 Viewer-tableHeadData'>Name</td>
                        <td className='col-2 Viewer-tableHeadData'>Contact Number</td>
                        <td className='col-2 Viewer-tableHeadData'>Email Id</td>
                        <td className='col-2 Viewer-tableHeadData'>State</td>
                        <td className='col-2 Viewer-tableHeadDataEnd'>View</td>

                    </tr>
                </thead>

                <tbody>
                    {

                        (userData && userData.length > 0) ? (userData.map((x, index,) => {

                            return (
                                <tr className='Viewer-tableBodyRow' >

                                    <td className='col-2 Viewer-tableBodyData'> {index + 1}</td>
                                    <td className='col-2 Viewer-tableBodyData'>{x.name} {/* Viewer Name */}</td>
                                    <td className='col-2 Viewer-tableBodyData'>{x.teamName} {/* Viewer contact number */}</td>
                                    <td className='col-2 Viewer-tableBodyData'>{x.category} {/* ]email.id */}</td>
                                    <td className='col-2 Viewer-tableBodyData'>{x.totalteammembers} {/* state */}</td>
                                    <td className='col-2 Viewer-tableBodyData' x><Link to={`/AdminViewAprvdCoachIndividual/${x._id}`} alt=""> View More </Link></td>

                                </tr>
                            )
                        })) : (
                            <h1 className="AdminCoachRequestH5">No Viewers Found</h1>
                        )

                    }

                </tbody>

            </table>

            <div className="btn-group mt-3 mb-3" role="group" >
                <button type="button" className="btn btn-outline-secondary text-outline-light ">Previous</button>
                <button type="button" className="btn btn-outline-secondary text-outline-light ps-4 pe-4 ">Next</button>
            </div>

        </div>

    );


}

export default ViewAllViewer
