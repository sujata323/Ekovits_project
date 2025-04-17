import React from 'react';
import './circleText.css';
import { FaArrowRight } from 'react-icons/fa';

const CircularText = ({ text }) => {
  const chars = text.split('');

  return (
    <div className="circle-text-wrapper">
      <div className="circle-text">
        {chars.map((char, index) => (
          <span
            key={index}
            style={{
               transform: `rotate(${(index * 360) / chars.length}deg) translateY(-90px)`
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

const DigitalChangeSection = () => {
  return (
    <div className="digital-section">
      <div className="content-container">
        <div className="left-content">
          <h1>Ready to Embrace<br />Digital Change?</h1>
          <p>Let’s guide you through a seamless transformation process</p>
          <button className="cta-button">Get Started <FaArrowRight /></button>
        </div>

        <div className="right-content">
          <div className="circle-stat">
            <CircularText text="YEARS OF EXPERIENCE • " />
            <div className="stat">
              <h2>10+</h2>
              <p>Years in Service</p>
            </div>
          </div>

          <div className="circle-stat">
            <CircularText text="TOTAL GLOBAL CLIENTS • " />
            <div className="stat">
              <h2>300+</h2>
              <p>Global Clients</p>
            </div>
          </div>

          <div className="circle-stat">
            <CircularText text="DRIVING TECH EXCELLENCE • " />
            <div className="stat">
              <h2>250+</h2>
              <p>Tech Experts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalChangeSection;
