import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  ruby,
  go,
  maropost,
  nimbuspost,
  eCommerce,
  finance,
  portfolio,
  aditya,
  kunika,
  kajal,

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
    title: "Node.js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Go-lang Developer",
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
    name: "React JS",
    icon: reactjs,
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
    name: "git",
    icon: git,
  },
  {
    name: "Go-lang",
    icon: go,
  },
  {
    name: "Ruby on Rails",
    icon: ruby,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Nimbuspost",
    icon: nimbuspost,
    iconBg: "#383E56",
    date: "July 2024 - Present",
    points: [
      "Eliminated DB query bottleneck in Serviceability & Pricing APIs by redesigning the data access layer with in-memory caching and goroutine-based parallel processing, reducing calls from 50+ per OD pair to a fixed 11 total across 1000+ pairs and cutting response time from 3s (linear scaling) to 2.5s (near-constant scaling).",

      "Centralized authentication across 10+ backend services by architecting and shipping a standalone JWT-based Auth microservice from scratch, eliminating duplicated auth logic and reducing the attack surface for security vulnerabilities system-wide.",

      "Improved delivery success rates by 15% by designing a Smart Allocation engine that dynamically ranks and selects couriers based on seller preferences, directly reducing fulfillment costs for sellers and improving end-customer experience.",

      "Accelerated frontend-backend integration cycles by collaborating directly with the frontend team on API contracts and response design, while simultaneously mentoring 3 interns through code reviews, debugging sessions, and backend best practices.",

      "Expanded payment infrastructure coverage by integrating multiple payment gateways (BillDesk, EaseBuzz) into the existing payments microservice, enabling broader payment optionality for sellers without disrupting existing flows.",

      "Cut production debugging time by 35% by introducing structured, meaningful logging across the system, exporting logs to CloudWatch, and instrumenting the codebase with CubeAPM using OpenTelemetry for full metrics, traces, and log visibility.",
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "Maropost",
    icon: maropost,
    iconBg: "#383E56",
    date: "July 2023 - June 2024",
    points: [
      "Optimized API performance, reducing response times by 15%, leading to a smoother user experience.",
      "Refactored and optimized database queries, reducing query execution time by 20%, improving system performance.",
      "Collaborated cross-functionally with product and engineering teams to implement new features and resolve technical challenges.",
      "Contributed to bug fixes, code refactoring, and feature enhancements, ensuring robust system performance.",
      "Followed Agile development practices and actively participated in code reviews to improve code quality and maintainability.",
    ],
  },
  {
    title: "Software Trainee",
    company_name: "Maropost",
    icon: maropost,
    iconBg: "#383E56",
    date: "Jan 2023 - July 2023",
    points: [
      "Gained hands-on experience in backend development using Ruby on Rails and Golang.",
      "Worked on bug fixes, code optimizations, and small feature enhancements, improving overall system efficiency.",
      "Learned and applied best practices for database design, API development, and software architecture.",
      "Collaborated with senior engineers to understand scalable system design and software development workflows.",
      "Participated in code reviews and agile development processes, enhancing code quality and teamwork.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Working at Amazon, I know what it takes to deliver quality software. Akshat's work ethic, problem-solving skills, and passion for development really stand out.",
    name: "Aditya Jain",
    designation: "CSE II",
    company: "Amazon",
    image: aditya,
  },
  {
    testimonial:
      "Akshat's dedication to learning and building real-world projects is truly commendable. I've seen him grow into a thoughtful and skilled developer who’s always eager to improve.",
    name: "Kunika Malhotra",
    designation: "SDE II",
    company: "Microsoft",
    image: kunika,
  },
  {
    testimonial:
      "Akshat and I started our careers together, and it's been amazing to see how far he’s come. His curiosity and consistency in learning new technologies always inspired me. He’s not just a great developer but also a great problem solver.",
    name: "Kajal Narang",
    designation: "SRE",
    company: "Cimpress",
    image: kajal,
  },
];

const projects = [
  {
    name: "E-commerce",
    description:
      "Web-based eCommerce platform that allows users to search, buy and add to cart products. Also have a admin dashboard to add and manage products ",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "expressjs",
        color: "red-text-gradient",
      },
    ],
    image: eCommerce,
    source_code_link: "https://github.com/Akshatjain5868/e-commerce-MERN.git",
  },
  {
    name: "Finance Dashboard",
    description:
      "A dashboard that allows user to visualize key data points necessary in financial institutes. Allows user to see data points in various types of graphs and charts",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "expressjs",
        color: "red-text-gradient",
      },
    ],
    image: finance,
    source_code_link: "https://github.com/Akshatjain5868/Finance-Dashboard.git",
  },
  {
    name: "Portfolio Website",
    description:
      "A platform to showcase my skills, experience and projects along with testimonials. Lets connect and together shape our ideas into a product",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Akshatjain5868/portfolio.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
