import React from "react";
import { Link } from "react-router";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <nav style={{ padding: "1rem", background: "#f0f0f0" }}>
      <Link to="/" style={{ marginRight: "1rem" }}>
        Home
      </Link>
      <Link to="/campus" style={{ marginRight: "1rem" }}>
        Campus
      </Link>
      <Link to="/students" style={{ marginRight: "1rem" }}>
        Students
      </Link>
     
    </nav>
  );
};

export default Navbar;
