import { useState, useEffect } from "react";
import {
  Award,
  Calendar,
  MapPin,
  Building,
  Download,
  Users,
  Code,
  FileText,
  CheckCircle,
  Target,
  Zap,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import useDisableInspect from "../hooks/useDisableInspect";

export default function Achievement() {
  useDisableInspect();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const internshipData = {
    id: 1,
    title: "Software Development Intern",
    company: "AKS University, Satna",
    credentialId: "AKSU|CS|25|36",
    period: "Jan 2025 – May 2025",
    duration: "3 months",
    location: "Satna, Madhya Pradesh",
    description:
      "Played a key role in automating CSE department workflows and developing software solutions to streamline academic processes, resulting in significant efficiency improvements.",
    responsibilities: [
      "Developed automation tools for department workflows",
      "Collaborated with faculty on software solutions",
      "Maintained and updated existing systems",
      "Participated in code reviews and team meetings",
      "Documented processes and created user manuals",
    ],
    achievements: [
      {
        title: "Process Automation",
        description:
          "Automated 3 key departmental processes, reducing manual work by 60%",
        icon: Zap,
        impact: "high",
        metrics: "60% reduction in manual work",
      },
      {
        title: "System Efficiency",
        description:
          "Improved system response time by 40% through optimization",
        icon: Target,
        impact: "high",
        metrics: "40% performance improvement",
      },
      {
        title: "Documentation",
        description: "Created comprehensive documentation for 5 systems",
        icon: FileText,
        impact: "medium",
        metrics: "5 systems documented",
      },
      {
        title: "Team Collaboration",
        description: "Mentored 2 junior interns on development best practices",
        icon: Users,
        impact: "medium",
        metrics: "2 team members mentored",
      },
    ],
    skills: [
      "Software Development",
      "Automation",
      "Problem Solving",
      "Team Collaboration",
      "System Design",
      "Documentation",
    ],
    technologies: ["React", "MongoDB", "Tailwind CSS", "JavaScript"],
    icon: Code,
    status: "completed",
    color: "from-blue-500 to-cyan-500",
    certificateUrl: "/certificates/software-intern.pdf",
    mentor: "Anurag Garg",
    mentorRole: "Senior Developer & Mentor",
  };

  const appreciationCertificates = [
    {
      id: 1,
      title: "Appreciation Certificate",
      issuer: "Head of Department, CSE & Mr. Anurag Garg",
      issueDate: "June 2025",
      description:
        "Awarded for outstanding performance and significant contributions to department automation projects during the internship period.",
      certificateUrl: "/certificates/hod-appreciation.pdf",
      icon: Heart,
      color: "from-red-500 to-pink-500",
    },
  ];

  const handleDownload = (url, title) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = `${title.replace(/\s+/g, "_")}.pdf`;
    link.click();
  };

  const handleViewCertificate = (url) => {
    window.open(url, "_blank");
  };

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

   return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg">
              <Award className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Internship Achievement</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Software Development Intern
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Key achievements and recognition during my internship at AKS University
            </p>
          </div>

          {/* Main Internship Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-8">
            {/* Header with Gradient */}
            <div className={`relative h-4 bg-gradient-to-r ${internshipData.color}`}></div>
            
            <div className="p-8">
              {/* Header Section */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${internshipData.color} shadow-lg`}>
                    <internshipData.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                      {internshipData.title}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">
                      {internshipData.company}
                    </p>
                  </div>
                </div>
                
                {/* Status Badge */}
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  {internshipData.status}
                </span>
              </div>

              {/* Meta Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Calendar className="w-5 h-5" />
                  <span>{internshipData.period}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <MapPin className="w-5 h-5" />
                  <span>{internshipData.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Building className="w-5 h-5" />
                  <span>{internshipData.duration}</span>
                </div>
              </div>

              {/* Credential ID */}
              <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-sm text-gray-500 dark:text-gray-400">Credential ID: </span>
                <span className="text-sm font-mono text-gray-700 dark:text-gray-300">{internshipData.credentialId}</span>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                {internshipData.description}
              </p>

              {/* Mentor Information */}
              <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
                <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Mentored By</h3>
                <p className="text-blue-700 dark:text-blue-200">{internshipData.mentor}</p>
                <p className="text-sm text-blue-600 dark:text-blue-400">{internshipData.mentorRole}</p>
              </div>

              {/* Responsibilities */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Key Responsibilities</h3>
                <ul className="space-y-3">
                  {internshipData.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Technologies & Tools</h3>
                <div className="flex flex-wrap gap-3">
                  {internshipData.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skills Gained */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Skills Developed</h3>
                <div className="flex flex-wrap gap-3">
                  {internshipData.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6 border-t border-gray-200 dark:border-gray-600">
                <button
                  onClick={() => handleViewCertificate(internshipData.certificateUrl)}
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors duration-200 font-medium"
                >
                  <FileText className="w-5 h-5" />
                  View Internship Certificate
                </button>
                
                <button
                  onClick={() => handleDownload(internshipData.certificateUrl, internshipData.title)}
                  className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 py-3 px-6 rounded-lg transition-colors duration-200 font-medium"
                  title="Download Certificate"
                >
                  <Download className="w-5 h-5" />
                </button>
              </div>
              
            </div>
          </div>

          {/* Key Achievements Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">Key Achievements</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {internshipData.achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${achievement.impact === 'high' ? 'from-green-500 to-emerald-500' : 'from-blue-500 to-cyan-500'} shadow-lg`}>
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">
                        {achievement.description}
                      </p>
                      <div className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                        {achievement.metrics}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Appreciation Certificates Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">Recognition & Appreciation</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {appreciationCertificates.map((certificate) => (
                <div 
                  key={certificate.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden group hover:shadow-xl transition-all duration-300"
                >
                  {/* Header with Gradient */}
                  <div className={`relative h-4 bg-gradient-to-r ${certificate.color}`}></div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${certificate.color} shadow-lg`}>
                          <certificate.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                            {certificate.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 font-medium">
                            {certificate.issuer}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Issue Date */}
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>Issued: {certificate.issueDate}</span>
                    </div>

                    {/* Credential ID */}
                    {certificate.credentialId && (
                      <div className="mb-4">
                        <span className="text-sm text-gray-500 dark:text-gray-400">Credential ID: </span>
                        <span className="text-sm font-mono text-gray-700 dark:text-gray-300">{certificate.credentialId}</span>
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {certificate.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-600">
                      <button
                        onClick={() => handleViewCertificate(certificate.certificateUrl)}
                        className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 font-medium"
                      >
                        <FileText className="w-4 h-4" />
                        View Certificate
                      </button>
                      
                      <button
                        onClick={() => handleDownload(certificate.certificateUrl, certificate.title)}
                        className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg transition-colors duration-200 font-medium"
                        title="Download Certificate"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Summary */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Internship Impact</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">60%</div>
                <div className="text-blue-100">Reduction in Manual Work</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">40%</div>
                <div className="text-blue-100">Performance Improvement</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">5</div>
                <div className="text-blue-100">Systems Documented</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                Want to see more?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Explore my other experiences and certificates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/certificates"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  <Award className="w-5 h-5" />
                  View All Certificates
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                  <Code className="w-5 h-5" />
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
