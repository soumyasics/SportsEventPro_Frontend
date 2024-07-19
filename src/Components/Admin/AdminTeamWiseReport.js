import React from 'react'
import './AdminTeamWiseReport.css'
import { Link } from 'react-router-dom'
import img from "../../Assets/Back Button.svg"
import img2 from '../../Assets/Search Button.svg'


function AdminTeamWiseReport() {

    return (

        <div className='container AdminTeamWiseReportMainDivBG'>

            <div className='AdminTeamWiseReport-header' >

                <button className='AdminTeamWiseReport-headercontainer-BackButton' ><Link to='/ViewerScoreboard'><img src={img} alt=' ' /></Link></button>
                <h1 className='AdminTeamWiseReport-headercontainer-h1'>Team Wise Report</h1>{/* event name here */}

            </div>
            <div className='AdminTeamWiseReport-search-container'>
                
                <label>Team Name:</label><input type='search' placeholder='Search Here' className='AdminTeamWiseReport-search'></input>
                <button className='AdminTeamWiseReport-search-button'><img src={img2} alt=' ' /> </button>

            </div>

            <table className='AdminTeamWiseReport-Table container ' >

                <thead>

                    <tr className=' AdminTeamWiseReport-tableHeadRow container'>

                        <td className='col-2 AdminTeamWiseReport-tableHeadData-start'>Sl</td>
                        <td className='col-4 AdminTeamWiseReport-tableHeadData'>Events</td>
                        <td className='col-3 AdminTeamWiseReport-tableHeadData'>Score</td>
                        <td className='col-3 AdminTeamWiseReport-tableHeadDataEnd'>Result</td>

                    </tr>

                </thead>

                <tbody className='tbodyclass'>


                    <tr className='AdminTeamWiseReport-tableBodyRow container' >

                        <td className='col-2 AdminTeamWiseReport-tableBodyData'>1</td>{/* Sl no */}
                        <td className='col-4 AdminTeamWiseReport-tableBodyData'>{/* Events */}

                            <div style={{display:'flex',flexDirection:'column',gap:'0px'}}>

                                <div style={{ display: "flex", flexDirection: 'row', gap: '8px'}}>

                                    <h1 className='AdminTeamWiseReport-body-h1-1'>TVM Junior Sports</h1>{/* event name */}
                                    <h1 className='AdminTeamWiseReport-body-h1-2'>Football</h1>{/* event category */}

                                </div>
                                <div className='AdminTeamWiseReport-body-2'>

                                    <h5 className='AdminTeamWiseReport-body-h5'>Venue : Trivandrum</h5>{/* event venue */}
                                    <h2 className='AdminTeamWiseReport-body-h2'>12/12/2024, 2:00 PM</h2> {/* event date and time */}

                                </div>

                            </div>

                        </td>
                        <td className='col-3 AdminTeamWiseReport-tableBodyData'>18</td>{/* Score */}
                        <td className='col-3 AdminTeamWiseReport-tableBodyData-end'>First Place</td>{/* Result */}

                    </tr>


                </tbody>

            </table>

        </div>

    )

}

export default AdminTeamWiseReport
