import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { blogPosts } from "../data/blogPosts";
import waveTextureImg from "../assets/img/wave-texture.jpg";
import turntableImg from "../assets/img/turntable.png";
import tonearmImg from "../assets/img/tonearm.png";
import "../styles/Blog.css";

function Blog() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePost = blogPosts[activeIndex];

  const goTo = (dir) =>
    setActiveIndex((prev) => (prev + dir + blogPosts.length) % blogPosts.length);

  return (
    <motion.div
      className="blog"
      exit={{ opacity: 0, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 50 }}
      transition={{ duration: 0.45 }}
    >
      <img src={waveTextureImg} alt="" className="blog-bg-img" aria-hidden="true" />
      <div className="blog-overlay" aria-hidden="true" />

      <div className="blog-bottom-bar">
        <div className="blog-bottom-left">
          <span>BASED IN SEOUL</span>
        </div>
        <div className="blog-bottom-right">
          <span>© 2026 HYEONAE</span>
          <span>ALL RIGHTS RESERVED</span>
        </div>
      </div>

      <div className="blog-stage">
        {/* ── LEFT: Turntable ── */}
        <div className="blog-left">
          <div className="blog-tt-wrap">
            {/* Vinyl record */}
            <img src={turntableImg} alt="" className="blog-tt-img" aria-hidden="true" />

            {/* Center label: active post cover */}
            <div className="blog-record-label">
              <img
                key={activePost.id}
                src={activePost.image}
                alt={activePost.title}
                className="blog-record-cover"
              />
            </div>

            {/* Tonearm overlay */}
            <img src={tonearmImg} alt="" className="blog-tt-arm" aria-hidden="true" />
          </div>

          {/* NOW READING info */}
          <div className="blog-np-bar">
            <span className="blog-np-eyebrow">NOW READING</span>
            <h2 className="blog-np-title">{activePost.title}</h2>
            <p className="blog-np-desc">{activePost.description}</p>
            <div className="blog-np-footer">
              <div className="blog-controls">
                <button
                  className="blog-ctrl"
                  onClick={() => goTo(-1)}
                  aria-label="Previous"
                >
                  ⏮
                </button>
                <Link
                  to={`/blog/${activePost.id}`}
                  className="blog-ctrl blog-ctrl-play"
                  aria-label="Read post"
                >
                  ▶
                </Link>
                <button
                  className="blog-ctrl"
                  onClick={() => goTo(1)}
                  aria-label="Next"
                >
                  ⏭
                </button>
              </div>
              <span className="blog-np-meta">
                {activePost.date} · {activePost.type}
              </span>
            </div>
          </div>
        </div>

        <div className="blog-divider" aria-hidden="true" />

        {/* ── RIGHT: Playlist ── */}
        <div className="blog-right">
          <div className="blog-playlist-header">
            <span className="blog-playlist-label">READLIST</span>
          </div>

          <ol className="blog-tracklist">
            {blogPosts.map((post, i) => (
              <li
                key={post.id}
                className={`blog-track${i === activeIndex ? " active" : ""}`}
                onMouseEnter={() => setActiveIndex(i)}
              >
                <Link to={`/blog/${post.id}`} className="blog-track-link">
                  <span className="blog-track-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <img
                    src={post.image}
                    alt=""
                    className="blog-track-thumb"
                    aria-hidden="true"
                  />
                  <div className="blog-track-info">
                    <p className="blog-track-title">{post.title}</p>
                    <p className="blog-track-meta">
                      {post.date} · {post.type}
                    </p>
                  </div>
                  <span className="blog-track-arrow">→</span>
                </Link>
              </li>
            ))}
          </ol>

          <p className="blog-track-count">
            {blogPosts.length} TRACK{blogPosts.length !== 1 ? "S" : ""}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Blog;
