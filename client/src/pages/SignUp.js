import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css';

const SignUp = () => {
  const [formType, setFormType] = useState('volunteer');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Volunteer form state
  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    address: '',
    town: '',
    zip: '',
    phone: '',
    tshirtSize: '',
    email: '',
    highSchoolYear: '',
    highSchoolName: '',
    yearsVolunteered: ''
  });

  // Athlete form state
  const [athleteForm, setAthleteForm] = useState({
    name: '',
    age: '',
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    specialNeeds: '',
    experience: '',
    emergencyContact: '',
    emergencyPhone: ''
  });

  const handleVolunteerChange = (e) => {
    setVolunteerForm({
      ...volunteerForm,
      [e.target.name]: e.target.value
    });
  };

  const handleAthleteChange = (e) => {
    setAthleteForm({
      ...athleteForm,
      [e.target.name]: e.target.value
    });
  };

  const handleVolunteerSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await axios.post('/api/volunteer-signup', volunteerForm);
      setMessage(response.data.message);
      setVolunteerForm({
        name: '', address: '', town: '', zip: '', phone: '',
        tshirtSize: '', email: '', highSchoolYear: '', highSchoolName: '', yearsVolunteered: ''
      });
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleAthleteSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await axios.post('/api/athlete-signup', athleteForm);
      setMessage(response.data.message);
      setAthleteForm({
        name: '', age: '', parentName: '', parentPhone: '', parentEmail: '',
        specialNeeds: '', experience: '', emergencyContact: '', emergencyPhone: ''
      });
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page">
      {/* Hero Section */}
      <section className="signup-hero">
        <div className="container">
          <h1 className="signup-title">Join Project Lovematch</h1>
          <p className="signup-subtitle">
            Choose your role and help make a difference in our community
          </p>
        </div>
      </section>

      <div className="signup-content">
        <div className="container">
          {/* Form Toggle */}
          <div className="form-toggle">
            <button
              className={`toggle-button ${formType === 'volunteer' ? 'active' : ''}`}
              onClick={() => setFormType('volunteer')}
            >
              Volunteer Sign Up
            </button>
            <button
              className={`toggle-button ${formType === 'athlete' ? 'active' : ''}`}
              onClick={() => setFormType('athlete')}
            >
              Athlete Registration
            </button>
          </div>

          {/* Volunteer Form */}
          {formType === 'volunteer' && (
            <div className="form-container">
              <div className="form-header">
                <h2>Volunteer Application</h2>
                <p>Join our team of dedicated volunteers and help create unforgettable experiences</p>
              </div>
              
              <form onSubmit={handleVolunteerSubmit} className="form-body">
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={volunteerForm.name}
                      onChange={handleVolunteerChange}
                      className="form-input"
                      required
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={volunteerForm.email}
                      onChange={handleVolunteerChange}
                      className="form-input"
                      required
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={volunteerForm.phone}
                      onChange={handleVolunteerChange}
                      className="form-input"
                      required
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">T-Shirt Size *</label>
                    <select
                      name="tshirtSize"
                      value={volunteerForm.tshirtSize}
                      onChange={handleVolunteerChange}
                      className="form-select"
                      required
                    >
                      <option value="">Select size</option>
                      <option value="XS">XS</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="XXL">XXL</option>
                      <option value="XXXL">XXXL</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Address *</label>
                    <input
                      type="text"
                      name="address"
                      value={volunteerForm.address}
                      onChange={handleVolunteerChange}
                      className="form-input"
                      required
                      placeholder="Enter your street address"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Town *</label>
                    <input
                      type="text"
                      name="town"
                      value={volunteerForm.town}
                      onChange={handleVolunteerChange}
                      className="form-input"
                      required
                      placeholder="Enter your town"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">ZIP Code *</label>
                    <input
                      type="text"
                      name="zip"
                      value={volunteerForm.zip}
                      onChange={handleVolunteerChange}
                      className="form-input"
                      required
                      placeholder="Enter ZIP code"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">High School Year</label>
                    <select
                      name="highSchoolYear"
                      value={volunteerForm.highSchoolYear}
                      onChange={handleVolunteerChange}
                      className="form-select"
                    >
                      <option value="">Select year (if applicable)</option>
                      <option value="Freshman">Freshman</option>
                      <option value="Sophomore">Sophomore</option>
                      <option value="Junior">Junior</option>
                      <option value="Senior">Senior</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">High School Name</label>
                    <input
                      type="text"
                      name="highSchoolName"
                      value={volunteerForm.highSchoolName}
                      onChange={handleVolunteerChange}
                      className="form-input"
                      placeholder="Enter high school name (if applicable)"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Years Volunteered</label>
                    <input
                      type="number"
                      name="yearsVolunteered"
                      value={volunteerForm.yearsVolunteered}
                      onChange={handleVolunteerChange}
                      className="form-input"
                      placeholder="Number of years (if any)"
                      min="0"
                      max="50"
                    />
                  </div>
                </div>

                <div className="form-actions">
                  <button
                    type="submit"
                    className="submit-button"
                    disabled={loading}
                  >
                    {loading ? 'Submitting...' : 'Submit Volunteer Application'}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Athlete Form */}
          {formType === 'athlete' && (
            <div className="form-container">
              <div className="form-header">
                <h2>Athlete Registration</h2>
                <p>Register your child to participate in our tennis program</p>
              </div>
              
              <form onSubmit={handleAthleteSubmit} className="form-body">
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Athlete Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={athleteForm.name}
                      onChange={handleAthleteChange}
                      className="form-input"
                      required
                      placeholder="Enter athlete's full name"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Age *</label>
                    <input
                      type="number"
                      name="age"
                      value={athleteForm.age}
                      onChange={handleAthleteChange}
                      className="form-input"
                      required
                      placeholder="Enter age"
                      min="5"
                      max="25"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Parent/Guardian Name *</label>
                    <input
                      type="text"
                      name="parentName"
                      value={athleteForm.parentName}
                      onChange={handleAthleteChange}
                      className="form-input"
                      required
                      placeholder="Enter parent/guardian name"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Parent Phone *</label>
                    <input
                      type="tel"
                      name="parentPhone"
                      value={athleteForm.parentPhone}
                      onChange={handleAthleteChange}
                      className="form-input"
                      required
                      placeholder="Enter parent phone number"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Parent Email *</label>
                    <input
                      type="email"
                      name="parentEmail"
                      value={athleteForm.parentEmail}
                      onChange={handleAthleteChange}
                      className="form-input"
                      required
                      placeholder="Enter parent email address"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Emergency Contact Name *</label>
                    <input
                      type="text"
                      name="emergencyContact"
                      value={athleteForm.emergencyContact}
                      onChange={handleAthleteChange}
                      className="form-input"
                      required
                      placeholder="Enter emergency contact name"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Emergency Contact Phone *</label>
                    <input
                      type="tel"
                      name="emergencyPhone"
                      value={athleteForm.emergencyPhone}
                      onChange={handleAthleteChange}
                      className="form-input"
                      required
                      placeholder="Enter emergency contact phone"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Special Needs or Considerations</label>
                  <textarea
                    name="specialNeeds"
                    value={athleteForm.specialNeeds}
                    onChange={handleAthleteChange}
                    className="form-textarea"
                    placeholder="Please describe any special needs, medical conditions, or considerations we should be aware of"
                    rows="4"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Previous Tennis Experience</label>
                  <textarea
                    name="experience"
                    value={athleteForm.experience}
                    onChange={handleAthleteChange}
                    className="form-textarea"
                    placeholder="Describe any previous tennis or sports experience (optional)"
                    rows="3"
                  />
                </div>

                <div className="form-actions">
                  <button
                    type="submit"
                    className="submit-button"
                    disabled={loading}
                  >
                    {loading ? 'Submitting...' : 'Submit Athlete Registration'}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Success/Error Message */}
          {message && (
            <div className={`message ${message.includes('successfully') ? 'success' : 'error'}`}>
              {message}
            </div>
          )}

          {/* Contact Information */}
          <div className="contact-info">
            <h3>Questions About Registration?</h3>
            <p>
              If you have any questions about the registration process or our program, 
              please don't hesitate to reach out to us.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span className="contact-text">projectlovematch@yahoo.com</span>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span className="contact-text">(201) 669-9436</span>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">👨‍💼</span>
                <span className="contact-text">Joe Castaneda, Program Director</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp; 