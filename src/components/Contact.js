import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [feedback, setFeedback] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    const errors = [];
    
    if (!formData.name.trim()) {
      errors.push('Name is required');
    }
    
    if (!formData.email.trim()) {
      errors.push('Email is required');
    } else if (!isValidEmail(formData.email.trim())) {
      errors.push('Please enter a valid email address');
    }
    
    if (!formData.message.trim()) {
      errors.push('Message is required');
    } else if (formData.message.trim().length < 10) {
      errors.push('Message must be at least 10 characters long');
    }
    
    // Display errors or submit form
    if (errors.length > 0) {
      setFeedback({ type: 'error', message: errors.join('. ') });
    } else {
      // Simulate form submission
      setFeedback({ type: 'success', message: "Thank you for your message! I'll get back to you soon." });
      setFormData({ name: '', email: '', message: '' });
    }
    
    // Remove feedback after 5 seconds
    setTimeout(() => {
      setFeedback(null);
    }, 5000);
  };

  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>Feel free to reach out for collaboration opportunities, internships, or just to say hello!</p>
            <div className="contact-details">
              <p><strong>Email:</strong> atharvakjnitb@gmail.com</p>
              <p><strong>Phone:</strong> +91 7491811808</p>
              <p><strong>Location:</strong> Bhopal, India</p>
              <div className="social-links" style={{ marginTop: '20px' }}>
                <a 
                  href="https://github.com/atharvakej" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                >
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/atharvakj/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://leetcode.com/failalot/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                >
                  LeetCode
                </a>
                <a 
                  href="https://codeforces.com/profile/atharva.kj" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                >
                  Codeforces
                </a>
                <a 
                  href="https://www.codechef.com/users/atharva_kj" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                >
                  CodeChef
                </a>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="form-control" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="form-control" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea 
                id="message" 
                name="message" 
                className="form-control" 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-full-width">
              Send Message
            </button>
            {feedback && (
              <div 
                style={{
                  padding: '12px 16px',
                  borderRadius: '4px',
                  marginTop: '16px',
                  fontSize: '14px',
                  fontWeight: '500',
                  backgroundColor: feedback.type === 'success' ? '#d4edda' : '#f8d7da',
                  color: feedback.type === 'success' ? '#155724' : '#721c24',
                  border: `1px solid ${feedback.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`
                }}
              >
                {feedback.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact; 