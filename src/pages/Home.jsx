import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Enquiry from "./Enquiry";


import {
  BookOpen,
  Users,
  TrendingUp,
  Rocket,
  Target,
  Award,
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: BookOpen,
      title: "Free Forever",
      desc: "All courses are 100% free with no hidden charges.",
    },
    {
      icon: Target,
      title: "Practical Focus",
      desc: "Learn skills that are directly applicable in real jobs.",
    },
    {
      icon: Users,
      title: "Community Driven",
      desc: "Learn with peers, mentors and real discussions.",
    },
  ];

  const stats = [
    { value: "10K+", label: "Learners" },
    { value: "50+", label: "Courses" },
    { value: "200+", label: "Mentors" },
    { value: "100%", label: "Free" },
  ];

  return (
    <>
      {/* HERO */}
      <div className="bg-primary text-white py-5 text-center">
        <Container>
          <h1 className="fw-bold display-4">Learn Tech Skills That Matter</h1>
          <p className="fs-5 mt-3">
            Free, practical education for real engineering growth.
          </p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <Link to="/learn">
              <Button variant="light" size="lg">
                <Rocket size={18} /> Start Learning Free
              </Button>
            </Link>
            <Link to="/courses">
              <Button variant="outline-light" size="lg">
                Browse Courses
              </Button>
            </Link>
          </div>
        </Container>
      </div>

      {/* STATS */}
      <Container className="py-5 text-center">
        <Row>
          {stats.map((s, i) => (
            <Col md={3} key={i} className="mb-3">
              <h2 className="fw-bold text-primary">{s.value}</h2>
              <p className="text-muted">{s.label}</p>
            </Col>
          ))}
        </Row>
      </Container>

      {/* FEATURES */}
      <Container className="pb-5">
        <h2 className="text-center fw-bold mb-4">Why Choose OneTouch Education?</h2>
        <Row>
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Col md={4} key={i} className="mb-4">
                <Card className="p-4 h-100 shadow-sm border-0 text-center">
                  <Icon size={40} className="text-primary mb-3" />
                  <h5 className="fw-bold">{f.title}</h5>
                  <p className="text-muted">{f.desc}</p>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>

      {/* JOURNEY */}
      <div className="bg-light py-5">
        <Container>
          <h2 className="text-center fw-bold mb-4">Your Learning Journey</h2>
          <Row>
            {[
              { icon: BookOpen, title: "Learn Fundamentals" },
              { icon: TrendingUp, title: "Build Projects" },
              { icon: Award, title: "Get Certified" },
            ].map((step, i) => {
              const Icon = step.icon;
              return (
                <Col md={4} key={i} className="mb-4 text-center">
                  <Icon size={40} className="text-primary mb-3" />
                  <h5>{step.title}</h5>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>


          <section className="py-5 bg-light row g-1">
         <Enquiry />
       </section>
      {/* CTA */}
      <div className="bg-dark text-white py-5 text-center row g-3">
        <Container>
          <h2 className="fw-bold">Ready to Start?</h2>
          <p className="fs-5 " >Join thousands of learners for free.</p>
          <Link to="/learn">
            <Button variant="primary" size="lg">
              Get Started Now
            </Button>
          </Link>
        </Container>

     

      </div>
    </>
  );
}
