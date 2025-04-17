import React, { useState } from 'react';
import './homecard.css';

const CardDisplay = () => {
  const [activeCard, setActiveCard] = useState({
    id: 1,
    title: "Marketing",
    description: "Blazing your campaigns with innovative marketing website designs and development solutions tailored to meet dynamic industry needs.",
    imageUrl: "https://cdn.pixabay.com/photo/2016/06/03/13/57/digital-marketing-1433427_1280.jpg",
    features: [
      "Interactive websites",
      "Analytics dashboards",
      "Content management platforms",
      "Responsive interfaces"
    ]
  });

  const cardData = [
    {
      id: 1,
      title: "Marketing",
      description: "Blazing your campaigns with innovative marketing website designs and development solutions tailored to meet dynamic industry needs.",
      imageUrl: "https://cdn.pixabay.com/photo/2016/06/03/13/57/digital-marketing-1433427_1280.jpg",
      features: [
        "Interactive websites",
        "Analytics dashboards",
        "Content management platforms",
        "Responsive interfaces"
      ]
    },
    {
      id: 2,
      title: "Healthcare",
      description: "Secure and compliant healthcare solutions with patient portals, telemedicine platforms, and health record management systems.",
      imageUrl: "https://cdn.pixabay.com/photo/2023/12/26/12/11/ai-generated-8470065_1280.jpg",
      features: [
        "Patient portals",
        "Telemedicine platforms",
        "Health record systems",
        "HIPAA compliance"
      ]
    },
    {
      id: 3,
      title: "Education",
      description: "E-learning platforms, student management systems, and interactive educational tools for modern learning environments.",
      imageUrl: "https://cdn.pixabay.com/photo/2019/01/30/08/30/book-3964050_1280.jpg",
      features: [
        "E-learning platforms",
        "Student management",
        "Interactive tools",
        "Progress tracking"
      ]
    },
    {
      id: 4,
      title: "IT Solutions",
      description: "Custom IT solutions including network management, cybersecurity, and enterprise software development.",
      imageUrl: "https://cdn.pixabay.com/photo/2023/07/28/16/41/ai-generated-8155552_1280.jpg",
      features: [
        "Network management",
        "Cybersecurity",
        "Enterprise software",
        "Cloud solutions"
      ]
    },
    {
      id: 5,
      title: "Manufacturers",
      description: "Industrial solutions including inventory management, supply chain optimization, and production monitoring systems.",
      imageUrl: "https://cdn.pixabay.com/photo/2013/11/24/11/25/steam-217159_1280.jpg",
      features: [
        "Inventory management",
        "Supply chain tools",
        "Production monitoring",
        "Quality control"
      ]
    },
    {
      id: 6,
      title: "E-Commerce",
      description: "Complete e-commerce solutions with payment gateways, inventory management, and customer relationship tools.",
      imageUrl: "https://cdn.pixabay.com/photo/2024/05/10/09/05/e-commerce-8752533_1280.jpg",
      features: [
        "Payment gateways",
        "Inventory management",
        "CRM integration",
        "Analytics dashboard"
      ]
    }
  ];

  const handleCardClick = (card) => {
    setActiveCard(card);
  };

  return (
    <div className="main-container">
     <h1 className="gradient-heading">
  <span className="highlight">Developing solutions</span> <span>for the future.</span>
</h1>

<p className="subtitle">
  For startups or enterprise-level companies, we offer full-fledged Website Development and Web application development services for scalable and compatible applications.
</p>
      
      <div className="content-container">
        <div className="left-section">
          <div className="left-image">
            <img src={activeCard.imageUrl} alt={activeCard.title} />
          </div>
          <div className="left-content">
            <h2>{activeCard.title}</h2>
            <p>{activeCard.description}</p>
            <div className="features-container">
              <h3>Key Features:</h3>
              <ul className="features-list">
                {activeCard.features.map((feature, index) => (
                  <li key={index}>
                    <span className="feature-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            {/* <button className="cta-button">Get Started</button> */}
          </div>
        </div>
        
        <div className="right-section">
          {/* <h3 className="section-title">Our Services</h3> */}
          <div className="card-grid">
            {cardData.map((card) => (
              <div 
                key={card.id} 
                className={`service-card ${activeCard.id === card.id ? 'active' : ''}`}
                onClick={() => handleCardClick(card)}
              >
                <div className="card-icon">{card.title.charAt(0)}</div>
                <h4>{card.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDisplay;