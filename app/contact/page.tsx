"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_dg4putk";
const TEMPLATE_ID = "template_rq1cijc";
const PUBLIC_KEY = "qFEn1zPEPoqAW7rI1";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: "Nouveau message",
          time: new Date().toLocaleString("fr-FR"),
        },
        PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Erreur EmailJS:", err);
      setStatus("error");
      setErrorMsg("Une erreur est survenue. Réessaie plus tard.");
    }
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="text-3xl font-bold">Contactez-moi</h1>
      <p className="mt-4 text-neutral-400">
        Une idée de projet ? Une opportunité ? N'hésite pas à m'écrire.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Ton nom"
          value={formData.name}
          onChange={handleChange}
          required
          className="rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 outline-none focus:border-emerald-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Ton email"
          value={formData.email}
          onChange={handleChange}
          required
          className="rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 outline-none focus:border-emerald-400"
        />
        <textarea
          name="message"
          placeholder="Ton message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 outline-none focus:border-emerald-400"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-lg bg-emerald-400 px-6 py-3 font-medium text-neutral-950 transition hover:bg-emerald-300 disabled:opacity-50"
        >
          {status === "loading" ? "Envoi en cours..." : "Envoyer"}
        </button>

        {status === "success" && (
          <p className="text-sm text-emerald-400">
            ✅ Message envoyé avec succès ! Je te répondrai bientôt.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-400">❌ {errorMsg}</p>
        )}
      </form>
    </div>
  );
}