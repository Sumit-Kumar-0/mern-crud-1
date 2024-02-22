import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../style/Header.css";

export default function Header() {
  return (
    <div className="container header-container">
      <div className="content-header">
        <header className="header">
          <div className="logo">
            <Link to="/">MERN APP</Link>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <NavLink to="/">all users</NavLink>
              </li>
              <li>
                <NavLink to="/addnew">add new user</NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}
