import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <section className="contact-section">
        <h2>Contact Me</h2>
        <p>{`I'm`} open to new opportunities and would love to connect! Feel free to reach out by filling out the form below.</p>
        
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your Email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Your Message"  required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;

