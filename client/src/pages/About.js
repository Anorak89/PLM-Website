import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="container">
            <h1 className="hero-title">About Project Lovematch</h1>
            <p className="hero-subtitle">
              Learn about our mission and how we serve our community
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <h2 className="section-title">Our Mission</h2>
            <p className="mission-text">
              Project Lovematch provides basic tennis instruction and activity focused on athletes with various 
              developmental issues including mental retardation, Down syndrome, autism, visual impairment, 
              neurological impairments, and attention deficit disorder. The program engages local high school 
              students as volunteers to develop one-on-one relationships with the athletes, providing a 
              positive experience for all involved. Our program has been operating for many years, with 
              some of our athletes participating the entire time.
            </p>
            
            <div className="mission-values">
              <div className="mission-value">
                <div className="value-icon">🎾</div>
                <h3 className="value-title">Inclusion</h3>
                <p className="value-description">
                  Creating a welcoming environment where every child feels valued and supported, regardless of their abilities or challenges
                </p>
              </div>
              
              <div className="mission-value">
                <div className="value-icon">🤝</div>
                <h3 className="value-title">Community</h3>
                <p className="value-description">
                  Building lasting relationships between volunteers, athletes, and families that extend beyond the tennis court
                </p>
              </div>
              
              <div className="mission-value">
                <div className="value-icon">🌟</div>
                <h3 className="value-title">Growth</h3>
                <p className="value-description">
                  Fostering personal development through sports, teamwork, and achievement, helping each participant reach their full potential
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <h2 className="section-title">Contact Us</h2>
            <p className="section-subtitle">
              Have questions about our program? We'd love to hear from you.
            </p>
            
            <div className="contact-info-simple">
              <a href="mailto:projectlovematch@gmail.com" className="contact-email-link">
                <span className="contact-icon">📧</span>
                <span className="contact-email">projectlovematch@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
