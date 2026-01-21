import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="container">
            <h1 className="hero-title">About Project Lovematch | 30+ Years Serving Special Needs Tennis Community</h1>
            <p className="hero-subtitle">
              Learn about our FREE tennis program for children with autism, Down syndrome, and developmental disabilities in Franklin Lakes, New Jersey
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <h2 className="section-title">Our Mission: FREE Special Needs Tennis Program in Franklin Lakes, NJ</h2>
            <p className="mission-text">
              <strong>Project Lovematch is a nonprofit tennis program</strong> that has been serving children with special needs in Franklin Lakes, New Jersey for over 30 years. We provide <strong>completely FREE tennis instruction</strong> specifically designed for athletes with developmental disabilities including <strong>autism spectrum disorder, Down syndrome, intellectual disabilities, visual impairments, neurological conditions, and attention deficit disorders</strong>.
            </p>
            
            <p className="mission-text">
              Our unique program pairs each special needs athlete with dedicated <strong>high school student volunteers</strong> who serve as one-on-one coaches, creating meaningful relationships that benefit everyone involved. Many of our athletes have been participating for decades, some for the entire 30+ year history of our program, demonstrating the lasting impact and community we've built.
            </p>
            
            <p className="mission-text">
              <strong>Located at Franklin Lakes Racquet Club</strong>, our program runs for 10 consecutive Sundays from January through March, 4:00-5:00 PM. We serve families throughout Bergen County and surrounding areas, providing a safe, inclusive, and nurturing environment where children with special needs can develop tennis skills, build confidence, and form lasting friendships.
            </p>
            
            <div className="mission-highlights">
              <h3>Why Project Lovematch is Different:</h3>
              <ul>
                <li><strong>100% FREE Program:</strong> No cost for instruction, equipment, or participation</li>
                <li><strong>30+ Years Experience:</strong> Proven track record serving the special needs community</li>
                <li><strong>Specialized Training:</strong> Volunteers trained in adaptive tennis instruction</li>
                <li><strong>Individual Attention:</strong> One-on-one coaching for every participant</li>
                <li><strong>Inclusive Community:</strong> Welcoming environment for all ability levels</li>
                <li><strong>Long-term Relationships:</strong> Many participants return year after year</li>
              </ul>
            </div>
            
            <div className="mission-values">
              <div className="mission-value">
                <div className="value-icon">🎾</div>
                <h3 className="value-title">Inclusion & Accessibility</h3>
                <p className="value-description">
                  Creating a completely accessible tennis environment where every child with special needs feels valued, supported, and empowered, regardless of their specific diagnosis or ability level. Our FREE program removes financial barriers to participation.
                </p>
              </div>
              
              <div className="mission-value">
                <div className="value-icon">🤝</div>
                <h3 className="value-title">Community Partnership</h3>
                <p className="value-description">
                  Building lasting relationships between high school volunteers, special needs athletes, and families throughout Franklin Lakes and Bergen County. Our community extends beyond the tennis court, creating lifelong friendships and support networks.
                </p>
              </div>
              
              <div className="mission-value">
                <div className="value-icon">🌟</div>
                <h3 className="value-title">Personal Growth & Development</h3>
                <p className="value-description">
                  Fostering confidence, social skills, and physical fitness through adaptive tennis instruction. Each participant develops at their own pace while celebrating achievements and building self-esteem in a supportive environment.
                </p>
              </div>
            </div>
            
            <div className="program-details">
              <h3>Program Information for Special Needs Tennis:</h3>
              <div className="details-grid">
                <div className="detail-item">
                  <strong>Who We Serve:</strong> Children with autism, Down syndrome, developmental disabilities, ADHD, visual impairments, and neurological conditions
                </div>
                <div className="detail-item">
                  <strong>Cost:</strong> Completely FREE - no fees for instruction, equipment, or participation
                </div>
                <div className="detail-item">
                  <strong>Location:</strong> Franklin Lakes Racquet Club, Franklin Lakes, NJ (Bergen County)
                </div>
                <div className="detail-item">
                  <strong>Schedule:</strong> 10 Sundays, January-March, 4:00-5:00 PM
                </div>
                <div className="detail-item">
                  <strong>Instruction Style:</strong> One-on-one coaching with trained high school volunteers
                </div>
                <div className="detail-item">
                  <strong>Experience Level:</strong> All levels welcome - no prior tennis experience required
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <h2 className="section-title">Contact Project Lovematch | FREE Special Needs Tennis Program Registration</h2>
            <p className="section-subtitle">
              Ready to join our FREE tennis program for children with special needs? Have questions about our autism, Down syndrome, and developmental disabilities tennis instruction in Franklin Lakes, NJ? We'd love to hear from you!
            </p>
            
            <div className="contact-info-detailed">
              <div className="contact-main">
                <a href="mailto:projectlovematch@gmail.com" className="contact-email-link">
                  <span className="contact-icon">📧</span>
                  <div className="contact-text">
                    <span className="contact-email">projectlovematch@gmail.com</span>
                    <span className="contact-description">Email us for program registration and information</span>
                  </div>
                </a>
              </div>
              
              <div className="contact-details">
                <h3>Program Registration & Information:</h3>
                <ul>
                  <li><strong>Email:</strong> projectlovematch@gmail.com</li>
                  <li><strong>Location:</strong> Franklin Lakes Racquet Club, Franklin Lakes, NJ</li>
                  <li><strong>Service Area:</strong> Bergen County, New Jersey and surrounding areas</li>
                  <li><strong>Program Dates:</strong> 10 Sundays, January through March</li>
                  <li><strong>Time:</strong> 4:00 PM - 5:00 PM every Sunday</li>
                  <li><strong>Cost:</strong> Completely FREE for all participants</li>
                </ul>
                
                <h3>Frequently Asked Questions:</h3>
                <div className="faq-section">
                  <div className="faq-item">
                    <strong>Q: Is the program really free?</strong>
                    <p>A: Yes! Project Lovematch is 100% FREE. There are no costs for instruction, equipment, or participation.</p>
                  </div>
                  <div className="faq-item">
                    <strong>Q: What conditions do you serve?</strong>
                    <p>A: We welcome children with autism, Down syndrome, intellectual disabilities, ADHD, visual impairments, neurological conditions, and all developmental disabilities.</p>
                  </div>
                  <div className="faq-item">
                    <strong>Q: Do children need tennis experience?</strong>
                    <p>A: No prior tennis experience is required! Our program is designed for all skill levels.</p>
                  </div>
                  <div className="faq-item">
                    <strong>Q: How do I register my child?</strong>
                    <p>A: Simply email us at projectlovematch@gmail.com with your child's information and any special accommodations needed.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
