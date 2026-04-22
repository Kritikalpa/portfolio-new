export const personalInfo = {
  name: "KritiKalpa Saha",
  title: "Software Developer",
  tagline: "I build things that scale—and sometimes they even work on the first try.",
  email: "saha.kritikalpa@gmail.com",
  phone: "+91-8794761714",
  linkedin: "https://linkedin.com/in/kritikalpa-saha/",
  github: "https://github.com/kritikalpa",
  portfolio: "https://kritikalpa-portfolio.netlify.app/",
  location: "India",
  resume: "/resume.pdf",
};

export const roles = [
  "Software Developer",
  "Full-Stack Developer",
  "Frontend Specialist",
  "AI Orchestration Engineer",
];

export const about = {
  summary:
    "Full-Stack Developer with specialization in Frontend Engineering, bringing 6+ years of experience in building scalable, responsive, and user-focused web applications. Skilled in both frontend technologies and backend development, with a proven ability to deliver end-to-end solutions. Adept at collaborating in multicultural teams, optimizing performance, and leveraging AI coding assistants (Claude Code, Antigravity) to accelerate development lifecycles by 70% without compromising code quality.",
  funFact: "I can debug complex React state at 2 AM, but I still need three tries to plug in a USB cable.",
  highlights: [
    "6+ years of professional software engineering experience",
    "Specialized in Frontend Engineering and AI Orchestration",
    "Accelerated development cycles by 70% using AI tools",
    "Architected and deployed RAG pipelines and Multi-Agent systems",
  ],
};

export const skills = {
  Frontend: [
    "React",
    "Next.js",
    "React Native",
    "Vue.js",
    "Tailwind CSS",
    "Redux",
    "React Testing Library (RTL)",
    "Jest",
    "TypeScript",
    "JavaScript",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "Django",
    "FastAPI",
    "PostgreSQL",
    "MongoDB",
    "REST",
    "GraphQL",
    "WebSockets",
    "Python",
    "Java",
    "C#",
    "C/C++",
  ],
  "AI & Data": [
    "Multi-Agent System",
    "LangChain",
    "LangGraph",
    "RAG",
    "Fine-Tuning",
    "MCP",
    "Prompt Engineering",
    "Vector DB",
    "Pydantic",
  ],
  "Architecture & Tools": [
    "Microservices",
    "System Design",
    "Git",
    "AWS",
    "GCP",
    "Figma",
    "Claude",
    "Antigravity",
  ],
};

export const experience = [
  {
    id: 1,
    role: "Senior Software Development Engineer",
    company: "MikeLegal",
    location: "Gurgaon, India",
    duration: "April 2024 - April 2026",
    type: "Full-time",
    achievements: [
      "Led development of web and mobile applications for the Mike Litigation Tool, driving feature implementation and ensuring code quality.",
      "Redesigned and optimized UI of Mike DocCompare Tool to support 6 concurrent document comparisons, improving scalability and performance.",
      "Architected and deployed a Retrieval-Augmented Generation (RAG) pipeline utilizing vector embeddings to reduce hallucinations in legal text analysis.",
      "Mentored junior developers and interns through code reviews and technical guidance.",
    ],
  },
  {
    id: 2,
    role: "Software Development Engineer",
    company: "MikeLegal",
    location: "Gurgaon, India",
    duration: "Dec 2022 - April 2024",
    type: "Full-time",
    achievements: [
      "Developed the Track Changes module for DocReview. Basically Git for lawyers, but with less 'commit' anxiety.",
      "Collaborated with developers to implement the landing page and enhance core features of DocReview.",
    ],
  },
  {
    id: 3,
    role: "Senior Frontend Engineer",
    company: "LongShot AI",
    location: "Mumbai, India",
    duration: "Dec 2021 - Dec 2022",
    type: "Full-time",
    achievements: [
      "Built the LongShot Chrome Extension — #2 Product of the Day on Product Hunt. A very proud 'no-sleep' moment.",
      "Assisted in fine-tuning open-source LLMs on proprietary datasets to improve domain-specific text generation.",
      "Integrated Semrush APIs into LongShot through direct collaboration with the Semrush team, expanding product functionality.",
      "Revamped the entire application UI, delivering a modern interface and reducing load time by 40%.",
      "Developed and implemented a real-time collaboration feature using WebRTC, enabling up to 10 users to work simultaneously.",
      "Maintained, refactored, and optimized the existing codebase, improving stability, performance, and scalability.",
    ],
  },
  {
    id: 4,
    role: "Frontend Engineer",
    company: "Klinify",
    location: "Singapore",
    duration: "May 2021 - Oct 2021",
    type: "Full-time",
    achievements: [
      "Developed new independent features from scratch, owning the full lifecycle from architecture to deployment.",
      "Reduced technical debt by performing extensive debugging, refactoring, and code cleanups.",
    ],
  },
  {
    id: 5,
    role: "Senior Analyst, React Developer",
    company: "Capgemini",
    location: "Mumbai, India",
    duration: "Sept 2020 - April 2021",
    type: "Full-time",
    achievements: [
      "Contributed to multiple scalable projects, including an Inventory Management System (IMS) and a Business Process Tracker.",
      "Translated user requirements into technical specifications, working end-to-end from analysis to delivery.",
    ],
  },
  {
    id: 6,
    role: "Developer Intern",
    company: "Appato",
    location: "Tripura, India",
    duration: "Dec 2018 - May 2019",
    type: "Internship",
    achievements: [
      "Implemented unit tests and caught bugs before they reached production.",
      "Developed interactive UI prototypes to validate design decisions and streamline stakeholder feedback.",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Adaptive MCP Tool Orchestrator",
    description:
      "A self-correcting AI orchestration engine built on the Model Context Protocol (MCP). Features an 'Experience Memory' loop and a real-time React Flow UI to visualize reasoning DAGs.",
    tech: ["React", "Tailwind", "LangGraph", "FastAPI", "Python", "WebSockets"],
    highlight: "Self-correcting AI orchestration engine",
    featured: true,
    company: "Personal Project",
    color: "#6366f1",
  },
  {
    id: 2,
    title: "Memory OS",
    description:
      "Multimodal pipeline using Gemini to extract entities and emotions, storing them in Neo4j. Dynamic retrieval system with emotion-weighted scoring and behavioral insights.",
    tech: ["Python", "FastAPI", "Neo4j", "Gemini", "Pydantic", "Vector Search"],
    highlight: "Graph-based multimodal memory system",
    featured: true,
    company: "Personal Project",
    color: "#8b5cf6",
  },
  {
    id: 3,
    title: "Menosense Mobile MVP",
    description:
      "Integrated voice-based symptom recording using Whisper and Gemini for summarization. WhatsApp integration for seamless symptom logging and conversational updates.",
    tech: ["React Native", "Whisper", "Gemini", "WhatsApp API", "Node.js"],
    highlight: "AI-powered healthcare assistant",
    featured: false,
    company: "Freelance",
    color: "#a855f7",
  },
  {
    id: 4,
    title: "Hightree Café POS & Menu",
    description:
      "A full restaurant POS system with customer-facing menu and back-office management. Integrated OMS with real-time data consistency and operational efficiency.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    highlight: "Real-time OMS ↔ Menu synchronization",
    featured: false,
    company: "Freelance",
    color: "#ec4899",
  },
  {
    id: 5,
    title: "Balaka Cinema Website",
    description:
      "High-fidelity responsive website ensuring cross-browser compatibility and accessibility compliance. Mobile-first design for public users.",
    tech: ["React", "Styled Components", "Responsive Design"],
    highlight: "High-fidelity public utility website",
    featured: false,
    company: "Freelance",
    color: "#f59e0b",
  },
  {
    id: 6,
    title: "Ena in Hogwarts",
    description:
      "2D Android game development using Godot Engine and C#. Features handcrafted art and magic-themed gameplay mechanics.",
    tech: ["C#", "Godot Engine", "Photoshop", "2D Game Dev"],
    highlight: "Indie Android game project",
    featured: false,
    company: "Personal Project",
    color: "#10b981",
  },
];
