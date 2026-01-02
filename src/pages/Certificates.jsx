import { useState, useEffect } from "react";
import {
  Shield,
  Database,
  Award,
  Calendar,
  MapPin,
  Building,
  ExternalLink,
  Download,
  Star,
  Users,
  Cloud,
  Code,
  Brain,
  Lightbulb,
  Trophy,
  Filter,
  Search,
  FileText,
} from "lucide-react";
import Footer from "../components/Footer";
import useDisableInspect from "../hooks/useDisableInspect";
import { NavLink } from "react-router-dom";

/* ================= HELPERS ================= */

const isExperience = (item) => item.type === "experience";
const isCertificate = (item) => item.type === "certificate";

/* ================= COMPONENT ================= */

export default function Certificates() {
  useDisableInspect();
  const [mounted, setMounted] = useState(false);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  /*================= HELPERS ================= */
  const getCompanyOrIssuer = (item) => {
    if (item.type === "experience") return item.company;
    if (item.type === "certificate") return item.issuer;
    return "";
  };

  const getActionButtonText = (item) => {
    if (item.type === "certificate") return "View Certificate";
    if (item.certificateUrl) return "View Certificate";
    return "View Details";
  };

  /* ================= DATA ================= */

  const experiences = [];

  const certificates = [
    {
      id: 1,
      type: "certificate",
      title: "Advanced Program on Amazon Web Services",
      issuer: "Anudip Foundation (Supported by Accenture)",
      issueDate: "March 2025",
      expiryDate: null,
      credentialId: "U91900WB2007NPL116269",
      period: "March 2025",
      location: "Indore, Madhya Pradesh",
      description:
        "Completed 332 hours of intensive training on Amazon Web Services covering cloud fundamentals, compute, storage, and security concepts.",
      skills: ["AWS", "Cloud Computing", "EC2", "S3", "IAM"],
      verificationUrl: null,
      certificateUrl: "/certificates/aws.jpg",
      icon: Database,
      category: "certificate",
      status: "completed",
      color: "from-orange-500 to-yellow-500",
    },

    {
      id: 2,
      type: "certificate",
      title: "Core Java",
      issuer: "Naresh i Technologies",
      issueDate: "June 2019",
      expiryDate: null,
      credentialId: null,
      period: "June 2019",
      location: "Hyderabad, India",
      description:
        "Completed Core Java training covering OOP concepts, exception handling, multithreading, and collections.",
      skills: ["Core Java", "OOPs", "Collections", "Multithreading"],
      verificationUrl: null,
      certificateUrl: "/certificates/java1.jpg",
      icon: Code,
      category: "certificate",
      status: "completed",
      color: "from-red-500 to-pink-500",
    },

    {
      id: 3,
      type: "certificate",
      title: "Cybersecurity Analyst Job Simulation",
      issuer: "TATA (Forage)",
      issueDate: "July 2025",
      expiryDate: null,
      credentialId: "4RJxBQvCk0NT8sCvu",
      period: "July 2025",
      location: "Remote",
      description:
        "Completed hands-on cybersecurity job simulation focusing on IAM fundamentals, security assessment, and platform integration.",
      skills: ["Cybersecurity", "IAM", "Risk Assessment", "Security Analysis"],
      verificationUrl: null,
      certificateUrl: "/certificates/cybersecurity_certificate.pdf",
      icon: Shield,
      category: "certificate",
      status: "completed",
      color: "from-blue-600 to-indigo-600",
    },

    {
      id: 4,
      type: "certificate",
      title: "IBM Design Thinking Practitioner",
      issuer: "IBM",
      issueDate: "21 Jan 2025",
      expiryDate: null,
      credentialId: "ILB-ZKVGNDXXDDGXA5K2",
      period: "21 Jan 2025",
      location: "Remote",
      description:
        "IBM Design Thinking certification covering user-centered design, ideation, and innovation frameworks.",
      skills: ["Design Thinking", "User Research", "Innovation"],
      verificationUrl: null,
      certificateUrl: "/certificates/ibm.pdf",
      icon: Lightbulb,
      category: "certificate",
      status: "completed",
      color: "from-blue-600 to-indigo-600",
    },

    {
      id: 5,
      type: "certificate",
      title: "Fundamental AI Concepts",
      issuer: "Microsoft",
      issueDate: "18 Sep 2024",
      expiryDate: null,
      credentialId: "MS-AI-FUNDAMENTALS",
      period: "18 Sep 2024",
      location: "Remote",
      description:
        "Learned foundational Artificial Intelligence concepts including machine learning, neural networks, and AI ethics.",
      skills: [
        "Artificial Intelligence",
        "Machine Learning",
        "Neural Networks",
      ],
      verificationUrl: null,
      certificateUrl: "/certificates/ai.pdf",
      icon: Brain,
      category: "certificate",
      status: "completed",
      color: "from-green-600 to-teal-600",
    },

    {
      id: 6,
      type: "certificate",
      title: "Technology Virtual Experience Program",
      issuer: "Deloitte (Forage)",
      issueDate: "2025",
      expiryDate: null,
      credentialId: null,
      period: "2025",
      location: "Remote",
      description:
        "Completed Deloitte Technology Virtual Experience Program focusing on system design, problem solving, and consulting workflows.",
      skills: ["Technology Consulting", "System Analysis", "Problem Solving"],
      verificationUrl: null,
      certificateUrl: "/certificates/DEOLITTE.pdf",
      icon: Building,
      category: "certificate",
      status: "completed",
      color: "from-blue-700 to-sky-600",
    },

    {
      id: 7,
      type: "certificate",
      title: "Frontend Web Development",
      issuer: "Online Learning Platform",
      issueDate: "2024",
      expiryDate: null,
      credentialId: null,
      period: "2024",
      location: "Remote",
      description:
        "Frontend development training covering HTML, CSS, JavaScript, responsive design, and UI best practices.",
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      verificationUrl: null,
      certificateUrl: "/certificates/frontend.pdf",
      icon: Code,
      category: "certificate",
      status: "completed",
      color: "from-pink-500 to-rose-500",
    },

    {
      id: 8,
      type: "certificate",
      title: "Python Programming",
      issuer: "GeeksforGeeks",
      issueDate: "2024",
      expiryDate: null,
      credentialId: null,
      period: "2024",
      location: "Remote",
      description:
        "Completed Python programming course focusing on fundamentals, data structures, and algorithmic thinking.",
      skills: ["Python", "Data Structures", "Problem Solving"],
      verificationUrl: null,
      certificateUrl: "/certificates/greek.pdf",
      icon: Brain,
      category: "certificate",
      status: "completed",
      color: "from-green-500 to-lime-500",
    },

    {
      id: 9,
      type: "certificate",
      title: "Software Engineering Fundamentals",
      issuer: "HP LIFE",
      issueDate: "2025",
      expiryDate: null,
      credentialId: null,
      period: "2025",
      location: "Remote",
      description:
        "Learned software engineering fundamentals including SDLC, system design, and development best practices.",
      skills: ["Software Engineering", "SDLC", "System Design"],
      verificationUrl: null,
      certificateUrl: "/certificates/HP.pdf",
      icon: Code,
      category: "certificate",
      status: "completed",
      color: "from-indigo-500 to-purple-500",
    },

    {
      id: 10,
      type: "certificate",
      title: "Programming Fundamentals",
      issuer: "Online Learning Platform",
      issueDate: "2023",
      expiryDate: null,
      credentialId: null,
      period: "2023",
      location: "Remote",
      description:
        "Built strong programming fundamentals including logic building, algorithms, and problem-solving techniques.",
      skills: ["Programming Logic", "Algorithms", "Problem Solving"],
      verificationUrl: null,
      certificateUrl: "/certificates/irm_certificate.jpg",
      icon: Lightbulb,
      category: "certificate",
      status: "completed",
      color: "from-yellow-500 to-amber-500",
    },
    {
      id: 11,
      type: "certificate",
      title: "Advanced Program on Amazon Web Services",
      issuer: "Anudip Foundation (Supported by Accenture)",
      issueDate: "March 2025",
      expiryDate: null,
      credentialId: "U1900WB2007NPL116269",
      period: "March 2025",
      location: "Indore, Madhya Pradesh",
      description:
        "Successfully completed 332 hours of intensive training on Advanced Program on Amazon Web Services covering cloud fundamentals, compute, storage, networking, security, and deployment best practices.",
      skills: ["AWS", "Cloud Computing", "EC2", "S3", "IAM"],
      verificationUrl: null,
      certificateUrl: "/certificates/aps.pdf",
      icon: Cloud,
      category: "certificate",
      status: "completed",
      color: "from-orange-500 to-yellow-500",
    },
    {
      id: 12,
      type: "certificate",
      title: "Core Java",
      issuer: "Naresh i Technologies",
      issueDate: "June 2019",
      expiryDate: null,
      credentialId: "ISO 9001:2015",
      period: "May 2019 – June 2019",
      location: "Hyderabad, India",
      description:
        "Completed Core Java training covering object-oriented programming concepts, exception handling, collections framework, multithreading, and basic JDBC concepts.",
      skills: [
        "Core Java",
        "OOP",
        "Exception Handling",
        "Collections",
        "Multithreading",
      ],
      verificationUrl: null,
      certificateUrl: "/certificates/java1.jpg",
      icon: Code,
      category: "certificate",
      status: "completed",
      color: "from-red-500 to-pink-500",
    },
    {
      id: 13,
      type: "certificate",
      title: "Cybersecurity Analyst Job Simulation",
      issuer: "Forage (TATA)",
      issueDate: "19 July 2025",
      expiryDate: null,
      credentialId: "4RJxBQvCkN8TsCvu",
      period: "July 2025",
      location: "Remote",
      description:
        "Completed a hands-on Cybersecurity Analyst job simulation focusing on Identity and Access Management (IAM), IAM strategy assessment, designing custom IAM solutions, and platform integration.",
      skills: ["Cybersecurity", "IAM", "Risk Assessment", "Security Analysis"],
      verificationUrl: null,
      certificateUrl: "/certificates/design.pdf",
      icon: Shield,
      category: "certificate",
      status: "completed",
      color: "from-blue-600 to-indigo-600",
    },
  ];

  const allItems = [...experiences, ...certificates];

  const categories = [
    { id: "all", label: "All", icon: Award, count: allItems.length },
    {
      id: "work",
      label: "Work Experience",
      icon: Building,
      count: experiences.length,
    },
    {
      id: "certificate",
      label: "Certificates",
      icon: Trophy,
      count: certificates.length,
    },
  ];

  const statusColors = {
    current:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    completed: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    upcoming:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  };

  /* ================= FILTER ================= */

  const filteredItems = allItems.filter((item) => {
    const matchesCategory = filter === "all" || item.category === filter;
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      item.title.toLowerCase().includes(search) ||
      (isExperience(item) && item.company?.toLowerCase().includes(search)) ||
      (isCertificate(item) && item.issuer?.toLowerCase().includes(search)) ||
      item.skills.some((s) => s.toLowerCase().includes(search));

    return matchesCategory && matchesSearch;
  });

  const handleDownload = (item) => {
    if (item.certificateUrl) {
      const link = document.createElement("a");
      link.href = item.certificateUrl;
      link.download = `${item.title}.pdf || ${item.title}.jpg'`;
      link.click();
    }
  };

  const handleViewCertificate = (item) => {
    if (item.certificateUrl) {
      window.open(item.certificateUrl, "_blank");
    }
  };

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-32 w-32 border-b-2 border-blue-600 rounded-full"></div>
      </div>
    );
  }

  /* ================= UI ================= */

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg">
              <Award className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Professional Journey
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Experience & Certificates
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My professional journey, certifications, and continuous learning
              path in software development and technology.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                <Building className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-gray-800 dark:text-white">
                {experiences.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Work Experiences
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
                <Trophy className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-2xl font-bold text-gray-800 dark:text-white">
                {certificates.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Certificates
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="text-2xl font-bold text-gray-800 dark:text-white">
                2+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Years Learning
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="text-2xl font-bold text-gray-800 dark:text-white">
                2+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Skills Mastered
              </div>
            </div>
          </div>

          {/* Filters and Search */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setFilter(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                      filter === category.id
                        ? "bg-blue-600 text-white shadow-lg transform scale-105"
                        : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                    } shadow-sm`}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.label}
                    <span className="text-xs opacity-70">
                      ({category.count})
                    </span>
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search experiences..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            {/* Results Count */}
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Showing {filteredItems.length} of {allItems.length} items
            </div>
          </div>

          {/* Timeline Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 overflow-hidden group"
              >
                {/* Header with Gradient */}
                <div
                  className={`relative h-4 bg-gradient-to-r ${item.color}`}
                ></div>

                <div className="p-6">
                  {/* Header Section */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${item.color} shadow-lg`}
                      >
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 font-medium">
                          {getCompanyOrIssuer(item)}
                        </p>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        statusColors[item.status]
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  {/* Meta Information */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Duration for experiences */}
                  {isExperience(item) && item.duration && (
                    <div className="mb-4">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Duration:{" "}
                      </span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {item.duration}
                      </span>
                    </div>
                  )}

                  {/* Credential ID */}
                  {item.credentialId && (
                    <div className="mb-4">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Credential ID:{" "}
                      </span>
                      <span className="text-sm font-mono text-gray-700 dark:text-gray-300">
                        {item.credentialId}
                      </span>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Responsibilities for experiences */}
                  {isExperience(item) && item.responsibilities && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-1">
                        {item.responsibilities.map((responsibility, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                          >
                            <span className="text-blue-500 mt-1">•</span>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                      Skills Gained:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-600">
                    {/* View Certificate/Details Button - Available for ALL items */}
                    <button
                      onClick={() => handleViewCertificate(item)}
                      className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 font-medium"
                    >
                      <FileText className="w-4 h-4" />
                      {getActionButtonText(item)}
                    </button>

                    {/* Download Button - Available for ALL items with certificateUrl */}
                    {item.certificateUrl && (
                      <button
                        onClick={() => handleDownload(item)}
                        className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg transition-colors duration-200 font-medium"
                        title="Download Certificate"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    )}

                    {/* External Link for certificates with verification */}
                    {isCertificate(item) && item.verificationUrl && (
                      <a
                        href={item.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 font-medium"
                        title="Verify Certificate"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  No items found
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Try adjusting your search or filter criteria to find what
                  you're looking for.
                </p>
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Continuous Learning Journey
              </h2>
              <p className="text-lg mb-6 opacity-90">
                I believe in continuous learning and staying updated with the
                latest technologies and methodologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <NavLink
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  <Award className="w-5 h-5" />
                  Get In Touch
                </NavLink>
                <NavLink
                  to="/projects"
                  className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
                >
                  <Code className="w-5 h-5" />
                  View Projects
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
