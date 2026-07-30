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
      "Application de gestion de distribution commerciale : suivi des commandes, livraisons, versements et sessions terrain, avec backend Laravel/PostgreSQL et frontend mobile Cordova.",
    stack: ["Laravel", "PostgreSQL", "Cordova", "Render"],
    image: "/images/gestcomm.png",
  },
  {
    slug: "furthermarket-live",
    title: "FurtherMarket — Live Streaming",
    description:
      "Plateforme de live streaming type TikTok avec gestion des commentaires en temps réel, Picture-in-Picture natif (iOS/Android) et serveur HLS Node.js/FFmpeg.",
    stack: ["Node.js", "FFmpeg", "Cordova", "HLS.js"],
    image: "/images/furthermarket.png",
  },
  {
    slug: "tontine",
    title: "Tontine App",
    description:
      "Application de tontine rotative avec backend FastAPI/SQLAlchemy et frontend React Native/Expo, intégration PawaPay pour les paiements mobile money.",
    stack: ["FastAPI", "React Native", "Expo", "PawaPay"],
    image: "/images/tontine.png",
  },
  // Ajoute tes autres projets ici (CamerJob, ProjectFlow, EasyPaie...)
];