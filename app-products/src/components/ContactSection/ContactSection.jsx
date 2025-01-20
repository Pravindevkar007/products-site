import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import classes from "@/components/ContactSection/ContactSection.module.scss";
import clsx from "clsx";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const generateWhatsAppLink = () => {
    const phoneNumber = "+919960699599";
    const message = `Hello, I am ${formData.firstName} ${formData.lastName}. My message is: ${formData.message}`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappLink = generateWhatsAppLink();
    window.open(whatsappLink, "_blank");
  };

  return (
    <section id="contact" className={clsx("mid-section")}>
      <div className="d-flex gap-4">
        <div className={clsx(classes["map-container"], "w-50")}>
          {/* Embedded Google Map centered on Pune, Maharashtra */}
          <iframe
            title="Google Map"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Phoenix%20Mall%20of%20the%20Millennium&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
        <div className={clsx(classes["form-container"], "w-50")}>
          <h3>We’re always here to help you</h3>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group controlId="firstName">
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group controlId="lastName">
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group controlId="email">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group controlId="phone">
                  <Form.Control
                    type="tel"
                    placeholder="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="mb-3">
                <Form.Group controlId="country">
                  <Form.Control
                    as="select"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                  >
                    <option>Select Country</option>
                    <option>India</option>
                    <option>United States</option>
                    <option>Australia</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="mb-3">
                <Form.Group controlId="message">
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Enter your message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <button
              variant="primary"
              type="submit"
              className="btn "
              style={{ backgroundColor: "#e65f38" }}
            >
              Send Message
            </button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
