// src/Contact.js
import React, { useEffect, useState } from 'react';
import '../styles/Contact.css';
import axios from 'axios';
import toast from 'react-hot-toast';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById('contact');
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Prepare the data to be sent
      const data = { 
          name: name.trim(), 
          email: email.trim(), 
          mobile: mobile.trim() // Ensure mobile is a string if needed
      };
  
      console.log('Submitting form with data:', data); // Check the data being sent
  
      try {
          // Make the API call
          const response = await axios.post('https://edtek-backend.onrender.com/userDetails', data);
          
          // Handle successful response
          console.log('Response from server:', response.data);
          toast.success('Form submitted successfully!');
  
          // Reset the form fields
          setName('');
          setEmail('');
          setMobile('');
      } catch (error) {
          // Enhanced error handling
          console.error('Error submitting form:', error.response ? error.response.data : error.message);
          toast.error('Failed to submit form. Please try again.');
      }
  };
  

  return (
    <section id="contact" className={`contact ${isVisible ? 'fade-in' : ''}`}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="form-input"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="form-input"
        />
        <input
          type="tel"
          placeholder="Mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
          className="form-input"
        />
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
