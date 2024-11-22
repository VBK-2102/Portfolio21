import {
  mobile,
  backend,
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

} from "../assets";
import project1 from "../assets/projects/project-1.jpg"; 
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Software Development Engineer",
    icon: mobile,
  },
  {
    title: "Data Scientest",
    icon: backend,
  },
];

const technologies = [
  { 
    name: "Python",
    icon:redux,
  },
  {
    name:"c",
    icon:figma,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name:"Sql",
    icon:mongodb,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name:"Pandas",
    icon : tailwind,
  },
  {
    name:"falsk",
    icon: docker,
  },

];

const experiences = [
  {
    title: " Team Lead - Software Development Engineer (SDE) Intern",
    company_name: " Bluestock Fintech",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Nov 2024 - Dec 2024",
    points: [
      "Led a team in developing a web application and REST API for IPO details." ,
      "focusing on quality and security. Oversaw task management, daily updates, and weekly progress reporting","Contributed to backend development with Django, database integration, and UI/UX design implementation.",
    ],
  },
  {
    title: "Internship",
    company_name: "TEQUED Labs",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Nov 2022",
    points: [
      "Completed coursework that covered cybersecurity fundamentals",
      " ethical hacking practices, and Python",
      " enhancing skills in securing systems and understanding vulnerabilities.",
    ],
  },
  {
    title: "Internship",
    company_name: "TEQUED Labs",
    icon: shopify,
    iconBg: "#383E56",
    date: "Oct 2023 - Dec 2023",
    points: [
      "Python programming, enhancing skills in securing systems and understanding vulnerabilities.Pandas ,Python Libraries",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [{
  name: "Plant Disease Detection System",
  description:
    "A crucial tool for modern agriculture that uses Convolutional Neural Networks built in PyTorch to detect plant diseases efficiently.",
  tags: [
    {
      name: "python",
      color: "blue-text-gradient",
    },
    {
      name: "pytorch",
      color: "green-text-gradient",
    },
    {
      name: "machine learning",
      color: "pink-text-gradient",
    },
  ],
  image: project1,
  source_code_link: "https://github.com/VBK-2102/plant_disease_detection.git",
},
{
  name: "Data Science Project",
  description:
    "Led the end-to-end process of gathering, cleaning, visualizing, and modeling data using Python.",
  tags: [
    {
      name: "python",
      color: "blue-text-gradient",
    },
    {
      name: "data analysis",
      color: "green-text-gradient",
    },
  ],
  image: project2,
  source_code_link: "https://github.com/VBK-2102/Data-science-.git",
},
{
  name: "Heart Disease Prediction",
  description:
    "Built machine learning models to predict heart disease based on clinical features, achieving an accuracy of 86%.",
  tags: [
    {
      name: "python",
      color: "blue-text-gradient",
    },
    {
      name: "machine learning",
      color: "green-text-gradient",
    },
    {
      name: "data visualization",
      color: "pink-text-gradient",
    },
  ],
  image: project3,
  source_code_link: "https://github.com/VBK-2102/Heart-Disease-Prediction.git",
},
{
  name: "Farmer Management System",
  description:
    "A web-based platform developed using Python Flask to streamline the sale and purchase of agricultural products.",
  tags: [
    {
      name: "python",
      color: "blue-text-gradient",
    },
    {
      name: "flask",
      color: "green-text-gradient",
    },
    {
      name: "mysql",
      color: "pink-text-gradient",
    },
  ],
  image: project4,
  source_code_link: "https://github.com/VBK-2102/FMS.git",
},
{
  name: "Skin Disease Detection",
  description:
    "An advanced system for diagnosing skin diseases through image recognition, utilizing deep learning techniques for accurate results.",
  tags: [
    {
      name: "python",
      color: "blue-text-gradient",
    },
    {
      name: "deep learning",
      color: "green-text-gradient",
    },
    {
      name: "image processing",
      color: "pink-text-gradient",
    },
  ],
  image: project5,
  source_code_link: "https://github.com/VBK-2102/Skin_dieseases_detection",
},

];

export { services, technologies, experiences, testimonials, projects };