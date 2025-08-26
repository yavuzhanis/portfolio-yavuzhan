import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Yavuzhan İs",
  initials: "DV",
  url: "https://isyavuzhan.com",
  location: "İzmir, TR",
  locationLink: "https://www.google.com/maps/place/Izmir",
  description:
    "Full Stack Developer at Cappadocia University. I love building things and helping people. Very active on LinkedIn.",
  summary:
    "At Kapadokya University, I work as a Full Stack Developer, mainly focusing on backend with Python and Django, while also building side projects in Next.js and SaaS products. I love creating tools that make life easier — from academic systems to SEO analyzers. Along the way, I’ve explored PHP, React, and Flask, and I’m always experimenting with new ideas that can turn into useful products. Very active on LinkedIn and Twitter, I enjoy sharing what I build and learning from others.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "JavaScript",
    "Flask",
    "Python",
    "Django",
    "Postgres",
    "Sqlite",
    "Php",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "isyavuzhan3@gmail.com",
    tel: "+905359385468",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/yavuzhanis",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yavuzhan-is/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@yavuzhanis41",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Cappadocia University",
      href: "https://kapadokya.edu.tr",
      badges: [],
      location: "Hybrid",
      title: "Full Stack Developer",
      logoUrl: "/kun.png",
      start: "Oct 2024",
      end: "",
      description:
            "At Kapadokya University, I work as a Full Stack Developer, mainly focusing on backend with Python and Django, while also building side projects in Next.js and SaaS products.",
          },
   
    
    {
      company: "Ford Otosan A.Ş",
      href: "https://www.ford.com.tr",
      badges: [],
      location: "Kocaeli, İzmit",
      title: "Software Developer Intern",
      logoUrl: "/ford.png",
      start: "May 2019",
      end: "August 2019",
      description:
        "As a Software Developer Intern at Ford, I designed and implemented a secure password encryption and browser cookie storage system in c#.",
    },
  ],
  education: [
    {
      school: "Kapadokya University",
      href: "https://kapadokya.edu.tr",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/kun.png",
      start: "2021",
      end: "2025",
    },
    
 
  ],
  projects: [
  {
    title: "e-commerceBig",
    href: "https://e-commerce-two-psi-59.vercel.app",
    dates: "—",
    active: true,
    description:
      "A scalable e-commerce interface with a wide product catalog, filtering options, and modern UI flows.",
    technologies: ["Next.js", "React", "TypeScript", "TailwindCSS"],
    links: [
      {
        type: "Website",
        href: "https://e-commerce-two-psi-59.vercel.app",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/e-com.png",
    video: "",
  },
  {
    title: "e-commerce",
    href: "https://minikbey.vercel.app",
    dates: "—",
    active: true,
    description:
      "Lightweight e-commerce showcase: fast page transitions, product cards, and responsive design.",
    technologies: ["Next.js", "React", "TailwindCSS"],
    links: [
      {
        type: "Website",
        href: "https://minikbey.vercel.app",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/store.png",
    video: "",
  },
  {
    title: "Candy Crush (Clone)",
    href: "https://candy-crush-yobo.vercel.app",
    dates: "—",
    active: true,
    description:
      "Classic match-3 game clone with drag-and-drop, score tracking, and smooth animations.",
    technologies: ["React", "JavaScript", "CSS"],
    links: [
      {
        type: "Website",
        href: "https://candy-crush-yobo.vercel.app",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/candy.png",
    video: "",
  },
  {
    title: "Gemini Clone",
    href: "https://gemini-clone-yobo.vercel.app",
    dates: "—",
    active: true,
    description:
      "Gemini-style AI UI experiment with a prompt/response interface and chat flow.",
    technologies: ["Next.js", "React", "TailwindCSS"],
    links: [
      {
        type: "Website",
        href: "https://gemini-clone-yobo.vercel.app",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/gemini.png",
    video: "",
  },
  {
    title: "KUN-AI",
    href: "https://kun-ai.vercel.app",
    dates: "—",
    active: true,
    description:
      "University-focused AI interface: simple, fast, and mobile-friendly chat experience.",
    technologies: ["Next.js", "React", "TailwindCSS"],
    links: [
      {
        type: "Website",
        href: "https://kun-ai.vercel.app",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/kun-ai.png",
    video: "",
  },
  {
    title: "Özdemir Oto Çekici",
    href: "https://ozdemirotocekici.com",
    dates: "—",
    active: true,
    description:
      "Responsive website for a local towing service in Turkey.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    links: [
      {
        type: "Website",
        href: "https://ozdemirotocekici.com",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/ozdemir.png",
    video: "",
  },
  {
    title: "AI Tools Directory",
    href: "https://ai-tools-directory-dusky.vercel.app",
    dates: "—",
    active: true,
    description:
      "Curated directory of AI tools with search, categories, and user submissions.",
    technologies: ["Next.js", "React", "TailwindCSS"],
    links: [
      {
        type: "Website",
        href: "https://ai-tools-directory-dusky.vercel.app",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/ai-tools.png",
    video: "",
  },
  
]
,
  hackathons: [
    {
    title: "SEO & Rakip Analiz SaaS",
    dates: "2024",
    location: "Türkiye",
    description:
      "Developed a SaaS for keyword tracking and competitor analysis using Django, Redis, and Celery.",
    links: [],
  },
  {
    title: "Excel & Word to HTML Converter",
    dates: "2024",
    location: "Kapadokya Üniversitesi",
    description:
      "Developed a full stack application that converts Excel and Word files into HTML tables and content.",
    links: [],
  },
  {
    title: "KUN-AI",
    dates: "2025",
    location: "Kapadokya Üniversitesi",
    description:
      "Developed an AI-powered chat assistant interface for the university.",
    links: [
      {
        title: "Website",
        icon: <Icons.globe className="h-4 w-4" />,
        href: "https://kun-ai.vercel.app",
      },
    ],
  },
  ],
} as const;
