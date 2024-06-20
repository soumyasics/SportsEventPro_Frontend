import React from 'react'
import "../Admin/AdminTopbar.css"
import img from "../../Assets/Frame 18.jpg"

function AdminTopbar() {
    return (
        <div>
            <nav className='AdminTopbarMainDiv'>
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <div className='AdminTopbarDiv-1'>
                            <img className='AdminTopbarimg' src={img} alt=''></img>
                            <h1 className='AdminTopbarHead'>Sports Event Pro</h1>
                        </div>
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default AdminTopbar
