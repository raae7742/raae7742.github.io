import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span>© 2025 Welcome. All rights reserved.</span>
        <a className="footer-link" href="#privacy">Privacy Policy</a>
        <a className="footer-link" href="#terms">Terms of Service</a>
      </div>
      <div className="social-icons">
        <a href="#youtube" className="icon youtube" aria-label="YouTube"></a>
        <a href="#twitter" className="icon twitter" aria-label="Twitter"></a>
        <a href="#linkedin" className="icon linkedin" aria-label="LinkedIn"></a>
      </div>
    </footer>
  );
}

export default Footer;