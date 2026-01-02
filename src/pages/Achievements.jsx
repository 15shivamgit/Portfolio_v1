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
  Trophy,
  Brain,
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

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/ibm_certificate.jpg";
    link.download = "certificate.jpg";
    link.click();
  };

  const handleViewCertificate = () => {
    window.open("/ibm_certificate.jpg", "_blank");
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
          <div className="min-h-screen bg-[#0b1220] text-white py-10 px-4">
            <div className="max-w-5xl mx-auto">
              {/* Header */}
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-blue-600/20 px-5 py-2 rounded-full mb-4">
                  <Trophy className="w-5 h-5 text-blue-400" />
                  <span className="text-sm text-blue-300 font-medium">
                    National Level Achievement
                  </span>
                </div>

                <h1 className="text-4xl font-bold mb-3">
                  GOER 2025 – National Finalist
                </h1>
                <p className="text-gray-300 max-w-3xl mx-auto">
                  Selected among{" "}
                  <span className="text-blue-400 font-semibold">
                    Top 10 Universities in India
                  </span>{" "}
                  at the prestigious Game of Enterprise Risk (GOER 2025)
                  organized by Institute of Risk Management (IRM), India
                  Affiliate.
                </p>
              </div>

              {/* Main Card */}
              <div className="bg-[#121a2f] border border-white/10 rounded-2xl shadow-xl p-8 mb-10">
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  {/* Left */}
                  <div>
                    <h2 className="text-2xl font-bold mb-2">
                      AKS University, Satna (M.P.)
                    </h2>

                    <div className="flex flex-wrap gap-4 text-gray-300 text-sm mt-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-blue-400" />
                        <span>5 July 2025</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-blue-400" />
                        <span>Mumbai (SDA Bocconi Asia Center, Powai)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-blue-400" />
                        <span>Team: Intrepid Explorers (MCA)</span>
                      </div>
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="flex items-center">
                    <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-300 text-sm font-semibold">
                      Top 10 Finalist
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mt-6 leading-relaxed">
                  The MCA team of AKS University delivered an exceptional
                  performance through multiple competitive stages and qualified
                  for the final national round of GOER 2025. The competition
                  involved premier institutes like IIMs, Symbiosis, Welingkar,
                  Parul University, and others. Our team demonstrated strong
                  analytical thinking, teamwork, and risk-based decision-making.
                </p>
              </div>

              {/* Team Section */}
              <div className="bg-[#121a2f] border border-white/10 rounded-2xl p-8 mb-10">
                <h3 className="text-xl font-bold mb-4">Team & Mentorship</h3>

                <ul className="space-y-2 text-gray-300">
                  <li>
                    🎯 Faculty Mentor: <b>Prof. Akhilesh A. Waoo</b>
                  </li>
                  <li>
                    👩‍🎓 Student Leader: <b>Aditi Singh</b>
                  </li>
                  <li>
                    👥 Team Members: Yukti Singh, Pranaw Gautam,{" "}
                    <b>Shivam Kumar</b>, Sana Khan, Smriti Nigam, Rahul Dwivedi,
                    Sahendra Singh, Ankush Gupta, Akanksha Garg
                  </li>
                </ul>
              </div>

              {/* RMAT Achievement */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-10">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6" />
                  RMAT – Risk Management Aptitude Test
                </h3>

                <p className="text-lg mb-4">
                  Scored <b>96% (240 / 250)</b> in RMAT conducted by Institute
                  of Risk Management (IRM).
                </p>

                <div className="grid md:grid-cols-4 gap-4 mt-6">
                  {[
                    "Business Logic",
                    "Analytical Reasoning",
                    "Decision Making",
                    "Risk Thinking",
                  ].map((skill, i) => (
                    <div
                      key={i}
                      className="bg-white/10 rounded-xl p-4 flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-300" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Highlights */}
              <div className="grid md:grid-cols-3 gap-6">
                <Highlight
                  icon={<Zap />}
                  title="National Exposure"
                  desc="Competed against India's top management institutes"
                />
                <Highlight
                  icon={<Brain />}
                  title="Risk Strategy"
                  desc="Hands-on experience in enterprise risk scenarios"
                />
                <Highlight
                  icon={<Target />}
                  title="Team Excellence"
                  desc="Strong collaboration & leadership under pressure"
                />
              </div>


              {/* Action Buttons */}
              <div className="flex gap-4 mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                <button
                  onClick={() => handleViewCertificate()}
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors duration-200 font-medium"
                >
                  <FileText className="w-5 h-5" />
                  View Internship Certificate
                </button>

                <button
                  onClick={() => handleDownload()}
                  className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 py-3 px-6 rounded-lg transition-colors duration-200 font-medium"
                  title="Download Certificate"
                >
                  <Download className="w-5 h-5" />
                </button>
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

/* Highlight Card */
function Highlight({ icon, title, desc }) {
  return (
    <div className="bg-[#121a2f] border border-white/10 rounded-2xl p-6 text-center">
      <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400">
        {icon}
      </div>
      <h4 className="font-bold mb-2">{title}</h4>
      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  );
}
