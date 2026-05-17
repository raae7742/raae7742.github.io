import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { blogPosts } from "../data/blogPosts";
import waveTextureImg from "../assets/img/wave-texture.jpg";
import "../styles/BlogDetail.css";

const ease = [0.4, 0, 0.2, 1];

function BlogDetail() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="bd">
        <img src={waveTextureImg} alt="" className="bd-bg-img" aria-hidden="true" />
        <div className="bd-overlay" aria-hidden="true" />
        <div className="bd-not-found">
          <Link to="/blog" className="bd-back">← BLOG</Link>
          <p>Post not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bd">
      <img src={waveTextureImg} alt="" className="bd-bg-img" aria-hidden="true" />
      <div className="bd-overlay" aria-hidden="true" />

      <div className="bd-bottom-bar">
        <div className="bd-bottom-left"><span>BASED IN SEOUL</span></div>
        <div className="bd-bottom-center">H</div>
        <div className="bd-bottom-right">
          <span>© 2026 HYEONAE</span>
          <span>ALL RIGHTS RESERVED</span>
        </div>
      </div>

      <div className="bd-stage">
        {/* ── LEFT SIDEBAR ── */}
        <motion.aside
          className="bd-sidebar"
          initial={{ x: -340, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease }}
        >
          <Link to="/blog" className="bd-back">← BLOG</Link>

          <div className="bd-meta">
            <span className="bd-meta-type">◆ {post.type}</span>
            <span className="bd-meta-date">{post.date}</span>
          </div>

          <h1 className="bd-title">{post.title}</h1>
          <p className="bd-desc">{post.description}</p>

          <div className="bd-tags">
            {post.tags.map((tag, i) => (
              <span key={i} className="bd-tag">{tag}</span>
            ))}
          </div>
        </motion.aside>

        {/* ── MAIN CONTENT ── */}
        <motion.main
          className="bd-main"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.15 }}
          style={{ willChange: 'transform' }}
        >
          <img src={post.image} alt={post.title} className="bd-hero" />
          <div className="bd-markdown">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{post.content}</ReactMarkdown>
          </div>
          <p className="bd-author">— Hyeonae</p>
        </motion.main>
      </div>
    </div>
  );
}

export default BlogDetail;
