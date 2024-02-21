import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="container">
      <div className="content">
        <header className="header">
          <div className="logo">MERN APP</div>
          <nav className="nav">
            <ul>
              <li>
                <NavLink to="/">all users</NavLink>
                <NavLink to="/addnew">add new user</NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}
