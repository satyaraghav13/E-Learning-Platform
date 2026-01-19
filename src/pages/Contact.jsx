import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await new Promise((r) => setTimeout(r, 1000));
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <Container className="mt-5 text-center">
        <Card className="p-5 shadow-lg">
          <CheckCircle size={60} className="text-success mx-auto mb-3" />
          <h2>Message Sent!</h2>
          <p>Thank you for contacting us. We'll get back soon.</p>
          <Button onClick={() => setIsSubmitted(false)} className="mt-3">
            Send Another Message
          </Button>
          <div className="mt-3">
            <Link to="/" className="btn btn-link">
              ← Back to Home
            </Link>
          </div>
        </Card>
      </Container>
    );
  }

  return (
    <Container className="mt-5 mb-5">
      <h1 className="text-center mb-4">Get in Touch</h1>
      <p className="text-center text-muted mb-5">
        Have a question or suggestion? We'd love to hear from you.
      </p>

      <Row>
        {/* Info Cards */}
        <Col lg={4} className="mb-4">
          <Card className="p-4 shadow-sm mb-3">
            <Mail className="mb-2" />
            <h5>Email</h5>
            <a href="mailto:support@babaupremierleague.com">
              satyaraghav13@gmail.com
            </a>
          </Card>
          <Card className="p-4 shadow-sm mb-3">
            <Phone className="mb-2" />
            <h5>Phone</h5>
            <a href="tel:+919876543210">+91 8755988486</a>
          </Card>
          <Card className="p-4 shadow-sm mb-3">
            <MapPin className="mb-2" />
            <h5>Address</h5>
            <p>Bangalore, India</p>
          </Card>
          <Card className="p-4 shadow-sm">
            <Clock className="mb-2" />
            <h5>Hours</h5>
            <p>Mon-Fri: 9AM - 6PM</p>
          </Card>
        </Col>

        {/* Contact Form */}
        <Col lg={8}>
          <Card className="p-5 shadow-lg">
            <h3 className="mb-4">Send us a Message</h3>

            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  name="subject"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  placeholder="Tell us more..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button type="submit" disabled={isLoading} className="w-100">
                {isLoading ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>

      <div className="text-center mt-4">
        <Link to="/" className="btn btn-outline-primary">
          ← Back to Home
        </Link>
      </div>
    </Container>
  );
}
