// src/components/BlogPost.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // ✅ This is good!

// ✅ Accept the `link` prop
const BlogPost = ({ title, date, image, description, link }) => {
  return (
    <div className="col-md-6 mb-4">
      {/* <div className="card h-100 border-0 shadow"> */}
      <div
  className="card shadow-lg rounded-2 overflow-hidden"
  style={{ width: '100%', maxWidth: '500px', minHeight: '90px',}} // ⬅️ Updated maxWidth
>

        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <p className="text-muted small">{date}</p>
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text">{description}</p>
          
          {/* ✅ Use link without quotes */}
          <Link to={link} className="text-primary fw-semibold">
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
