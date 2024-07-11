import React from 'react'
import './TeamCoachViewResults.css'
import { Link } from 'react-router-dom'
import img from "../../Assets/Back Button.svg"


function TeamCoachViewResults() {

    return (

        <div>

            <div className='container TeamCoachViewResultsMainDivBG'>

                <div className='TeamCoachViewResults-header'>

                    <button className='TeamCoachViewResults-headercontainer-BackButton' ><Link to='/TeamCoachResults'><img src={img} alt=' ' /></Link></button>
                    <h1 className='TeamCoachViewResults-headercontainer-h1'>TVM Junior Sport’s Scoreboard </h1>{/* event name here */}

                </div>

                <table className='TeamCoachViewResults-Table container ' >

                    <thead>

                        <tr className=' TeamCoachViewResults-tableHeadRow container'>

                            <td className='col-2 TeamCoachViewResults-tableHeadData-start'>Sl</td>
                            <td className='col-4 TeamCoachViewResults-tableHeadData'>Team Name</td>
                            <td className='col-3 TeamCoachViewResults-tableHeadData'>Score</td>
                            <td className='col-3 TeamCoachViewResults-tableHeadDataEnd'>Result</td>

                        </tr>

                    </thead>

                    <tbody className='tbodyclass'>


                        <tr className='TeamCoachViewResults-tableBodyRow container' >

                            <td className='col-2 TeamCoachViewResults-tableBodyData'>1</td>{/* Sl no */}
                            <td className='col-4 TeamCoachViewResults-tableBodyData'>The Kings</td>{/* Team Name */}
                            <td className='col-3 TeamCoachViewResults-tableBodyData'>18</td>{/* Score */}
                            <td className='col-3 TeamCoachViewResults-tableBodyData-end'>First Place</td>{/* Result */}

                        </tr>


                    </tbody>

                </table>

            </div>

        </div>

    )

}

export default TeamCoachViewResults
