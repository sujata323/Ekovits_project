
import React from 'react';
import Header from '../components/Header';
import DigitalChangeSection from '../components/DigitalChangeSection';
import ContactSection from '../components/ContactSection';
// import { ArrowRight } from "lucide-react";
import ValueProposition from '../components/ValueProposition';
import JoinTeamSection from '../components/JoinTeamSection';




const contact = () => (
    <>

        <div >
            <Header />
        </div>
        <main>
            <ContactSection />
            <ValueProposition />
            <JoinTeamSection />
            {/* Join Our Diverse Team Section */}
            
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
            <DigitalChangeSection />

        </main>
    </>
);

export default contact;
