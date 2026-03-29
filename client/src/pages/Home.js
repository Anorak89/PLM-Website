import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import img1 from '../assets/IMG_9252.JPG';
import img2 from '../assets/IMG_9257.JPG';
import img3 from '../assets/IMG_9301.JPG';
import img4 from '../assets/IMG_9304.JPG';

const testimonials = [
  {
    quote:
      'Our family has volunteered with Project Lovematch for several years.  It is a rewarding experience to get to know the Athletes and watch their tennis skills develop.  You definitely do not need to be an expert in tennis to volunteer.',
    author: 'Bill Thomas'
  },
  {
    quote:
      'I really enjoy project lovematch program cause it helped me with my tennis skills! I also enjoy the volunteers they were very helpful with giving advice on what to do the basics skills!',
    author: 'Kelly Bloomer'
  },
  {
    quote:
      'A few years ago my son walked into Project Lovematch not knowing a thing about tennis. Today he is a competitive athlete with a consistently accurate serve and a love for the game.  We owe much of that to the dedicated coaches and volunteers at PLM who create a positive and fun experience. We highly recommend this program!!',
    author: 'Barb Jones'
  },
  {
    quote:
      'Project Lovematch has been an amazing program for Ursula for many years. The Coaches and Volunteers are patient and encouraging. We have seen great growth in her skills and confidence. It was the start for her love for Tennis. We are so grateful for this well organized program and the joy it brings to the participants.',
    author: ''
  },
  {
    quote:
      'I have been volunteering at PLM for several years now. This experience has taught me the importance of acceptance and inclusion. The athletes have taught me so much. Volunteering at PLM has made me a more patient, caring, and empathetic person.',
    author: 'Noah C'
  }
];

const Home = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const photosRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);
  const contactRef = useRef(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [testimonialTimerResetKey, setTestimonialTimerResetKey] = useState(0);

  const resetTestimonialTimer = () => {
    setTestimonialTimerResetKey((current) => current + 1);
  };

  const selectTestimonial = (index) => {
    setActiveTestimonial(index);
    resetTestimonialTimer();
  };

  const showPreviousTestimonial = () => {
    setActiveTestimonial((current) => (current - 1 + testimonials.length) % testimonials.length);
    resetTestimonialTimer();
  };

  const showNextTestimonial = () => {
    setActiveTestimonial((current) => (current + 1) % testimonials.length);
    resetTestimonialTimer();
  };

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
    [heroRef, aboutRef, photosRef, testimonialsRef, ctaRef, contactRef].forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setActiveTestimonial((current) => (current + 1) % testimonials.length);
    }, 7000);

    return () => clearTimeout(timeoutId);
  }, [activeTestimonial, testimonialTimerResetKey]);

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
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLScE1W0pijbXJkpvf9As8mimb0yn2c_AaJvuk0o52AqooApgIg/viewform" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn hero-btn"
              >
                Athlete Sign Up
              </a>
              <a 
                href="https://forms.gle/g9Cgfbo2Mixnjy8n9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn hero-btn"
              >
                Volunteer Sign Up
              </a>
              <Link to="/about" className="btn hero-btn">
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
athletes (age 13+) with intellectual and developmental disabilities, including Down Syndrome, Autism, 
and other developmental conditions. For over 30 years, the program has engaged local high school
students as volunteers who aspire to develop one-on-one relationships with athletes as resources permit, providing positive
social interactions and a rewarding experience for all involved.
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
          </div>
        </div>
      </section>

      {/* Photos Section */}
      <section ref={photosRef} className="photos-section slide-in-right">
        <div className="container">
          <h2 className="section-title">Program Highlights</h2>
          <p className="section-subtitle">
            See the impact of our program through the eyes of our volunteers and athletes
          </p>
          
          <div className="photos-grid">
            <div className="photo-card scale-in">
              <div className="photo-container">
                <img 
                  src={img1} 
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
                  src={img2} 
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
                  src={img3} 
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
                  Personalized coaching helps athletes develop confidence and tennis fundamentals
                </p>
              </div>
            </div>
            
            <div className="photo-card scale-in">
              <div className="photo-container">
                <img 
                  src={img4} 
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
                  Every achievement is celebrated together as a supportive community
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="testimonials-section fade-in">
        <div className="container">
          <h2 className="section-title">What Families And Volunteers Say</h2>
          <p className="section-subtitle">
            Stories from our community that reflect the impact of Project Lovematch
          </p>

          <div className="testimonial-carousel">
            <button
              type="button"
              className="testimonial-arrow"
              onClick={showPreviousTestimonial}
              aria-label="Show previous testimonial"
            >
              &lt;
            </button>

            <div key={activeTestimonial} className="testimonial-card testimonial-slide" aria-live="polite">
              <p className="testimonial-quote">"{testimonials[activeTestimonial].quote}"</p>
              {testimonials[activeTestimonial].author && (
                <p className="testimonial-author">{testimonials[activeTestimonial].author}</p>
              )}
            </div>

            <button
              type="button"
              className="testimonial-arrow"
              onClick={showNextTestimonial}
              aria-label="Show next testimonial"
            >
              &gt;
            </button>
          </div>

          <div className="testimonial-dots" role="tablist" aria-label="Testimonials">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.author + index}
                className={`testimonial-dot ${index === activeTestimonial ? 'active' : ''}`}
                onClick={() => selectTestimonial(index)}
                aria-label={`Show testimonial ${index + 1}`}
                aria-selected={index === activeTestimonial}
                role="tab"
                type="button"
              />
            ))}
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
              <a 
                href="https://forms.gle/g9Cgfbo2Mixnjy8n9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary btn-large"
              >
                Volunteer Today
              </a>
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

      {/* Donation Section */}
      <section className="donation-section">
        <div className="container">
          <div className="donation-content">
            <h2 className="section-title">Support Our Mission</h2>
            <p className="donation-description">
              If you would like to help, you can sign up to volunteer or make a tax-deductible donation. 
              PLM is a 501(c)(3) tax-exempt organization and any amount is welcome! Sponsorships are also 
              available upon request.
            </p>
            <div className="donation-info-box">
              <h4>Send Donations To:</h4>
              <p className="donation-address">
                Project Lovematch<br />
                PO Box 64<br />
                Allendale, NJ 07401
              </p>
            </div>
            
            {/* Sponsors Section */}
            <div className="sponsors-section">
              <h3 className="sponsors-title">Our Sponsors</h3>
              <div className="sponsors-list">
                <div className="sponsor-item">
                  <span className="sponsor-name">USTA - Eastern Region</span>
                </div>
                <div className="sponsor-item">
                  <span className="sponsor-name">The Haar Family Foundation</span>
                </div>
                <div className="sponsor-item">
                  <span className="sponsor-name">Franklin Lakes Racquet Club</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="contact-section fade-in">
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

export default Home; 