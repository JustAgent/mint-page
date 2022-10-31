import React from "react";
import "./styles/Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a>ABOUT</a>
        </li>
        <li>
          <a>MINT</a>
        </li>
        <li>
          <a>TEAM</a>
        </li>
        <li>
          <a>CONNECTED</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
