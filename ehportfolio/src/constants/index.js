import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I'm a Full Stack Developer with over 8 years of experience in hospitality and customer service, now diving deep into the world of web development. Proficient in JavaScript, React, HTML, and CSS, I love learning, and continually expanding my skill set, and I'm  ready to tackle exciting new challenges in tech.
`;

export const ABOUT_TEXT = `I’m Evan Hiltunen, a Full Stack Developer with a passion for creating dynamic and user-friendly web applications. My journey into tech began after over 8 years in the hospitality industry, where I honed my problem-solving skills, attention to detail, and ability to thrive in fast-paced environments. These experiences have uniquely positioned me to approach web development with a focus on both functionality and user experience.

Armed with a BA in Communications and a Software Engineering Certificate from Fullstack Academy, I’ve dedicated myself to mastering technologies like JavaScript, React, HTML5, CSS3, Node.js, and Express.js. 

Currently, I’m diving into Java, AWS, Bootstrap, and Tailwind to further enhance my ability to create cutting-edge web solutions. My goal is to continue growing as a developer, taking on challenging projects that push the boundaries of what’s possible in web development.

When I’m not coding, I enjoy exploring the vibrant culture of New Orleans, collecting records, DJing, & cycling. I’m excited about the future of web development and look forward to contributing to innovative projects that make a difference.

Let’s connect and see how we can collaborate on building something great!`;

export const EXPERIENCES = [
  {
    year: "2019 - Present",
    role: "Bar Manager",
    company: "Bacchanal Fine Wine & Spirits",
    description: `Lead a small team in a fast-paced, customer-focused environment. Trained & mentored staff, maintained clear and regular communications and expectations, collaborated on development of new products, implemented menu changes, tracked inventory for cost, waste, and efficiency. `,
    technologies: [],
  },
  {
    year: "Sept 2023-Mar 2024",
    role: "Fullstack Academy Web Development Boot Camp",
    company: "Fullstack Academy",
    description: `Immersive full stack boot camp with units on front end tech, middleware, and backend tech. Hands-on learning with dedicated instructors and several practical projects from vanilla JS up to full stack projects`,
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "React.JS",
      "node.js",
      "Postgres",
      "REST APIs",
    ],
  },
  {
    year: "2015 - 2019",
    role: "Bartender",
    company: "Various Bars & Restaurants",
    description: `Front of house in businesses between Boston, MA & New Orleans, LA Honing skills as a cocktail bartender, guest experience, and restaurant staffer`,
    technologies: [],
  },
  {
    year: "2013 - 2015",
    role: "General Manager",
    company: "1369 Coffeehouse",
    description: `Overseeing day-to-day operations in a high-volume cafe, managing a 1MM/year budget, interviewing, hiring, and training new staff. Organizing staff meetings, setting agendas, running meetings. Maintining inventory and cost of goods.`,
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website, FakeStore API",
    image: project1,
    description:
      "A front-end functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "REST APIs"],
    url: "https://eh-capstone.netlify.app/",
  },
  {
    title: "Open-METEO Weather App ",
    image: project2,
    description:
      "A SPA weather app that uses location-based weather API data from Open-Meteo",
    technologies: ["HTML", "CSS", "Javascript", "REST APIs", "React"],
    url: "https://meteo-api-weather-app.netlify.app/",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information. You're here right now!",
    technologies: ["HTML", "CSS", "React", "Tailwind", "Framer Motion"],
    url: "https://github.com/evanh237/ehportfolio",
  },
  {
    title: "Movie Preview Website",
    image: project4,
    description: "A MERN stack project for a movie preview website",
    technologies: ["HTML", "CSS", "Java", "Spring Boot", "Mongo DB", "React"],
    url: "https://github.com/evanh237/movie-fullstack",
  },
];

export const CONTACT = {
  address: "New Orleans, LA ",
  phoneNo: "508-577-7534 ",
  email: "evanh237@gmail.com",
};
