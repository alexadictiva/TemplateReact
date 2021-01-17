import React from "react";

export default function Nav() {
  return (
    <nav
      className="navbar navbar-expand-sm bg-dark navbar-dark"
      style={{ "margin-top": 0 }}
    >
      <a className="navbar-brand" href="www.google.com">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="www.google.com">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="www.google.com">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="www.google.com">
              Link
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
