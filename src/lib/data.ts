// skills Icons from react-icons
import ReactjsIcon from "../assets/react-js-icon.svg";
import NextjsIcon from "../assets/nextjs-icon.svg";
import ReduxIcon from "../assets/redux-icon.svg";
import JavacriptIcon from "../assets/javascript-icon.svg";
import HtmlIcon from "../assets/html-icon.svg";
import CssIcon from "../assets/css-icon.svg";
import SassIcon from "../assets/sass-icon.svg";
import TailwindCssIcon from "../assets/tailwind-icon.svg";
import MaterialUiIcon from "../assets/material-ui-icon.svg";
import FramerMotionIcon from "../assets/framer-icon.svg";
import NodejsIcon from "../assets/nodejs-icon.svg";
import ExpressjsIcon from "../assets/express-icon.svg";
import DjangoIcon from "../assets/django-icon.svg";
import MongodbIcon from "../assets/mongodb-icon.svg";
import GitIcon from "../assets/git-icon.svg";
import GithubIcon from "../assets/github-icon.svg";
import BootstrapIcon from "../assets/bootstrap-icon.svg";

// Project Images
import JiraEstimator from "../assets/Jira Estimator.png";
import GroxAI from "../assets/GroxAI.png";
import PasswordManager from "../assets/Password-manager.png";
import MusicPlayerImage from "../assets/Music-player.png";

export const skills = [
  { id: 101, icon: ReactjsIcon.src, name: "React.js" },
  { id: 102, icon: NextjsIcon.src, name: "Next.js" },
  { id: 103, icon: ReduxIcon.src, name: "Redux" },
  { id: 104, icon: JavacriptIcon.src, name: "Javascript" },
  // { id: 105, icon: ReactjsIcon.src, name: 'React Native' },
  { id: 106, icon: HtmlIcon.src, name: "HTML5" },
  { id: 107, icon: CssIcon.src, name: "CSS3" },
  // { id: 108, icon: SassIcon.src, name: 'SASS' },
  { id: 109, icon: TailwindCssIcon.src, name: "Tailwind" },
  { id: 110, icon: MaterialUiIcon.src, name: "MUI" },
  { id: 111, icon: FramerMotionIcon.src, name: "Framer" },
  { id: 112, icon: NodejsIcon.src, name: "Node.js" },
  // { id: 113, icon: ExpressjsIcon.src, name: 'Express.js' },
  { id: 114, icon: BootstrapIcon.src, name: "Bootstrap" },
  // { id: 115, icon: MongodbIcon.src, name: 'Mongodb' },
  { id: 116, icon: GitIcon.src, name: "Git" },
  { id: 117, icon: GithubIcon.src, name: "Github" },
] as const;

export const navbarItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  // { name: 'Experience', link: '#experience' },
  { name: "Projects", link: "#projects" },
] as const;

export const projectDetails = [
  {
    name: "Jira-Estimator",
    image: JiraEstimator.src,
    gitHubLink: "https://github.com/shahnawaz46/chatApp-frontend",
    websiteLink: "https://jira-estimator.vercel.app",
    stack: [
      { id: 1, name: "React.js" },
      { id: 2, name: "Jira-API" },
      { id: 3, name: "Generative-AI" },
      { id: 4, name: "Docker" },
    ],
    about:
      "Developed a web application that integrates with the Jira API, allowing users to input their API key and story ID to automatically generate editable sub-tasks and time estimates using Generative AI, streamlining the Agile workflow and reducing manual effort.",
  },
  {
    name: "Grox-AI",
    image: GroxAI.src,
    gitHubLink: '',
    websiteLink: "https://groxai.vercel.app",
    stack: [
      { id: 1, name: "React.js" },
      { id: 2, name: "Google API" },
      { id: 3, name: "JWT tokens" },
      { id: 4, name: "Shadcn UI" },
      // { id: 5, name: "Razor" },
    ],
    about:
      "Developed the front-end of a web application that conducts mock interviews based on user-uploaded resumes and job descriptions, providing tailored feedback on required skills. Implemented secure authentication and authorization using JWT tokens, ensuring user verification and session management for a seamless and protected user experience.",
  },
  
] as const;

export const experienceDetails = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    companyName: "Nicheby Pvt Ltd",
    date: "December 2022 - May 2023",
    location: "Delhi, India",
    tasks: [
      {
        id: 11,
        description:
          "Assisted in the development of Next.js-based projects, gaining hands-on experience in building dynamic and interactive web applications.",
      },
      {
        id: 12,
        description:
          "Contributed to the optimization of web performance through efficient use of React components, state management, and server-side rendering techniques",
      },
    ],
  },
  {
    id: 2,
    title: "Frontend Developer Intern",
    companyName: "Nicheby Pvt Ltd",
    date: "December 2022 - May 2023",
    location: "Delhi, India",
    tasks: [
      {
        id: 21,
        description:
          "Assisted in the development of Next.js-based projects, gaining hands-on experience in building dynamic and interactive web applications.",
      },
      {
        id: 22,
        description:
          "Contributed to the optimization of web performance through efficient use of React components, state management, and server-side rendering techniques",
      },
    ],
  },
] as const;
