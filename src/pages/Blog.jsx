
import React from 'react';
import Header from '../components/Header'; // adjust path if needed
import BlogList from '../components/BlogList';
import DigitalChangeSection from '../components/DigitalChangeSection';


const Blog = () => {
    return (
        <>
            <div
                style={{
                    position: 'relative',
                    backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0,0,0,0)), url('/bannerimg.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '122vh',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',

                }}
            >
                {/* Header inside banner */}
                <Header />

                {/* Blog banner text content */}
                <div
                    style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start', // align text to left
                        justifyContent: 'center',
                        textAlign: 'left',
                        height: '100%',
                        paddingLeft: '3rem', // give some spacing from left
                    }}
                >

                    <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold' }}>Insights, Innovations,<br></br>
                        and Industry News</h1>
                    <p style={{ fontSize: '1.25rem,', padding: '10px' }} >Stay up-to-date with the latest trends, case studies, and best practices in <br></br> IT solutions and consultancy.</p>

                    <div>
                        <button className="btn btn-light fw-semibold px-4 py-2 rounded-pill custom-btn" >
                            Subscribe For Updates &gt;
                        </button>
                    </div>
                </div>
            </div>



            {/* Blog Introduction Section */}
            <section className="text-center py-5 px-10 bg-white">
                <div className="container">
                    <h6 className="text-uppercase text-primary mb-2 py-3">Blogs</h6>

                    <h2
                        style={{
                            background: 'linear-gradient(to right,rgb(27, 48, 133), #49a3ec)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontWeight: 'bold',
                            fontSize: 35,
                        }}
                    >
                        Explore the Latest Innovations in <br /> Technology and IT Solutions
                    </h2>

                    <p className="text-muted fs-5 py-3">
                        Explore our most recent posts on technology, web development, <br></br>and industry innovations.
                    </p>
                </div>
            </section>
            <div>
                <BlogList />
                <DigitalChangeSection />
            </div>
        </>
    );
};

export default Blog;
