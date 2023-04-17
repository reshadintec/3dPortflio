import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  bootstrap,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  wordpress,
  hb,
  globe,
  moeafg,
  sct,
  diana,
  jobit,
  tripguide,
  threejs,
} from "../assets"

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
]

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "WordPress Expert",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Ecommerce Webmaster",
    icon: creator,
  },
]

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
    name: "Bootstrap",
    icon: bootstrap,
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
    name: "wordpress",
    icon: wordpress,
  },
]

const experiences = [
  {
    title: "Junior Web Developer",
    company_name: "Ministry of Education Afghanistan",
    icon: moeafg,
    iconBg: "#E6DEDD",
    date: "Feb 2014 - May 2015",
    points: [
      "Developing and maintaining websites for Ministry of Education and other deputy deirectories.",
      "Collaborating with cross-functional teams including software developers, pulic relation managers, and other developers to make the websites up to date.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web and Campaign Developer",
    company_name: "HB Perfumes",
    icon: hb,
    iconBg: "#383E56",
    date: "May 2015 - Aug 2017",
    points: [
      "Developing and maintaining websites and ecommerce solutions using WordPress, Woocommerce, OpenCart and Shopify.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to design high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Leading SEO,SEA and Social Media campaigns for the company's websites and partners.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "State Corps Turkey",
    icon: sct,
    iconBg: "#383E56",
    date: "Aug 2017 - Oct 2019",
    points: [
      "Developing and maintaining existing websites of Statecorps Group.",
      "Developing and maintaining new websites for new branches of State Corps around the world.",
      "Creating a project management web application for State Corps to manage all the projects and employees all around the world.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      
    ],
  },
  {
    title: "Web Developer/ Designer",
    company_name: "Freelancer",
    icon: globe,
    iconBg: "#D1DEDD",
    date: "Aug 2014 - Present",
    points: [
      "It has been my pleasure to have been working with some successful entrepreneurs and companies all around the globe.",
      "Collaborating with teams, individuals and professionals to create a digital solution.",
      "Websites, Web Applications, Ecommerce Webistes, ... you name it.",
      "Developed some fun projects along the way as well. Things are rapidly changing in the industry.",
    ],
  },
]

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
]

const projects = [
  {
    name: "Diana Boutique",
    description:
      "A redesign of the original Diana Boutique website. The front-end is built using NextJs and Tailwind while the back-end and products are built using Sanity. ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: diana,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
]

export { services, technologies, experiences, testimonials, projects }
