import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { CardType } from "@/lib/types";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const ourFields = [
  "E-commerce",
  "Finance",
  "Education",
  "Social",
  "Entertainment",
  "Medicine",
];

export const experiencesData = [
  {
    title: "Graduated",
    location: "Attock, Pakistan",
    description:
      "Right After I completed my graduation in Computer Sciences from Comsats University Islamabad. I immediately found a job as a Full Stack Developer at 99 Marlaz which was a Real Estate Agency startup.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Front-End Developer",
    location: "Remote (Pakistan)",
    description:
      "I worked as a Freelancer (Front-End Developer) for 1 year with Creative Distrix. I also upskilled to the Full Stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Remote (UAE)",
    description:
      "I'm now a Full-Stack developer working as a freelancer. My stack includes React, Next.js, Express.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to Full-Time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

// export const projectsData = [
//   {
//     title: "CorpComment",
//     description:
//       "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
//     tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
//     imageUrl: corpcommentImg,
//   },
//   {
//     title: "rmtDev",
//     description:
//       "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
//     tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
//     imageUrl: rmtdevImg,
//   },
//   {
//     title: "Word Analytics",
//     description:
//       "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
//     tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
//     imageUrl: wordanalyticsImg,
//   },
// ] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;

export const projectData = [
  {
    title: "C2 Montreal",
    src: "c2montreal.png",
    color: "#000000",
    location: "United States",
    services: "Development",
    year: "2023",
  },
  {
    title: "Office Studio",
    src: "officestudio.png",
    color: "#8C8C8C",
    location: "United States",
    services: "Design",
    year: "2021",
  },
  {
    title: "Locomotive",
    src: "locomotive.png",
    color: "#EFE8D3",
    location: "United Kingdom",
    services: "Design & Development",
    year: "2022",
  },
  {
    title: "Silencio",
    src: "silencio.png",
    color: "#706D63",
    location: "United Arab Emirates",
    services: "Design",
    year: "2023",
  },
];

export const aboutWork = [
  {
    id: "01",
    title: "Design",
    description:
      "With a solid track record in designing websites and apps, I deliver strong and user-friendly digital designs. Solid company branding is the foundation of any succesful website.",
  },
  {
    id: "02",
    title: "Development",
    description:
      "I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations, transitions and interaction. For content management I use Kirby CMS.",
  },
  {
    id: "03",
    title: "The full package",
    description:
      "A complete website from concept to implementation, that's what makes me stand out. My great sense for design and my development skills enable me to create kick-ass projects.",
  },
];

export const projects = [
  {
    title: "Graphics Design",
    heading: "Elevate Your Brand with Stunning Visuals",
    description:
      "At HashBitStudio, our graphics design services are a perfect blend of creativity and strategy. We specialize in translating your ideas into visually compelling designs that resonate with your audience. From logo design to branding materials, each creation is meticulously crafted to ensure your brand stands out in the digital realm.",
    services: [
      "Logo Design",
      "Creative Branding and Identity Solutions",
      "Print and Digital Collateral",
      "Illustrations and Infographics",
      "Motion Graphics",
    ],
    src: "/assets/images/graphics.webp",
    link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
    color: "#F6C954",
  },
  {
    title: "Social Media Marketing",
    heading: "Connect, Engage, Convert: Boost Your Online Presence",
    description:
      "Navigating the dynamic landscape of social media is made seamless with our services at HashBitStudio. We specialize in content creation, strategic campaigns, and analytics to elevate your brand's presence. Connect, engage, and convert with our comprehensive social media marketing solutions..",
    services: [
      "Content Creation and Curation",
      "Social Media Marketing Services",
      "Campaign Management",
      "Analytics and Performance Tracking",
    ],
    src: "/assets/images/socialmedia.webp",
    link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
    color: "#FA2F67",
  },
  {
    title: "Web Design and Development",
    heading: "Digital Excellence: Crafted Websites Tailored for Success",
    services: [
      "Custom Website Design",
      "Responsive Development",
      "E-commerce Solutions",
      "CMS Integration",
      "Wordpress",
    ],
    description:
      "Your website is often the first interaction a potential client has with your brand. Our website design and development services focus on creating user-friendly, visually appealing, and functional websites. Whether you need a portfolio site, e-commerce platform, or a corporate presence, we bring your vision to life.",
    src: "/assets/images/website.webp",
    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    color: "#5FA7E0",
  },
];

export const FooterQuickLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/work",
    label: "Work",
  },
  {
    href: "/contact",
    label: "Contact",
  },
  {
    href: "/career",
    label: "Career",
  },
  {
    href: "/blog",
    label: "Blog",
  },
];

export const FooterServicesLink = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/portfolio",
    label: "Portfolio",
  },
  {
    href: "/contact",
    label: "Contact",
  },
  {
    href: "/career",
    label: "Career",
  },
  {
    href: "/blog",
    label: "Blog",
  },
];

export const photos = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1622901120958-ae569882629c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    description: "Block 1",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1476900543704-4312b78632f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80",
    description: "Block 2",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    description: "Block 3",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=933&q=80",
    description: "Block 4",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=930&q=80",
    description: "Block 5",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80",
    description: "Block 6",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1534366428-e54c1db0bed4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80",
    description: "Block 7",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    description: "Block 8",
  },
];

export const AboutCompanyText =
  "At HashBitStudio, our journey is ignited by passion—our fundamental spark. The key to our innovation and triumph? It's the fusion of unwavering dedication, a design-centric heartbeat, and a relentless drive to innovate! In our design and development studio, we hold dear integrity and transparency. Our commitment to ethical practices propels us forward. Clients trust us for transparent communication, genuine collaboration, and dependable results. This bedrock of trust has been instrumental in our journey, cultivating relationships and propelling our enduring success";

export const cards: CardType[] = [
  {
    url: "https://res.cloudinary.com/dr9ec0vsv/image/upload/v1707077966/1_s8pbhy.jpg",
    title: "Developing",
    id: 1,
  },
  {
    url: "https://res.cloudinary.com/dr9ec0vsv/image/upload/v1707077949/4_g1rjf2.jpg",
    title: "Workspace",
    id: 2,
  },
  {
    url: "https://res.cloudinary.com/dr9ec0vsv/image/upload/v1707077959/3_x3o8wv.jpg",
    title: "Team Meet",
    id: 3,
  },
  {
    url: "https://res.cloudinary.com/dr9ec0vsv/image/upload/v1707077965/2_smmw5i.jpg",
    title: "QA & Testing",
    id: 4,
  },
];


export const Socials = [
  {
    name: "Discord",
    src: "/instagram.svg",
  },
  {
    name: "Facebook",
    src: "/facebook.svg",
  },
  {
    name: "Instagram",
    src: "/discord.svg",
  },
];

export const technologies = [
  {
    "name": "Html 5",
    "src": "/html.png"
  },
  {
    "name": "Css",
    "src": "/css.png"
  },
  {
    "name": "Java Script",
    "src": "/js.png"
  },
  {
    "name": "Tailwind Css",
    "src": "/tailwind.png"
  },
  {
    "name": "React",
    "src": "/react.png"
  },
  {
    "name": "Redux",
    "src": "/redux.png"
  },
  {
    "name": "React Query",
    "src": "/reactquery.png"
  },
  {
    "name": "Type Script",
    "src": "/ts.png"
  },
  {
    "name": "Next js 14",
    "src": "/next.png"
  },
  {
    "name": "Framer Motion",
    "src": "/framer.png"
  },
  {
    "name": "Stripe Payment",
    "src": "/stripe.webp"
  },
  {
    "name": "Node js",
    "src": "/node-js.png"
  },
  {
    "name": "Mongo db",
    "src": "/mongodb.png"
  },
  {
    "name": "Material UI",
    "src": "/mui.png"
  },
  {
    "name": "Express js",
    "src": "/express.png"
  },
  {
    "name": "Fire base",
    "src": "/Firebase.png"
  },
  {
    "name": "Postger SQL",
    "src": "/postger.png"
  },
  {
    "name": "My SQL",
    "src": "/mysql.png"
  },
  {
    "name": "Prisma",
    "src": "/prisma.webp"
  },
  {
    "name": "Graphql",
    "src": "/graphql.png"
  },
  {
    "name": "React Native",
    "src": "/ReactNative.png"
  },
  {
    "name": "Docker",
    "src": "/docker.webp"
  },
  {
    "name": "Figma",
    "src": "/figma.png"
  },
  {
    "name": "Adobe Suite",
    "src": "/adobe.png"
  },
  {
    "name": "Webflow",
    "src": "/webflow.png"
  }, {
    "name": "Wordpress",
    "src": "/wordpress.png"
  },
  {
    "name": "Nginx",
    "src": "/nginx.png"
  },
  {
    "name": "Amazon Web Services",
    "src": "/aws.png"
  }
]
