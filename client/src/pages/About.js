import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
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
              Discover our mission, history, and the dedicated team behind our tennis program
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
              Project Lovematch is dedicated to creating inclusive opportunities for children with 
              special needs to learn and enjoy tennis in a supportive, encouraging environment. 
              We believe that every child deserves the chance to experience the joy of sports, 
              build confidence, and form meaningful friendships.
            </p>
            
            <div className="mission-values">
              <div className="mission-value">
                <div className="value-icon">🎾</div>
                <h3 className="value-title">Inclusion</h3>
                <p className="value-description">
                  Creating a welcoming environment where every child feels valued and supported
                </p>
              </div>
              
              <div className="mission-value">
                <div className="value-icon">🤝</div>
                <h3 className="value-title">Community</h3>
                <p className="value-description">
                  Building lasting relationships between volunteers, athletes, and families
                </p>
              </div>
              
              <div className="mission-value">
                <div className="value-icon">🌟</div>
                <h3 className="value-title">Growth</h3>
                <p className="value-description">
                  Fostering personal development through sports, teamwork, and achievement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="history-section">
        <div className="container">
          <h2 className="section-title">Our Story</h2>
          <div className="history-timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-year">2010</div>
                <h3 className="timeline-title">The Beginning</h3>
                {/* <p className="timeline-description">
                  Project Lovematch was founded with a simple vision: to bring the joy of tennis 
                  to children with special needs in our community.
                </p> */}
              </div>
              <div className="timeline-dot"></div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-year">2015</div>
                <h3 className="timeline-title">Growing Impact</h3>
                {/* <p className="timeline-description">
                  The program expanded to serve more families and established partnerships with 
                  local schools and organizations.
                </p> */}
              </div>
              <div className="timeline-dot"></div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-year">2020</div>
                <h3 className="timeline-title">Adaptation & Resilience</h3>
                {/* <p className="timeline-description">
                  Despite challenges, we found innovative ways to continue serving our community 
                  and supporting our athletes.
                </p> */}
              </div>
              <div className="timeline-dot"></div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-year">2024</div>
                <h3 className="timeline-title">Looking Forward</h3>
                {/* <p className="timeline-description">
                  Continuing our mission to create more opportunities and reach more families 
                  in need of our services.
                </p> */}
              </div>
              <div className="timeline-dot"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="leadership-section">
        <div className="container">
          <h2 className="section-title">Leadership Team</h2>
          <div className="leadership-grid">
            <div className="leadership-card">
              <div className="leadership-image">👨‍💼</div>
              <div className="leadership-info">
                <h3 className="leadership-name">Joe Castaneda</h3>
                <div className="leadership-role">Program Director</div>
                {/* <p className="leadership-description">
                  Joe has been the driving force behind Project Lovematch since its inception. 
                  His passion for tennis and commitment to serving children with special needs 
                  has shaped our program into what it is today.
                </p> */}
                <a href="mailto:projectlovematch@yahoo.com" className="leadership-contact">
                  📧 projectlovematch@yahoo.com
                </a>
              </div>
            </div>
            
            <div className="leadership-card">
              <div className="leadership-image">👥</div>
              <div className="leadership-info">
                <h3 className="leadership-name">Board of Directors</h3>
                <div className="leadership-role">Strategic Leadership</div>
                <p className="leadership-description">
                  Our dedicated board members provide strategic guidance and ensure the long-term 
                  sustainability of Project Lovematch's mission and programs.
                </p>
              </div>
            </div>
            
            <div className="leadership-card">
              <div className="leadership-image">🎯</div>
              <div className="leadership-info">
                <h3 className="leadership-name">Volunteer Coordinators</h3>
                <div className="leadership-role">Program Operations</div>
                <p className="leadership-description">
                  Our volunteer coordinators work tirelessly to ensure smooth program operations 
                  and provide support to both volunteers and participating families.
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
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle">
              Have questions about our program? We'd love to hear from you.
            </p>
            
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span className="contact-label">Email</span>
                <span className="contact-value">projectlovematch@yahoo.com</span>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span className="contact-label">Phone</span>
                <span className="contact-value">(201) 669-9436</span>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span className="contact-label">Location</span>
                <span className="contact-value">Franklin Lakes Racquet Club</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 