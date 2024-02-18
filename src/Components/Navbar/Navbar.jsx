import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [navSize, setnavSize] = useState("2rem 0");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavSize(" 1rem 0 ") : setnavSize("2rem 0");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg bgcolor text-uppercase fixed-top"
      style={{
        padding: navSize,
        transition: "all 1s",
      }}
    >
      <div className="container">
        <h1 className="fw-bolder">
          <NavLink className="navbar-brand text-white fs-2" to="">
            START FRAMEWORK
          </NavLink>
        </h1>
        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-white"></span>
        </button>
        <div className="collapse navbar-collapse text-white" id="navbarNav">
          <ul className="navbar-nav ms-auto text-white fw-bold">
            <li className="nav-item text-white">
              <NavLink
                className="nav-link text-white"
                aria-current="page"
                to="/"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="portofolio">
                Portofolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
