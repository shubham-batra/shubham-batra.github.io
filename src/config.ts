export const siteConfig = {
  name: "Shubham Batra",
  title: "Full-Stack Software Engineer",
  description: "Portfolio website of Shubham Batra",
  accentColor: "#1d4ed8",
  social: {
    email: "shubham.batra@outlook.com",
    linkedin: "https://www.linkedin.com/in/shubham-batra1/",
    github: "https://github.com/shubham-batra",
  },
  aboutMe:
    "I graduated from the University of California, Riverside in 2022 with a B.S. in Computer Science, building a strong foundation in full-stack development. Most recently, I contributed to Optum’s UHC Mobile and Workforce Management teams, tackling real-world challenges in software engineering. I am passionate about advancing my full-stack expertise and exploring the frontiers of AI to create meaningful, impactful solutions."
    ,

  skills: ["Javascript", "React", "Node.js", "Python", "Azure", "SQL", "HTML", "CSS", "Azure Foundry", "Terraform", "Angular", "Linux", "Git", "Postman", "Typescript", "React Native", "HashiCorp"],
  projects: [
    {
      name: "AI Dev Roundup Newsletter",
      description:
        "One concise email. Five minutes. Every Tuesday. Essential AI news & trends, production-ready libraries, powerful AI tools, and real-world code examples",
      link: "https://aidevroundup.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "Chrome Extension Mastery: Build Full-Stack Extensions with React & Node.js",
      description:
        "Master the art of building production-ready, full-stack Chrome Extensions using modern web technologies and best practices",
      link: "https://fullstackextensions.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "ExtensionKit",
      description:
        "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
  ],
  experience: [
    {
      company: "Optum (UnitedHealth Group)",
      title: "Associate Software Engineer",
      dateRange: "Sept 2022 - Sept 2025",
      bullets: [
        "Developed new screens, fixed critical bugs, and integrated analytics in the UHC mobile app (1M+ users on iOS and Android) using React Native, improving data visibility and providing actionable insights for stakeholders.",
        "Engineered a Self-Swap shift scheduling tool using Angular, designing intuitive UI components and implementing REST APIs to enable seamless data flow. Reduced manual scheduling time by 40%, enhanced agent autonomy, and helped managers resolve shift conflicts 2× faster through dynamic list/grid views",
        "Designed and implemented the Direct Agents/Notification Preferences webpage, enabling agents to customize communication channels (Email, Text, IVR) and send canned messages. Integrated existing REST API endpoints to support dynamic user interactions",
        "Led environment setup for a greenfield project, configuring staging and production pipelines to support scalable deployment. Navigated ambiguity by leveraging prompt engineering to accelerate decision-making and streamline implementation",
        "Proactively implemented new security scanning protocols and led efforts to identify and remediate vulnerabilities, strengthening overall application security posture and helping reduce open security issues by over 50%"
      ],
    },
    {
      company: "University of California, Riverside",
      title: "Cybersecurity Research Intern",
      dateRange: "Jun 2019 - Aug 2019",
      bullets: [
        "Initiated the development of an efficient internet botnet scanner built in Python with the assistance of Nmap and Scapy to scan networks.",
        "Implemented testing by creating a mock program that can generate network traffic to a destination address ",
        "Utilized concepts about network security and communications including packet manipulation, botnet communications, sockets, and OSI models.",
        "Produced an abstract and gave a formal presentation in a research symposium.",
      ],
    },
  ],
    credentials: [
    {
      name: "Azure AI Fundamentals",
      issuer: "Microsoft",
      date: "Issued Oct 2025",
      link: "https://learn.microsoft.com/en-us/users/shubhambatra-6987/credentials/a229765b17eda7d9?ref=https%3A%2F%2Fwww.linkedin.com%2F"
    },
  ],
  education: [
    {
      school: "University of California, Riverside",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2019 - 2022",
      achievements: [
      ],
    },
  ],
};
