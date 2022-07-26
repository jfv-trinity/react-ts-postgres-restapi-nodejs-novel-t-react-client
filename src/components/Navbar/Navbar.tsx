import React from "react";
import "./Navbar.module.scss";
import { AccountMenu } from "./AccountMenu";

function Navbar() {
  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="navbar-container">
          <AccountMenu />
        </div>
        <div className="collapse navbar-collapse" id="navbar"></div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
