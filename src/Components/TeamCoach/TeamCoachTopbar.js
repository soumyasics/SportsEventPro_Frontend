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
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 p-1 bg-light d-flex justify-content-between w-100" style={{ marginLeft: '59%' }}>
                            <li class="nav-item ">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <form class="d-flex" role="search">
                                <input class="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-search mt-2" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg>
                            </form>
                        </ul>


                    </div>
                </div>
            </nav>
        </div>
    )
}

export default TeamCoachTopbar