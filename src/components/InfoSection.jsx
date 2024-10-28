import React from 'react';
import '../styles/InfoSection.css';
import SampleImage from '../assets/bg.jpg'; // Replace with your image path

const InfoSection = () => {
  return (
    <section className="info-section">
      <div className="image-container">
        <img src={SampleImage} alt="Sample" />
      </div>
      <div className="text-container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
          Cras venenatis euismod malesuada. Nullam in semper ligula. Donec volutpat facilisis ipsum, sit amet tempor
          justo fermentum non.
        </p>
      </div>
    </section>
  );
};

export default InfoSection;
