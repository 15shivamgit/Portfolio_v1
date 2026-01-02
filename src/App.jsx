import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* ===== Layout ===== */
import Layout from "./components/Layout";

/* ===== Pages ===== */
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";
import Achievement from "./pages/Achievements";

/* ===== 404 Page ===== */
function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-gray-600 mb-6">Page not found</p>
      <a
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg"
      >
        Go Home
      </a>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* ===== Main Pages ===== */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/achievements" element={<Achievement />} />

          {/* ===== 404 ===== */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}
