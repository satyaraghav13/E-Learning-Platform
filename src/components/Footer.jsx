import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Github,
  Twitter,
  Linkedin,
  Heart,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
} from "lucide-react";

export default function Footer() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await new Promise((r) => setTimeout(r, 1000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 4000);
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-dark text-light mt-5 pt-5 border-top border-secondary">
      <div className="container py-5">

        {/* Contact Form
        <div className="mb-5 pb-5 border-bottom border-secondary">
          <div className="col-md-8 mx-auto text-center">
            <h3 className="fw-bold mb-2">Get in Touch</h3>
            <p className="text-secondary">
              Have questions? We'd love to hear from you.
            </p>

            <form onSubmit={handleSubmit} className="row g-3 mt-3">
              <div className="col-md-6">
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Your name"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="your@email.com"
                />
              </div>
              <div className="col-12">
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Tell us how we can help..."
                ></textarea>
              </div>

              {submitStatus === "success" && (
                <div className="alert alert-success d-flex align-items-center gap-2">
                  <CheckCircle2 size={18} />
                  Message sent successfully!
                </div>
              )}

              {submitStatus === "error" && (
                <div className="alert alert-danger">
                  Something went wrong. Try again later.
                </div>
              )}

              <div className="col-12">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-100 fw-semibold"
                >
                  {isSubmitting ? "Sending..." : (<><Send size={16} /> Send Message</>)}
                </button>
              </div>
            </form>
          </div>
        </div> */}

        {/* Footer Links */}
        <div className="row gy-4">

          {/* Brand */}
          <div className="col-md-3">
            <h5 className="fw-bold"> OneTouch Education</h5>
            <p className="text-secondary small">
              Free tech education for real engineering growth.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-light hover-icon">
                <Github size={20} />
              </a>
              <a href="#" className="text-light hover-icon">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-light hover-icon">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Learn */}
          <div className="col-md-2">
            <h6 className="fw-semibold">Learn</h6>
            <ul className="list-unstyled small">
              <li><Link to="/courses" className="footer-link">All Courses</Link></li>
              <li><Link to="/courses" className="footer-link">JAVA</Link></li>
              <li><Link to="/courses" className="footer-link">HTML & CSS</Link></li>
              <li><Link to="/courses" className="footer-link">JAVASCRIPT</Link></li>
              <li><Link to="/courses" className="footer-link">REACT.JS</Link></li>
              <li><Link to="/courses" className="footer-link">SQL</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div className="col-md-2">
            <h6 className="fw-semibold">Community</h6>
            <ul className="list-unstyled small">
              <li><Link to="/community" className="footer-link">Discussions</Link></li>
              <li><Link to="/community" className="footer-link">Mentors</Link></li>
            </ul>
          </div>

          {/* Account */}
          <div className="col-md-2">
            <h6 className="fw-semibold">Account</h6>
            <ul className="list-unstyled small">
              <li><Link to="/signin" className="footer-link">Sign In</Link></li>
              <li><Link to="/signup" className="footer-link">Sign Up</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3">
            <h6 className="fw-semibold">Contact</h6>
            <ul className="list-unstyled small text-secondary">
              <li className="d-flex gap-2 align-items-center">
                <Mail size={14} /> satyaraghav13@gmail.com
              </li>
              <li className="d-flex gap-2 align-items-center">
                <Phone size={14} /> +91 8755988486
              </li>
              <li className="d-flex gap-2 align-items-center">
                <MapPin size={14} /> Bharatpur, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-top border-secondary mt-4 pt-3 d-flex justify-content-between flex-wrap text-secondary small">
          <span>© 2024 OneTouch Education. All rights reserved.</span>
          <span className="d-flex align-items-center gap-1">
            Made with <Heart size={14} className="text-danger" /> for engineers
          </span>
        </div>
      </div>
    </footer>
  );
}
