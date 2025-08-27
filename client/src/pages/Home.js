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
                Project Lovematch is a nonprofit program that runs each winter from January through March 
                at the Franklin Lakes Racquet Club, where we hold weekly one-hour tennis sessions 
                (4:00–5:00 pm) for ten weeks.
              </p>
              <p className="about-description">
                We pair a large group of volunteers with mentally challenged children—including those with 
                autism, Down syndrome, and other developmental challenges—to give them the opportunity 
                to learn and enjoy tennis in a supportive, encouraging environment.
              </p>
              <div className="about-features">
                <div className="feature">
                  <div className="feature-icon">🎾</div>
                  <h3>Weekly Sessions</h3>
                  <p>Every week from January to March</p>
                </div>
                <div className="feature">
                  <div className="feature-icon">⏰</div>
                  <h3>4:00-5:00 PM</h3>
                  <p>Perfect after-school timing</p>
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
                  <p>Tennis Court Image</p>
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
              <div className="photo-placeholder">
                <div className="placeholder-content">
                  <span className="placeholder-icon">📸</span>
                  <p>Volunteer helping athlete</p>
                </div>
              </div>
              <div className="photo-caption">
                <h3>Building Confidence</h3>
                <p>Volunteers work one-on-one with athletes to develop tennis skills</p>
              </div>
            </div>
            
            <div className="photo-card scale-in">
              <div className="photo-placeholder">
                <div className="placeholder-content">
                  <span className="placeholder-icon">📸</span>
                  <p>Group tennis activity</p>
                </div>
              </div>
              <div className="photo-caption">
                <h3>Team Spirit</h3>
                <p>Group activities foster friendship and inclusion</p>
              </div>
            </div>
            
            <div className="photo-card scale-in">
              <div className="photo-placeholder">
                <div className="placeholder-content">
                  <span className="placeholder-icon">📸</span>
                  <p>Celebration moment</p>
                </div>
              </div>
              <div className="photo-caption">
                <h3>Celebrating Success</h3>
                <p>Every achievement, big or small, is celebrated together</p>
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
                <span>4:00 - 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 