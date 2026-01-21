import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import img1 from '../assets/IMG_9252.JPG';
import img2 from '../assets/IMG_9257.JPG';
import img3 from '../assets/IMG_9301.JPG';
import img4 from '../assets/IMG_9304.JPG';

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
              FREE Tennis Program for Children with Special Needs - Autism, Down Syndrome & Developmental Disabilities in Franklin Lakes, NJ
            </p>
            <div className="hero-highlights">
              <div className="highlight-item">✅ 30+ Years of Service</div>
              <div className="highlight-item">✅ 100% FREE Program</div>
              <div className="highlight-item">✅ Professional Instruction</div>
              <div className="highlight-item">✅ High School Volunteer Coaches</div>
            </div>
            <div className="hero-buttons">
              <a 
                href="https://forms.gle/g9Cgfbo2Mixnjy8n9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
                aria-label="Join our free special needs tennis program in Franklin Lakes NJ"
              >
                Join Our Program - FREE
              </a>
              <Link to="/about" className="btn btn-secondary">
                Learn More About Our Mission
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
              <h2 className="section-title">Special Needs Tennis Program | Serving Franklin Lakes & Bergen County for 30+ Years</h2>
              <p className="about-description">
                <strong>Project Lovematch is a FREE tennis instruction program</strong> specifically designed for children with special needs including <strong>autism, Down syndrome, developmental disabilities, visual impairments, neurological impairments, and attention deficit disorder</strong>. For over three decades, our inclusive program has provided professional tennis instruction at the Franklin Lakes Racquet Club in New Jersey.
              </p>
              <p className="about-description">
                Our unique approach pairs each special needs athlete with dedicated <strong>high school student volunteers</strong> who serve as one-on-one coaches, mentors, and friends. This creates meaningful relationships that benefit both our athletes and volunteer coaches, building empathy, confidence, and lasting friendships that extend far beyond the tennis court.
              </p>
              <p className="about-description">
                <strong>Program Details:</strong> The program runs for <strong>10 consecutive Sundays from January through March, 4:00-5:00 PM</strong> at Franklin Lakes Racquet Club. All instruction, equipment, and participation is completely FREE for families. We welcome children of all skill levels - no prior tennis experience required!
              </p>
              <div className="about-features">
                <div className="feature">
                  <div className="feature-icon">🎾</div>
                  <h3>FREE Tennis Lessons</h3>
                  <p>Professional instruction for special needs children with autism, Down syndrome & developmental disabilities</p>
                </div>
                <div className="feature">
                  <div className="feature-icon">⏰</div>
                  <h3>
                    Sunday Sessions
                    <br />
                    <span style={{ fontWeight: 'normal', fontSize: '0.95em' }}>4:00-5:00 PM | Jan-Mar</span>
                  </h3>
                  <p>Consistent weekly schedule in Franklin Lakes, NJ</p>
                </div>
                <div className="feature">
                  <div className="feature-icon">🏆</div>
                  <h3>30+ Years Experience</h3>
                  <p>Proven track record serving Bergen County special needs community</p>
                </div>
              </div>
              
              <div className="seo-content">
                <h3>Why Choose Project Lovematch Tennis Program?</h3>
                <ul>
                  <li><strong>Completely FREE:</strong> No cost for instruction, equipment, or participation</li>
                  <li><strong>Specialized Instruction:</strong> Coaches trained in working with special needs children</li>
                  <li><strong>Inclusive Environment:</strong> Welcoming space for children with autism, Down syndrome, and all developmental disabilities</li>
                  <li><strong>One-on-One Attention:</strong> Each athlete paired with a dedicated volunteer coach</li>
                  <li><strong>Local Program:</strong> Convenient Franklin Lakes location serving Bergen County families</li>
                  <li><strong>Character Building:</strong> Develops confidence, social skills, and physical fitness</li>
                  <li><strong>Community Support:</strong> Strong network of families, volunteers, and supporters</li>
                </ul>
                
                <h3>Special Needs Conditions We Serve:</h3>
                <p>Our adaptive tennis program welcomes children diagnosed with:</p>
                <ul>
                  <li>Autism Spectrum Disorder (ASD)</li>
                  <li>Down Syndrome</li>
                  <li>Intellectual Disabilities</li>
                  <li>Developmental Delays</li>
                  <li>Attention Deficit Hyperactivity Disorder (ADHD)</li>
                  <li>Visual Impairments</li>
                  <li>Neurological Conditions</li>
                  <li>Physical Disabilities</li>
                  <li>Learning Disabilities</li>
                </ul>
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
    </div>
  );
};

export default Home; 