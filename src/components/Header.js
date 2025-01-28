import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">Hyeonae</Link>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </nav>
    </header>
  );
}

export default Header;