import React from 'react';
import './About.css';  // Import the CSS file here

const About = () => {
  return (
    <div className="about-container">
      {/* Company Introduction */}
      <section className="about-intro">
        <h1>About Us</h1>
        <p>
          Welcome to MyShop, a leading e-commerce platform where you can find a wide variety of products, from fashion to electronics. Our goal is to deliver the best shopping experience to our customers, offering top-notch products and excellent customer service.
        </p>
      </section>

      {/* Our Mission Section */}
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          At MyShop, we are committed to creating a user-friendly platform that provides seamless and enjoyable shopping experiences. We aim to connect millions of shoppers with quality products at competitive prices.
        </p>
      </section>

      {/* Team or Key Features Section */}
      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-cards">
          <div className="team-card">
            <img src="https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/459067139_1692347884947539_3793527228285943165_n.jpg?ccb=11-4&oh=01_Q5AaIOR-7aEMZMLvFvI96s2NC6ILqlzRGqMWhs6qAjlIsbIJ&oe=6715D062&_nc_sid=5e03e0&_nc_cat=102" alt="Team Member" />
            <h3>Deep Rathod</h3>
            <p>CEO & Founder</p>
          </div>
          {/* <div className="team-card">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h3>Krunal </h3>
            <p>Chief Marketing Officer</p>
          </div> */}
          
        </div>
      </section>
    </div>
  );
};

export default About;
