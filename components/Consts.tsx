import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGithub,
  SiWhatsapp,
  SiInstagram,
  SiLinkedin,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiMaterialui,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiSequelize,
  SiSass,
  SiStyledcomponents,
  SiGit,
  SiMongodb,
  SiAngular,
} from "react-icons/si";
import { SlLocationPin } from "react-icons/sl"
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi"
import { FiCode } from "react-icons/fi";
import { HiOutlineDatabase } from "react-icons/hi";
import { BsFillHddNetworkFill } from "react-icons/bs";

export const aboutMe: string[] = [
//   "Desarrollador Full Stack ubicado en Jujuy - Argentina.",
//   "Tengo una gran pasion por los efectos de interfaz de usuario.",
//   "Disfruto mucho trabajar en equipo.",
//   "Persona bien organizada, solucionador de problemas.",
//   "Me encuentro reforzando conocimientos en Next.js, TypeScript, Angular.",
//   "Actualmente estoy buscando oportunidades.",
//   "Continuar aprendiendo y creciendo como desarrollador.",
  "Apasionado Desarrollador Frontend / Full stack con gran pasion por los efectos de interfaz de usuario y gran interés en la tecnología y el desarrollo de software.",
  "He trabajado en proyectos personales y grupales donde he demostrado habilidades de liderazgo, así como habilidades de diseño y desarrollo de aplicaciones web.",
  "Priorizo ​​la calidad y la eficiencia, y disfruto trabajando en equipo para lograr objetivos comunes."
];

interface Tech {
  name: string;
  icon: JSX.Element;
  url: string;
  progress?: number
}

export const techsFrontEnd: Tech[] = [
  {
    name: "HTML 5",
    icon: <SiHtml5 />,
    url: "https://developer.mozilla.org/es/docs/Web/HTML",
    progress: 80,
  },
  {
    name: "CSS 3",
    icon: <SiCss3 />,
    url: "https://developer.mozilla.org/es/docs/Web/CSS",
    progress: 80,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    url: "https://developer.mozilla.org/es/docs/Web/JavaScript",
    progress: 70,
  },
  { name: "React js", icon: <SiReact />, url: "https://reactjs.org/", progress: 75,},
  { name: "Redux js", icon: <SiRedux />, url: "https://redux.js.org/", progress: 65, },
  {
    name: "Tailwind css",
    icon: <SiTailwindcss />,
    url: "https://tailwindcss.com/",
    progress: 70,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    url: "https://www.typescriptlang.org/",
    progress: 55,
  },
  { name: "Next js", icon: <SiNextdotjs />, url: "https://nextjs.org/", progress: 60, },
  { name: "Material UI", icon: <SiMaterialui />, url: "https://mui.com/", progress: 60, },
];

export const techsBackEnd: Tech[] = [
  { name: "Node js", icon: <SiNodedotjs />, url: "https://nodejs.org/", progress: 60, },
  { name: "Express js", icon: <SiExpress />, url: "https://expressjs.com/", progress: 60, },
];

export const techsDataBase: Tech[] = [
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    url: "https://www.postgresql.org/",
    progress: 45,
  },
  { name: "Sequelize", icon: <SiSequelize />, url: "https://sequelize.org/", progress: 45, },
];

export const techs: Tech[] = [
  {
    name: "HTML 5",
    icon: <SiHtml5 />,
    url: "https://developer.mozilla.org/es/docs/Web/HTML",
  },
  {
    name: "CSS 3",
    icon: <SiCss3 />,
    url: "https://developer.mozilla.org/es/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    url: "https://developer.mozilla.org/es/docs/Web/JavaScript",
  },
  { name: "React js", icon: <SiReact />, url: "https://reactjs.org/" },
  { name: "Next js", icon: <SiNextdotjs />, url: "https://nextjs.org/" },
  { name: "Angular", icon: <SiAngular />, url: "https://angular.io/" },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    url: "https://www.typescriptlang.org/",
  },
  { name: "Redux js", icon: <SiRedux />, url: "https://redux.js.org/" },
  {
    name: "Tailwind css",
    icon: <SiTailwindcss />,
    url: "https://tailwindcss.com/",
  },
  { name: "Material UI", icon: <SiMaterialui />, url: "https://mui.com/" },
  { name: "SASS", icon: <SiSass />, url: "https://sass-lang.com/" },
  {
    name: "Styled Components",
    icon: <SiStyledcomponents />,
    url: "https://styled-components.com/",
  },
  { name: "Node js", icon: <SiNodedotjs />, url: "https://nodejs.org/" },
  { name: "Express js", icon: <SiExpress />, url: "https://expressjs.com/" },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    url: "https://www.postgresql.org/",
  },
  { name: "Sequelize", icon: <SiSequelize />, url: "https://sequelize.org/" },
  { name: "MongoDB", icon: <SiMongodb />, url: "https://www.mongodb.com/" },
  { name: "Git", icon: <SiGit />, url: "https://git-scm.com/" },
];

export const services = [
  {
    icon: <FiCode />,
    title: "Desarrollador front-end",
  },
  {
    icon: <BsFillHddNetworkFill />,
    title: "Desarrollador back-end",
  },
  {
    icon: <HiOutlineDatabase />,
    title: "Desarrollador de base de datos",
  }
]

interface Project {
  title: string;
  description: string;
  image: string;
  lenguages: string[];
  demo: string;
  github: string;
}

export const myProjects: Project[] = [
  // {
  //     title: "",
  //     description: "",
  //     image: "",
  //     lenguages: ["React.js", "Material UI", "@nivo.rock", "@fullCalendar"],
  //     demo: "",
  //     github: "",
  // },
  {
    title: "MERN project - Movies App",
    description:
    "Me encuentro Realizando una App de peliculas, inpirado en una plataforma de Series y Peliculas como Netflix",
    image: "/mern.png",
    lenguages: [
      "React.js",
      "Styled.Component",
      "TypeScrypt",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    demo: "",
    github: "",
  },
  {
      title: "Login-Dashboard",
      description: "Proyecto personal, Donde Aplico mis conocimientos Aprendido del curso de FrontEnd con Angular sobre lazy loading, Formulario Reactivo, Rutas protegidas dependiendo el logeo correcto, etc.",
      image: "/login-angular.png",
      lenguages: ["Angular", "Typescript", "Material Angular", "SCSS"],
      demo: "https://login-angular-ibracardozo.vercel.app/",
      github: "https://github.com/ibracardozo7/login-angular",
  },
  {
      title: "Pokedex App",
      description: "Proyecto personal, donde aplico mis conocimientos y habilidades, Se trata de una app donde consumó una Api de Pokemones, con filtro de acuerdo al tipo de pokemon.",
      image: "/pokedex.png",
      lenguages: ["React.js", "TypeScript", "SCSS", "PokeApi"],
      demo: "https://pokedex-ibracardozo.vercel.app/",
      github: "https://github.com/ibracardozo7/pokedex-react-ts-scss",
  },
  {
    title: "Sanva: bitácora de Salud",
    description:
      "Proyecto que brinda mayor seguimiento de salud Personal. Participe como voluntario por 1 mes, Donde aporte mis conocimientos y habilidades en el Front End. Esta es nuestra primera versión de nuestra plataforma web/móvil, más adelante vamos a añadir nuevos roles y funcionalidades. Trabajando en equipo para un Startups de México.",
    image: "/sanva.png",
    lenguages: ["React.js", "Tailwind CSS", "JavaScript", "Zustand"],
    demo: "https://sanva-demo.netlify.app/user",
    github: "https://github.com/ArrascaetaFedericoIgnacio/SANVA-Proyect",
  },
  {
    title: "MERN project - Login / Register",
    description:
      "Proyecto personal donde aplico mis conocimientos aprendidos y aplicando nueva tegnologia utilizando Mongo Atlas",
    image: "/login.png",
    lenguages: [
      "React.js",
      "SCSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "Mongoose",
    ],
    demo: "https://ibra-login-register.vercel.app/",
    github: "https://github.com/ibracardozo7/login-register-MERN",
  },
  {
    title: "Admin dashboard app",
    description:
      "Proximamente estará terminado un mini proyecto de un dashboard con sus determinadas funciones, Una app creado con libreria de componentes de visulizacion de datos y calendario.",
    image: "/dashboard.png",
    lenguages: ["React.js", "Material UI", "@nivo.rock", "@fullCalendar"],
    demo: "https://ibra-dashboard.vercel.app/",
    github: "https://github.com/ibracardozo7/admin-react.js-mui",
  },
  {
    title: "Portafolio",
    description:
      "Portafolio de proyectos personal en el cual puedes ver mis trabajos y proyectos en los cuales he trabajado, fue desarrollado con tecnologías que fui aprendiendo y reforzando a la par.",
    image: "/porta.png",
    lenguages: ["React.js", "Next.js", "TypeScript", "Material UI"],
    demo: "https://ibrahimcardozo.vercel.app/",
    github: "https://github.com/ibracardozo7/portfolio2.0-next-ts-mui",
  },
  {
    title: "Gestios de Negocio: Liberfit gym",
    description:
      "Desarrollo de una Aplicación usando SCRUM y aplicando las tecnologías aprendidas durante el cursado del Bootcamp. Desarrollé mis actividades como Frontend Developer, usando Tailwind CSS para la estilización de sus componentes.",
    image: "/liberfit.png",
    lenguages: ["React.js", "TypeScript", "Redux.js", "Tailwind CSS", "Auth0"],
    demo: "https://gym-mthatwords.vercel.app/",
    github: "https://github.com/ibracardozo7/LiberFit-PF",
  },
  {
    title: "Proyecto Individual: Dogs App",
    description:
      "Aplicación creada con React.js, Redux y CSS en la cual puedes buscar razas de perros que estén disponibles en la API, ver sus detalles e imágenes, filtrarlos por tipo de razas y ordenarlos de distintas maneras.",
    image: "/dog.png",
    lenguages: [
      "React.js",
      "Redux.js",
      "CSS",
      "Node.js",
      "Express.js",
      "Sequelize",
      "PostgreSQL",
    ],
    demo: "https://ibracardozo-pi-dogs.vercel.app/",
    github: "https://github.com/ibracardozo7/PI-Dogs-main",
  },
  {
    title: "Proyecto : Ta-Te-ti || tres en rayas",
    description:
      "Aplicación creada con React.js, donde realizamos un juego tradicional en el cual aprendi logicas de javascript.",
    image: "/tateti.png",
    lenguages: ["React.js", "JavaScript", "CSS"],
    demo: "https://ta-te-ti-ibra7.vercel.app/",
    github: "https://github.com/ibracardozo7/ta-te-ti-react.js",
  },
  // {
  //   title: "Proyecto Individual: Pokemons App",
  //   description:
  //     "Aplicación creada con React.js, Redux para el Frontend. Esta aplicación consume datos de una base de datos que fueron cargados desde una API a través de un Backend creado con Express. Y sirve para buscar y mostrar datos de algún Pokémon y poder crear.",
  //   image: "/pokemon.png",
  //   lenguages: [
  //     "React.js",
  //     "Redux.js",
  //     "CSS",
  //     "Node.js",
  //     "Express.js",
  //     "Sequelize",
  //     "PostgreSQL",
  //   ],
  //   demo: "",
  //   github: "https://github.com/ibracardozo7/PI-Pokemon-main",
  // },
];

interface Network {
  icon: JSX.Element;
  name: string;
  url: string;
  subname?: string
}

export const networks: Network[] = [
  {
    name: "Github",
    icon: <SiGithub />,
    url: "https://github.com/ibracardozo7",
  },
  {
    name: "Linked In",
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/ibrahim-cardozo/",
  },
  { name: "Whatsapp", icon: <SiWhatsapp />, url: "http://wa.me/5493884702649" },
  {
    name: "Instagram",
    icon: <SiInstagram />,
    url: "https://www.instagram.com/ibracardozo7",
  },
];

export const networks2: Network[] = [
  {
    name: "Linked In",
    subname: "linkedin.com/in/ibrahim-cardozo/",
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/ibrahim-cardozo/",
  },
  { name: "Whatsapp", subname: "+543884702649", icon: <SiWhatsapp />, url: "http://wa.me/5493884702649" },
  {
    name: "Email",
    subname: "ibracardozo15@gmail.com",
    icon: <HiOutlineMail />,
    url: ""
  },
  {
    name: "Ubicación",
    subname: "Jujuy, Argentina",
    icon: <SlLocationPin />,
    url: "https://www.instagram.com/ibracardozo7",
  },
];
