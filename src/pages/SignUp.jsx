import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  UserPlus,
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import { Container, Card, Form, Button, InputGroup } from "react-bootstrap";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setIsLoading(true);

    try {
      // Fake signup simulation
      setTimeout(() => {
        setSuccess(true);
        setTimeout(() => navigate("/signin"), 2000);
      }, 1000);
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-success bg-gradient min-vh-100 d-flex align-items-center">
        <Container>
          <div className="d-flex justify-content-center">
            <Card
              className="p-4 text-center shadow-lg"
              style={{ maxWidth: 400 }}
            >
              <div className="bg-success-subtle rounded-circle p-3 mx-auto mb-3">
                <CheckCircle2 size={40} className="text-success" />
              </div>
              <h3 className="text-success">Success!</h3>
              <p>Your account has been created successfully.</p>
              <small className="text-muted">Redirecting to sign in...</small>
            </Card>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="bg-primary bg-gradient min-vh-100 d-flex align-items-center">
      <Container>
        <div className="d-flex justify-content-center">
          <div style={{ maxWidth: 420, width: "100%" }}>
            {/* Header */}
            <div className="text-center text-white mb-4">
              <div className="bg-white rounded-circle d-inline-flex p-3 mb-3 shadow">
                <UserPlus size={32} className="text-primary" />
              </div>
              <h2>Join Us</h2>
              <p>Start your learning journey with Babua Premier League</p>
            </div>

            {/* Card */}
            <Card className="shadow-lg p-4 rounded-4">
              <Form onSubmit={handleSubmit}>
                {error && <div className="alert alert-danger">{error}</div>}

                {/* Full Name */}
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>
                      <User size={18} />
                    </InputGroup.Text>
                    <Form.Control
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </InputGroup>
                </Form.Group>

                {/* Email */}
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>
                      <Mail size={18} />
                    </InputGroup.Text>
                    <Form.Control
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </InputGroup>
                </Form.Group>

                {/* Password */}
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>
                      <Lock size={18} />
                    </InputGroup.Text>
                    <Form.Control
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <Button
                      variant="outline-secondary"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </Button>
                  </InputGroup>
                  <small className="text-muted">At least 6 characters</small>
                </Form.Group>

                {/* Confirm Password */}
                <Form.Group className="mb-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>
                      <Lock size={18} />
                    </InputGroup.Text>
                    <Form.Control
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                    <Button
                      variant="outline-secondary"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </Button>
                  </InputGroup>
                </Form.Group>

                {/* Submit */}
                <Button type="submit" className="w-100" disabled={isLoading}>
                  {isLoading ? "Creating account..." : "Create Account"}
                </Button>

                <p className="text-center text-muted mt-3 small">
                  By creating an account, you agree to our Terms & Privacy
                  Policy
                </p>
              </Form>

              <hr />

              <Link to="/signin" className="btn btn-outline-primary w-100">
                Sign In
              </Link>
            </Card>

            {/* Back Home */}
            <div className="text-center mt-4">
              <Link to="/" className="text-white text-decoration-none">
                <ArrowLeft size={16} /> Back to Home
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
