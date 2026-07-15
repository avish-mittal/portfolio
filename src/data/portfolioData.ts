export const profile = {
  initials: "AM",
  firstName: "AVISH",
  lastName: "MITTAL",
  title: "Avish Mittal — Cyber Security & AI Student",
  email: "avishmittal4@gmail.com",
  phone: "+92 311 8262934",
  phoneHref: "tel:+923118262934",
  emailHref: "mailto:avishmittal4@gmail.com",
  address:
    "House No 443, Street No 7, Bhittai Colony, Korangi Creek, Karachi, Pakistan",
  location: "Karachi, Pakistan",
  nationality: "Pakistani",
  birthDate: "12 August 1998",
  gender: "Male",
  rolePrefix: "Cyber Security",
  rolePrimary: "AI Student",
  roleSecondary: "AI Student",
  about:
    "Passionate Cyber Security & AI Student dedicated to exploring the intersection of intelligent systems and modern defense mechanisms. With a strong foundation in computer science, I focus on building machine learning models for anomaly and threat detection, analyzing network vulnerabilities, and developing secure-by-design applications. Constantly learning and experimenting, I aim to leverage AI to solve complex security challenges, automate risk mitigation, and contribute to a safer, more resilient digital landscape.",
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=House+No+443+Street+No+7+Bhittai+Colony+Korangi+Creek+Karachi+Pakistan",
  githubHref: "https://github.com/avish-mittal",
  linkedinHref: "https://www.linkedin.com/in/avishmittal/",
  linkedinLabel: "linkedin.com/in/avishmittal",
  youtubeHref: "https://www.youtube.com/@itsredlinevibes",
  instagramHref: "https://www.instagram.com/ifw_.avish/",
  instagramLabel: "@ifw_.avish",
} as const;

export const careerEntries = [
  {
    role: "Technical Member",
    company: "Poornima University AI & Cyber Security Club",
    meta: "CTF & Security Research · Jaipur",
    period: "2026–NOW",
    description:
      "Collaborating on network security audits, participating in Capture The Flag (CTF) competitions, and training in threat intelligence and secure coding methodologies.",
  },
  {
    role: "Open Source Contributor",
    company: "Security Tools & AI Community",
    meta: "Python, Shell Scripting, Automation",
    period: "2025–Present",
    description:
      "Contributing script improvements to open-source security tools, auditing script vulnerabilities, and writing Python scripts to automate pentesting lab workflows.",
  },
  {
    role: "Freelance Developer",
    company: "Self-Employed",
    meta: "Full-Stack Web Development & Security",
    period: "2024–2026",
    description:
      "Developed responsive websites and simple web applications for local clients with basic encryption, secure user input validation, and modern layout design.",
  },
] as const;

export const serviceCards = [
  {
    title: "CYBER SECURITY",
    subtitle: "Vulnerability Assessment, Pen Testing & Defense",
    description:
      "I analyze systems and network architectures to identify security flaws, perform penetration testing, implement cryptographic protocols, and design defensive mechanisms against common attack vectors.",
    tags: [
      "Penetration Testing",
      "Network Security",
      "Vulnerability Scanning",
      "OWASP Top 10",
      "Wireshark & Nmap",
      "Cryptography",
    ],
  },
  {
    title: "AI & MACHINE LEARNING",
    subtitle: "Intelligent Systems, Modeling & Automation",
    description:
      "I design and deploy AI models to automate risk detection, analyze structured data for anomalies, and build predictive intelligence systems that strengthen modern cyber defenses.",
    tags: [
      "Python & PyTorch",
      "TensorFlow / Keras",
      "Deep Learning",
      "Anomaly Detection",
      "Natural Language Processing",
      "Data Analytics",
    ],
  },
] as const;

type ProjectCard = {
  title: string;
  category: string;
  tools: string;
  image: string;
  link?: string;
};

export const projectCards: ProjectCard[] = [
  {
    title: "Intrusion Detection System",
    category: "AI-Powered Threat Analysis",
    tools: "Python, PyTorch, Anomaly Detection, Network Flow Analysis",
    image: "/images/bond.png",
  },
  {
    title: "Vulnerability Scanner",
    category: "Security Automation",
    tools: "Nmap API, Python Scripting, HTML Reports, Secure API Integration",
    image: "/images/radix.png",
  },
  {
    title: "AI Malware Classifier",
    category: "Deep Learning & Malware Analysis",
    tools: "TensorFlow, Feature Extraction, Malware Dataset Modeling",
    image: "/images/sapphire.png",
  },
  {
    title: "Secure Messaging App",
    category: "Cryptography & Privacy",
    tools: "React, Node.js, AES-256 Encryption, Zero-Knowledge Protocols",
    image: "/images/Solidx.png",
  },
] as const;

export const education = [
  "B.Tech in Cyber Security & AI, Poornima University — 2026–Present",
  "Secondary School Certification, Computer Science Major — 2024–2026",
] as const;

export const publications = [
  'IEEE Conference 2026 — “AI-Driven Intrusion Detection Systems using Deep Learning for IoT Networks”',
  'Journal of Cybersecurity 2025 — “Vulnerability Analysis of Decentralized Applications and Web3 Ecosystems”',
] as const;

export const certifications = [
  "Google Cybersecurity Professional Certificate (2025)",
  "AI & Deep Learning Foundations (Udemy)",
  "Vulnerability Assessment & Penetration Testing Coursework",
  "Data Science Specialization (Udemy — Ongoing)",
  "AWS Solutions Architect – Certified",
] as const;