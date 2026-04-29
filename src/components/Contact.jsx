import React, { useState } from "react";
import "./Contact.css";


export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, message } = form;

    const whatsappMessage = `Hello, I want admission guidance.

Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const whatsappNumber = "7260996793";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <div className="contact-page">
      {/* HEADER */}
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>Get expert admission guidance for top courses in India.</p>
      </section>

      {/* MAIN SECTION */}
      <div className="contact-container">
        {/* LEFT INFO */}
        <div className="contact-info">
          <h3>Get In Touch</h3>

          <p>
            Reach out for admission guidance in MBBS, Engineering, MBA, BCA,
            Pharmacy, and more.
          </p>

          <div className="info-box">
            📍 Kankarbagh, Patna, Bihar - 800020
          </div>

          <div className="info-box">
            📞 +91 7260996796 / +91 9504477896
          </div>

          <div className="info-box">
            ✉️ svnadmissionzone@gmail.com
          </div>

          {/* Directions */}
          <a
            href="https://www.google.com/maps?q=25.5941,85.1456"
            target="_blank"
            rel="noopener noreferrer"
            className="direction-btn"
          >
            📍 Get Directions
          </a>
        </div>

        {/* FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send Message</h3>

          <input
            type="text"
            name="name"
            placeholder="Enter Your Full Name"
            required
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Phone Number"
            required
            onChange={handleChange}
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Write your query..."
            onChange={handleChange}
          ></textarea>

          <button type="submit">Submit & Chat on WhatsApp</button>
        </form>
      </div>

      {/* MAP */}
      <div className="map-section">
        <h3>Find Us Here</h3>

        <iframe
          title="Location Map"
          src="https://www.google.com/maps?q=25.5941,85.1456&z=15&output=embed"
          width="100%"
          height="350"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}