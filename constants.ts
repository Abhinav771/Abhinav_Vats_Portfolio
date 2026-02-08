import { Project, Experience, SkillCategory, Achievement } from './types';

export const RESUME_DATA = {
  name: "Abhinav Vats",
  role: "Full Stack Developer",
  location: "Gwalior, India",
  email: "abhinavvats771@gmail.com",
  phone: "+91 9761090562",
  socials: {
    linkedin: "https://www.linkedin.com/in/abhinav-vats-8033b127a/",
    github: "https://github.com/Abhinav771"
  },
  summary: "Full Stack Developer proficient in MERN stack and Flutter. LeetCode Knight (Top 5%) with 1865 rating. Built scalable backend systems and optimized mobile applications for 500,000+ users. Expertise includes Node.js, MongoDB, Data Structures, and System Security.",
  education: {
    university: "ABV-Indian Institute of Information Technology and Management",
    location: "Gwalior, India",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    duration: "Aug 2023 – Expected Jun 2027",
    gpa: "7.42",
    coursework: "Data Structures & Algorithms, Operating Systems, DBMS, Computer Networks, OOP"
  }
};

export const EXPERIENCES: Experience[] = [
  {
    company: "Near Book",
    location: "Remote",
    role: "Flutter Developer Intern",
    duration: "Oct 2024 – Nov 2024",
    achievements: [
      "Built a user registration module handling 100+ daily sign-ups, reducing onboarding time by 15%.",
      "Refactored navigation components to improve session retention by 10% for 500,000+ registered users.",
      "Resolved API race conditions in collaboration with backend teams, reducing data loading errors by 20%."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Secure Password Manager",
    tech: ["Node.js", "MongoDB", "AES-256", "JWT"],
    description: [
      "Implemented a Zero-Knowledge vault using AES-256 encryption, preventing server-side data exposure.",
      "Deployed bcrypt hashing with automated salt generation to block Rainbow Table attacks.",
      "Designed RESTful APIs to manage encrypted payloads, achieving response times under 100ms.",
      "Integrated JWT authentication for secure session management."
    ],
    link: "https://github.com/Abhinav771/password_manager"
  },
  {
    title: "Newsly",
    tech: ["Flutter", "Dart", "BLOC", "SQLite"],
    description: [
      "Created a news aggregator that fetches 100+ daily articles using asynchronous REST API integration.",
      "Reduced application startup time by 1.5 seconds by implementing BLOC for state management.",
      "Enabled offline access by implementing SQLite caching to store 50MB+ of media content locally."
    ],
    link: "https://github.com/Abhinav771/Newsly"
  },
  {
    title: "ToDo-App",
    tech: ["Flutter", "Firebase", "Provider"],
    description: [
      "Developed a task management system supporting 1,000+ active task states using Provider.",
      "Reduced Firestore database read costs by 30% by optimizing NoSQL query structures.",
      "Implemented Google Sign-In (OAuth 2.0) to decrease authentication friction."
    ],
    link: "https://github.com/Abhinav771/todo"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    items: ["C++", "JavaScript", "Dart", "Python", "SQL", "HTML", "CSS"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Bcrypt"]
  },
  {
    category: "Mobile",
    items: ["Flutter", "Provider", "BLOC", "Firebase"]
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Postman", "Linux", "VS Code"]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "LeetCode Knight",
    description: "Ranked top 5% globally with a max rating of 1865."
  },
  {
    title: "Codeforces Pupil",
    description: "Maintained a rating of 1200+ with consistent contest participation."
  },
  {
    title: "CodeChef 3-Star",
    description: "Achieved top percentile rank in monthly coding challenges."
  },
  {
    title: "1st Place, Akriti",
    description: "Won UI/UX design hackathon at IIIT Gwalior against 50+ teams."
  }
];

export const SYSTEM_INSTRUCTION = `
You are an AI assistant for Abhinav Vats, embedded in his portfolio website.
Your goal is to answer questions about Abhinav's professional experience, skills, and projects based STRICTLY on the following resume data.
Be professional, concise, and enthusiastic about his work.
If a user asks something not in the resume, politely say you only know about his professional background.

RESUME DATA:
Name: ${RESUME_DATA.name}
Role: ${RESUME_DATA.role}
Summary: ${RESUME_DATA.summary}
Education: ${RESUME_DATA.education.degree} at ${RESUME_DATA.education.university}, GPA: ${RESUME_DATA.education.gpa}.

Experience:
${EXPERIENCES.map(e => `- ${e.role} at ${e.company}: ${e.achievements.join(" ")}`).join("\n")}

Projects:
${PROJECTS.map(p => `- ${p.title} (${p.tech.join(", ")}): ${p.description.join(" ")}`).join("\n")}

Skills:
${SKILLS.map(s => `- ${s.category}: ${s.items.join(", ")}`).join("\n")}

Achievements:
${ACHIEVEMENTS.map(a => `- ${a.title}: ${a.description}`).join("\n")}
`;