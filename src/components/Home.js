import React from "react";
import "../styles/Home.css";
import hyeonaeImg from "../assets/img/hyeonae.png";
import waveTextureImg from "../assets/img/wave-texture.jpg";

function Home() {
  return (
    <div className="home">
      <section className="home-hero">
        <img src={waveTextureImg} alt="" className="hero-bg-img" aria-hidden="true" />
        <div className="hero-overlay" aria-hidden="true" />

        <div className="hero-center">
          <img src={hyeonaeImg} alt="Hyeonae" className="hero-name-img" />
        </div>

        <div className="hero-bottom-bar">
          <div className="hero-bottom-left">
            <span>BASED IN SEOUL</span>
          </div>
          <div className="hero-bottom-right">
            <span>© 2026 HYEONAE</span>
            <span>ALL RIGHTS RESERVED</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
