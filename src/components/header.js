import React from "react";
import "../styles/header.css";
import header_img from "../assets/header.svg";

function Header() {
  return (
    <div className="banner">
      <div className="content">
        <div className="leader">
          <img src={header_img} className="image" />{" "}
        </div>

        <div className="t">
          <h1>Our Projects</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            amet, porro unde nihil blanditiis harum corporis accusantium magnam
            nesciunt ad{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Header;
