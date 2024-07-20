import React, { useEffect, useState } from 'react'
import './OrganiserViewScore.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import img from "../../Assets/Back Button.svg"
import axiosInstance from '../Constant/BaseURL';


function OrganiserViewScore() {
const { id } = useParams();

    const navigate = useNavigate()
    const [inputValue, setInputValue] = useState({});

    const [userData, setUserData] = useState([]);
    const url = axiosInstance.defaults.url;
    console.log("url,", url);
    const getData = () => {
        axiosInstance.post(`/viewEnrollments/${id}`).then(res => {

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
    const getData2 = () => {
        axiosInstance.post(`/viewEventById/${id}`).then(res => {

            console.log(res);

            if ((res.data.data))
                setInputValue(res.data.data);
            else
            setInputValue(null)
            console.log(res.data.data);
        }).catch(err => {
            console.log(err);
        })
    }
    useEffect(() => {

        let res;

        getData()
getData2()



    }, []);



    return (

        <div>

            <div className='container OrganiserViewScoreMainDivBG'>

                <div className='OrganiserViewScore-header'>

                    {/* <button className='OrganiserViewScore-headercontainer-BackButton' ><Link to='/OrganizerScoreboard'><img src={img} alt=' ' /></Link></button> */}
                    <h1 className='OrganiserEditScore-headercontainer-h1'>{inputValue.name} Scoreboard </h1>{/* event name here */}

                </div>

                <table className='OrganiserViewScore-Table container ' >

                    <thead>

                        <tr className=' OrganiserViewScore-tableHeadRow container'>

                            <td className='col-2 OrganiserViewScore-tableHeadData-start'>Sl</td>
                            <td className='col-3 OrganiserViewScore-tableHeadData'>Team Name</td>
                            <td className='col-2 OrganiserViewScore-tableHeadData'>Score</td>
                            <td className='col-3 OrganiserViewScore-tableHeadData'>Result</td>
                            <td className='col-2 OrganiserViewScore-tableHeadDataEnd'>View Team Details</td>

                        </tr>

                    </thead>

                    <tbody className='tbodyclass'>{/* <------ Array map inside this */}


{

    (userData && userData.length >= 1) ? (userData.map((x, index) => {


        return (

            <tr className='OrganiserEditScore-tableBodyRow container' >

                <td className='col-2 OrganiserEditScore-tableBodyData'>{++index}</td>{/* Sl no */}
                <td className='col-3 OrganiserEditScore-tableBodyData'>{x.coachId.teamName}</td>{/* Team Name */}
                <td className='col-2 OrganiserEditScore-tableBodyData no-arrows'>{x.score} </td>
                <td className='col-3 OrganiserEditScore-tableBodyData'>{x.position}</td>
                <td className='col-2 OrganiserEditScore-tableBodyData-end'> <Link to= {`/OrganizerViewDetails/${x.coachId._id}`}>View data</Link></td>

            </tr>
        )
    })) : <h1></h1>


}


</tbody>

                </table>

                <Link to={`/OrganizerEditScore/${id}`} style={{textDecoration:'none'}}>
                    <button className='OrganiserViewScore-addbutton'>Add Score</button>
                </Link>
            </div>

        </div>

    )

}

export default OrganiserViewScore
