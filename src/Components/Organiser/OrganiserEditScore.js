import React, { useEffect, useState } from 'react'
import './OrganiserEditScore.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import img from "../../Assets/Back Button.svg"
import axiosInstance from '../Constant/BaseURL';

function OrganiserEditScore() {
    const { eventId } = useParams();
    const [inputValue, setInputValue] = useState('');

    const navigate = useNavigate()

    const [userData, setUserData] = useState([]);
    const url = axiosInstance.defaults.url;
    console.log("url,", url);
    const getData = () => {
        axiosInstance.post(`/viewEnrollments`).then(res => {

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

    const handlechange = (id, value) => {
        console.log("inp", value);
        axiosInstance.post(`/addScoreByEnrollmentById/${id}`, { score: value }).then(res => {

            console.log(res);

        }).catch(err => {
            console.log(err);
        })
    }
    
    const handleUpdate = (id, value) => {
        console.log("inp", value);
        axiosInstance.post(`/updatePositions/${id}`, { score: value }).then(res => {

            console.log(res);

        }).catch(err => {
            console.log(err);
        })
    }
    return (

        <div>

            <div className='container OrganiserEditScoreMainDivBG'>

                <div className='OrganiserEditScore-header'>

                    <button className='OrganiserEditScore-headercontainer-BackButton' ><Link to='/OrganizerViewScore'><img src={img} alt=' ' /></Link></button>
                    <h1 className='OrganiserEditScore-headercontainer-h1'>TVM Junior Sport’s Scoreboard </h1>{/* event name here */}

                </div>

                <table className='OrganiserEditScore-Table container ' >

                    <thead>

                        <tr className=' OrganiserEditScore-tableHeadRow container'>

                            <td className='col-2 OrganiserEditScore-tableHeadData-start'>Sl</td>
                            <td className='col-3 OrganiserEditScore-tableHeadData'>Team Name</td>
                            <td className='col-2 OrganiserEditScore-tableHeadData'>Score</td>
                            {/* <td className='col-3 OrganiserEditScore-tableHeadData'>Result</td> */}
                            <td className='col-2 OrganiserEditScore-tableHeadDataEnd'>View Team Details</td>

                        </tr>

                    </thead>


                    <tbody className='tbodyclass'>{/* <------ Array map inside this */}


                        {

                            (userData && userData.length >= 1) ? (userData.map((x, index) => {


                                return (

                                    <tr className='OrganiserEditScore-tableBodyRow container' >

                                        <td className='col-2 OrganiserEditScore-tableBodyData'>{++index}</td>{/* Sl no */}
                                        <td className='col-3 OrganiserEditScore-tableBodyData'>{x.coachId.teamName}</td>{/* Team Name */}
                                        <td className='col-2 OrganiserEditScore-tableBodyData no-arrows'><input className="OrganiserEditScoretext" type="number"
                                            onChange={(event) => {
                                                handlechange(x._id, event.target.value);
                                            }} name="score" placeholder={x.score} /></td>{/* Score */}
                                        {/* <td className='col-3 OrganiserEditScore-tableBodyData'><input className="OrganiserEditScoretext" type="Text" placeholder="" name="Score"></input></td>Result */}
                                        <td className='col-2 OrganiserEditScore-tableBodyData-end'> <Link to='/OrganizerViewDetails'><a href=' '></a></Link></td>

                                    </tr>
                                )
                            })) : <h1></h1>


                        }


                    </tbody>

                </table>

                {/* button container */}
                <div className='OrganiserEditScore-buttoncontain'>

                    <button className='OrganiserEditScore-Updatebutton' onClick={()=>{handleUpdate(eventId)}}>Update</button>

                    <Link to='/OrganizerViewScore' style={{ textDecoration: "none" }}>
                        <button className='OrganiserEditScore-Cancelbutton'>Cancel</button>
                    </Link>

                </div>
            </div>

        </div>

    )

}

export default OrganiserEditScore
