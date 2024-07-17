import React from 'react'
import './ViewerViewScoreboard.css'
import { Link } from 'react-router-dom'
import img from "../../Assets/Back Button.svg"

function ViewerViewScoreboard() {

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


                        <tr className='ViewerViewScoreboard-tableBodyRow container' >

                            <td className='col-2 ViewerViewScoreboard-tableBodyData'>1</td>{/* Sl no */}
                            <td className='col-4 ViewerViewScoreboard-tableBodyData'>The Kings</td>{/* Team Name */}
                            <td className='col-3 ViewerViewScoreboard-tableBodyData'>18</td>{/* Score */}
                            <td className='col-3 ViewerViewScoreboard-tableBodyData-end'>First Place</td>{/* Result */}

                        </tr>


                    </tbody>

                </table>

            </div>

    )

}

export default ViewerViewScoreboard
