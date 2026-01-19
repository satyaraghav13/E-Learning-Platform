import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, TrendingUp, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme;
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm sticky-top">
      <div className="container">
        {/* Brand */}
        <Link to="/" className="navbar-brand d-flex align-items-center gap-2 fw-bold">
         OneTouch Education 
          
        </Link>

        {/* Mobile Toggle */}
        <button
          className="btn d-lg-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Desktop Menu */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3 align-items-lg-center">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/courses" className="nav-link">Courses</Link>
            </li>
            <li className="nav-item">
              <Link to="/community" className="nav-link">Community</Link>
            </li>
            <li className="nav-item">
              <Link to="/revenue-model" className="nav-link">Our Support System</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>

            {/* Theme Toggle
            <li className="nav-item">
              <button onClick={toggleTheme} className="btn btn-outline-secondary btn-sm">
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </li> */}

            {/* Auth Buttons */}
            <li className="nav-item">
              <Link to="/signin" className="btn btn-outline-primary btn-sm">
                Sign In
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="btn btn-primary btn-sm">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
