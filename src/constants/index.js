import { backgroundIntensity, screenSize } from "three/src/nodes/TSL.js";
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
  // docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  // Ruby,
  Ruby,
  Python,
  Java,
  php,
  AWS,
  Sql,
} from "../assets";
import { color } from "framer-motion";

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
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Full-Stack Developer",
    icon: mobile,
  },
  {
    title: "AI Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: creator,
  },
  // {
  //   title: "Machine Learning",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "Python",
    icon: Python,
    backgroundIntensity: 70,
    brightness: 50,
  },
  {
    name: "Ruby",
    icon: Ruby,
    backgroundIntensity: 70,
    brightness: 50,
  },
  {
    name: "Java",
    icon: Java,
  },
  // {
  //   name: "Ruby",
  //   icon: Ruby,
  // },
  {
    name: "php",
    icon: php,
  },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "AWS",
    icon: AWS,
  },
  {
    name: "Sql",
    icon: Sql,
  },
  // {
  //   name: "Ruby",
  //   icon: Ruby,
  // },
];

const experiences = [
  {
    title: "Software Developer",
    // company_name: "Starbucks",
    // icon: starbucks,
    // iconBg: "#383E56",
    date: "February-2023 - June-2023",
    points: [
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
      "Gained hand on experience in software engineering and implemented skills on real life projects accepted by University",
    ],
  },
  {
    title: "Full stack Developer",
    // company_name: "Tesla",
    // icon: tesla,
    iconBg: "#E6DEDD",
    date: "July-2023 - August-2024 ",
    points: [
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
      "Gained hand on experience in full stack development and successfully completed the project based on full stack engineering",
    ],
  },
  {
    title: "Web Developer",
    // company_name: "Shopify",
    // icon: shopify,
    iconBg: "#383E56",
    date: "September 2023 - December 2023",
    points: [
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",

      // "Participating in code reviews and providing constructive feedback to other developers.",
      "Gained hand on experience in web development.",
    ],
  },
  {
    title: "Python with AI",
    // company_name: "Meta",
    // icon: python,
    iconBg: "#E6DEDD",
    date: "Novemember2023 - December2024",
    points: [
      "Gained hand on experience in project based workshop with python",
      //
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought i will never be back in it field because in my last semester, I was suffering from TB, and it took 7months to complete the treatment . However, overcoming those obstacles and completing my treatment has reinvgorated my passion for technology and problem-solving",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I battled through a serious illness that kept me away from my passion for long time.However, my determination to return to the IT field never wavered, and I'm now more committed than ever to leveraging my skills in this industry",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "My experience taught me resilence and determination.I'm grateful for the opportunity to return to the IT field and apply my skills and knowledge in this ever-evolving industry",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Online Voting System using php",
    description:
      "Presented a compiling case for the development of an online voting system with image integration facility for voters, integrated various Apis to enable interaction with external services,  implemebte functionality to export voting results to excel format, facilitating transparency in election.",
    tags: [
      {
        name: "Php",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "jquery",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrapp",
        color: "Red-text-gradient",
      },
      {
        name: "Sql",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://th.bing.com/th/id/OIP.L-x-fhtsfOJaxVC_87N13gHaE6?rs=1&pid=ImgDetMain",
    source_code_link: "https://google.com/",
  },
  {
    name: "Task_Nexus",
    description:
      "Developed a full-stack task management system enabling users to create, update, and manage tasks efficiently. Integrated a RESTful API with React frontend for seamless task operations and authentication. Ensured an intuitive UI with state management and API handling for optimal performance.",
    tags: [
      {
        name: "Ruby on Rails",
        color: "red-text-gradient",
      },
      {
        name: "React(vite)",
        color: "green-text-gradient",
      },
      {
        name: "Sql",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "Red-text-gradient",
      },
      {
        name: "Postman",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://www.learnist.org/wp-content/uploads/2020/07/The-Top-10-Interview-Questions-That-Help-You-In-Hiring-A-Ruby-On-Rails-Developer-e1595059293227.jpg",
    source_code_link: "https://google.com/",
  },
  {
    name: "GoFood",
    description:
      "Developed a full-scale application using MERN Stack, Implemented user authentication and authorization, product catalog, shopping cart functonality, password safety and integrated multiple Apis.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: "https://i.ytimg.com/vi/zKwI-Ft_DTk/maxresdefault.jpg",
    source_code_link: "https://google.com/",
  },
  {
    name: "Salary Prediction System",
    description:
      "Developed a robust AI model to forecast potential salaries for job seekers and tested it with various sample .",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      // {
      //   name: "css",
      //   color: "pink-text-gradient",
      // },
    ],
    image: "https://www.samaa.tv/images/artificial-intelligence-ai.jpg",
    // source_code_link: "https://google.com/",
    screenSize: "20px",
  },
];

export { services, technologies, experiences, testimonials, projects };
