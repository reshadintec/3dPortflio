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
  hbperfumes,
  thofkg,
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
];

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
];

const testimonials = [
  {
    testimonial:
      "It's been more than 5 years that I know Reshad and I call him for any project that I have. If he is busy his suggestion is valuable.",
    name: "David Goldman",
    designation: "CEO",
    company: "Exxon Mining",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Reshad does. We had him for several projects.",
    name: "Jodie Gray",
    designation: "COO",
    company: "Moorhall Venue",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "We wanted a multi site onlineshop and we got what we wanted. Every functionality that team asked Reshad made them happen.",
    name: "Milad Akbari",
    designation: "CTO",
    company: "Fragrance House",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
  },
];

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
    source_code_link: "https://diana-boutique-2avq.vercel.app/",
  },
  {
    name: "HB Perfumes",
    description:
      "Website for the biggest perfumes and comsetics provider in Afghanistan. The design was inspired from the products and overall look of the stores.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: hbperfumes,
    source_code_link: "https://hbperfumes.af/",
  },
  {
    name: "The House of Fragrance",
    description:
      "A multi-site onlineshop that is focused to sell perfumes across central asia region. The ecommerce project is built with precise details for every region.",
    tags: [
      {
        name: "woocommerce",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
    ],
    image: thofkg,
    source_code_link: "https://thehouseoffragrance.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
