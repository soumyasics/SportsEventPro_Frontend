import React from 'react'
import './AdminEventWiseViewReport.css'
import { Link } from 'react-router-dom'
import img from "../../Assets/Back Button.svg"

function AdminEventWiseViewReport() {

    return (

        <div>

            <div className='container AdminEventWiseViewReportMainDivBG'>

                <div className='AdminEventWiseViewReport-header'>

                    <button className='AdminEventWiseViewReport-headercontainer-BackButton' ><Link to='/AdminEventWiseReport'><img src={img} alt=' ' /></Link></button>
                    <h1 className='AdminEventWiseViewReport-headercontainer-h1'>TVM Junior Sport’s Scoreboard </h1>{/* event name here */}

                </div>

                <table className='AdminEventWiseViewReport-Table container ' >

                    <thead>

                        <tr className=' AdminEventWiseViewReport-tableHeadRow container'>

                            <td className='col-2 AdminEventWiseViewReport-tableHeadData-start'>Sl</td>
                            <td className='col-4 AdminEventWiseViewReport-tableHeadData'>Team Name</td>
                            <td className='col-3 AdminEventWiseViewReport-tableHeadData'>Score</td>
                            <td className='col-3 AdminEventWiseViewReport-tableHeadDataEnd'>Result</td>

                        </tr>

                    </thead>

                    <tbody className='tbodyclass'>


                        <tr className='AdminEventWiseViewReport-tableBodyRow container' >

                            <td className='col-2 AdminEventWiseViewReport-tableBodyData'>1</td>{/* Sl no */}
                            <td className='col-4 AdminEventWiseViewReport-tableBodyData'>The Kings</td>{/* Team Name */}
                            <td className='col-3 AdminEventWiseViewReport-tableBodyData'>18</td>{/* Score */}
                            <td className='col-3 AdminEventWiseViewReport-tableBodyData-end'>First Place</td>{/* Result */}

                        </tr>


                    </tbody>

                </table>

            </div>

        </div>

    )

}

export default AdminEventWiseViewReport
