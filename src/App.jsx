import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider"; // ✅ ADD THIS


import Courses from "./pages/Courses";
import Learn from "./pages/Learn";
import Community from "./pages/Community";
import RevenueModel from "./pages/RevenueModel";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

export default function App() {
  return (
    <ThemeProvider> {/* ✅ WRAP EVERYTHING */}
      <BrowserRouter>
        <Navbar />

        <main className="min-vh-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/community" element={<Community />} />
            <Route path="/revenue-model" element={<RevenueModel />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}
