// import React from 'react';
import React, { useState } from 'react';
import './About.css';
import ValueProposition from '../components/ValueProposition';
import Header from '../components/Header'; // adjust path if needed
import DigitalChangeSection from '../components/DigitalChangeSection'; // adjust path if needed
// import Footer from '../components/Footer'; // adjust the path as per your folder structure


import aboutImage from '../assets/who-we-are.png'; 
import visionIcon from '../assets/about-vission.svg';
import missionIcon from '../assets/about-mission.svg';
// import featureIcon1 from '../assets/customize_14644462.webp';
// import featureIcon2 from '../assets/internet_10284120.webp';
// import featureIcon3 from '../assets/security_6865349.webp';
// import featureIcon4 from '../assets/24-hours-support_9723188.webp';
import icon1 from '../assets/bullseye-solid.svg';
import icon2 from '../assets/headset-solid.svg';
import icon3 from '../assets/bullseye-solid.svg';
import icon4 from '../assets/headset-solid.svg';
import sectionImage from "../assets/businessman-9187765_1280.jpg"; 

// import { faBullseye, faEye, faHeart } from "@fortawesome/free-solid-svg-icons";




function About() {
    return (
        
      <div className="about-page">
        <section className="about-hero">
          <div className="about-hero-overlay">
            <div className="about-hero-content-left  ">
              <h1>Scaling Business? Lets EKOVITS be your partner in Innovation ! </h1>
              <p>
              We are specialize in providing Affordable and scalable IT Infrastructure and Solutions tailored to the unique needs of Start Up's and SME's.  
              </p>
            </div>
            <Header />
          </div>
  
         
        </section>

        <div className="about-split-section">
            <div className="split-left">
            <h2>Get to know us better</h2>
            <p>
            EKOVITS is a leading IT service provider dedicated to empowering businesses, especially startups, with innovative and effective technology solutions. With a focus on delivering exceptional customer service and results-driven strategies, we help our clients navigate the complexities of the digital landscape and achieve their goals.
            </p>
            <h3>Our core services include:</h3>
            <ul className="about-list">
  <li><b>Managed Cloud Services: </b>Providing scalable, flexible, and cost-effective cloud infrastructure solutions</li><br></br>
  <li><b>Email Solutions:</b> Offering reliable and secure email platforms through partnerships with Google Workspace and Microsoft 365.</li><br></br>
  <li><b>Social Media Marketing:</b> Developing and implementing effective social media strategies to enhance brand visibility and engagement</li><br></br>
  <li><b>Web Development:</b> Creating professional, responsive, and user-friendly websites tailored to meet specific business needs.</li><br></br>
</ul>
<p>At EKOVITS, we understand the unique challenges and opportunities faced by startups. Our team of experienced professionals is committed to providing personalized support, tailored solutions, and the latest technology advancements to help you succeed.</p>

        <div className="split-buttons">
      <button className="primary-btn">know More</button>
      
    </div>
  </div>

            <div className="split-right">
            <img src={aboutImage} alt="About Ekovits" />

  </div>
</div>




<section className="document-section">
  <div className="doc-left">
    <p className='left-text'>VISION</p>
    <h2>Empowering Innovation Through Technology</h2>
    <p>
      At EKOVITS, we’re committed to delivering cutting-edge IT services designed specifically for startups and SMEs. Our document management and digital infrastructure ensure seamless collaboration, security, and scalability for your growing business.
    </p>
  </div>

  <div className="doc-right">
    <div className="icon-wrapper">
    <img src={visionIcon} alt="Vision Icon" className="document-icon" />
    </div>
  </div>
</section>

<section className="document-section1">
  <div className="doc-left1">
  <div className="icon-wrapper1">
    <img src={missionIcon} alt="mission Icon" className="document-icon1" />
    </div>
  </div>

  <div className="doc-right1">
    <p className='right-text'>MISSION</p>
  <h2>Enabling Businesses to Thrive in the Digital Age</h2>
    <p>
    EKOVITS is committed to empowering businesses of all sizes to achieve their full potential through innovative and reliable IT solutions. We strive to be the go-to partner for start-up's and established enterprises seeking exceptional Web Development, Business Process Services (BPS), Business Outsourcing, and Sales Development Support. Our mission is to deliver cutting-edge technology, personalized service, and measurable results that drive growth and success.
    </p>
    
  </div>
</section>

{/* ✅ Feature Section Included Below */}
{/* <FeatureSection /> */}
<ValueProposition />
<InfoSection/> 
<DigitalChangeSection />
{/* <Footer /> */}
    </div>
  );
}


const InfoSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const accordionItems = [
    {
      title: 'Strategic Planning',
      icon: icon1,
      content: 'We work closely with you to define clear objectives and measurable KPIs, ensuring your strategy aligns with business goals.',
    },
    {
      title: 'Start-up-Specific Focus',
      icon: icon2,
      content: 'Limited Resources? No problem! We optimize our approach to work within your budget and resource constraints.',
    },
    {
      title: 'Ongoing Support and Optimization',
      icon: icon3,
      content: 'We continually refine your strategy based on data and insights to keep you ahead in the game.',
    },
    {
      title: 'Ongoing Support and Optimization',
      icon: icon4,
      content: 'We continually refine your strategy based on data and insights to keep you ahead in the game.',
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="info-section">
      
      <div className="info-container">
        <div className="info-left">
        <h2 className="info-heading">GOALS</h2>
          {accordionItems.map((item, index) => (
            <div
              key={index}
              className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="accordion-title">
                <img src={item.icon} alt="icon" className="accordion-icon" />
                <h3>{item.title}</h3>
              </div>
              <div className="accordion-content">
                {activeIndex === index && <p>{item.content}</p>}
              </div>
            </div>
          ))}
        </div>

        <div className="info-right">
          <img src={sectionImage} alt="Illustration" className="info-image" />
        </div>
      </div>
    </section>
  );
};



  export default About;

