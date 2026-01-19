import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function Enquiry() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle"); // idle | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await new Promise((r) => setTimeout(r, 1000)); // fake API
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
    <div className="bg-dark text-light mt-5 pt-5 border-top border-secondary">
      <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h3 className="fw-bold mb-2">Enquiry Form</h3>
          <p className="text-secondary">
            Have questions? Send us your enquiry.
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
                placeholder="Type your enquiry here..."
              ></textarea>
            </div>

            {submitStatus === "success" && (
              <div className="alert alert-success d-flex align-items-center gap-2">
                <CheckCircle2 size={18} />
                Enquiry sent successfully!
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
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={16} /> Send Enquiry
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
