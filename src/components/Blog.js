import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
import "../styles/Blog.css";

function Blog() {
  const navigate = useNavigate();

  useEffect(() => {
    const style = document.createElement('style');
    const rules = blogPosts.map((_, index) => `
      .blog-card:nth-child(${index + 1}) {
        animation-delay: ${(index * 0.1).toFixed(1)}s;
      }
    `).join('');

    style.textContent = rules;
    document.head.appendChild(style);

    return () => document.head.removeChild(style);
  }, []);

  const handleBlogClick = (postId) => {
    navigate(`/blog/${postId}`);
  };

  return (
    <div className="container">
      <div className="blog-container">
        <p className="all-blog-posts">All Blog Posts</p>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="blog-card"
              onClick={() => handleBlogClick(post.id)}
            >
              <img src={post.image} alt={post.title} className="blog-image" />
              <div className="blog-content">
                <p className="title">{post.title}</p>
                <p className="date">{post.date}</p>
                <p className="description">{post.description}</p>
                <div className="tags">
                  {post.tags.map((tag, index) => (
                    <span key={index} className={`tag ${tag}`}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog; 