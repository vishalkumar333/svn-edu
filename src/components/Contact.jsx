import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-page">

      {/* Header */}
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>
          Contact our support team or make an appointment with our consultancy.
        </p>
      </section>

      {/* Contact Section */}
      <div className="contact-container">

        {/* Left Info */}
        <div className="contact-info">
          <h3>Get In Touch</h3>

          <p>
            Please contact us using the information below. For additional
            information on our management consulting services, please visit
            the appropriate page on our site.
          </p>

          <div className="info-box">
            📍 MG Nagar, Kanti Factory Road Near PNB Opp. Dr Pramila Gupta Clinic,
            Kankarbagh, Patna - 800026
          </div>

          <div className="info-box">
            📞 +91-930-806-4181 / +91-930-430-5454
          </div>

          <div className="info-box">
            ✉️ careerdarpanconsultancy1@gmail.com
          </div>
        </div>

        {/* Right Form */}
        <form className="contact-form">
          <h3>Send Message</h3>

          <input type="text" placeholder="Enter Your Full Name" />
          <input type="email" placeholder="Enter Your Email Address" />
          <input type="tel" placeholder="Enter Your Phone Number" />
          <textarea rows="5" placeholder="Write Something.."></textarea>

          <button type="submit">SUBMIT YOUR APPLICATION</button>
        </form>
      </div>

      {/* Google Map */}
      <div className="map-section">
        <h3>Find Us Here</h3>

        <iframe
          title="Career Darpan Consultancy Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.05123456789!2d85.1456!3d25.5941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed593dxxxxxxx%3A0xabcdef123456!2sKankarbagh%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1710000000000"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}