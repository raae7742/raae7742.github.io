import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
import "../styles/BlogDetail.css";

function BlogDetail() {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="blog-detail-container">
      <div className="blog-detail-header">
        <p className="blog-date">{post.date}</p>
        <p className="blog-title">{post.title}</p>
      </div>

      <div className="blog-detail-content">
        <img 
          src={post.image} 
          alt={post.title} 
          className="blog-detail-image"
        />
        <p>{post.description}</p>
        <div className="blog-tags">
          {post.tags.map((tag, index) => (
            <span key={index} className={`tag ${tag}`}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogDetail; 