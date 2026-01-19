import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BookOpen, Clock, Users } from "lucide-react";

export default function Courses() {
  const courses = [
    {
      id: 1,
      title: "Java Data Structures & Algorithms",
      description:
        "Learn Data Structures and Algorithms using Java with hands-on coding. Master arrays, linked lists, stacks, queues, trees, graphs and problem-solving techniques for technical interviews and real-world development.",
      domain: "JAVA",
      duration: "12 weeks",
      students: "2.5k",
      level: "Beginner to Advanced",
    },
    {
      id: 2,
      title: "HTML & CSS Fundamentals",
      description:
        "Learn to build beautiful and responsive websites using HTML5 and CSS3. Master layouts, flexbox, grid, animations, and modern design practices.",
      domain: "HTML & CSS",
      duration: "6 weeks",
      students: "3k",
      level: "Beginner",
    },
    {
      id: 3,
      title: "JavaScript for Web Development",
      description:
        "Master JavaScript from basics to advanced concepts including DOM, ES6+, async programming, and real-world web application logic.",
      domain: "JAVASCRIPT",
      duration: "8 weeks",
      students: "2.8k",
      level: "Beginner to Intermediate",
    },
    {
      id: 4,
      title: "Bootstrap for Responsive Design",
      description:
        "Create fully responsive and mobile-first websites quickly using Bootstrap with real projects and UI components.",
      domain: "BOOTSTRAP",
      duration: "4 weeks",
      students: "1.9k",
      level: "Beginner",
    },
    {
      id: 5,
      title: "React.js for Modern Frontend",
      description:
        "Build dynamic, fast and scalable frontend applications using React.js, hooks, routing, state management and real projects.",
      domain: "REACT",
      duration: "10 weeks",
      students: "2.4k",
      level: "Intermediate to Advanced",
    },
    {
      id: 6,
      title: "SQL & Database Management",
      description:
        "Learn SQL from basics to advanced with real database queries. Master SELECT, JOIN, GROUP BY, Subqueries, Indexing and database design for real-world applications.",
      domain: "SQL",
      duration: "6 weeks",
      students: "2.2k",
      level: "Beginner to Advanced",
    },
  ];

  return (
    <Container className="mt-5 mb-5">
      <div className="text-center mb-5">
        <h1>All Courses</h1>
        <p className="text-muted">
          Free, practical courses to level up your engineering skills
        </p>
      </div>

      <Row>
        {courses.map((course) => (
          <Col md={4} key={course.id} className="mb-4">
            <Card className="h-100 shadow-sm hover-shadow">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <Badge bg="primary">{course.domain}</Badge>
                  <BookOpen size={22} />
                </div>

                <Card.Title>{course.title}</Card.Title>
                <Card.Text>{course.description}</Card.Text>

                <div className="mb-3 text-muted small">
                  <div className="d-flex align-items-center gap-2">
                    <Clock size={14} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <Users size={14} />
                    <span>{course.students} students</span>
                  </div>
                  <div className="fw-semibold text-primary">{course.level}</div>
                </div>

                <Button
                  as={Link}
                  to={`/learn?course=${course.id}`}
                  variant="primary"
                  className="w-100"
                >
                  Start Learning
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="text-center mt-5">
        <p className="text-muted">More courses coming soon!</p>
        <Link to="/" className="btn btn-outline-primary">
          ← Back to Home
        </Link>
      </div>
    </Container>
  );
}
