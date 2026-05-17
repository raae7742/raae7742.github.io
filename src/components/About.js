import React from "react";
import { Link } from "react-router-dom";
import "../styles/About.css";
import hyeonaeImg from "../assets/img/hyeonae.png";
import waveTextureImg from "../assets/img/wave-texture.jpg";

function About() {
  return (
    <div className="about">
      <section className="about-hero">
        <img src={waveTextureImg} alt="" className="about-bg-img" aria-hidden="true" />
        <div className="about-overlay" aria-hidden="true" />

        <div className="about-content">
          <div className="about-left">
            <img src={hyeonaeImg} alt="Hyeonae" className="about-name-img" />
          </div>
          <div className="about-divider" aria-hidden="true" />
          <div className="about-right">
            <p className="about-label">ABOUT ME</p>
            <h1 className="about-title">A DEVELOPER<br />BASED IN SEOUL.</h1>
            <p className="about-desc">
              Server-side developer. Full-stack when needed, analog when possible.
              I make things — digital or otherwise.
            </p>
            <Link to="/project" className="about-cta">View Project →</Link>
          </div>
        </div>

        <div className="about-bottom-bar">
          <div className="about-bottom-left">
            <span>BASED IN SEOUL</span>
          </div>
          <div className="about-bottom-right">
            <span>© 2026 HYEONAE</span>
            <span>ALL RIGHTS RESERVED</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
