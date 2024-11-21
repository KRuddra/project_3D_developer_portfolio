import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Waterloo Student",
    icon: web,
    link: "https://cs.uwaterloo.ca/",
  },
  {
    title: "Web App Developer",
    icon: mobile,
    link: "https://github.com/KRuddra/Symbiote",
  },
  {
    title: "Quantum Computing Educator",
    icon: creator,
    link: "https://www.quetzal.co.in/company/about-us",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Lifeguard / Swim Instructor",
    company_name: "City of Toronto",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June. 2020 - Aug. 2023",
    points: [
      "Ensured a safe aquatic environment for participants through supervision, accident prevention, rescue skills, public education and public relations",
      "Ensures the safety and supervision of participants in the pool area",
      "Ensures compliance with the Ontario Health Regulations and all relevant policy and procedures manuals",
      "Ensures that the equipment is in place and operational and that the equipment is stored away after use",
      "Taught childrens between the ages of 5-19 on basic swimming skills as well as advanced life saving techniques",
    ],
  },
  {
    title: "Quantum Software Researcher",
    company_name: "University of Toronto",
    icon: shopify,
    iconBg: "#383E56",
    date: "Dec. 2022 – Jan. 2023",
    points: [
      "Researched Shor’s Algorithm with students from the University of Toronto and its impacts on cybersecurity in the real world",
      "Delved into the mathematical and physical proofs behind Shor’s Algorithm, understanding its future technological impact",
      "Completed and published this research paper through the University of Toronto",
    ],
  },
  {
    title: "Student Researcher",
    company_name: "University of Waterlo",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Aug. 2023 – Sept. 2023",
    points: [
      "Studied Quantum Computing and Quantum Mechanics in depth with professors and Ph.D. students",
      "Created quantum circuits using IBM Qiskit to run different programs via quantum computing",
      "Conducted labs in the RAC and IQC buildings on the different properties of Quantum Mechanics",
    ],
  },
  {
    title: "Co-Founder",
    company_name: "Quetzal",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Aug. 2023 - Present",
    points: [
      "Co-founded a quantum education start-up that teaches quantum mechanics worldwide through courses",
      "Led a team of 5+ people to create different quantum education courses, and manage and raise finances",
      "Maintained and built a dynamic website for the start-up using Next.Js and the MERN stack",
      "Taught and up-skilled over 2,500 students participate in them from more than 25 countries",
      "Established partnerships with the University of Waterloo’s Institute of Quantum Computing and The Perimeter Institute",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Playing sports is a large part of my life, I enjoy basketball, ultimate frisbee and competitve swimming. Recently have been enjoying Table Tennis as well!",
    name: "Sports",
    image: "https://rockytopsportsworld.com/wp-content/uploads/2019/07/sports-balls.jpg",
  },
  {
    testimonial:
      "I enjoy programming on the side, especially making new projects that help me in my everyday life such as Symbiote that I am able to use for myself!",
    name: "Programming",
    image: "https://designli.co/hubfs/Imported_Blog_Media/chris-ried-ieic5Tq8YMk-unsplash.jpg",
  },
];

const projects = [
  {
    name: "IntroSpectacle",
    description:
      "IntroSpectacle is a real-time facial detection system that helps users remember names, conversations, and hobbies during social interactions.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "ai-integration",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/vinny-nguyen/IntroSpectacle",
  },
  {
    name: "Symbiote",
    description:
      "Symbiote is a SaaS AI platform supporting image generation, AI-Chat bot integration and music generation, all with 5 different modes for all your AI-needs",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/KRuddra/Symbiote",
  },
  {
    name: "NextImage AI",
    description:
      "NextImage AI is a full-stack web application thatUtilizes the OpenAI API to generate images based on given or random prompts and features a community page where shared images are displayed from MongoDB",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/KRuddra/NextImage_AI",
  },
];

export { services, technologies, experiences, testimonials, projects };
