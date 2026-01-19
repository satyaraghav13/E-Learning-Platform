import {
  Container,
  Card,
  Button,
  ProgressBar,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { BookOpen, PlayCircle, CheckCircle, Clock } from "lucide-react";


export default function Learn() {
  const lessons = [
    {
      id: 1,
      title: "Introduction to Data Structures",
      duration: "15 min",
      completed: false,
    },
    {
      id: 2,
      title: "Arrays and Linked Lists",
      duration: "20 min",
      completed: false,
    },
    { id: 3, title: "Stacks and Queues", duration: "18 min", completed: true },
    {
      id: 4,
      title: "Trees and Binary Trees",
      duration: "25 min",
      completed: false,
    },
  ];

  return (
    <Container className="mt-5 mb-5">
      {/* Header */}
      <div className="mb-4">
        <Link to="/courses" className="btn btn-link mb-3">
          ← Back to Courses
        </Link>
        <h1>Start Learning</h1>
        <p className="text-muted">
          Choose a course and begin your learning journey
        </p>
      </div>

      {/* Course Info */}
      <Card className="p-4 shadow mb-4">
        <Row>
          <Col md={2} className="text-center">
            <BookOpen size={50} className="text-primary" />
          </Col>
          <Col md={10}>
            <div className="d-flex align-items-center gap-2 mb-2">
              <span className="badge bg-primary">DSA</span>
              <h4 className="mb-0">Data Structures & Algorithms</h4>
            </div>
            <p>
              Master fundamental data structures and algorithms for technical
              interviews. This course covers everything from arrays to graphs.
            </p>
            <div className="d-flex gap-4 text-muted small mb-2">
              <span>
                <Clock size={14} /> 12 weeks
              </span>
              <span>
                <CheckCircle size={14} /> 48 lessons
              </span>
            </div>
            <ProgressBar now={25} label="25%" className="mb-2" />
            <small className="text-muted">Progress: 25% complete</small>
          </Col>
        </Row>
      </Card>

      {/* Lessons */}
      <Card className="p-4 shadow">
        <h4 className="mb-4">Course Content</h4>
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className="d-flex justify-content-between align-items-center border rounded p-3 mb-3"
          >
            <div className="d-flex align-items-center gap-3">
              {lesson.completed ? (
                <CheckCircle size={22} className="text-success" />
              ) : (
                <PlayCircle size={22} className="text-primary" />
              )}
              <div>
                <h6 className="mb-0">{lesson.title}</h6>
                <small className="text-muted">{lesson.duration}</small>
              </div>
            </div>
            <Button variant="primary" size="sm">
              {lesson.completed ? "Review" : "Start"}
            </Button>
          </div>
        ))}
      </Card>
    </Container>
  );
}
