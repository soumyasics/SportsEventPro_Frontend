import React, { useEffect, useState } from 'react'
import "../../Components/TeamCoach/TeamCoachViewTeamMembers.css"
import axiosInstance from '../Constant/BaseURL';
import { Link, useNavigate, useParams } from 'react-router-dom';
import img1 from '../../Assets/Vector.jpg'
import axiosMultipartInstance from '../Constant/multiPart';

const url = axiosInstance.defaults.url;
function TeamCoachViewTeamMembers() {

    const navigate = useNavigate()

    const [userData, setUserData] = useState([]);
    const url = axiosInstance.defaults.url;
    console.log("url,", url);
    const id=localStorage.getItem('tcId')
    useEffect(() => {

        let res;


        axiosInstance.post(`/viewTeamMemberByCoachId/${id}`).then(res => {

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

    return (
        <div>
            <div className='TeamCoachViewTeamMembersMainDivBG'>
            <img class="TeamCoachViewTeamMembersbackbutton" src={img1} alt="image not found"></img>
                <h1 className='TeamCoachViewTeamMembers-h1'>View Team Members</h1>


                <table className='TeamCoachViewTeamMembers-Table container ' >

                    <thead >

                        <tr className=' TeamCoachViewTeamMembers-tableHeadRow'>

                            <td className='col-2 TeamCoachViewTeamMembers-tableHeadData'>Sl </td>
                            <td className='col-2 TeamCoachViewTeamMembers-tableHeadData'> Name</td>
                            <td className='col-2 TeamCoachViewTeamMembers-tableHeadData'>Contact Number</td>
                            <td className='col-2 TeamCoachViewTeamMembers-tableHeadData'>Email id</td>
                            <td className='col-2 TeamCoachViewTeamMembers-tableHeadData'>State</td>
                            <td className='col-2 TeamCoachViewTeamMembers-tableHeadData'>View</td>

                        </tr>
                    </thead>

                    <tbody>
                        {

                            (userData&&userData.length >= 1)?(userData.map((x, index) => {


                                return (
                                    <tr className='TeamCoachViewTeamMembers-tableBodyRow' >
{console.log(x.name)}
                                        <td className='col-2 TeamCoachViewTeamMembers-tableBodyData'>{index}</td>
                                        <td className='col-2 TeamCoachViewTeamMembers-tableBodyData'>{x.name}</td>
                                        <td className='col-2 TeamCoachViewTeamMembers-tableBodyData'>{x.contact}</td>
                                        <td className='col-2 TeamCoachViewTeamMembers-tableBodyData'>{x.email}</td>
                                        <td className='col-2 TeamCoachViewTeamMembers-tableBodyData'>{x.state} { }</td>
                                        <td className='col-2 TeamCoachViewTeamMembers-tableBodyData'><Link to={`/TeamCoachEditTeamMembers/${x._id}`}>View Profile</Link></td>


                                    </tr>
                                )
                            })) : <h1></h1>


                        }
                    </tbody>

                </table>


            </div>

        </div>
    )
}

export default TeamCoachViewTeamMembers
