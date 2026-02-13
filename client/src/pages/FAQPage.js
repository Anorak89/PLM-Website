import React from 'react';
import FAQ from '../components/FAQ';
import './FAQPage.css';

const FAQPage = () => {
  return (
    <div className="faq-page">
      {/* Hero Section */}
      <section className="faq-hero">
        <div className="container">
          <h1 className="faq-page-title">Frequently Asked Questions</h1>
          <p className="faq-page-subtitle">
            Find answers to common questions about Project Lovematch
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="faq-content-section">
        <div className="container">
          <FAQ />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="faq-contact-section">
        <div className="container">
          <div className="faq-contact-content">
            <h2>Still have questions?</h2>
            <p>We're here to help! Reach out to us and we'll get back to you as soon as possible.</p>
            <a href="mailto:projectlovematch@gmail.com" className="btn btn-primary">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
