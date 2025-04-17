import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerStyle = {
    background: isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
    transition: 'background 0.3s ease',
  };

  const toggleNavbar = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top px-4 py-3" style={headerStyle}>
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center text-decoration-none" to="/">
          <img src="/logo.png" alt="Ekovits Logo" height="60" className="me-2" />
        </Link>

        {/* Hamburger button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Responsive nav links */}
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <div className="navbar-nav ms-auto text-center gap-3">
            <Link className="nav-link text-white fw-semibold" to="/">Home</Link>
            <Link className="nav-link text-white fw-semibold" to="/services">Managed Services</Link>
            <Link className="nav-link text-white fw-semibold" to="/Blog">Blogs</Link>
            <Link className="nav-link text-white fw-semibold" to="/about">About Us</Link>
            {/* <button type="submit" className="custom-subscribe-btn px-3" style={{ fontSize: '14px' }}>
              Get In Touch &gt;
            </button> */}
            <Link to="/contact" className="custom-subscribe-btn px-3 d-inline-block text-decoration-none text-white" style={{ fontSize: '14px' }}>
  Get In Touch &gt;
</Link>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
