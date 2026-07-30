// Fichier de test temporaire — à placer à la racine de mon-portfolio
// Lancer avec : node test-email.js
// Objectif : vérifier si l'authentification Gmail fonctionne, indépendamment de Next.js

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "joelomega8388@gmail.com",
    pass: "pbjcxdrvtmnjesqh", // le mot de passe d'application (sans espaces)
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log("❌ Échec de connexion :", error);
  } else {
    console.log("✅ Connexion réussie, le serveur est prêt à envoyer des emails");
  }
});