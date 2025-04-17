import React, { useState } from "react";
import { FaRulerCombined, FaRainbow, FaHeadphonesAlt } from "react-icons/fa";
import "./Services.css";
// import DigitalChangeSection from './DigitalChangeSection';
import DigitalChangeSection from '../components/DigitalChangeSection'; // adjust path if needed
import Header from '../components/Header'; // adjust path if needed


const features = [
    {
        icon: <FaRulerCombined />,
        title: "Best in Class UI/UX",
        description:
            "Our designs prioritize clarity, efficiency, and seamless interaction to deliver outstanding user experiences.",
    },
    {
        icon: <FaRainbow />,
        title: "Creative Design",
        description:
            "We turn ideas into stunning web designs by blending creativity and strategy, ensuring your brand stands out.",
    },
    {
        icon: <FaHeadphonesAlt />,
        title: "Expert Support",
        description:
            "Our knowledgeable team provides ongoing support, solving challenges quickly and keeping your business running smoothly.",
    },
];

const techData = {
    Frontend: {
        description:
            "Creating visually appealing and interactive front-end designs that enhance user experience.",
        icons: [
            { img: "/jQuery.png" },
            { img: "/JS.png" },
            { img: "/TS.png" },
            { img: "/VenuJS.png" },
            { img: "/angular.png" },
            { img: "/react.png" },
            { img: "/html-5.png" },
            { img: "/css-3.png" },
        ],
    },
    "Backend Frameworks": {
        description: "Building scalable backend systems using popular frameworks.",
        icons: [
            { img: "/node-js.png" },
            { img: "/express-js.png" },
            { img: "/php.png" },
            { img: "/rest-api.png" },
            { img: "/java.png" },
            { img: "/BackgroundBorder.png" },
            { img: "/BackgroundBorder-1.png" },
        ],
    },
    CMS: {
        description:
            "Content management systems that simplify site editing and publishing.",
        icons: [
            { name: "WordPress", img: "/images/icons/wordpress.png" },
            { name: "Drupal", img: "/images/icons/drupal.png" },
            { name: "Strapi", img: "/images/icons/strapi.png" },
            { name: "Contentful", img: "/images/icons/contentful.png" },
        ],
    },
    "UI/UX": {
        description: "Crafting user-friendly interfaces with seamless experiences.",
        icons: [
            { name: "Figma", img: "/images/icons/figma.png" },
            { name: "Adobe XD", img: "/images/icons/adobexd.png" },
            { name: "Sketch", img: "/images/icons/sketch.png" },
            { name: "InVision", img: "/images/icons/invision.png" },
        ],
    },
    Database: {
        description: "Efficient data storage and querying with modern databases.",
        icons: [
            { name: "MySQL", img: "/images/icons/mysql.png" },
            { name: "PostgreSQL", img: "/images/icons/postgresql.png" },
            { name: "MongoDB", img: "/images/icons/mongodb.png" },
            { name: "SQLite", img: "/images/icons/sqlite.png" },
        ],
    },
    DevOps: {
        description: "Streamlining deployments and integrations with DevOps practices.",
        icons: [
            { name: "Docker", img: "/images/icons/docker.png" },
            { name: "Kubernetes", img: "/images/icons/kubernetes.png" },
            { name: "Jenkins", img: "/images/icons/jenkins.png" },
            { name: "GitHub Actions", img: "/images/icons/githubactions.png" },
        ],
    },
    Cloud: {
        description: "Cloud platforms for scalable and secure solutions.",
        icons: [
            { name: "AWS", img: "/images/icons/aws.png" },
            { name: "Azure", img: "/images/icons/azure.png" },
            { name: "Google Cloud", img: "/images/icons/googlecloud.png" },
            { name: "DigitalOcean", img: "/images/icons/digitalocean.png" },
        ],
    },
    "Collaborative Tools": {
        description: "Boosting team productivity with collaboration platforms.",
        icons: [
            { name: "Slack", img: "/images/icons/slack.png" },
            { name: "Trello", img: "/images/icons/trello.png" },
            { name: "Jira", img: "/images/icons/jira.png" },
            { name: "Notion", img: "/images/icons/notion.png" },
        ],
    },
};

const Home = () => {
    const [activeTech, setActiveTech] = useState("Frontend");
    const [activeIndex, setActiveIndex] = useState(null); // for FAQ accordion

    const services = [
        {
            icon: "💻",
            title: "Web Design & Development",
            description:
                "Create stunning, responsive websites with top-tier UX/UI and robust technologies.",
        },
        {
            icon: "🧩",
            title: "Web App Development",
            description:
                "Delivering scalable, high-performance web applications tailored to your business needs.",
        },
        {
            icon: "🛒",
            title: "Ecommerce Web Development",
            description:
                "Boost your online sales with secure, user-friendly, and dynamic ecommerce websites.",
        },
        {
            icon: "🗂️",
            title: "CMS Development",
            description:
                "Custom CMS solutions to streamline your workflow and boost productivity.",
        },
        {
            icon: "🎨",
            title: "UI/UX Design",
            description:
                "Craft intuitive designs that enhance user engagement and brand value.",
        },
        {
            icon: "📣",
            title: "Digital Marketing",
            description:
                "Data-driven strategies to maximize your online reach and business impact.",
        },
    ];

    const faqList = [
        "What services does SGo Systems offer?",
        "How do you ensure project deadlines are met?",
        "Do you provide ongoing support after project delivery?",
        "How do you ensure website security and performance?",
        "Can I get a custom solution for my business needs?",
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            {/* Hero Section */}
            <div className="hero-section">
                <div className="overlay">
                    <div className="content">
                        <h1>
                            <span className="highlight">Custom Web Design</span> <br />
                            <span className="highlight">Services</span>
                            <span className="high"> to Accelerate</span> <br />
                            <span className="bold">Business Growth</span>
                        </h1>
                        <p>
                            Drive Success with Tailored Website Solutions. Our expert designs
                            deliver measurable results and lasting impact.
                        </p>
                        <button className="proposal-btn">Get a Proposal →</button>
                        <Header />

                    </div>
                </div>
                <div className="floating-buttons">
                    <div className="callback-btn">Request a Callback</div>
                    <a
                        href="https://wa.me/xxxxxxxxxx"
                        className="whatsapp-btn"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png"
                            alt="WhatsApp"
                        />
                    </a>
                </div>
            </div>

            {/* Services Section */}
            <section className="services-section">
                <p className="subtitle">SERVICES WE OFFER</p>
                <h2 className="main-title">
                    <span className="purple">Perfect</span>{" "}
                    <span className="blue">Digital Solutions</span>
                </h2>
                <p className="description">
                    Websites and Web Application solutions, accompanied by agile
                    management and product consulting expertise.
                </p>
                <div className="cards-container">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <button className="see-more">See More →</button>
                        </div>
                    ))}
                </div>
                <button className="get-in-touch">Get In Touch →</button>
            </section>

            {/* Technology Expertise Section */}
            <div className="container">
                <section className="header">
                    <p className="tagline">OUR TECHNOLOGY EXPERTISE</p>
                    <h1>
                        Driving <span className="highlight1">Digital Transformation</span>{" "}
                        through <br />
                        advanced tech capabilities.
                    </h1>
                    <p className="subtext">
                        CUTTING-EDGE TECHNOLOGIES TO BUILD SECURE AND FUTURE-READY IT
                        SOLUTIONS
                    </p>
                    <div className="tech-tags">
                        {Object.keys(techData).map((tech, index) => (
                            <span
                                key={index}
                                className={`tag ${activeTech === tech ? "active" : ""}`}
                                onClick={() => setActiveTech(tech)}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <h3 className="section-title">{activeTech}</h3>
                    <p className="section-description">
                        {techData[activeTech].description}
                    </p>
                    <div className="icons">
                        {techData[activeTech].icons.map((item, index) => (
                            <div key={index} className="icon-box">
                                <img
                                    src={item.img}
                                    alt={item.name || "Tech Icon"}
                                    className="tech-icon"
                                    onError={(e) => (e.target.style.display = "none")}
                                />
                                <p>{item.name}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* What Makes Us Different Section */}
                <section className="features-section">
                    <div className="features-content">
                        <div className="features-heading">
                            <h3>
                                What Makes <span className="highlight1">Us Different?</span>
                            </h3>
                            <h6>Innovative, User-Focused, and Expert-Backed Digital Solutions</h6>
                        </div>
                        <div className="features-cards">
                            {features.map((feature, index) => (
                                <div key={index} className="feature-card">
                                    <div className="icon">{feature.icon}</div>
                                    <h4>{feature.title}</h4>
                                    <p>{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="faq">
                    <h4 className="faq-title">
                        Your <span className="highlight">Questions</span>, Answered
                    </h4>
                    <div className="accordion">
                        {faqList.map((q, index) => (
                            <div key={index} className="accordion-item">
                                <button onClick={() => toggleAccordion(index)}>{q}</button>
                                <div
                                    className={`accordion-content ${activeIndex === index ? "open" : ""
                                        }`}
                                >
                                    {activeIndex === index && <p>Answer for: {q}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="testimonials">
                    <h4>
                        What our <span className="highlight">customers</span> say about us.
                    </h4>
                    <div className="testimonial-cards">
                        {[
                            {
                                name: "EVA CLARKE",
                                company: "Cobra Talent",
                                feedback:
                                    "SGo Systems has been amazing. The UI/UX solutions they delivered are modern and intuitive. Our users love it!",
                            },
                            {
                                name: "Henry Moon",
                                company: "",
                                feedback:
                                    "Excellent support and communication throughout. The final product exceeded our expectations.",
                            },
                        ].map((item, index) => (
                            <div key={index} className="testimonial-card">
                                <p>{item.feedback}</p>
                                <h5>{item.name}</h5>
                                <span>{item.company}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <DigitalChangeSection />

        </div>
    );
};

export default Home;
