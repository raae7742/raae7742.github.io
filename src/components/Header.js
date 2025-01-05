import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <p>Hyeonae</p>
      <nav>
        <a href="#about">About</a>
        <a href="#blog">Blog</a>
      </nav>
    </header>
  );
}

export default Header;