import { useState, useEffect } from "react";
import {
  Github,
  Calendar,
  Users,
  Code2,
  Database,
  Brain,
  Shield,
  School,
  Heart,
  MessageCircle,
  Search,
  Link2Icon,
} from "lucide-react";
import Footer from "../components/Footer";
import useDisableInspect from "../hooks/useDisableInspect";
import { NavLink } from "react-router-dom";

export default function Projects() {
  useDisableInspect();
  const [mounted, setMounted] = useState(false);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "ApnaResturent",
      description: "A simple UI for Resturent.",
      image: "/apna.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "web",
      status: "completed",
      githubUrl: "https://github.com/15shivamgit/Apna-Resturernt",
      linkUrl: "https://apna-resturernt.vercel.app/",
      year: "2024",
      team: "Solo",
      icon: School,
      fallbackColor: "from-pink-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Todo List App",
      description:
        "Built a dynamic to-do list web app to add, mark complete, edit and delete tasks.",
      image: "/todo.png",
      technologies: ["React.js", "Boostrap", "JavaScript"],
      category: "web",
      status: "completed",
      githubUrl: "https://github.com/15shivamgit/todo-app-v3",
      linkUrl: "https://todo-app-v3-delta.vercel.app/",
      year: "2025",
      team: "Solo",
      icon: School,
      fallbackColor: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      title: "Calculater",
      description: "A simple Calculater",
      image: "/cal.png",
      technologies: ["React.js", "Boostrap", "JavaScript"],
      category: "web",
      status: "completed",
      githubUrl: "https://github.com/15shivamgit/Calculater_v2",
      linkUrl: "https://calculater-v2.vercel.app/",
      year: "2025",
      team: "Solo",
      icon: Heart,
      fallbackColor: "from-purple-500 to-pink-500",
    },
    {
      id: 4,
      title: "Weather Forecast",
      description:
        "The app displays real-time weather and a 5-day forecast with a professional glassmorphism design.",
      image: "/api.png",
      technologies: ["JavaScript", "HTML", "API"],
      category: "web",
      status: "completed",
      githubUrl: "https://github.com/15shivamgit/Weather-App",
      linkUrl: "https://weather-app-olive-chi-19.vercel.app/",
      year: "2025",
      team: "Solo",
      icon: Brain,
      fallbackColor: "from-green-500 to-emerald-500",
    },
    {
      id: 5,
      title: "BhaktiYatra",
      description:
        "A full-stack MERN travel booking system designed for pilgrimage tours across India with online payments, admin management, ticket PDF + QR code, and email booking confirmation.",
      image: "/bhakti2.png",
      technologies: [
        "ReactJS",
        "Node.js",
        "Express.js",
        "MongoDB Atlas",
        "JWT",
      ],
      category: "mern",
      status: "in-progress",
      githubUrl: "https://github.com/15shivamgit/BhaktiYatra2",
      linkUrl: "https://bhakti-yatra2-k75z.vercel.app/",
      year: "2025",
      team: "Solo & Github",
      icon: Shield,
      fallbackColor: "from-orange-500 to-red-500",
    },
    {
      id: 6,
      title: "Travel & Tourism UI",
      description: "Modern Travel and tourism UI design.",
      image: "/bhakti1.png",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      category: "web",
      status: "in-progress",
      githubUrl: "https://github.com/15shivamgit/BhaktiYatra",
      linkUrl: "https://bhakti-yatra-one.vercel.app/",
      year: "2025",
      team: "Solo & Github",
      icon: Code2,
      fallbackColor: "from-yellow-500 to-orange-500",
    },
    {
      id: 7,
      title: "LMS-Student Module",
      description: "Interactive data visualization dashboard.",
      image: "/lmsfrontend.png",
      technologies: ["Python", "Tailwind CSS", "Gjango"],
      category: "data",
      status: "in-progress",
      githubUrl: "https://github.com/15shivamgit/LMS-Student--Module-Backend-",
      linkUrl: "https://lms-student-module-frontend.vercel.app/",
      year: "2025",
      team: "Team Project",
      icon: Database,
      fallbackColor: "from-indigo-500 to-tomato-500",
    },
    {
      id: 8,
      title: "Air Quality Analysis",
      description: "Interactive data visualization dashboard.",
      image: "/project-img/data-dashboard.png",
      technologies: ["Python", "NumPy", "Pandas", "Matplotlib"],
      category: "ai",
      status: "in-progress",
      githubUrl: null,
      linkUrl: "https://bhakti-yatra-one.vercel.app/",
      year: "2025",
      team: "Team Project",
      icon: Database,
      fallbackColor: "from-indigo-500 to-red-500",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects", icon: Code2 },
    { id: "web", label: "Web", icon: Code2 },
    { id: "ai", label: "AI / ML", icon: Brain },
    { id: "data", label: "Data Analytics", icon: Database },
    { id: "mern", label: "MERN Stack", icon: Code2 },
  ];

  const statusColors = {
    completed: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'in-progress': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    planned: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
  };

  const filteredProjects = projects.filter((p) => {
    const matchCategory = filter === "all" || p.category === filter;
    const matchSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-24 w-24 border-b-2 border-blue-600 rounded-full" />
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore my portfolio of projects ranging from web development to
              AI/ML and data analytics. Each project represents a learning
              journey and practical application of skills.
            </p>
          </div>

          {/* Filters and Search */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setFilter(c.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                      filter === c.id
                        ? "bg-blue-600 text-white shadow-lg transform scale-105"
                        : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                    } shadow-sm`}
                  >
                    <c.icon className="w-4 h-4" />
                    {c.label}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            {/* Results Count */}
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Showing {filteredProjects.length} of {projects.length} projects
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 overflow-hidden group"
              >
                {/* Project Header */}
                <div className="relative h-48 overflow-hidden rounded-t-xl group">
                  {/* Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextSibling.style.display = "flex";
                    }}
                  />

                  {/* Fallback gradient ONLY if image fails */}
                  <div
                    className={`hidden absolute inset-0 bg-gradient-to-r ${project.fallbackColor} items-end p-4`}
                  >
                    <project.icon className="w-8 h-8 text-white mb-2" />
                    <h3 className="text-lg font-bold text-white">
                      {project.title}
                    </h3>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        statusColors[project.status]
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Project Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{project.year}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{project.team}</span>
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.linkUrl || "mailto:15shivambgs@gmail.com"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-lg flex justify-center gap-2"
                    >
                      <Link2Icon size={25} /> Link
                    </a>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors duration-200 flex items-center justify-center"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <div className="mt-4 text-center text-xs text-gray-400">
                    <NavLink
                      to={`/projects/${project.id}`}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 text-center font-medium flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      View Details
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              No projects found
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Try adjusting your search or filter criteria to find what
              you&apos;re looking for.
            </p>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Interested in Collaboration?
          </h2>
          <p className="text-lg mb-6 opacity-90">
            I&apos;m always open to discussing new projects and opportunities.
          </p>
          <NavLink
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            <MessageCircle className="w-5 h-5" />
            Get In Touch
          </NavLink>
        </div>
      </div>

      <Footer />
    </>
  );
}
