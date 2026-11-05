export const profile = {
  name: "Shivam Kumar",
  role: "Full Stack Developer",
  email: "15shivambgs@gmail.com",
  phone: "+91 74888 81563",
  phoneHref: "tel:+917488881563",
  location: "Begusarai, Bihar",
  resume: "/Shivam_Kumar_Full_Stack_Developer.pdf",
  resumeName: "Shivam_Kumar_Full_Stack_Developer.pdf",
  linkedin: "https://www.linkedin.com/in/15shivambgs",
  github: "https://github.com/15shivamgit",
  instagram: "https://www.instagram.com/15shivambgs",
  x: "https://x.com/15shivambgs",
  statement:
    "I build complete web and mobile products, from the database and API to the screen people use.",
  summary:
    "Full Stack Developer and MCA graduate building web and mobile products with TypeScript and Python. My projects cover multi-tenant SaaS, e-commerce, payment flows, RAG-based AI chat and an offline Android app, all with automated tests.",
  howIWork:
    "I work spec-first with AI-assisted development, mainly Claude Code. AI writes much of the code. I drive the product decisions, review the output and test on real devices.",
  careAbout:
    "I care about the parts users never see: automated tests, safe database migrations, and money stored as integers instead of floating point.",
  rotator: ["SaaS platforms", "AI chat agents", "e-commerce stores", "Android apps", "data dashboards"],
};

export const heroStats = [
  { value: 5, suffix: "", label: "Products built end to end" },
  { value: 446, suffix: "", label: "Automated tests in Hisaab" },
  { value: 59, suffix: "", label: "Merged PRs on the SaaS" },
  { value: 8.82, decimals: 2, suffix: "", label: "MCA CGPA out of 10" },
  { value: 96, suffix: "%", label: "RMAT score, 240 of 250" },
];

export const pings = [
  { label: "Now", text: "Web Developer at Quark Consulting" },
  { label: "Shipped", text: "Hisaab: signed APK, 446 automated tests" },
  { label: "Honor", text: "GOER 2025 national finalist, Top 10" },
  { label: "Earned", text: "CS302: Software Engineering, May 2026" },
];

export const process = [
  { title: "Spec", text: "Write what the product must do before any code exists." },
  { title: "Build", text: "Ship in small phases with Claude Code, one reviewed step at a time." },
  { title: "Test", text: "Unit, integration and end-to-end tests that run in CI." },
  { title: "Review", text: "Read the output, question the decisions, try it on real devices." },
  { title: "Ship", text: "Safe migrations, then a staging or release build people can use." },
];

export const claims = [
  {
    claim: "Knows testing",
    proof: "446 automated tests on Hisaab, with end-to-end flows on Android 8, 14 and 17.",
    to: "/projects/hisaab",
  },
  {
    claim: "Can handle payments",
    proof: "Razorpay checkout with signature checks, webhooks, server-side re-pricing and money stored as integer paise.",
    to: "/projects/ecommerce-platform",
  },
  {
    claim: "Understands AI",
    proof: "A RAG chat platform that streams Gemini answers and uses pgvector search for large knowledge bases.",
    to: "/projects/ai-chat-agent",
  },
  {
    claim: "Works on real codebases",
    proof: "240+ commits through 59 merged pull requests, with 60 database migrations and CI.",
    to: "/projects/seo-saas",
  },
  {
    claim: "Reads data properly",
    proof: "Six months as a Data Analyst Intern, plus a Python ETL to MySQL to Power BI pipeline on space launches.",
    to: "/projects/space-launch-analytics",
  },
];

export const skills = [
  { group: "Languages", items: ["TypeScript", "JavaScript (ES6+)", "Python", "SQL", "Java", "C", "C++"] },
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "TanStack Query", "React Hook Form", "Zod", "HTML5", "CSS3"] },
  { group: "Backend", items: ["Node.js", "Express", "NestJS", "FastAPI", "Django REST Framework", "REST APIs", "JWT", "OAuth", "Role-Based Access", "BullMQ"] },
  { group: "Databases", items: ["MySQL", "PostgreSQL (pgvector)", "MongoDB", "Redis", "SQLite", "Prisma", "Mongoose", "SQLAlchemy"] },
  { group: "Mobile & AI", items: ["React Native", "Expo", "Gemini API", "RAG", "Vector Search", "Claude Code"] },
  { group: "Testing & DevOps", items: ["Jest", "Vitest", "Playwright", "pytest", "Maestro", "Docker", "nginx", "GitHub Actions", "Git", "Vercel", "AWS (Basic)"] },
  { group: "Data", items: ["Pandas", "NumPy", "Matplotlib", "Power BI", "DAX", "Excel"] },
];

export const marqueeTech = [
  "TypeScript", "React", "Next.js", "Node.js", "NestJS", "FastAPI", "Python", "MySQL", "PostgreSQL",
  "MongoDB", "Redis", "Prisma", "React Native", "Docker", "Playwright", "Power BI", "Tailwind CSS", "GitHub Actions",
];

export const education = [
  { title: "Master of Computer Applications", place: "AKS University, Satna (M.P.)", period: "Aug 2024 – May 2026", note: "CGPA 8.82 / 10" },
  { title: "B.A. History", place: "Lalit Narayan Mithila University, Darbhanga", period: "2019 – 2023" },
  { title: "Intermediate (Science)", place: "G.D. College, Begusarai", period: "2017 – 2019" },
  { title: "Matriculation", place: "R. High School, Ramdiri", period: "2017" },
];
