import React from "react";
import log from "../../Assets/Frame 18.png";
import "./UserFooter.css";

function UserFooter() {
  return (
    <div>
      <div className="BG">
        <div>
          <img className="UserFooterImg1" src={log} />
        </div>
        <div class="UserFooterLink">
          <a class="UserFooterLink" href="">
            Home
          </a>
          <a class="UserFooterLink" href="">
            About
          </a>
          <a class="UserFooterLink" href="">
            Login
          </a>
          <a class="UserFooterLink" href="">
            Blog
          </a>
          <a class="UserFooterLink" href="">
            Success Stories
          </a>
          <a class="UserFooterLink" href="">
            FAQs
          </a>
        </div>
      </div>
    </div>
  );
}

export default UserFooter;
