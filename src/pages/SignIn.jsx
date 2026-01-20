import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogIn, Mail, Lock, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { Container, Card, Form, Button, InputGroup } from "react-bootstrap";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // Fake login simulation
      if (email === "test@example.com" && password === "123456") {
        navigate("/learn");
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-primary bg-gradient min-vh-100 d-flex align-items-center">
      <Container>
        <div className="d-flex justify-content-center">
          <div style={{ maxWidth: "400px", width: "100%" }}>
            {/* Header */}
            <div className="text-center text-white mb-4">
              <div className="bg-white rounded-circle d-inline-flex p-3 mb-3 shadow">
                <LogIn size={32} className="text-primary" />
              </div>
              <h2>Welcome Back</h2>
              <p>Sign in to your OneTouch Education account</p>
            </div>

            {/* Card */}
            <Card className="shadow-lg p-4 rounded-4">
              <Form onSubmit={handleSubmit}>
                {error && <div className="alert alert-danger">{error}</div>}

                {/* Email */}
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>
                      <Mail size={18} />
                    </InputGroup.Text>
                    <Form.Control
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <Button
                      variant="outline-secondary"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </Button>
                  </InputGroup>
                </Form.Group>

                {/* Remember & Forgot */}
                <div className="d-flex justify-content-between mb-3">
                  <Form.Check type="checkbox" label="Remember me" />
                  <Link to="#" className="text-primary text-decoration-none">
                    Forgot password?
                  </Link>
                </div>

                {/* Submit */}
                <Button type="submit" className="w-100" disabled={isLoading}>
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </Form>

              <hr />

              {/* Sign Up */}
              <Link to="/signup" className="btn btn-outline-primary w-100">
                Create Account
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
