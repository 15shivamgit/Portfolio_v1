import { useEffect, useState } from "react";
import {
  Code,
  Database,
  Globe,
  Server,
  BookOpen,
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  Cpu,
  BarChart3,
  GitBranch,
  Terminal,
  Percent,
  Library,
  Computer,
  School,
} from "lucide-react";
import Footer from "../components/Footer";
import useDisableInspect from "../hooks/useDisableInspect";

export default function About() {
  useDisableInspect();
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("education");

  useEffect(() => {
    setMounted(true);
  }, []);

  const technicalSkills = [
    {
      category: "Programming Languages",
      skills: ["C", "C++", "Python", "Java","C#"],
      icon: Code,
      color: "from-blue-500 to-cyan-500",
    },
    {
      category: "Web Development",
      skills: ["HTML", "CSS", "Tailwind","JavaScript",],
      icon: Globe,
      color: "from-green-500 to-emerald-500",
    },
    {
      category: "Database",
      skills: ["MySQL", "MongoDB", "Oracle"],
      icon: Database,
      color: "from-orange-500 to-red-500",
    },
    {
      category: "Data Analytics",
      skills: ["NumPy", "Pandas", "Matplotlib"],
      icon: BarChart3,
      color: "from-purple-500 to-pink-500",
    },
    {
      category: "Framework/Library",
      skills: ["Tailwindd/Boostrap", "React"],
      icon: Library,
      color: "from-purple-500 to-pink-500",
    },
    {
      category: "Tools",
      skills: ["GitHub", "VS Code", "EXCEL"],
      icon: Terminal,
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const currentlyLearning = [
    { name: "Machine Learning", progress: 40, icon: Cpu },
    { name: "MERN-Stack Developer", progress: 50, icon: Server },
    { name: "Git & GitHub", progress: 75, icon: GitBranch },
    { name: "Data Science", progress: 75, icon: Computer },
  ];

  const education = [
    {
      degree: "MCA (Pursuing)",
      institution: "AKS University, MP",
      year: "2024 - Present",
      status: "Current",
      grade: "--",
      icon: GraduationCap,
    },
    {
      degree: "B.A History",
      institution: "Lalit Narayan Mithila University, Dharbhanga",
      year: "2019 - 2023",
      status: "Completed",
      grade: "57%",
      icon: BookOpen,
    },
    {
      degree: "12th-Intermediate (Science)",
      institution: "G.D College, Begusarai",
      year: "2017 - 2019",
      status: "Completed",
      grade: "56%",
      icon: School,
    },
    {
      degree: "10th Standard",
      institution: "R high School, Ramdiri",
      year: "2017",
      status: "Completed",
      grade: "74%",
      icon: School,
    },
  ];

  const tabs = [
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "skills", label: "Technical Skills", icon: Code },
    { id: "learning", label: "Currently Learning", icon: BookOpen },
  ];

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-20 w-20 border-b-2 border-blue-600 rounded-full" />
      </div>
    );
  }

  return (
     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Available for opportunities</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate <span className="font-semibold text-blue-600 dark:text-blue-400">Software Developer</span> and {' '}
            <span className="font-semibold text-green-600 dark:text-green-400">Data Analyst</span> with expertise in 
            modern technologies and data-driven solutions.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-white dark:bg-gray-800 shadow-lg text-blue-600 dark:text-blue-400 transform scale-105'
                  : 'bg-white/50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-800'
              } backdrop-blur-sm border border-white/20`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Education Tab */}
        {activeTab === 'education' && (
          <section className="animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div 
                    key={index}
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${index === 0 ? 'from-blue-500 to-cyan-500' : 'from-gray-500 to-gray-700'} shadow-lg`}>
                        <edu.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                            {edu.degree}
                          </h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            edu.status === 'Current' 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                              : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                          }`}>
                            {edu.status}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                          {edu.institution}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Percent className="w-4 h-4" />
                            <span>{edu.grade}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.year}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Career Vision</h3>
                <p className="text-lg leading-relaxed mb-6 opacity-90">
                  To become a software developer and data analyst, leveraging my communication, 
                  interpersonal, and technical skills in a professional environment.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Passionate about creating innovative solutions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span>Continuously learning new technologies</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                    <span>Focused on software development & data analytics</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Technical Skills Tab */}
        {activeTab === 'skills' && (
          <section className="animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalSkills.map((skillGroup, index) => (
                <div 
                  key={index}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 group"
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${skillGroup.color} w-12 h-12 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <skillGroup.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                    {skillGroup.category}
                  </h3>
                  <div className="space-y-3">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Currently Learning Tab */}
        {activeTab === 'learning' && (
          <section className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {currentlyLearning.map((item, index) => (
                  <div 
                    key={index}
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                          {item.name}
                        </h3>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${item.progress}%` }}
                          ></div>
                        </div>
                        <div className="text-right mt-1 text-sm text-gray-500 dark:text-gray-400">
                          {item.progress}% Complete
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Learning Focus</h3>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Currently enhancing my skills in modern web development with Next.js and 
                    expanding my expertise in machine learning and advanced data analytics.
                  </p>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Upcoming Goals:</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>• Master Git & Github ecosystem</li>
                      <li>• Build end-to-end data analytics projects</li>
                      <li>• Learn cloud deployment (AWS/Azure)</li>
                      <li>• Contribute to open-source projects</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Personal Info Footer */}
        <section className="mt-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3" />
              <h4 className="font-semibold text-gray-800 dark:text-white">Location</h4>
              <p className="text-gray-600 dark:text-gray-300">Begusarai, Bihar</p>
            </div>
            <div className="flex flex-col items-center">
              <GraduationCap className="w-8 h-8 text-green-600 dark:text-green-400 mb-3" />
              <h4 className="font-semibold text-gray-800 dark:text-white">Status</h4>
              <p className="text-gray-600 dark:text-gray-300">Student & Active Learner</p>
            </div>
            <div className="flex flex-col items-center">
              <Calendar className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-3" />
              <h4 className="font-semibold text-gray-800 dark:text-white">Experience</h4>
              <p className="text-gray-600 dark:text-gray-300">0+ __/__</p>
            </div>
          </div>
        </section>
      </div>

      <Footer></Footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}