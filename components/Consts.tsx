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
    SiTypescript,
    SiExpress,
    SiSequelize,
} from 'react-icons/si';

export const aboutMe: string[] = [
    "Desarrollador Full Stack residente en Jujuy - Argentina.",
    "Graduado del Bootcamp de Soy Henry.",
    "Amante de la programación, disfruto mucho trabajar en equipo.",
    "Puedo aportar soluciones óptimas en poco tiempo.",
    "Me encuentro reforzando conocimientos en Next.js, TypeCript.",
    "Estoy abierto a la relocalización.",
]

interface Tech {
    name: string;
    icon: JSX.Element;
    url: string;
}

export const techs: Tech[] = [
    { name: "HTML 5", icon: <SiHtml5 />, url: "https://developer.mozilla.org/es/docs/Web/HTML" },
    { name: "CSS 3", icon: <SiCss3 />, url: "https://developer.mozilla.org/es/docs/Web/CSS" },
    { name: "JavaScript", icon: <SiJavascript />, url: "https://developer.mozilla.org/es/docs/Web/JavaScript" },
    { name: "TypeScript", icon: <SiTypescript />, url: "https://www.typescriptlang.org/" },
    { name: "React js", icon: <SiReact />, url: "https://reactjs.org/" },
    { name: "Redux js", icon: <SiRedux />, url: "https://redux.js.org/" },
    { name: "Material UI", icon: <SiMaterialui />, url: "https://mui.com/" },
    { name: "Next js", icon: <SiNextdotjs />, url: "https://nextjs.org/" },
    { name: "Node js", icon: <SiNodedotjs />, url: "https://nodejs.org/" },
    { name: "Express js", icon: <SiExpress />, url: "https://expressjs.com/" },
    { name: "PostgreSQL", icon: <SiPostgresql />, url: "https://www.postgresql.org/" },
    { name: "Sequelize", icon: <SiSequelize />, url: "https://sequelize.org/" },
    // { name: "Git", icon: <SiGit />, url: "https://git-scm.com/" },
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
    {
        title: "Portafolio",
        description: "Portafolio de proyectos personal en el cual puedes ver mis trabajos y proyectos en los cuales he trabajado, fue desarrollado con tecnologías que fui aprendiendo y reforzando a la par.",
        image: "/portfolio2.png",
        lenguages: ["React.js", "Next.js", "TypeScript", "Material UI"],
        demo: "",
        github: "",
    },
    {
        title: "Gestios de Negocio: Liberfit gym",
        description: "Desarrollo de una Aplicación usando SCRUM y aplicando las tecnologías aprendidas durante el cursado del Bootcamp. Desarrollé mis actividades como Frontend Developer, usando Tailwind CSS para la estilización de sus componentes.",
        image: "/liberfit.png",
        lenguages: ["React.js", "TypeScript", "Redux.js", "Tailwind CSS", "Auth0"],
        demo: "https://gym-mthatwords.vercel.app/",
        github: "https://github.com/ibracardozo7/LiberFit-PF",
    },
    {
        title: "Proyecto Individual: Dogs App",
        description: "Aplicación creada con React.js, Redux y CSS en la cual puedes buscar razas de perros que estén disponibles en la API, ver sus detalles e imágenes, filtrarlos por tipo de razas y ordenarlos de distintas maneras.",
        image: "/dog.png",
        lenguages: ["React.js", "Redux.js", "CSS", "Node.js", "Express.js", "Sequelize", "PostgreSQL"],
        demo: "",
        github: "https://github.com/ibracardozo7/PI-Dogs-main",
    },
    {
        title: "Proyecto Individual: Pokemons App",
        description: "Aplicación creada con React.js, Redux para el Frontend. Esta aplicación consume datos de una base de datos que fueron cargados desde una API a través de un Backend creado con Express. Y sirve para buscar y mostrar datos de algún Pokémon y poder crear.",
        image: "/pokemon.png",
        lenguages: ["React.js", "Redux.js", "CSS", "Node.js", "Express.js", "Sequelize", "PostgreSQL"] ,
        demo: "",
        github: "https://github.com/ibracardozo7/PI-Pokemon-main",
    },
]

interface Network {
    icon: JSX.Element;
    name: string;
    url: string;
}

export const networks: Network[] = [
    { name: "Github", icon: <SiGithub />, url: "" },
    { name: "Linked In", icon: <SiLinkedin />, url: "" },
    { name: "Whatsapp", icon: <SiWhatsapp />, url: "" },
    { name: "Instagram", icon: <SiInstagram />, url: "" },
]