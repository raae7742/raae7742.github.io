import React from "react";
import "../styles/Home.css";
import waveImage from "../assets/img/wave.png";

function Home() {
  return (
    <main className="home">
      <div className="home-text">
        <div className = "title">
          <h2>Hello, world <img src={waveImage} alt="Wave emoji"/></h2>
          <h2>I'm a Software Engineer,</h2>
        </div>
        <p>who loves turning creative ideas into reality.</p>
        <p>If you'd like to connect with me, just click <a href="#contact"><strong>{`{here}`}</strong></a>!</p>
      </div>
    </main>
  );
}

export default Home;