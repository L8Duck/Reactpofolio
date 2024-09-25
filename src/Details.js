// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo.svg";
// Profile Image
import profile from "./assets/profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Nguyen Dang Khoa",
  tagline: "I am a web developer",
    img: profile,
  about: `I'm have been study at Can Tho University since 2022. Now I'm a junior student in Data communication and computer network. My research interests include web development with frontend as React and backend as Nodejs-expressjs.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "www.linkedin.com/in/ndkhoa1000",
  github: "https://github.com/L8Duck",
  twitter: "https://twitter.com/Khoa_nguyen28",
  instagram: "https://www.instagram.com/",
};

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor in Data Communication and Computer network",
    Company: `Can Tho University`,
    Location: "Vietnam",
    Type: "Ongoing",
    Duration: "Aug 2022 - Present",
  },
  {
    Position: "Fullstack developer Cerificate",
    Company: "Zero to Master",
    Location: "Online",
    Type: "Completed",
    Duration: "May 2023 - Oct 2023",
  },
  {
    Position: "Python developer Cerificate",
    Company: "Zero to Master",
    Location: "Online",
    Type: "Completed",
    Duration: "Jun 2024 - Aug 2024",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Smart brain",
    image: projectImage1,
    description: `A fullstack app with PERN stack as essential AI platform`,
    techstack: "React, ExpessJS, NodeJS, PostgreSQL",
    previewLink: "https://smartbrain.io/",
    githubLink: "https://github.com/L8Duck/smart-brain",
  },
  {
    title: "Pola",
    image: projectImage2,
    description: `A beautiful Web to celebrate Motherday for Japan Explore company`,
    techstack: "ThreeJS,JavaScript, Python",
    previewLink: "https://www.pola.co.jp/special/o/wecaremore/mothersday/",
    githubLink: "https://github.com",
  },
  {
    title: "AnoKuni",
    image: projectImage3,
    description: `3D web stimulate car game on top of NodeJS`,
    techstack: "ThreeJS, NodeJS, JavaScript",
    previewLink: "https://threejs.org/examples/webgl_materials_car.html",
    githubLink: "https://github.com",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "ndkhoa1000@gmail.com",
  phone: "+0914 143 143",
};
