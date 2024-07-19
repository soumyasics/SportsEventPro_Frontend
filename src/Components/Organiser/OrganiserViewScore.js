import React from 'react'
import './OrganiserViewScore.css'
import { Link, useParams } from 'react-router-dom'
import img from "../../Assets/Back Button.svg"


function OrganiserViewScore() {
const {id}=useParams()

    return (

        <div>

            <div className='container OrganiserViewScoreMainDivBG'>

                <div className='OrganiserViewScore-header'>

                    <button className='OrganiserViewScore-headercontainer-BackButton' ><Link to='/OrganizerScoreboard'><img src={img} alt=' ' /></Link></button>
                    <h1 className='OrganiserViewScore-headercontainer-h1'>TVM Junior Sport’s Scoreboard </h1>{/* event name here */}

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

                    <tbody className='tbodyclass'>


                        <tr className='OrganiserViewScore-tableBodyRow container' >

                            <td className='col-2 OrganiserViewScore-tableBodyData'>1</td>{/* Sl no */}
                            <td className='col-3 OrganiserViewScore-tableBodyData'>The Kings</td>{/* Team Name */}
                            <td className='col-2 OrganiserViewScore-tableBodyData'>18</td>{/* Score */}
                            <td className='col-3 OrganiserViewScore-tableBodyData'>First Place</td>{/* Result */}
                            <td className='col-2 OrganiserViewScore-tableBodyData-end'> <Link to='/OrganizerViewDetails'><a href=' '>View Details</a></Link></td>

                        </tr>


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
