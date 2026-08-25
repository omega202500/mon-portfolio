export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  image: string;
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    slug: "gestcomm",
    title: "GestComm",
    description:
      "Application de gestion de distribution commerciale comprenant une interface d'administration web destinée à la gestion des commerciaux, des commandes, des livraisons, des versements et des sessions terrain, ainsi qu'une application mobile Cordova permettant aux commerciaux d'effectuer leurs opérations sur le terrain en temps réel. Développée avec un backend Laravel, une base de données PostgreSQL et un frontend mobile Cordova",

    stack: ["Laravel", "PostgreSQL", "Cordova", "Render"],
    image: "/images/GestComm.jpeg",
    link: "https://gestcomm-6494.onrender.com",
  },
  {

    slug: "task-flow",
    title: "Task Flow — Gestion de Projets",
    description:
      "Application web de gestion de projets permettant de créer des projets, gérer les tâches, collaborer entre utilisateurs et suivre l'avancement en temps réel grâce à Next.js, React, Prisma et Clerk pour l'authentification.",
    stack: ["Next.js", "React", "Prisma", "Clerk", "SQLite"],
    image: "/images/taskflow.png",
    link: "https://task-flow.vercel.app/",
  },
   {
  slug: "expense-tracker",
  title: "Expense Tracker",
description:
  "Application web full-stack de gestion des finances personnelles développée avec Next.js et Django REST Framework. Elle permet de gérer les revenus et les dépenses, de consulter l'historique des transactions et de suivre l'évolution des finances via un tableau de bord moderne.",
  stack: [
    "Next.js",
    "React",
    "Django REST Framework",
    "PostgreSQL",
    "Axios",
    "Tailwind CSS"
  ],
  image: "/images/full-stack.png",
  link: "https://full-stack-git-main-omega202500s-projects.vercel.app/",
},
    {
    slug: "tontine",
    title: "Tontine App",
    description:
      "Application mobile de gestion de tontine rotative avec backend FastAPI/SQLAlchemy et frontend React Native/Expo, intégration PawaPay pour les paiements mobile money.",
    stack: ["FastAPI", "React Native", "Expo", "PawaPay"],
    image: "/images/tontine.jpeg",
    // link: "https://tontine-app.vercel.app/",
    // repo: "https://github.com/omega202500/tontine-app"
  },
  {
  slug: "e-vote",
  title: "E-VOTE",
  description:
    "Application web de vote électronique conçue pour gérer l'ensemble du processus électoral, de l'inscription des électeurs à la publication des résultats. Elle permet la gestion des candidats, des scrutins et assure un suivi sécurisé des votes.",
  stack: ["PHP pure", "MySQL", "Bootstrap", "JavaScript"],
  image: "/images/E-vote.png",
  link: "https://yami.infinityfreeapp.com/",

},

];