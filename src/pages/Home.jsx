// src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header';

const Home = () => (
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
               <Header />
            </div>
    <main>
     
    </main>
  </>
);

export default Home;
