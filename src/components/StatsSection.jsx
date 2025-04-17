import React from "react";
import "./StatsSection.css";

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stats-row">
        {/* Left Column (50%) */}
        <div className="stats-left">
          <h2>
            Web Development & <span>Web Apps That Drive Success</span>
          </h2>
          <p>
            Established in 2014, SiGa Systems brings 11+ years of expertise in
            delivering web solutions in Pune, creating dynamic websites and
            powerful web applications for diverse industries.
          </p>
          <p>
            We provide innovative, secure, and scalable digital solutions
            tailored to business growth. As SEO experts, we optimize your
            digital presence for maximum visibility.
          </p>
          <ul>
            <li>✅ Custom websites and web apps aligned with your goals.</li>
            <li>✅ Expert web development professionals in Pune ensure success.</li>
            <li>✅ Secure web application development to protect your data.</li>
            <li>✅ Offshore software outsourcing with expert guidance.</li>
          </ul>
        </div>

        {/* Right Column (50%) */}
        <div className="stats-right">
          <div className="svg-wrapper">
            <img src="/Clip-path-group.svg" alt="Decorative Circle" className="svg-bg" />
            <div className="counter-content">
              <h1>
                300<span className="plus">+</span>
              </h1>
              <p>Global Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
