import React from 'react';
import "./AdminViewTeamCoach.css"

function AdminViewTeamCoach () {
    
    return (

        <div className = 'container AdminViewTeamCoachMainDivBG'>

            <h1 className = 'AdminViewTeamCoach-h1'>Team Coaches List</h1>
            
            <table className = 'AdminViewTeamCoach-Table ' >

                <thead >

                    <tr className = ' AdminViewTeamCoach-tableHeadRow'>

                        <td className = 'col-2 AdminViewTeamCoach-tableHeadData'>Sl</td>
                        <td className = 'col-2 AdminViewTeamCoach-tableHeadData'>Coach Name</td>
                        <td className = 'col-2 AdminViewTeamCoach-tableHeadData'>Team Name</td>
                        <td className = 'col-2 AdminViewTeamCoach-tableHeadData'>Sport</td>
                        <td className = 'col-2 AdminViewTeamCoach-tableHeadData'>Team Count</td>
                        <td className = 'col-2 AdminViewTeamCoach-tableHeadDataEnd'>View</td>

                    </tr>
                </thead>

                <tbody>

                    <tr className='AdminViewTeamCoach-tableBodyRow' >

                        <td className='col-2 AdminViewTeamCoach-tableBodyData'>1 {/*Sl No*/}</td>
                        <td className='col-2 AdminViewTeamCoach-tableBodyData'>Raju {/* Coach Name */}</td>
                        <td className='col-2 AdminViewTeamCoach-tableBodyData'>The King {/* Team Name */}</td>
                        <td className='col-2 AdminViewTeamCoach-tableBodyData'>Cricket {/* Sport */}</td>
                        <td className='col-2 AdminViewTeamCoach-tableBodyData'>11 {/* Team Count */}</td>
                        <td className='col-2 AdminViewTeamCoach-tableBodyData'x><a href=" " alt=""> View More </a> {/* Coach Name */}</td>
                        
                    </tr>

                </tbody>

            </table>

        </div>

    );

}

export default AdminViewTeamCoach;