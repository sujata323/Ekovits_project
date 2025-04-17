import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-5 position-relative">
      <div className="ms-5 me-5 mb-3"  >
        <img src="\footerimg.png" alt="Google" className="me-5 mb-3" width="220" />
      </div>
      <div className="container">
        {/* <img src="\footerimg.png" alt="Ekovits"  className=" mb-4 mb-md-0"  width="220" /> */}


        <div className="row">

          {/* 50% - Let’s Talk */}
          <div className="col-12 col-md-4 mb-4">

            <h5 className="fw-bold">Let’s talk</h5>
            <ul className="list-unstyled mt-3">
              <li>Scaling startups? We offer ITSM, BPS, and</li>
              <li>Project-Product Management. Let's grow together!</li>
              <br />
              <li>+91 7588800770</li>
              <li>hello@ekovits.com</li>
            </ul>
          </div>

          {/* 40% - Quick Links */}
          <div className="col-12 col-md-4 mb-3 ">
            <h5 className="fw-bold">Quick links</h5>
            <ul className="list-unstyled mt-3">
              <li>Home</li>
              <li>Managed Services</li>
              <li>Blogs</li>
              <li>Careers</li>
              <li>About Us</li>
            </ul>
          </div>
          {/*  Get Connected Section */}
          <div className="col-12 col-md-4 mb-4">
            <h5 className="fw-bold">Get Connected</h5>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>

              <a href="#" className="social-icon">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>



        </div>

        <hr className="hr-light-white" />

        {/* Ratings + Newsletter */}
        <div className="row align-items-center py-4">
          {/* Left - Ratings */}
          <div className="col-md-6 d-flex flex-wrap align-items-center mb-4 mb-md-0">
            <img src="\googleimg.png" alt="Google" className="me-5 mb-3" width="220" />
            <img src="\upworkimg.png" alt="Upwork" className="me-5 mb-3" width="220" />
          </div>


          {/* Right - Newsletter */}
          {/* <div className="col-md-6"> */}
          <div className="col-md-6 ps-4 ps-md-5">

            <h5 className="fw-bold">Subscribe to our newsletter</h5>
            <form className="d-flex mt-3">
              <input
                type="email"
                className="form-control me-5 bg-dark text-white border-0 border-bottom rounded-0 custom-placeholder"
                placeholder="Enter your email address "
                required
              /><br></br>


              <button type="submit" className="custom-subscribe-btn">
                Subscribe <span className="custom-arrow">→</span>
              </button>


            </form>
          </div>
        </div>
        <hr className="hr-light-white" />
        <div className="d-flex justify-content-between align-items-center mt-4 me-5">
          <h6 style={{ color: 'rgb(116, 115, 115)' }}>
            © 2025 Ekovits All rights reserved.
          </h6>
          <h6 style={{ color: 'rgb(116, 115, 115)' }}>
            Design and Developed by Ekovits.
          </h6>
        </div>


      </div>


    </footer>
  );
};

export default Footer;
