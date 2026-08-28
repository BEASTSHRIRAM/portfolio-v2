export const resumeLink = "/Resume3.pdf";

export const siteConfig = {
  name: "Sriram Kulkarni",
  title: "Sriram Kulkarni | AI Engineer",
  description:
    "AI Engineer Intern at Zysk Technologies building practical AI products, intelligent workflows, and full-stack software.",
  // Set NEXT_PUBLIC_SITE_URL before deployment to override this local fallback.
  url: "http://localhost:3000",
  githubUsername: "BEASTSHRIRAM",
  role: "AI Engineer Intern",
  tagline: "AI Engineer Intern @ Zysk Technologies · Bengaluru, India",
};

export const githubGraphConfig = {
  months: 12,
  cellSize: 11,
  cellGap: 3,
  showLegend: true,
  showWeekdayLabels: true,
  showMonthLabels: true,
} as const;

export type SocialLink = {
  id: string;
  platform: "linkedin" | "github" | "mail" | "twitter";
  link: string;
  label: string;
};

export const socialMedia: SocialLink[] = [
  { id: "linkedin", platform: "linkedin", link: "https://linkedin.com/in/sriramkulkarni7878", label: "LinkedIn" },
  { id: "github", platform: "github", link: "https://github.com/BEASTSHRIRAM", label: "GitHub" },
  { id: "email", platform: "mail", link: "mailto:shrikulk20@gmail.com", label: "Email" },
];

export const connectLink = "mailto:shrikulk20@gmail.com";

export type IntroSegment =
  | { type: "text"; value: string }
  | { type: "hand"; value: string }
  | { type: "link"; label: string; href: string; previewTitle?: string; previewDescription?: string };

export type IntroBullet = { id: string; segments: IntroSegment[] };

export const introBullets: IntroBullet[] = [
  {
    id: "role",
    segments: [
      { type: "text", value: "I am an " },
      { type: "hand", value: "AI Engineer Intern" },
      { type: "text", value: " at " },
      { type: "link", label: "Zysk Technologies", href: "https://zysk.tech/", previewTitle: "Zysk Technologies", previewDescription: "Technology and product engineering company." },
      { type: "text", value: ", building practical AI products and intelligent workflows." },
    ],
  },
  {
    id: "stack",
    segments: [
      { type: "text", value: "My core toolkit includes " },
      { type: "hand", value: "Python, Java, TypeScript, React, and Spring Boot" },
      { type: "text", value: ", alongside LLM and agentic application patterns." },
    ],
  },
  {
    id: "focus",
    segments: [
      { type: "text", value: "I enjoy turning complex ideas into " },
      { type: "hand", value: "usable, production-minded software" },
      { type: "text", value: " with thoughtful APIs, data flows, and user experiences." },
    ],
  },
  {
    id: "education",
    segments: [
      { type: "text", value: "I am pursuing a B.E. in Information Science at " },
      { type: "hand", value: "JSS Academy of Technical Education" },
      { type: "text", value: " in Bengaluru." },
    ],
  },
];

export type CutoutSticker = {
  id: string;
  src: string;
  width: number;
  height: number;
  tooltip: string;
  rotate: number;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  displayWidth: string;
  zIndex: number;
  outline?: "default" | "thin" | "plain";
  emit?: "notes";
};

export const experienceStickers: CutoutSticker[] = [];
export const projectStickers: CutoutSticker[] = [];

export type ContentBlock = { text: string; link?: string };
export type Position = { title: string; duration: string; content: ContentBlock[] };
export type Experience = { id: string; organisation: string; logo: string; link: string; positions: Position[] };

export const experiences: Experience[] = [
  {
    id: "zysk",
    organisation: "Zysk Technologies",
    logo: "/assets/zysk-logo.webp",
    link: "https://zysk.tech/",
    positions: [
      {
        title: "AI Engineer Intern",
        duration: "August 2026 - Present",
        content: [
          { text: "Building AI-powered products and intelligent workflows for practical business use cases." },
          { text: "Working with LLM workflows, prompt design, agentic application patterns, backend services, and modern product experiences." },
          { text: "Developing production-ready integrations that connect AI capabilities with APIs and user-facing applications." },
        ],
      },
    ],
  },
];

export type Education = { id: string; icon: string; title: string; degree: string; duration: string; content: string[]; link?: string };

export const educationList: Education[] = [
  { id: "jss", icon: "/assets/profile-pic.jpg", title: "JSS Academy of Technical Education", degree: "Bachelor of Engineering in Information Science", duration: "2023 - Present", content: ["Current CGPA: 8.2/10.0.", "Focused on computer science fundamentals, AI, and full-stack development."] },
  { id: "pu", icon: "/assets/profile-pic.jpg", title: "Shree Guru Independent PU College", degree: "Pre-University Course, Science", duration: "2021 - 2023", content: ["Physics, Chemistry, Mathematics, and Computer Science; scored 92% in final examinations."] },
  { id: "school", icon: "/assets/profile-pic.jpg", title: "Aryan English Medium School", degree: "Secondary School Education", duration: "Completed 2021", content: ["Strong foundation in mathematics and sciences; scored 82% in SSLC examinations."] },
];

export type Achievement = {
  id: string;
  icon: string;
  companyIcon?: string;
  photo?: string;
  event: string;
  position: string;
  highlight: string;
  article?: string;
  project?: string;
  youtube?: string;
  github?: string;
  rotation?: number;
};

export const achievements: Achievement[] = [
  { id: "ibm", icon: "/assets/profile-pic.jpg", event: "IBM Hackathon", position: "3rd Place", highlight: "Placed third for an innovative solution showcasing technical excellence and problem-solving.", article: "https://drive.google.com/file/d/1Lhw8LlxyFyyW-I5j8guY5hF1QDxxT_D5/view?usp=sharing" },
  { id: "lingo", icon: "/assets/profile-pic.jpg", event: "lingo.dev Hackathon", position: "4th Place", highlight: "Built ReadyIndia, a multilingual disaster-management platform for community preparedness and response.", article: "https://drive.google.com/file/d/1DqFiR6xUAoitF-atjg9w0WtmIlr23yOC/view?usp=sharing", github: "https://github.com/BEASTSHRIRAM/ReadyIndiaAI" },
  { id: "backend", icon: "/assets/profile-pic.jpg", event: "Backend Reloaded Hackathon", position: "Completion", highlight: "Built AyuMitraAI, a health-center discovery platform with agent-based recommendations.", article: "https://drive.google.com/file/d/1eoWmvUy5e1VUzHXbz92D7YouEWwF39bD/view?usp=sharing", github: "https://github.com/BEASTSHRIRAM/AyuMitraAI" },
  { id: "rilo", icon: "/assets/profile-pic.jpg", event: "RILO Automation Hackathon", position: "Completion", highlight: "Created AI automation tools for product management and campus-event operations.", article: "https://drive.google.com/file/d/1wRlEghaWw8N6pDVqFNTFBFZ9OxiYAo8E/view?usp=sharing" },
  { id: "sjbit", icon: "/assets/profile-pic.jpg", event: "SJBIT Axiom Hackathon", position: "Completion", highlight: "Built TICE, a threat-intelligence correlation platform with OSINT integration and 3D visualization.", github: "https://github.com/BEASTSHRIRAM/Novatron_58" },
  { id: "zenith", icon: "/assets/profile-pic.jpg", event: "Zenith Hackathon", position: "Completion", highlight: "Built ExpediteAI, an AI outreach automation platform for context-aware, personalized communication.", article: "https://drive.google.com/file/d/1TwoT0cuiYX9W7BSBXG-mDPWpaKwjjCqs/view?usp=sharing", github: "https://github.com/BEASTSHRIRAM/OutboundAI" },
];

export type ProjectStackItem = { name: string; icon?: string };
export type Project = { id: string; title: string; github?: string; link?: string; youtube?: string; image?: string; video?: string; content: string; stack: ProjectStackItem[]; highlight?: string };
const github = "https://github.com/BEASTSHRIRAM";

export const projects: Project[] = [
  { id: "expedite", title: "ExpediteAI", github: `${github}/OutboundAI`, link: "https://expediteai.vercel.app/", content: "Evidence-first outbound intelligence platform for verified lead discovery, ROI analytics, and personalized email drafting.", stack: [{ name: "TypeScript" }, { name: "Python" }, { name: "FastAPI" }, { name: "LangGraph" }, { name: "React" }, { name: "MongoDB" }] },
  { id: "kaisen", title: "Kaisen", github: `${github}/Kaisen`, content: "Dual-layer security platform monitoring infrastructure telemetry and LLM-agent behavior with anomaly detection, attack graphs, and explainable interventions.", stack: [{ name: "Python" }, { name: "React" }, { name: "TypeScript" }, { name: "Electron" }, { name: "TensorFlow" }] },
  { id: "voice-agent", title: "VoiceAgent", github: `${github}/VoiceAgent`, link: "https://voice-agent-theta-lilac.vercel.app/", content: "Voice-first agent experience for real-time conversations, speech, tool use, and database-backed context.", stack: [{ name: "Next.js" }, { name: "Python" }, { name: "LiveKit" }, { name: "OpenAI" }, { name: "WebRTC" }] },
  { id: "eliyonix", title: "Eliyonix", github: `${github}/Eliyonix`, content: "AI-powered solar mini-grid monitoring for rural India with IoT telemetry, agentic recommendations, multilingual voice assistance, and predictive alerts.", stack: [{ name: "Python" }, { name: "FastAPI" }, { name: "React" }, { name: "LangGraph" }, { name: "AWS Bedrock" }, { name: "MQTT" }] },
  { id: "vidyut", title: "VidyutSeva", github: `${github}/VidyutSeva`, content: "Outage intelligence and voice support for power grids with real-time ingestion, geospatial mapping, and multi-agent diagnosis.", stack: [{ name: "FastAPI" }, { name: "React" }, { name: "LangGraph" }, { name: "Supabase" }, { name: "Qdrant" }, { name: "Leaflet" }] },
  { id: "glaze", title: "Glaze", github: `${github}/Glaze`, content: "Semantic search over Google Drive files with vector embeddings, natural-language queries, and a lightweight Chrome extension.", stack: [{ name: "Python" }, { name: "FastAPI" }, { name: "Qdrant" }, { name: "Google Drive API" }, { name: "Gemini" }] },
  { id: "issuepilot", title: "IssuePilot", github: `${github}/IssuePilot`, content: "AI-powered support-ticket platform that classifies tickets, suggests actions, and tracks issues and metrics.", stack: [{ name: "Django" }, { name: "React" }, { name: "PostgreSQL" }, { name: "Gemini" }, { name: "Docker" }] },
  { id: "readyindia", title: "ReadyIndiaAI", github: `${github}/ReadyIndiaAI`, link: "https://ready-india-ai.vercel.app/", content: "Multilingual disaster alert system for India with real-time alerts, AI simplification, geolocation insights, and safety guidance.", stack: [{ name: "Node.js" }, { name: "React" }, { name: "MongoDB" }, { name: "Gemini" }, { name: "Leaflet" }] },
  { id: "wanderpal", title: "Wanderpal AI", github: `${github}/Wanderpal-AI`, content: "Full-stack AI travel assistant with contextual trip planning, persistent profiles, recommendations, and agentic search tools.", stack: [{ name: "FastAPI" }, { name: "React" }, { name: "TypeScript" }, { name: "Langflow" }, { name: "MongoDB" }] },
  { id: "briefify", title: "Briefify AI", github: `${github}/BriefifyAI`, link: "https://briefify-ai.vercel.app/", content: "Document summarization platform with secure authentication, Tesseract OCR extraction, and generative-AI summaries.", stack: [{ name: "Spring Boot" }, { name: "React" }, { name: "MongoDB" }, { name: "Tesseract OCR" }, { name: "JWT" }] },
  { id: "ayumitra", title: "AyuMitraAI", github: `${github}/AyuMitraAI`, link: "https://ayu-mitra-ai.vercel.app/", content: "Healthcare discovery agent for locating nearby health centers through event-driven workflows and background job processing.", stack: [{ name: "TypeScript" }, { name: "Python" }, { name: "Motia" }, { name: "Vercel" }] },
  { id: "tice", title: "TICE", github: `${github}/Novatron_58`, content: "Threat-intelligence correlation platform for IP analysis, risk scoring, and AI-powered attribution reports with 3D geolocation visualization.", stack: [{ name: "Python" }, { name: "FastAPI" }, { name: "React" }, { name: "Three.js" }, { name: "MongoDB" }] },
];

export const navSections = [
  { id: "profile", label: "About" },
  { id: "hackathons", label: "Hackathons" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];
