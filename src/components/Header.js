import React from "react";
import { Link, NavLink } from "react-router-dom";
import logoImg from "../assets/img/logo.png";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={logoImg} alt="Hyeonae" className="logo-img" />
      </Link>
      <nav>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/project">Project</NavLink>
      </nav>
      <span className="header-role">Developer</span>
    </header>
  );
}

export default Header;
