import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const photosRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all sections
    [heroRef, aboutRef, photosRef, ctaRef].forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section ref={heroRef} className="hero fade-in">
        <div className="hero-background">
          <div className="hero-overlay"></div>
          <div className="tennis-court-pattern"></div>
        </div>
        
        <div className="hero-content">
          <div className="container">
            <h1 className="hero-title">
              Project <span className="highlight">Lovematch</span>
            </h1>
            <p className="hero-subtitle">
              Where tennis meets compassion, creating opportunities for every athlete to shine
            </p>
            <div className="hero-buttons">
              <Link to="/signup" className="btn btn-primary">
                Join Our Program
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="about-section slide-in-left">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">Empowering Through Tennis</h2>
              <p className="about-description">
                Project Lovematch is an annual program which provides basic tennis instruction and activity focused on
athletes with various developmental issues including mental retardation, down syndrome, autism, visual
impairment, neurological impairments and attention deficit disorder. For over 30 years, the program has engaged local high school
students as volunteers to develop one-one-one relationships with the athletes, providing a positive
experience for all involved.
              </p>
              <p className="about-description">
                The Program is offered at the Franklin Lakes Racquet Club on ten Sundays from January through March from 4:00 to 5:00 PM.
              </p>
              <div className="about-features">
                <div className="feature">
                  <div className="feature-icon">🎾</div>
                  <h3>Weekly Sessions</h3>
                  <p>Every week from January to March</p>
                </div>
                <div className="feature">
                  <div className="feature-icon">⏰</div>
                  <h3>
                    4:00-5:00 PM
                    <br />
                    <span style={{ fontWeight: 'normal', fontSize: '0.95em' }}>Every Sunday Afternoon</span>
                  </h3>
                </div>
                <div className="feature">
                  <div className="feature-icon">🏆</div>
                  <h3>10 Week Program</h3>
                  <p>Comprehensive tennis experience</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <div className="placeholder-content">
                  <span className="placeholder-icon">🎾</span>
                  <p>Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photos Section */}
      <section ref={photosRef} className="photos-section slide-in-right">
        <div className="container">
          <h2 className="section-title">Moments of Joy</h2>
          <p className="section-subtitle">
            See the impact of our program through the eyes of our volunteers and athletes
          </p>
          
          <div className="photos-grid">
            <div className="photo-card scale-in">
              <div className="photo-container">
                <img 
                  src="/images/IMG_9252.JPG" 
                  alt="Tennis program activity"
                  className="photo-image"
                />
                <div className="photo-overlay">
                  <div className="photo-caption-overlay">
                    <h3>Building Connections</h3>
                  </div>
                </div>
              </div>
              <div className="photo-caption">
                <p className="photo-description">
                  Volunteers and athletes working together to build lasting friendships through tennis
                </p>
              </div>
            </div>
            
            <div className="photo-card scale-in">
              <div className="photo-container">
                <img 
                  src="/images/IMG_9257.JPG" 
                  alt="Group tennis session"
                  className="photo-image"
                />
                <div className="photo-overlay">
                  <div className="photo-caption-overlay">
                    <h3>Team Spirit</h3>
                  </div>
                </div>
              </div>
              <div className="photo-caption">
                <p className="photo-description">
                  Group activities that foster teamwork and inclusive participation for everyone
                </p>
              </div>
            </div>
            
            <div className="photo-card scale-in">
              <div className="photo-container">
                <img 
                  src="/images/IMG_9301.JPG" 
                  alt="Tennis skill development"
                  className="photo-image"
                />
                <div className="photo-overlay">
                  <div className="photo-caption-overlay">
                    <h3>Skill Development</h3>
                  </div>
                </div>
              </div>
              <div className="photo-caption">
                <p className="photo-description">
                  One-on-one coaching helps athletes develop confidence and tennis fundamentals
                </p>
              </div>
            </div>
            
            <div className="photo-card scale-in">
              <div className="photo-container">
                <img 
                  src="/images/IMG_9304.JPG" 
                  alt="Celebrating achievements"
                  className="photo-image"
                />
                <div className="photo-overlay">
                  <div className="photo-caption-overlay">
                    <h3>Celebrating Success</h3>
                  </div>
                </div>
              </div>
              <div className="photo-caption">
                <p className="photo-description">
                  Every achievement, big or small, is celebrated together as a community
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section ref={ctaRef} className="cta-section fade-in">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Make a Difference?</h2>
            <p className="cta-description">
              Join our community of volunteers and help create unforgettable experiences 
              for our amazing athletes. Every session counts, every smile matters.
            </p>
            <div className="cta-buttons">
              <Link to="/signup" className="btn btn-primary btn-large">
                Volunteer Today
              </Link>
              <Link to="/calendar" className="btn btn-secondary btn-large">
                View Schedule
              </Link>
            </div>
            <div className="cta-info">
              <div className="info-item">
                <span className="info-icon">📍</span>
                <span>Franklin Lakes Racquet Club</span>
              </div>
              <div className="info-item">
                <span className="info-icon">📅</span>
                <span>January - March</span>
              </div>
              <div className="info-item">
                <span className="info-icon">⏰</span>
                <span>
                  Sundays
                  <br />
                  4:00 - 5:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 