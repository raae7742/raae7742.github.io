import React, { useEffect } from "react";
import "../styles/Home.css";
import "../styles/common.css";
import waveImage from "../assets/img/wave.png";

function Home() {
  const hello = "Hello world".split('');
  const engineer = "I'm Hyeonae, a developer.".split('');

  useEffect(() => {
    const style = document.createElement('style');
    let rules = '';
    
    hello.forEach((_, index) => {
      rules += `
        .title h2:first-child span:nth-child(${index + 1}) {
          animation-delay: ${(index * 0.1).toFixed(1)}s;
        }
      `;
    });

    engineer.forEach((_, index) => {
      rules += `
        .title h2:last-child span:nth-child(${index + 1}) {
          animation-delay: ${((hello.length * 0.1) + (index * 0.1)).toFixed(1)}s;
        }
      `;
    });

    style.textContent = rules;
    document.head.appendChild(style);

    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="container">
      <main className="home">
        <div className="home-text">
          <div className="title">
            <h2>
              {hello.map((char, index) => (
                <span key={index}>{char}</span>
              ))}
              <img src={waveImage} alt="Wave emoji"/>
            </h2>
            <h2>
              {engineer.map((char, index) => (
                <span key={index}>{char}</span>
              ))}
            </h2>
          </div>
          <p>currently based in Seoul, South Korea.</p>
          <p>If you'd like to connect with me, just click <a href="#contact"><strong>{`{here}`}</strong></a>!</p>
        </div>
      </main>
    </div>
  );
}

export default Home;