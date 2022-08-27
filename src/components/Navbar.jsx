import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import houseHold from "../assests/house-solid.svg";
import dropDown from "../assests/caret-down-solid.svg";
export default function Navbar() {
  return (
    <div className="nav">
      <div className="nav_leftItems">
        <Link to="/">
          <div className="logo">
            <img src={houseHold} alt="house hold" /> <h3> Estatery</h3>
          </div>
        </Link>

        <Link to="/">
          <div className="rent">
            <h5>Rent</h5>
          </div>
        </Link>
        <div className="buy">
          <h5>Sell</h5>
        </div>
        <div className="manage_property">
          <h5>ManageProperty</h5>
          <img src={dropDown} alt="manage property" />
        </div>
        <div className="resources">
          <h5>Resources</h5>
          <img src={dropDown} alt="resources" />
        </div>

        <Link to={"/favorate"}>
          <div className="favourates">
            <h5>Favourate</h5>
          </div>
        </Link>
      </div>

      <div className="nav_rightItems">
        <button className="login">Login</button>
        <button className="signup">Sign up</button>
      </div>
    </div>
  );
}
