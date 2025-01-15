// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
import expressjs from "./assets/images/Skills/expressjs.png";
import c from "./assets/images/Skills/C.png";
import javascript from "./assets/images/Skills/javascript.png";
import css from "./assets/images/Skills/css.png";
import html from "./assets/images/Skills/html.png";
import mongodb from "./assets/images/Skills/mongodb.png";
import tailwind from "./assets/images/Skills/tailwind.png";
import git from "./assets/images/Skills/git.png"

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import catering from "./assets/images/Projects/catering.png"
import person_project from "./assets/images/projects/person.png";
import review from "./assets/images/Projects/review.png"

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TbSmartHome } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";

import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { FaHireAHelper } from "react-icons/fa";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
    {
      link: "#hireme",
      icon: FaHireAHelper,
    },
  ],
  hero: {
    titileName: "Hi, iam Ziyad",
    title: "Full Stack Developer",
    firstName: "MUHAMMED",
    LastName: "ZIYAD",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "1+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "2+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      // {
      //   name: "Figma",
      //   para: "Lorem ipsum text  dummy",
      //   logo: figma,
      // },
      {
        name: "C",
        para: "Lorem ipsum text  dummy",
        logo: c,
      },
      {
        name: "Java Script",
        para: "Lorem ipsum text  dummy",
        logo: javascript,
      },
      {
        name: "Html",
        para: "Lorem ipsum text  dummy",
        logo: html,
      },
      {
        name: "Css",
        para: "Lorem ipsum text  dummy",
        logo: css,
      },
      {
        name: "Tailwind",
        para: "Lorem ipsum text  dummy",
        logo: tailwind,
      },
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "Node js",
        para: "Lorem ipsum text  dummy",
        logo: nodejs,
      },
      {
        name: "Express js",
        para: "Lorem ipsum text  dummy",
        logo: expressjs,
      },
      {
        name: "MongoDB",
        para: "Lorem ipsum text  dummy",
        logo: mongodb,
      },
      {
        name: "Git",
        para: "Lorem ipsum text  dummy",
        logo: git,
      },

      // {
      //   name: "Adobe Photoshop",
      //   para: "Lorem ipsum text  dummy",
      //   logo: ps,
      // },

      // {
      //   name: "Sketch",
      //   para: "Lorem ipsum text  dummy",
      //   logo: sketch,
      // },
      // {
      //   name: "Python",
      //   para: "Lorem ipsum text  dummy",
      //   logo: python,
      // },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "I specialize in creating dynamic and responsive web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js). My services include building user-friendly interfaces, scalable backend systems, seamless API integrations, and efficient database solutions to bring your ideas to life.",
        logo: services_logo1,
      },
      // {
      //   title: "ui / ux DESIGNING",
      //   para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
      //   logo: services_logo2,
      // },
      // {
      //   title: "PhotoShop Editing",
      //   para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
      //   logo: services_logo3,
      // },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Reviews",
        image: review,
        details : "GRB SOFTWARE is a web-based application that allows users to scan a QR code and provide reviews."
      },
      {
        title: "Event Management ERP Software",
        image: catering,
        details:"Alfa Event Management ERP Software, Site Booking for Employees"
      },
      
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Looking for a skilled MERN stack developer to bring your project to life? With expertise in designing dynamic and scalable web applications, I provide solutions tailored to your needs. Let's collaborate to create impactful and user-friendly digital experiences.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "ziyadmangalasseri@gmail.com",
        icon: GrMail,
        // link: "ziyadmangalasseri@gmail.com",
      },
      {
        text: "+91 81 1180 7089",
        icon: FaWhatsapp,
        link: "https://wa.me/+918111807089",
      },
      {
        text: "emziyaad",
        icon: BsInstagram,
        link: "https://www.instagram.com/emziyaad?igsh=MThuZWlnbmYyaGF2Yg==",
      },
      {
        text: "ziyadmangalasseri",
        icon: FaGithub,
        link: "https://github.com/ziyadmangalasseri",
      },
      {
        text: "ziyadmangalasseri",
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/ziyad-mangalasseri-249a522ab/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
