import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Heart, Gift, Users, TrendingUp, Shield } from "lucide-react";

export default function RevenueModel() {
  return (
    <Container className="mt-5 mb-5">

      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Our Support System</h1>
        <p className="text-muted fs-5">
          Our commitment to free education and how we make it sustainable
        </p>
      </div>

      {/* Free Forever */}
      <Card className="p-4 shadow-sm mb-5 border-0">
        <div className="d-flex align-items-center gap-3 mb-3">
          <Heart className="text-danger" size={36} />
          <h3 className="mb-0 fw-semibold">Free Forever Promise</h3>
        </div>
        <p className="text-muted fs-6">
          All our educational content is completely free. We believe quality
          tech education should be accessible to everyone regardless of finances.
        </p>
        <p className="text-muted fs-6">
          Our mission is to democratize tech education and help engineers grow
          without barriers.
        </p>
      </Card>

      {/* Cards Section */}
      <Row className="g-4 mb-5">
        <Col md={6}>
          <Card className="p-4 shadow-sm h-100 border-0">
            <Gift size={32} className="text-primary mb-3" />
            <h4 className="fw-semibold">Voluntary Support</h4>
            <p className="text-muted">
              Support us through voluntary donations if you find our content
              valuable. Completely optional.
            </p>
            <Button variant="primary">Support Us</Button>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="p-4 shadow-sm h-100 border-0">
            <Users size={32} className="text-primary mb-3" />
            <h4 className="fw-semibold">Community Driven</h4>
            <p className="text-muted">
              Mentors volunteer, students contribute, and together we build a
              sustainable ecosystem.
            </p>
            <Button variant="primary">Join Community</Button>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="p-4 shadow-sm h-100 border-0">
            <TrendingUp size={32} className="text-primary mb-3" />
            <h4 className="fw-semibold">No Ads, No Tracking</h4>
            <p className="text-muted">
              We respect your privacy. No ads, no tracking, just learning.
            </p>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="p-4 shadow-sm h-100 border-0">
            <Shield size={32} className="text-primary mb-3" />
            <h4 className="fw-semibold">Transparent & Open</h4>
            <p className="text-muted">
              Our code is open-source and operations fully transparent.
            </p>
          </Card>
        </Col>
      </Row>

      {/* CTA Section */}
      <Card className="p-5 text-center shadow-sm border-0 bg-light">
        <h4 className="fw-bold">Want to Help?</h4>
        <p className="text-muted">
          You can help by sharing, mentoring, or contributing to open-source.
        </p>
        <div className="d-flex justify-content-center gap-3 mt-3">
          <Link to="/community" className="btn btn-primary">
            Become a Mentor
          </Link>
          <Link to="/courses" className="btn btn-outline-primary">
            Start Learning
          </Link>
        </div>
      </Card>

      {/* Back */}
      <div className="text-center mt-4">
        <Link to="/" className="btn btn-link">
          ← Back to Home
        </Link>
      </div>
    </Container>
  );
}
