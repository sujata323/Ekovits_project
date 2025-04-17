import React from 'react';
import Header from '../components/Header';

const Details = () => {
  // Static list of all blogs (replace this with your API or dynamic data)
  const allBlogs = [
    {
      id: 1,
      title: "AI in Digital Marketing",
      description: "How AI is transforming digital marketing strategies.",
      image: "blog1.png",
    },
    {
      id: 2,
      title: "The Power of Predictive Analytics",
      description: "Unlock the power of AI to predict consumer behavior.",
      image: "blog2.png",
    },
   
    // More blogs...
  ];

  // Current blog (this would come from URL params or API in real scenarios)
  const currentBlog = {
    id: 1, // The current blog being viewed
    title: "You Don’t Need a Massive Budget to Build a Strong IT Setup: Here’s How EKOVITS Can Help Startups Thrive!",
    description: "In today's rapidly evolving business landscape, technology is no longer a luxury—it's a necessity...",
    image: "blog1.png",
  };

  // Filter out the current blog from the list of all blogs
  const relatedBlogs = allBlogs.filter(blog => blog.id !== currentBlog.id);

  return (
    <>
      <Header />
      <div className="container py-5 pt-5 mt-5">        {/* Blog Title */}
        <h1 className="fw-bold mb-5" style={{ fontSize: '2.0rem' }}>
          {currentBlog.title}
        </h1>
        <img 
          src={currentBlog.image} 
          alt={currentBlog.title} 
          className="img-fluid rounded mb-5 shadow-sm" 
          style={{ maxHeight: '500px', objectFit: 'cover', width: '100%' }}
        />

        {/* Author Info */}
        <p className="text-muted mb-4">
          <strong>Sumit Joshi</strong> | Sep 16, 2024 4:33:46 PM
        </p>

        {/* Blog Content */}
        <div className="blog-content mb-5">
          <p>
            In today's rapidly evolving business landscape, technology is no longer a luxury—it's a necessity...
          </p>
          <h4 className="mt-4 fw-semibold">The Myth of the Expensive IT Setup</h4>
          <p>
            One of the biggest misconceptions among new business owners is that a high-quality IT infrastructure...
          </p>

          <h4 className="mt-4 fw-semibold">The EKOVITS Approach to IT Infrastructure</h4>
          <ul>
            <li><strong>Affordable:</strong> We believe that cost should never be a barrier...</li>
            <li><strong>Scalable:</strong> As your business grows, so too should your IT infrastructure...</li>
            <li><strong>Reliable:</strong> Downtime can be disastrous for any business...</li>
            <li><strong>24x7 Support:</strong> At EKOVITS, we offer round-the-clock support...</li>
          </ul>

          <h4 className="mt-4 fw-semibold">How EKOVITS Can Help Your Business</h4>
          <ul>
            <li>Customized IT Solutions</li>
            <li>Cloud Services</li>
            <li>Cybersecurity</li>
            <li>Network Management</li>
            <li>Consulting and Strategy</li>
          </ul>

          <h4 className="mt-4 fw-semibold">Achieving Your Business Goals with EKOVITS</h4>
          <p>
            With the right IT infrastructure, your startup or SME can achieve more than you ever thought possible...
          </p>

          <h4 className="mt-4 fw-semibold">Conclusion</h4>
          <p>
            In conclusion, a strong IT setup doesn’t have to come with a massive price tag...
          </p>
        </div>

        {/* Comment Form */}
        <div className="comment-form bg-light p-4 rounded shadow-sm">
          <h5 className="fw-bold mb-3">Leave a Comment</h5>
          <form>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstName" className="form-label">First Name *</label>
                <input type="text" className="form-control" id="firstName" required />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="lastName" />
              </div>
              <div className="col-md-12 mb-3">
                <label htmlFor="email" className="form-label">Email *</label>
                <input type="email" className="form-control" id="email" required />
              </div>
              <div className="col-md-12 mb-3">
                <label htmlFor="comment" className="form-label">Comment *</label>
                <textarea className="form-control" id="comment" rows="4" required></textarea>
              </div>
            </div>
            <button type="submit" className="btn btn-primary px-4">Submit</button>
          </form>
        </div>

        {/* Related Blogs Section */}
        <div className="related-blogs mt-5">
          <h3 className="fw-bold mb-4">Related Blogs</h3>
          <div className="row">
            {relatedBlogs.map(blog => (
              <div className="col-md-4 mb-4" key={blog.id}>
                <div className="card">
                  <img src={blog.image} alt={blog.title} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text">{blog.description}</p>
                    <a href={`/Details2`} className="btn btn-link">Read More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
};

export default Details;
