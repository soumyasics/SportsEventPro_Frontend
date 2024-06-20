import React from 'react';
import "./AdminViewTeamCoach.css"

function AdminViewTeamCoach () {
    
    return (

        <div className = 'container AdminViewTeamCoachMainDivBG'>


            <h1 className = 'AdminViewTeamCoach-h1'>Team Coaches List</h1>
            
            <table className = 'AdminViewTeamCoach-Table'>

                <thead className = ' AdminViewTeamCoach-tablehead'>

                    <td className = 'col-2 AdminViewTeamCoach-tabledata'>Sl</td>
                    <td className = 'col-2 AdminViewTeamCoach-tabledata'>Coach Name</td>
                    <td className = 'col-2 AdminViewTeamCoach-tabledata'>Team Name</td>
                    <td className = 'col-2 AdminViewTeamCoach-tabledata'>Sport</td>
                    <td className = 'col-2 AdminViewTeamCoach-tabledata'>Team Count</td>
                    <td className = 'col-2 AdminViewTeamCoach-tabledata'>View</td>

                </thead>

            </table>

        </div>

    );

}

export default AdminViewTeamCoach;