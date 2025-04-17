// src/components/BlogList.jsx
import React from 'react';
import BlogPost from './BlogPost';

const BlogList = () => {
  const blogData = [
    {
      title: 'Setup: Here’s How EKOVITS Can Help Startups Thrive!',
      date: 'April 5, 2025',
      image: '/blog1.png', // public folder
      description: 'In todays rapidly evolving business landscape, technology is no longer a luxury—its a necessity...',
      link:"/Details"
    },
    {
      title: 'Audience What They Really Want!',
      date: 'April 10, 2025',
      image: '/blog2.png',
      description: 'In todays competitive digital landscape, businesses—especially startups—are faced with the...',
    
      link:"/Details2"
    },
  ];

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10"> {/* You can also try col-lg-8 if you want it even narrower */}
          <div className="row g-4"> {/* g-4 for spacing between cards */}
            {blogData.map((post, index) => (
              <BlogPost
                key={index}
                title={post.title}
                date={post.date}
                image={post.image}
                description={post.description}
                link={post.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
