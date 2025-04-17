import React from 'react';
import DigitalChangeSection from '../components/DigitalChangeSection'; // if you want it later
import Header from '../components/Header'; // already transparent
import './Home.css';
import LogoSlider from '../components/LogoSlider';
import StatsSection from "../components/StatsSection";
import ValueProposition from '../components/ValueProposition';
import CardDisplay from '../components/CardDisplay';
import ContactSection from '../components/ContactSection';







const HomePage = () => {
    return (
        <div>
            <Header />
            <div
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0,0,0,0)),url('/homeiimg.png')`, // Put your image in public folder or import
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100vh',
                    position: 'relative',
                    color: '#fff',
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-start items-start h-full px-10 max-w-5xl mx-auto home-hero-section">
                    <div className="home-hero-content mb-6 pt-36"> {/* Add padding top here */}
                        <h1 className="home-hero-heading text-white text-4xl md:text-5xl font-bold leading-snug mb-4">
                            Trusted Web Development<br /> & Web App Development<br /> Solutions
                        </h1>
                        <p className="home-hero-subheading text-gray-200 text-lg md:text-xl">
                            Innovative Websites & Web Apps, Tailored Design for You
                        </p>
                    </div>
                    <div className='homebut'>
                        <button type="submit" className="custom-subscribe-btn ">
                            Get Started<span className="custom-arrow">→</span>
                        </button>
                    </div>
                </div>
                {/* Clients Logos */}

            </div>
            <LogoSlider />
            <StatsSection />
            <ValueProposition />
            <CardDisplay />
            <div className='homebutt'>
                        <button type="submit" className="custom-subscribe-btn ">
                            See More<span className="custom-arrow">→</span>
                        </button>
                    </div>
<br></br>
            <DigitalChangeSection />

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
            <ContactSection />

        </div>
    );
};

export default HomePage;
