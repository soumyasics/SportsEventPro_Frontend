import React from 'react'
import './OrganiserViewDetails.css'
import { Link } from 'react-router-dom'
import img from "../../Assets/Back Button.svg"


function OrganiserViewDetails() {

    return (

        <div>

            <div className='container OrganiserViewDetailsMainDivBG'>

                <div className='OrganiserViewDetails-header'>

                    <button className='OrganiserViewDetails-headercontainer-BackButton' ><Link to='/OrganizerViewScore'><img src={img} alt=' ' /></Link></button>
                    <h1 className='OrganiserViewDetails-headercontainer-h1'>View Team Details </h1>

                </div>

                <table className='OrganiserViewDetails-Table container ' >

                    <thead>

                        <tr className=' OrganiserViewDetails-tableHeadRow container'>

                            <td className='col-2 OrganiserViewDetails-tableHeadData-start'>Sl</td>
                            <td className='col-3 OrganiserViewDetails-tableHeadData'>Name</td>
                            <td className='col-2 OrganiserViewDetails-tableHeadData'>Contact Number</td>
                            <td className='col-3 OrganiserViewDetails-tableHeadData'>Email Id</td>
                            <td className='col-2 OrganiserViewDetails-tableHeadDataEnd'>Address</td>

                        </tr>

                    </thead>

                    <tbody className='tbodyclass'>

                        {/* map coach details to the v-below <tr> */}
                        <tr className='OrganiserViewDetails-tableBodyRow-2 container' >

                            <td className='col-2 OrganiserViewDetails-tableBodyData'>Team Coach</td>
                            <td className='col-3 OrganiserViewDetails-tableBodyData'>Akash</td>{/* Team Coach Name */}
                            <td className='col-2 OrganiserViewDetails-tableBodyData'>1234512345</td>{/* Team Coach Contact number */}
                            <td className='col-3 OrganiserViewDetails-tableBodyData'>akash@gmail.com</td>{/* Team Coach Email */}
                            <td className='col-2 OrganiserViewDetails-tableBodyData-end'> Near new bus stand, Main road, Trivandrum</td>{/* team coach address */}

                        </tr>
                        
                        {/* array map teammember details to v-below <tr>  */}
                        <tr className='OrganiserViewDetails-tableBodyRow container' >

                            <td className='col-2 OrganiserViewDetails-tableBodyData'>1</td>{/* Sl no */}
                            <td className='col-3 OrganiserViewDetails-tableBodyData'>Raju</td>{/* Team member Name */}
                            <td className='col-2 OrganiserViewDetails-tableBodyData'>1234123412</td>{/* Team Member contact number */}
                            <td className='col-3 OrganiserViewDetails-tableBodyData'>raju@gmail.com</td>{/* Team member email id */}
                            <td className='col-2 OrganiserViewDetails-tableBodyData-end'> Near new bus stand, Main road, Trivandrum</td>{/* Team member address */}

                        </tr>


                    </tbody>

                </table>

            </div>


        </div>

    )

}

export default OrganiserViewDetails
