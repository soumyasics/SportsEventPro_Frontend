import React from 'react'
import './OrganiserEditScore.css'
import { Link } from 'react-router-dom'
import img from "../../Assets/Back Button.svg"

function OrganiserEditScore() {

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
                            <td className='col-3 OrganiserEditScore-tableHeadData'>Result</td>
                            <td className='col-2 OrganiserEditScore-tableHeadDataEnd'>View Team Details</td>

                        </tr>

                    </thead>


                    <tbody className='tbodyclass'>{/* <------ Array map inside this */}


                        <tr className='OrganiserEditScore-tableBodyRow container' >

                            <td className='col-2 OrganiserEditScore-tableBodyData'>1</td>{/* Sl no */}
                            <td className='col-3 OrganiserEditScore-tableBodyData'>The Kings</td>{/* Team Name */}
                            <td className='col-2 OrganiserEditScore-tableBodyData'>18</td>{/* Score */}
                            <td className='col-3 OrganiserEditScore-tableBodyData'>First Place</td>{/* Result */}
                            <td className='col-2 OrganiserEditScore-tableBodyData-end'> <Link to='/OrganizerViewDetails'><a href=' '>View Details</a></Link></td>

                        </tr>


                    </tbody>

                </table>

                {/* button container */}
                <div className='OrganiserEditScore-buttoncontain'>

                    <button className='OrganiserEditScore-Updatebutton'>Update</button>
                    
                    <Link to='/OrganizerViewScore' style={{textDecoration:"none"}}>
                        <button className='OrganiserEditScore-Cancelbutton'>Cancel</button>
                    </Link>

                </div>
            </div>

        </div>

    )

}

export default OrganiserEditScore
