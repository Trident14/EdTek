// src/App.js
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './App.css';
import NavBar from './components/Navbar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';
import InfoSection from './components/InfoSection';

const App = () => {
  useEffect(() => {
    // Start the animation sequence
    gsap.fromTo(".change", { opacity: 0 }, { opacity: 1, duration: 0.8 });
    gsap.fromTo(".course", { opacity: 0 }, { opacity: 1, duration: 1, delay: 1 });
  }, []);

  return (
    <>
      <Toaster />
      <NavBar />
      <div className='main'>
        <div className="page1">
          <h1>
            <span className="change">Change</span><br />
            <span className="course">the Course</span>
          </h1>
          <div className="video-container">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/W_2G3tO-nSE?autoplay=1&mute=1&loop=1&playlist=W_2G3tO-nSE"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="YouTube Video"
            ></iframe>
          </div>
        </div>
        <div id="About"><InfoSection /></div>
        <div className="page2" id='Contact'>
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
