import React from 'react'
import img from "../../Assets/Frame 18.jpg"

function TeamCoachTopbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg tertiary bg-dark">
                <div class="container-fluid">
                    <img src={img} alt=''></img>
                    <a class="navbar-brand text-light p-3 " href="#">Sports Event Pro</a>
                    <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 p-1 bg-light" style={{marginLeft:'59%'}}>
                            <li class="nav-item">
                                <a class="nav-link active " aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                        </ul>
                        

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default TeamCoachTopbar