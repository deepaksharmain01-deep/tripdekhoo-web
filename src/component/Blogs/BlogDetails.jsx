// src/components/BlogDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogs from '../../../blogs';


const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) return <p>Blog not found.</p>;

  return (
    <div className="container py-5">
      <Link to="/" className="btn btn-link mb-4">← Back to Blog List</Link>
      <h1>{blog.title}</h1>
      <h6 className="text-muted">By {blog.author} • {blog.date}</h6>
      <hr />
      <p style={{ whiteSpace: 'pre-line' }}>{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
