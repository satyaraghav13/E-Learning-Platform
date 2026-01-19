import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  ProgressBar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  Users,
  MessageSquare,
  BookOpen,
  Award,
  X,
  Star,
  Linkedin,
  Github,
  Mail,
  Briefcase,
  Calendar,
  Trophy,
  Target,
} from "lucide-react";

const mentors = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Senior Software Engineer",
    company: "Google",
    experience: "10+ years",
    rating: 4.9,
    students: 245,
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Staff Engineer",
    company: "Microsoft",
    experience: "8+ years",
    rating: 4.8,
    students: 189,
  },
];

const discussions = [
  {
    id: 1,
    title: "System Design Best Practices",
    author: "Rajesh Kumar",
    replies: 24,
    views: 156,
  },
  {
    id: 2,
    title: "DSA Problem Solving Tips",
    author: "Amit Patel",
    replies: 18,
    views: 203,
  },
];

const studyGroups = [
  {
    id: 1,
    name: "DSA Study Group",
    members: 45,
    schedule: "Weekly",
    level: "Intermediate",
  },
  {
    id: 2,
    name: "Frontend Group",
    members: 52,
    schedule: "Weekly",
    level: "Beginner",
  },
];

const achievements = [
  { id: 1, name: "First Steps", progress: 100, unlocked: true },
  { id: 2, name: "Knowledge Seeker", progress: 80, unlocked: false },
];

export default function Community() {
  const [showMentors, setShowMentors] = useState(false);
  const [showDiscussions, setShowDiscussions] = useState(false);
  const [showStudyGroups, setShowStudyGroups] = useState(false);
  const [showAchievements, setShowAchievements] = useState(false);

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Community</h1>
      <p className="text-center text-muted">Learn together, grow together</p>

      <Row className="mb-4">
        <Col md={3}>
          <Card className="p-3 shadow">
            <h5>
              <MessageSquare /> Discussions
            </h5>
            <Button onClick={() => setShowDiscussions(!showDiscussions)}>
              Toggle
            </Button>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="p-3 shadow">
            <h5>
              <Users /> Mentors
            </h5>
            <Button onClick={() => setShowMentors(!showMentors)}>Toggle</Button>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="p-3 shadow">
            <h5>
              <BookOpen /> Study Groups
            </h5>
            <Button onClick={() => setShowStudyGroups(!showStudyGroups)}>
              Toggle
            </Button>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="p-3 shadow">
            <h5>
              <Award /> Achievements
            </h5>
            <Button onClick={() => setShowAchievements(!showAchievements)}>
              Toggle
            </Button>
          </Card>
        </Col>
      </Row>

      {/* Discussions */}
      {showDiscussions && (
        <div className="mb-4">
          <h3>Active Discussions</h3>
          {discussions.map((d) => (
            <Card key={d.id} className="p-3 mb-2">
              <h5>{d.title}</h5>
              <p>
                By {d.author} • {d.replies} replies • {d.views} views
              </p>
            </Card>
          ))}
        </div>
      )}

      {/* Study Groups */}
      {showStudyGroups && (
        <div className="mb-4">
          <h3>Study Groups</h3>
          {studyGroups.map((g) => (
            <Card key={g.id} className="p-3 mb-2">
              <h5>{g.name}</h5>
              <p>
                {g.members} members • {g.schedule}
              </p>
              <Badge>{g.level}</Badge>
            </Card>
          ))}
        </div>
      )}

      {/* Achievements */}
      {showAchievements && (
        <div className="mb-4">
          <h3>Achievements</h3>
          {achievements.map((a) => (
            <Card key={a.id} className="p-3 mb-2">
              <h5>{a.name}</h5>
              <ProgressBar now={a.progress} label={`${a.progress}%`} />
            </Card>
          ))}
        </div>
      )}

      {/* Mentors */}
      {showMentors && (
        <div className="mb-4">
          <h3>Mentors</h3>
          {mentors.map((m) => (
            <Card key={m.id} className="p-3 mb-2">
              <h5>{m.name}</h5>
              <p>
                {m.role} at {m.company}
              </p>
              <p>
                {m.experience} • ⭐ {m.rating}
              </p>
              <Button size="sm">Request Mentorship</Button>
            </Card>
          ))}
        </div>
      )}

      <div className="text-center mt-4">
        <Link to="/" className="btn btn-outline-primary">
          ← Back to Home
        </Link>
      </div>
    </Container>
  );
}
