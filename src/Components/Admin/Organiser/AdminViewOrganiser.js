import React from 'react'
import './AdminViewOrganiser.css'
import img from '../../../Assets/Search Button.svg'

function AdminViewOrganiser() {

    return (
  
        <div className = 'container AdminViewOrganiserMainDivBG'>

            <h1 className = 'AdminViewOrganiser-h1'>Organiser List</h1>
            
            <div className = 'AdmiViewOrganiser-search-container'>

                <input type = 'search' placeholder = 'Search Here' className = 'AdminViewOrganiser-search'></input>
                <button className = 'AdminViewOrganiser-search-button'> <img src = {img} alt = ' '/> </button>

            </div>

            <table className = 'AdminViewOrganiser-Table container ' >

                <thead >

                    <tr className = ' AdminViewOrganiser-tableHeadRow container'>

                        <td className = 'col-2 AdminViewOrganiser-tableHeadData'>Sl</td>
                        <td className = 'col-2 AdminViewOrganiser-tableHeadData'>Coach Name</td>
                        <td className = 'col-2 AdminViewOrganiser-tableHeadData'>Contact Number</td>
                        <td className = 'col-2 AdminViewOrganiser-tableHeadData'>Email Id</td>
                        <td className = 'col-2 AdminViewOrganiser-tableHeadData'>State</td>
                        <td className = 'col-2 AdminViewOrganiser-tableHeadDataEnd'>View</td>

                    </tr>
                </thead>

                <tbody>

                    <tr className = 'AdminViewOrganiser-tableBodyRow container' >

                        <td className = 'col-2 AdminViewOrganiser-tableBodyData'>1 {/*Sl No*/}</td>
                        <td className = 'col-2 AdminViewOrganiser-tableBodyData'>Raju {/* Coach Name */}</td>
                        <td className = 'col-2 AdminViewOrganiser-tableBodyData'>1234567890 {/* Contact number */}</td>
                        <td className = 'col-2 AdminViewOrganiser-tableBodyData'>raju@gmail.com {/* Email id */}</td>
                        <td className = 'col-2 AdminViewOrganiser-tableBodyData'>Kerala {/* State */}</td>
                        <td className = 'col-2 AdminViewOrganiser-tableBodyData' x><a href = " " alt = ""> View More </a> {/* View more */}</td>

                    </tr>

                </tbody>

            </table>

            <div className = "btn-group AdminViewOrganiser-Pagination" role = "group" >
                <button type = "button" className = "btn btn-outline-secondary text-outline-light ">Previous</button>
                <button type = "button" className = "btn btn-outline-secondary text-outline-light ps-4 pe-4 ">Next</button>
            </div>

        </div>

    )
}

export default AdminViewOrganiser
