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
    repo: "https://github.com/omega202500/gestcomm"
  },
  {

    slug: "task-flow",
    title: "Task Flow — Gestion de Projets",
    description:
      "Application web de gestion de projets permettant de créer des projets, gérer les tâches, collaborer entre utilisateurs et suivre l'avancement en temps réel grâce à Next.js, React, Prisma et Clerk pour l'authentification.",
    stack: ["Next.js", "React", "Prisma", "Clerk", "SQLite"],
    image: "/images/taskflow.png",
    link: "https://task-flow.vercel.app/",
    repo: "https://github.com/omega202500/task-flow"
  },
  {
    slug: "tontine",
    title: "Tontine App",
    description:
      "Application de tontine rotative avec backend FastAPI/SQLAlchemy et frontend React Native/Expo, intégration PawaPay pour les paiements mobile money.",
    stack: ["FastAPI", "React Native", "Expo", "PawaPay"],
    image: "/images/tontine.png",
    link: "https://tontine-app.vercel.app/",
    repo: "https://github.com/omega202500/tontine-app"
  },
  // Ajoute tes autres projets ici (CamerJob, ProjectFlow, EasyPaie...)
];