import { useState, useEffect } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Calendar,
  Users,
  Code2,
  Brain,
  Shield,
  School,
  Heart,
  CheckCircle,
  Clock,
  Play,
  Database,
} from "lucide-react";
import Footer from "../components/Footer";
import useDisableInspect from "../hooks/useDisableInspect";

/* ================= PROJECT DATA ================= */

const projectsData = {
  1: {
    id: 1,
    title: "ApnaResturent",
    description: "Restaurant website UI project.",
    fullDescription:
      "ApnaResturent is a frontend restaurant website designed to showcase food items, menu sections, and a clean user interface for customers. This project helped me strengthen my HTML, CSS, and JavaScript fundamentals.",
    image: "/apna.png",
    placeholderImage:
      "https://placehold.co/800x400/EC4899/FFFFFF?text=ApnaResturent",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "web",
    status: "completed",
    githubUrl: "https://github.com/15shivamgit/Apna-Resturernt",
    liveUrl: "https://apna-resturernt.vercel.app/",
    year: "2024",
    team: "Solo",
    duration: "1 month",
    features: ["Responsive UI", "Menu sections", "Clean layout"],
    challenges: ["Responsive design", "CSS layout alignment"],
    learnings: ["HTML structure", "CSS Flexbox", "JavaScript basics"],
    icon: School,
  },

  2: {
    id: 2,
    title: "Todo List App",
    description: "Task management web app.",
    fullDescription:
      "A dynamic Todo List application that allows users to add, edit, delete, and mark tasks as completed. Built using React to understand component-based architecture.",
    image: "/todo.png",
    placeholderImage:
      "https://placehold.co/800x400/3B82F6/FFFFFF?text=Todo+App",
    technologies: ["React.js", "JavaScript", "Bootstrap"],
    category: "web",
    status: "completed",
    githubUrl: "https://github.com/15shivamgit/todo-app-v3",
    liveUrl: "https://todo-app-v3-delta.vercel.app/",
    year: "2025",
    team: "Solo",
    duration: "1 month",
    features: [
      "Add / Edit / Delete tasks",
      "Mark completed tasks",
      "State management",
    ],
    challenges: ["State handling", "Component reusability"],
    learnings: ["React hooks", "Component structure"],
    icon: Code2,
  },

  3: {
    id: 3,
    title: "Calculator App",
    description: "Simple calculator using React.",
    fullDescription:
      "A calculator application built using React that performs basic arithmetic operations. This project helped me understand event handling and component logic.",
    image: "/cal.png",
    placeholderImage:
      "https://placehold.co/800x400/A855F7/FFFFFF?text=Calculator",
    technologies: ["React.js", "JavaScript"],
    category: "web",
    status: "completed",
    githubUrl: "https://github.com/15shivamgit/Calculater_v2",
    liveUrl: "https://calculater-v2.vercel.app/",
    year: "2025",
    team: "Solo",
    duration: "15 days",
    features: ["Basic arithmetic operations", "Clean UI"],
    challenges: ["Handling calculations"],
    learnings: ["React events", "Component logic"],
    icon: Heart,
  },

  4: {
    id: 4,
    title: "Weather Forecast App",
    description: "Weather forecasting using API.",
    fullDescription:
      "A weather forecasting application that fetches real-time weather data and displays current conditions along with forecasts using external APIs.",
    image: "/api.png",
    placeholderImage:
      "https://placehold.co/800x400/10B981/FFFFFF?text=Weather+App",
    technologies: ["HTML", "JavaScript", "Weather API"],
    category: "web",
    status: "completed",
    githubUrl: "https://github.com/15shivamgit/Weather-App",
    liveUrl: "https://weather-app-olive-chi-19.vercel.app/",
    year: "2025",
    team: "Solo",
    duration: "20 days",
    features: ["Real-time weather", "API integration"],
    challenges: ["API data handling"],
    learnings: ["API integration", "Async JavaScript"],
    icon: Brain,
  },

    5: {
    id: 5,
    title: "BhaktiYatra",
    description: "MERN stack pilgrimage travel booking platform.",
    fullDescription:
      "BhaktiYatra is a full-stack MERN travel booking platform designed for pilgrimage tours across India. It includes user authentication, tour booking, admin management, online payments, ticket generation with QR code, and email booking confirmation. This project helped me gain strong experience in backend integration and authentication.",
    image: "/bhakti2.png",
    placeholderImage:
      "https://placehold.co/800x400/F97316/FFFFFF?text=BhaktiYatra",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "JWT",
    ],
    category: "mern",
    status: "in-progress",
    githubUrl: "https://github.com/15shivamgit/BhaktiYatra2",
    liveUrl: "https://bhakti-yatra2-k75z.vercel.app/",
    year: "2025",
    team: "Solo",
    duration: "Ongoing",
    features: [
      "User authentication & authorization",
      "Pilgrimage tour booking system",
      "Admin dashboard",
      "Online payments",
      "Ticket PDF with QR code",
      "Email booking confirmation",
    ],
    challenges: [
      "JWT based authentication",
      "Payment gateway integration",
      "Backend & frontend synchronization",
    ],
    learnings: [
      "MERN stack architecture",
      "Secure authentication",
      "REST API development",
      "Full-stack deployment",
    ],
    icon: Shield,
  },

  6: {
    id: 6,
    title: "Travel & Tourism UI",
    description: "Modern travel and tourism website UI.",
    fullDescription:
      "Travel & Tourism UI is a frontend-focused project created using React and Tailwind CSS. The goal of this project was to design a clean, modern, and fully responsive travel website UI with smooth layouts and reusable components.",
    image: "/bhakti1.png",
    placeholderImage:
      "https://placehold.co/800x400/FACC15/000000?text=Travel+UI",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    category: "web",
    status: "in-progress",
    githubUrl: "https://github.com/15shivamgit/BhaktiYatra",
    liveUrl: "https://bhakti-yatra-one.vercel.app/",
    year: "2025",
    team: "Solo",
    duration: "Ongoing",
    features: [
      "Modern UI design",
      "Responsive layout",
      "Reusable components",
      "Tailwind CSS styling",
    ],
    challenges: [
      "UI consistency",
      "Responsive design across devices",
    ],
    learnings: [
      "Tailwind CSS mastery",
      "Component-based UI design",
      "Frontend best practices",
    ],
    icon: Code2,
  },

  7: {
    id: 7,
    title: "LMS – Student Module",
    description: "Frontend module of Learning Management System.",
    fullDescription:
      "LMS Student Module is a frontend dashboard designed for students to manage courses, view learning content, and interact with the learning management system. This project was developed as part of a team project and focuses on UI, usability, and frontend-backend communication.",
    image: "/lmsfrontend.png",
    placeholderImage:
      "https://placehold.co/800x400/6366F1/FFFFFF?text=LMS+Student+Module",
    technologies: ["Tailwind CSS", "Python", "Django"],
    category: "data",
    status: "in-progress",
    githubUrl:
      "https://github.com/15shivamgit/LMS-Student--Module-Backend-",
    liveUrl: "https://lms-student-module-frontend.vercel.app/",
    year: "2025",
    team: "Team Project",
    duration: "Ongoing",
    features: [
      "Student dashboard",
      "Course tracking",
      "Clean and responsive UI",
    ],
    challenges: [
      "Backend connectivity",
      "Team coordination",
    ],
    learnings: [
      "Team collaboration",
      "Frontend-backend integration",
    ],
    icon: Database,
  },

  8: {
    id: 8,
    title: "Air Quality Analysis",
    description: "Data analytics and visualization project.",
    fullDescription:
      "Air Quality Analysis project focuses on analyzing air pollution data using Python libraries. The project involves cleaning datasets, visualizing trends, and deriving insights to understand air quality patterns.",
    image: "/project-img/data-dashboard.png",
    placeholderImage:
      "https://placehold.co/800x400/EF4444/FFFFFF?text=Air+Quality+Analysis",
    technologies: ["Python", "NumPy", "Pandas", "Matplotlib"],
    category: "ai",
    status: "in-progress",
    githubUrl: null,
    liveUrl: null,
    year: "2025",
    team: "Team Project",
    duration: "Ongoing",
    features: [
      "Data visualization",
      "Trend analysis",
      "Cleaned and structured datasets",
    ],
    challenges: [
      "Handling large datasets",
      "Data preprocessing",
    ],
    learnings: [
      "Data analysis techniques",
      "Visualization using Matplotlib",
      "Working with real-world datasets",
    ],
    icon: Database,
  },



};

/* ================= COMPONENT ================= */

export default function ProjectDetail() {
  useDisableInspect();
  const { id } = useParams();
  const project = projectsData[id];
  const [mounted, setMounted] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Project Not Found</h1>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <NavLink
            to="/projects"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </NavLink>

          {/* Project Header */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden mb-8">
            {/* Project Image Header */}
            <div className="relative h-80 overflow-hidden">
              {!imageError[project.id] ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={() => handleImageError(project.id.toString())}
                />
              ) : (
                <img
                  src={project.placeholderImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              )}

              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

              {/* Project Info Overlay */}
              <div className="absolute bottom-6 left-8 right-8">
                <div className="flex items-center gap-4 mb-4">
                  <project.icon className="w-12 h-12 text-white" />
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {project.title}
                    </h1>
                    <p className="text-white/90 text-lg">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="absolute top-6 left-6">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    project.status === "completed"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      : project.status === "in-progress"
                      ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                      : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  }`}
                >
                  {project.status.replace("-", " ")}
                </span>
              </div>
            </div>

            <div className="p-8">
              {/* Project Meta */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Year
                    </div>
                    <div className="font-semibold text-gray-800 dark:text-white">
                      {project.year}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Team
                    </div>
                    <div className="font-semibold text-gray-800 dark:text-white">
                      {project.team}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Duration
                    </div>
                    <div className="font-semibold text-gray-800 dark:text-white">
                      {project.duration}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <Code2 className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Category
                    </div>
                    <div className="font-semibold text-gray-800 dark:text-white capitalize">
                      {project.category}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mb-8">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105"
                  >
                    <Github className="w-5 h-5" />
                    View Code on GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                )}
              </div>

              {/* Full Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  Project Overview
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  {project.fullDescription}
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-lg font-medium border border-blue-200 dark:border-blue-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  Key Features
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges & Learnings */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                    Challenges Faced
                  </h2>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                      >
                        <span className="text-orange-500 font-bold mt-1">
                          •
                        </span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                    Key Learnings
                  </h2>
                  <ul className="space-y-3">
                    {project.learnings.map((learning, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                      >
                        <span className="text-green-500 font-bold mt-1">•</span>
                        {learning}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation to other projects */}
          <div className="text-center">
            <NavLink
              to="/projects"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105 text-lg font-semibold"
            >
              <Play className="w-5 h-5" />
              View All Projects
            </NavLink>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
