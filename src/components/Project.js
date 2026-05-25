import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import waveTextureImg from "../assets/img/wave-texture.jpg";
import "../styles/Project.css";

const projects = [
  {
    id: "jjal",
    num: "01",
    name: "블로그 짤모음",
    nameEn: "Blog Jjal Collection",
    description: "맥락을 입력하면 어울리는 한국 인터넷 밈을 추천해주는 개인 도구.",
    tags: ["React", "NLP", "Keyword Matching"],
    status: "WIP",
    route: "/jjal",
  },
];

function Project() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="proj"
      exit={{ opacity: 0, position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 50 }}
      transition={{ duration: 0.45 }}
    >
      <img src={waveTextureImg} alt="" className="proj-bg-img" aria-hidden="true" />
      <div className="proj-overlay" aria-hidden="true" />

      <div className="proj-bottom-bar">
        <div className="proj-bottom-left">
          <span>BASED IN SEOUL</span>
        </div>
        <div className="proj-bottom-right">
          <span>© 2026 HYEONAE</span>
          <span>ALL RIGHTS RESERVED</span>
        </div>
      </div>

      <div className="proj-stage">
        <div className="proj-header">
          <span className="proj-label">PROJECTS</span>
          <span className="proj-count">{projects.length} ITEM{projects.length !== 1 ? "S" : ""}</span>
        </div>

        <div className="proj-grid">
          {projects.map((p) => (
            <button
              key={p.id}
              className="proj-card"
              onClick={() => navigate(p.route)}
              aria-label={`Open ${p.name}`}
            >
              <span className="proj-card-num">{p.num}</span>
              <div className="proj-card-body">
                <div className="proj-card-top">
                  <h2 className="proj-card-name">{p.name}</h2>
                  <span className={`proj-card-status ${p.status === "WIP" ? "wip" : "live"}`}>
                    {p.status}
                  </span>
                </div>
                <p className="proj-card-en">{p.nameEn}</p>
                <p className="proj-card-desc">{p.description}</p>
                <div className="proj-card-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="proj-card-tag">{t}</span>
                  ))}
                </div>
              </div>
              <span className="proj-card-arrow">→</span>
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Project;
