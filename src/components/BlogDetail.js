import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { blogPosts } from "../data/blogPosts";
import "../styles/BlogDetail.css";

function BlogDetail() {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container blog-detail-container">
      <div className="blog-detail-header">
        <p className="blog-date">{post.date}</p>
        <p className="blog-title">{post.title}</p>
        <p className="blog-description">{post.description}</p>
      </div>

      <div className="blog-detail-content">
        <img 
          src={post.image} 
          alt={post.title} 
          className="blog-detail-image"
        />
        <div className="markdown-content">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{post.content}</ReactMarkdown>
        </div>
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