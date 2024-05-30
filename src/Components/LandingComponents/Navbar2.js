import React from 'react'
import logo from "../../Assets/Frame 18.png";
import drop from "../../Assets/Ellipse 1.png";


function Navbar2() {
  return (
    <div>
            <div className="UserLoginBackground1">
        <div>
          <img className="UserLoginImg1" src={logo} />
        </div>
        <div>
          <img className="UserLoginImg2" src={drop} alt="image not found"></img>
        </div>
        <div className="UserLoginDrop">
          <div class="dropdown UserLoginDrop">
            <button
              class="btn btn-secondary dropdown-toggle "
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar2
