import './ViewerViewScoreboard.css'
import img from "../../Assets/Back Button.svg"


import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../Constant/BaseURL';
function ViewerViewScoreboard() {
    const {id}=useParams()
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

        <div className='container ViewerViewScoreboardMainDivBG'>

                <div className='ViewerViewScoreboard-header'>

                    <button className='ViewerViewScoreboard-headercontainer-BackButton' ><Link to='/ViewerScoreboard'><img src={img} alt=' ' /></Link></button>
                    <h1 className='ViewerViewScoreboard-headercontainer-h1'>TVM Junior Sport’s Scoreboard </h1>{/* event name here */}

                </div>

                <table className='ViewerViewScoreboard-Table container ' >

                    <thead>

                        <tr className=' ViewerViewScoreboard-tableHeadRow container'>

                            <td className='col-2 ViewerViewScoreboard-tableHeadData-start'>Sl</td>
                            <td className='col-4 ViewerViewScoreboard-tableHeadData'>Team Name</td>
                            <td className='col-3 ViewerViewScoreboard-tableHeadData'>Score</td>
                            <td className='col-3 ViewerViewScoreboard-tableHeadDataEnd'>Result</td>

                        </tr>

                    </thead>

                    <tbody className='tbodyclass'>
                    {

(userData && userData.length >= 1) ? (userData.map((x, index) => {


    return (

                        <tr className='ViewerViewScoreboard-tableBodyRow container' >

                            <td className='col-2 ViewerViewScoreboard-tableBodyData'>{++index}</td>{/* Sl no */}
                            <td className='col-4 ViewerViewScoreboard-tableBodyData'>{x.coachId.teamName}</td>{/* Team Name */}
                            <td className='col-3 ViewerViewScoreboard-tableBodyData'>{x.score}</td>{/* Score */}
                            <td className='col-3 ViewerViewScoreboard-tableBodyData-end'>{x.position}</td>{/* Result */}

                        </tr>
       )
    })) : <h1></h1>


}

                    </tbody>

                </table>

        </div>

    )

}

export default ViewerViewScoreboard
